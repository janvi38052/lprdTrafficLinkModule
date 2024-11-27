import { Repository } from 'typeorm';
import { MaxDeliveryCampaign } from './max-delivery-campaign.entity';
import { CreateMaxDeliveryCampaignDto } from './create.max-delivery-campaign.dto';
import { UpdateMaxDeliveryCampaignDto } from './update.max-delivery-campaign.dto';
export declare class MaxDeliveryCampaignService {
    private readonly campaignRepository;
    constructor(campaignRepository: Repository<MaxDeliveryCampaign>);
    create(data: CreateMaxDeliveryCampaignDto): Promise<MaxDeliveryCampaign>;
    findAll(): Promise<MaxDeliveryCampaign[]>;
    findOne(id: number): Promise<MaxDeliveryCampaign>;
    update(id: number, data: UpdateMaxDeliveryCampaignDto): Promise<MaxDeliveryCampaign>;
    remove(id: number): Promise<void>;
}
