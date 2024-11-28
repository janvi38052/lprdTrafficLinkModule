import { LprdTrafficLinks } from 'src/modules/lprd-traffic-links/entities/lprd-traffic-links.entity';
export declare class MaxDeliveryCampaign {
    id: number;
    campaign_id: number;
    max_delivery_percentage: number;
    active: number;
    lprdTrafficLinkCampaign: LprdTrafficLinks;
}
