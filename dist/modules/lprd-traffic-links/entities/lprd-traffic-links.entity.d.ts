import { LprdTrafficWebsite } from 'src/modules/lprd-traffic-websites/entities/lprd-traffic-websites.entity';
import { LprdTrafficSource } from 'src/modules/lprdtrafficsource/entities/lprdtrafficsource.entity';
import { LprdTrafficLinksCategory } from '../categories/entities/categories.entity';
import { LprdTrafficLinksClient } from '../clients/entities/clients.entity';
import { LprdTrafficLinksCampaign } from '../campaigns/entities/campaigns.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { MaxDeliveryClient } from 'src/modules/max-delivery-client/entities/max-delivery-client.entity';
import { MaxDeliveryCampaign } from 'src/modules/max-delivery-campaign/entities/max-delivery-campaign.entity';
export declare enum ConfidenceScore {
    VeryConfident = "Very Confident",
    Confident = "Confident",
    Medium = "Medium",
    Low = "Low",
    VeryLow = "Very Low"
}
export declare class LprdTrafficLinks {
    id: number;
    track_url: string;
    approved: number;
    traffic_source_id: number;
    traffic_website_id: number;
    updated_by: string;
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
    test_traffic: number;
    test_traffic_percentage: number;
    category_ids: string;
    tag: string;
    quality_score: number;
    trafficWebsite: LprdTrafficWebsite;
    trafficSource: LprdTrafficSource;
    updatedByUser: User;
    categories: LprdTrafficLinksCategory[];
    clients: LprdTrafficLinksClient[];
    campaigns: LprdTrafficLinksCampaign[];
    maxDeliveryClient: MaxDeliveryClient;
    maxDeliveryCampaign: MaxDeliveryCampaign;
}
