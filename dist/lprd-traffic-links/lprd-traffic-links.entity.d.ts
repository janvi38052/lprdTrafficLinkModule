import { BaseEntity } from 'typeorm';
import { LprdTrafficLinksCategory } from './categories/categories.entity';
import { LprdTrafficLinksClient } from './clients/clients.entity';
import { LprdTrafficLinksCampaign } from './campaigns/campaigns.entity';
import { MaxDeliveryClient } from 'src/max-delivery-client/max-delivery-client.entity';
import { MaxDeliveryCampaign } from 'src/max-delivery-campaign/max-delivery-campaign.entity';
import { LprdTrafficSource } from 'src/lprdtrafficsource/lprdtrafficsource.entity';
import { LprdTrafficWebsite } from 'src/lprd-traffic-websites/lprd-traffic-websites.entity';
import { User } from 'src/user/user.entity';
export declare enum ConfidenceScore {
    VeryConfident = "Very Confident",
    Confident = "Confident",
    Medium = "Medium",
    Low = "Low",
    VeryLow = "Very Low"
}
export declare class LprdTrafficLinks extends BaseEntity {
    id: number;
    approved: number;
    max_provider_delivery: number;
    ignore_campaign_active_status: number;
    locale: string;
    path_style_id: number;
    use_radius_range: number;
    use_ip_blacklist: number;
    lock_category: number;
    use_capping: number;
    bypass_time_based_capping: number;
    block_bots: number;
    test_traffic_percentage: number;
    tag: string;
    quality_score: number;
    categories: LprdTrafficLinksCategory[];
    clients: LprdTrafficLinksClient[];
    campaigns: LprdTrafficLinksCampaign[];
    maxDeliveryClient: MaxDeliveryClient;
    maxDeliveryCampaign: MaxDeliveryCampaign;
    trafficSource: LprdTrafficSource;
    trafficWebsite: LprdTrafficWebsite;
    updatedByUser: User;
}
