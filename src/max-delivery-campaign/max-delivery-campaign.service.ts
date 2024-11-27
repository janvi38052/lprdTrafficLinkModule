import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaxDeliveryCampaign } from './max-delivery-campaign.entity';
import { CreateMaxDeliveryCampaignDto } from './create.max-delivery-campaign.dto';
import { UpdateMaxDeliveryCampaignDto } from './update.max-delivery-campaign.dto';

@Injectable()
export class MaxDeliveryCampaignService {
  constructor(
    @InjectRepository(MaxDeliveryCampaign)
    private readonly campaignRepository: Repository<MaxDeliveryCampaign>,
  ) {}

  async create(data: CreateMaxDeliveryCampaignDto): Promise<MaxDeliveryCampaign> {
    const campaign = this.campaignRepository.create({
      ...data,
      active: data.active ? 1 : 0, // Convert boolean to number
    });
    return this.campaignRepository.save(campaign);
  }

  async findAll(): Promise<MaxDeliveryCampaign[]> {
    return this.campaignRepository.find();
  }

  async findOne(id: number): Promise<MaxDeliveryCampaign> {
    return this.campaignRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateMaxDeliveryCampaignDto): Promise<MaxDeliveryCampaign> {
    const transformedData = {
      ...data,
      active: data.active !== undefined ? (data.active ? 1 : 0) : undefined, // Convert boolean to number
    };
    await this.campaignRepository.update(id, transformedData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.campaignRepository.delete(id);
  }
}
