import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Not, Repository } from 'typeorm';
import { LprdTrafficLinks } from './entities/lprd-traffic-links.entity';
import { ConflictException } from '@nestjs/common';
import { LprdTrafficLinkCategoriesService } from './categories/categories.service';
import { LprdTrafficLinksCampaignService } from './campaigns/campaigns.service';
import { LprdTrafficLinksClientService } from './clients/clients.service';
import { replaceMultipleSubstring, findArrayDifferences } from 'src/utils/utils';
import { responseCreated } from 'src/utils/helpers.util';
import { ErrorMessages } from 'src/utils/error-messages';
import UpdateLprdTrafficLinkDto from './dtos/update-lprd-traffic-links.dto';
import { LprdTrafficSourceService } from '../lprdtrafficsource/lprdtrafficsource.service';


export class UpdateLprdTrafficLinkService {
  constructor(
    @InjectRepository(LprdTrafficLinks)
    private readonly lprdTrafficLinkRepository: Repository<LprdTrafficLinks>,
    @InjectEntityManager() private readonly entityManager: EntityManager,
    private readonly lprdTrafficLinkCategoriesService: LprdTrafficLinkCategoriesService,
    private readonly lprdTrafficLinkClientsService: LprdTrafficLinksClientService,
    private readonly lprdTrafficLinkCampaignsService: LprdTrafficLinksCampaignService,
    private readonly lprdTrafficSourceService: LprdTrafficSourceService,
  ) {}

  public async updateTrafficLink(
    id: number,
    trafficLinkRequest: UpdateLprdTrafficLinkDto,
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
      lock_category: lock_category,
      id: Not(id),
      category_ids: JSON.stringify(sortedCategories),
    };
    const existingDuplicateTrafficLinks =
      await this.lprdTrafficLinkRepository.findOne({
        where: whereCondition,
      });

    if (existingDuplicateTrafficLinks) {
      throw new ConflictException(
        replaceMultipleSubstring(
          ErrorMessages.TRAFFIC_LINK_CONFLICT_EXCEPTION,
          {
            '{id}': existingDuplicateTrafficLinks.id,
          },
        ),
      );
    }

    const lprdTrafficLink = await this.lprdTrafficLinkRepository.findOne({
      where: { id: id },
      relations: ['categories', 'clients', 'campaigns'],
    });
    const lprdTrafficSource = await this.lprdTrafficSourceService.getTrafficSourceById(traffic_source_id);

