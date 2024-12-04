import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { LprdTrafficLinksCampaign } from './entities/campaigns.entity';
import { CreateLprdTrafficLinksCampaignDto } from './dtos/create-campaigns.dto';
import { UpdateLprdTrafficLinksCampaignDto } from './dtos/update.campaigns.dto';

@Injectable()
export class LprdTrafficLinksCampaignService {
  constructor(
    @InjectRepository(LprdTrafficLinksCampaign)
    private readonly campaignRepository: Repository<LprdTrafficLinksCampaign>,
  ) {}

  // Method to handle the creation of traffic link campaigns
  async createLprdTrafficLinkCampaign(
    values: Partial<LprdTrafficLinksCampaign>[],
    transactionalEntityManager: EntityManager,
  ) {
    // Insert the values into the database
    await transactionalEntityManager
      .createQueryBuilder()
      .insert()
      .into(LprdTrafficLinksCampaign)
      .values(values)
      .execute();

    // Prepare the traffic link campaigns for synchronization
    const trafficLinkCampaigns = values.map((value) => ({
      traffic_link_id: value.lprd_traffic_link_id, // Ensure this is correct in your entity
      campaign_id: value.campaign_id, // Ensure this is correct in your entity
    }));

    // Sync the traffic link campaigns with the external service (if needed)
  }

  async deleteLprdTrafficLinkCampaignByTrafficLinkId(
    lprdTrafficLinkId: number,
    transactionalEntityManager: EntityManager,
  ) {
    await transactionalEntityManager.createQueryBuilder()
      .delete()
      .from(LprdTrafficLinksCampaign)
      .where('lprd_traffic_link_id = :lprdTrafficLinkId', { lprdTrafficLinkId })
      .execute();
  }

  async deleteLprdTrafficLinkCampaign(
    removedElements: number[],
    lprdTrafficLinkId: number,
    transactionalEntityManager: EntityManager,
  ) {
    await transactionalEntityManager.createQueryBuilder()
      .delete()
      .from(LprdTrafficLinksCampaign)
      .where('lprd_traffic_link_id = :lprdTrafficLinkId', { lprdTrafficLinkId })
      .andWhere('campaign_id IN (:...removedElements)', { removedElements })
      .execute();

      let trafficLinkCampaigns = [];
      for (let i = 0; i < removedElements.length; i++) {
        trafficLinkCampaigns.push({ traffic_link_id: lprdTrafficLinkId, campaign_id: removedElements[i] });
      }
  }

  async create(data: CreateLprdTrafficLinksCampaignDto): Promise<LprdTrafficLinksCampaign> {
    const campaign = this.campaignRepository.create(data);
    return this.campaignRepository.save(campaign);
  }

  async findAll(): Promise<LprdTrafficLinksCampaign[]> {
    return this.campaignRepository.find({ relations: ['lprdTrafficLink'] });
  }

  async findOne(id: number): Promise<LprdTrafficLinksCampaign> {
    return this.campaignRepository.findOne({ where: { id }, relations: ['lprdTrafficLink'] });
  }

  async update(id: number, data: UpdateLprdTrafficLinksCampaignDto): Promise<LprdTrafficLinksCampaign> {
    await this.campaignRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.campaignRepository.delete(id);
  }
}
