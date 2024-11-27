import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LprdTrafficLinksCampaign } from './campaigns.entity';
import { CreateLprdTrafficLinksCampaignDto } from './create-campaigns.dto';
import { UpdateLprdTrafficLinksCampaignDto } from './update.campaigns.dto';
@Injectable()
export class LprdTrafficLinksCampaignService {
  constructor(
    @InjectRepository(LprdTrafficLinksCampaign)
    private readonly campaignRepository: Repository<LprdTrafficLinksCampaign>,
  ) {}

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
