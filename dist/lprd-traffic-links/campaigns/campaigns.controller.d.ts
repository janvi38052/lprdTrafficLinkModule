import { LprdTrafficLinksCampaignService } from './campaigns.service';
import { CreateLprdTrafficLinksCampaignDto } from './create-campaigns.dto';
import { UpdateLprdTrafficLinksCampaignDto } from './update.campaigns.dto';
export declare class LprdTrafficLinksCampaignController {
    private readonly lprdTrafficLinksCampaignService;
    constructor(lprdTrafficLinksCampaignService: LprdTrafficLinksCampaignService);
    create(createDto: CreateLprdTrafficLinksCampaignDto): Promise<import("./campaigns.entity").LprdTrafficLinksCampaign>;
    findAll(): Promise<import("./campaigns.entity").LprdTrafficLinksCampaign[]>;
    findOne(id: number): Promise<import("./campaigns.entity").LprdTrafficLinksCampaign>;
    update(id: number, updateDto: UpdateLprdTrafficLinksCampaignDto): Promise<import("./campaigns.entity").LprdTrafficLinksCampaign>;
    remove(id: number): Promise<void>;
}
