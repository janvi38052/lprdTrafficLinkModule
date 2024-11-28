import { LprdTrafficLinksCampaignService } from './campaigns.service';
import { CreateLprdTrafficLinksCampaignDto } from './dtos/create-campaigns.dto';
import { UpdateLprdTrafficLinksCampaignDto } from './dtos/update.campaigns.dto';
export declare class LprdTrafficLinksCampaignController {
    private readonly lprdTrafficLinksCampaignService;
    constructor(lprdTrafficLinksCampaignService: LprdTrafficLinksCampaignService);
    create(createDto: CreateLprdTrafficLinksCampaignDto): Promise<import("./entities/campaigns.entity").LprdTrafficLinksCampaign>;
    findAll(): Promise<import("./entities/campaigns.entity").LprdTrafficLinksCampaign[]>;
    findOne(id: number): Promise<import("./entities/campaigns.entity").LprdTrafficLinksCampaign>;
    update(id: number, updateDto: UpdateLprdTrafficLinksCampaignDto): Promise<import("./entities/campaigns.entity").LprdTrafficLinksCampaign>;
    remove(id: number): Promise<void>;
}
