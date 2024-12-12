import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { LprdTrafficLinks } from './entities/lprd-traffic-links.entity';
import CreateLprdTrafficLinksDto from './dtos/create-lprd-traffic-links.dto';
import { ConflictException } from '@nestjs/common';
import { LprdTrafficLinkCategoriesService } from './categories/categories.service';
import { LprdTrafficLinksCampaignService } from './campaigns/campaigns.service';
import { LprdTrafficLinksClientService } from './clients/clients.service';
import { LprdTrafficSourceService } from '../lprdtrafficsource/lprdtrafficsource.service';
import { InjectEntityManager } from '@nestjs/typeorm';
import { replaceMultipleSubstring } from 'src/utils/utils';
import { ErrorMessages } from 'src/utils/error-messages';
import { SuccessMessages, getSuccessMessage } from 'src/utils/success-messages';
import { responseCreated } from 'src/utils/helpers.util';

@Injectable()
export class CreateLprdTrafficLinkService {
  constructor(
    @InjectRepository(LprdTrafficLinks)
    private readonly lprdTrafficLinkRepository: Repository<LprdTrafficLinks>,
    @InjectEntityManager() private readonly entityManager: EntityManager,
    private readonly lprdTrafficLinkCategoriesService: LprdTrafficLinkCategoriesService,
    private readonly lprdTrafficLinkClientsService: LprdTrafficLinksClientService,
    private readonly lprdTrafficLinkCampaignsService: LprdTrafficLinksCampaignService,
    private readonly lprdTrafficSourceService: LprdTrafficSourceService,
  ) {}

  public async createTrafficLink(
    trafficLinkRequest: CreateLprdTrafficLinksDto,
    req: any,
  ) {
    const {
      traffic_source_id,
      traffic_website_id,
      locale,
      lock_category,
      categories,
      clients,
      campaigns,
    } = trafficLinkRequest;

    const sortedCategories =
      categories && !lock_category
        ? JSON.parse(JSON.stringify(categories))?.sort(
            (a: number, b: number) => a - b,
          )
        : [];

    const whereCondition = {
      traffic_source_id,
      traffic_website_id,
      locale,
      lock_category,
      category_ids: JSON.stringify(sortedCategories),
    };
    const existingTrafficLinks = await this.lprdTrafficLinkRepository.findOne({
      where: whereCondition,
    });
    if (existingTrafficLinks) {
      throw new ConflictException(
        replaceMultipleSubstring(
          ErrorMessages.TRAFFIC_LINK_CONFLICT_EXCEPTION,
          {
            '{id}': existingTrafficLinks.id,
          },
        ),
      );
    }

    const lprdTrafficSource = await this.lprdTrafficSourceService.getTrafficSourceById(
      traffic_source_id,
    );

    try {
      return await this.entityManager.transaction(
        async (transactionalEntityManager) => {
          const lprdTrafficLink = new LprdTrafficLinks();
          lprdTrafficLink.category_ids = JSON.stringify(sortedCategories);
          Object.assign(lprdTrafficLink, trafficLinkRequest);
          lprdTrafficLink.lock_category = lock_category;

          const savedLprdTrafficLink = await transactionalEntityManager.save(
            lprdTrafficLink,
          );

          if (savedLprdTrafficLink) {
            if (categories && !lock_category) {
              await this.createLprdTrafficLinkCategory(
                categories,
                savedLprdTrafficLink,
                req,
                transactionalEntityManager,
              );
            }

            if (clients) {
              await this.createLprdTrafficLinkClient(
                clients,
                savedLprdTrafficLink,
                req,
                transactionalEntityManager,
              );
            }

            if (campaigns) {
              await this.createLprdTrafficLinkCampaign(
                campaigns,
                savedLprdTrafficLink,
                req,
                transactionalEntityManager,
              );
            }
          }
 
      

          return responseCreated(
            { ...savedLprdTrafficLink},
            getSuccessMessage('TRAFFIC_LINK_CREATED'),
          );
        },
      );
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  public async createLprdTrafficLinkCategory(
    categories: number[],
    lprdTrafficLink: LprdTrafficLinks,
    req: any,
    transactionalEntityManager: EntityManager,
  ) {
    const lprdTrafficLinkCategories = categories.map((categoryId) => ({
      lprd_traffic_categories_id: categoryId,
      lprd_traffic_link_id: lprdTrafficLink.id,
    }));
    await this.lprdTrafficLinkCategoriesService.createLprdTrafficLinkCategory(
      lprdTrafficLinkCategories,
      transactionalEntityManager,
    );
  }

  public async createLprdTrafficLinkClient(
    clients: number[],
    lprdTrafficLink: LprdTrafficLinks,
    req: any,
    transactionalEntityManager: EntityManager,
  ) {
    const lprdTrafficLinkClients = clients.map((clientId) => ({
      client_id: clientId,
      lprd_traffic_link_id: lprdTrafficLink.id,
    }));
    await this.lprdTrafficLinkClientsService.createLprdTrafficLinkClient(
      lprdTrafficLinkClients,
      transactionalEntityManager,
    );
  }

  public async createLprdTrafficLinkCampaign(
    campaigns: number[],
    lprdTrafficLink: LprdTrafficLinks,
    req: any,
    transactionalEntityManager: EntityManager,
  ) {
    const lprdTrafficLinkCampaigns = campaigns.map((campaignId) => ({
      campaign_id: campaignId,
      lprd_traffic_link_id: lprdTrafficLink.id,
    }));
    await this.lprdTrafficLinkCampaignsService.createLprdTrafficLinkCampaign(
      lprdTrafficLinkCampaigns,
      transactionalEntityManager,
    );
  }
}
