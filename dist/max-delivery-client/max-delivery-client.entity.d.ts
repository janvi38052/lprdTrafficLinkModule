import { LprdTrafficLinks } from 'src/lprd-traffic-links/lprd-traffic-links.entity';
export declare class MaxDeliveryClient {
    id: number;
    client_id: number;
    max_delivery_percentage: number;
    active: number;
    lprdTrafficLinkClient: LprdTrafficLinks;
}