    try {
      delete trafficLinkRequest.campaigns;
      delete trafficLinkRequest.clients;
      delete trafficLinkRequest.categories;

      return await this.entityManager.transaction(
        async (transactionalEntityManager) => {
          lprdTrafficLink.updated_by = req?.body?.created_by;
          lprdTrafficLink.category_ids = JSON.stringify(sortedCategories);
          if (!('max_provider_delivery' in trafficLinkRequest)) {
            lprdTrafficLink.max_provider_delivery = null;
          }
          if (!('tag' in trafficLinkRequest)) {
            lprdTrafficLink.tag = null;
          }
          if (!('test_traffic_percentage' in trafficLinkRequest)) {
            lprdTrafficLink.test_traffic_percentage = null;
          }
          Object.assign(lprdTrafficLink, trafficLinkRequest);
          lprdTrafficLink.lock_category = lock_category;

          const savedLprdTrafficLink = await transactionalEntityManager.save(
            lprdTrafficLink,
          );

          if (categories && !lock_category) {
            await this.createAndDeleteLprdTrafficLinkCategory(
              categories,
              lprdTrafficLink,
              req,
              transactionalEntityManager,
            );
          } else {
            await this.lprdTrafficLinkCategoriesService.deleteLprdTrafficLinkCategoryByTrafficLinkId(
              lprdTrafficLink.id,
              transactionalEntityManager,
            );
          }

          if (clients) {
            this.createAndDeleteLprdTrafficLinkClient(
              clients,
              lprdTrafficLink,
              req,
              transactionalEntityManager,
            );
          } else {
            await this.lprdTrafficLinkClientsService.deleteLprdTrafficLinkClientByTrafficLinkId(
              lprdTrafficLink.id,
              transactionalEntityManager,
            );
          }

          if (campaigns) {
            this.createAndDeleteLprdTrafficLinkCampaign(
              campaigns,
              lprdTrafficLink,
              req,
              transactionalEntityManager,
            );
          } else {
            await this.lprdTrafficLinkCampaignsService.deleteLprdTrafficLinkCampaignByTrafficLinkId(
              lprdTrafficLink.id,
              transactionalEntityManager,
            );
          }

          return responseCreated(savedLprdTrafficLink,'Traffic Link updated Successfully');
        },
      );
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

 


  public async createAndDeleteLprdTrafficLinkCategory(
    categories: number[],
    lprdTrafficLink: LprdTrafficLinks,
    req: any,
    transactionalEntityManager: EntityManager,
  ) {
    const existingCategories = lprdTrafficLink.categories.map(
      (category) => category.id,
    );
    const { removedElements, addedElements } = findArrayDifferences(
      existingCategories,
      categories,
    );

    if (addedElements.length > 0) {
      const lprdTrafficLinkCategories = addedElements.map((categoryId) => ({
        lprd_traffic_categories_id: categoryId,
        lprd_traffic_link_id: lprdTrafficLink.id,
        created_by: req?.body?.created_by,
        updated_by: req?.body?.created_by,
      }));

      await this.lprdTrafficLinkCategoriesService.createLprdTrafficLinkCategory(
        lprdTrafficLinkCategories,
        transactionalEntityManager,
      );
    }

    if (removedElements.length > 0) {
      await this.lprdTrafficLinkCategoriesService.deleteLprdTrafficLinkCategory(
        removedElements,
        lprdTrafficLink.id,
        transactionalEntityManager,
      );
    }
  }

  public async createAndDeleteLprdTrafficLinkClient(
    clients: number[],
    lprdTrafficLink: LprdTrafficLinks,
    req: any,
    transactionalEntityManager: EntityManager,
  ) {
    const existingClients = lprdTrafficLink.clients.map(
      (client) => client.client_id,
    );
    const { removedElements, addedElements } = findArrayDifferences(
      existingClients,
      clients,
    );

    if (addedElements.length > 0) {
      const lprdTrafficLinkClients = addedElements.map((clientId) => ({
        client_id: clientId,
        lprd_traffic_link_id: lprdTrafficLink.id,
        created_by: req?.body?.created_by,
        updated_by: req?.body?.created_by,
      }));
      await this.lprdTrafficLinkClientsService.createLprdTrafficLinkClient(
        lprdTrafficLinkClients,
        transactionalEntityManager,
      );
    }

    if (removedElements.length > 0) {
      await this.lprdTrafficLinkClientsService.deleteLprdTrafficLinkClient(
        removedElements,
        lprdTrafficLink.id,
        transactionalEntityManager,
      );
    }
  }

  public async createAndDeleteLprdTrafficLinkCampaign(
    campaigns: number[],
    lprdTrafficLink: LprdTrafficLinks,
    req: any,
    transactionalEntityManager: EntityManager,
  ) {
    const existingCampaign = lprdTrafficLink.campaigns.map(
      (campaign) => campaign.campaign_id,
    );
    const { removedElements, addedElements } = findArrayDifferences(
      existingCampaign,
      campaigns,
    );

    if (addedElements.length > 0) {
      const lprdTrafficLinkCampaigns = addedElements.map((campaignId) => ({
        campaign_id: campaignId,
        lprd_traffic_link_id: lprdTrafficLink.id,
        created_by: req?.body?.created_by,
        updated_by: req?.body?.created_by,
      }));
      await this.lprdTrafficLinkCampaignsService.createLprdTrafficLinkCampaign(
        lprdTrafficLinkCampaigns,
        transactionalEntityManager,
      );
    }

    if (removedElements.length > 0) {
      await this.lprdTrafficLinkCampaignsService.deleteLprdTrafficLinkCampaign(
        removedElements,
        lprdTrafficLink.id,
        transactionalEntityManager,
      );
    }
  }
}
