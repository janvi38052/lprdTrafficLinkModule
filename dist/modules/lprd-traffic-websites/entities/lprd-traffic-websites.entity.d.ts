import { LprdTrafficLinks } from 'src/modules/lprd-traffic-links/entities/lprd-traffic-links.entity';
export declare class LprdTrafficWebsite {
    id: number;
    name: string;
    default_url: string;
    track_url: string;
    trafficLinks: LprdTrafficLinks[];
}
