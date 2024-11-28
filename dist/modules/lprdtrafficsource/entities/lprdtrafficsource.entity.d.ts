import { LprdTrafficLinks } from 'src/modules/lprd-traffic-links/entities/lprd-traffic-links.entity';
export declare class LprdTrafficSource {
    id: number;
    name: string;
    max_provider_delivery_percentage: number;
    trafficLinks: LprdTrafficLinks[];
}
