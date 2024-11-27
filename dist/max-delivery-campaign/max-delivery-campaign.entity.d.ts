import { LprdTrafficLinks } from 'src/lprd-traffic-links/lprd-traffic-links.entity';
export declare class MaxDeliveryCampaign {
    id: number;
    campaign_id: number;
    max_delivery_percentage: number;
    active: number;
    lprdTrafficLinkCampaign: LprdTrafficLinks;
}
