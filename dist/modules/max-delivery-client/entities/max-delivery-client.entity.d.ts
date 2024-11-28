import { LprdTrafficLinks } from 'src/modules/lprd-traffic-links/entities/lprd-traffic-links.entity';
export declare class MaxDeliveryClient {
    id: number;
    client_id: number;
    max_delivery_percentage: number;
    active: number;
    lprdTrafficLinkClient: LprdTrafficLinks;
}
