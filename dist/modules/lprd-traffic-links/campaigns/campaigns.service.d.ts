import { Repository } from 'typeorm';
import { LprdTrafficLinksCampaign } from './entities/campaigns.entity';
import { CreateLprdTrafficLinksCampaignDto } from './dtos/create-campaigns.dto';
import { UpdateLprdTrafficLinksCampaignDto } from './dtos/update.campaigns.dto';
export declare class LprdTrafficLinksCampaignService {
    private readonly campaignRepository;
    constructor(campaignRepository: Repository<LprdTrafficLinksCampaign>);
    create(data: CreateLprdTrafficLinksCampaignDto): Promise<LprdTrafficLinksCampaign>;
    findAll(): Promise<LprdTrafficLinksCampaign[]>;
    findOne(id: number): Promise<LprdTrafficLinksCampaign>;
    update(id: number, data: UpdateLprdTrafficLinksCampaignDto): Promise<LprdTrafficLinksCampaign>;
    remove(id: number): Promise<void>;
}
