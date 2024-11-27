import { MaxDeliveryCampaignService } from './max-delivery-campaign.service';
import { CreateMaxDeliveryCampaignDto } from './create.max-delivery-campaign.dto';
import { UpdateMaxDeliveryCampaignDto } from './update.max-delivery-campaign.dto';
export declare class MaxDeliveryCampaignController {
    private readonly campaignService;
    constructor(campaignService: MaxDeliveryCampaignService);
    create(createDto: CreateMaxDeliveryCampaignDto): Promise<import("./max-delivery-campaign.entity").MaxDeliveryCampaign>;
    findAll(): Promise<import("./max-delivery-campaign.entity").MaxDeliveryCampaign[]>;
    findOne(id: number): Promise<import("./max-delivery-campaign.entity").MaxDeliveryCampaign>;
    update(id: number, updateDto: UpdateMaxDeliveryCampaignDto): Promise<import("./max-delivery-campaign.entity").MaxDeliveryCampaign>;
    remove(id: number): Promise<void>;
}
