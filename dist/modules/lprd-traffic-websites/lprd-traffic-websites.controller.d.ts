import { LprdTrafficWebsiteService } from './lprd-traffic-websites.service';
import { CreateLprdTrafficWebsiteDto } from './dtos/create-lprd-traffic-websites.dto';
import { UpdateLprdTrafficWebsiteDto } from './dtos/update-lprd-traffic-websites.dto';
export declare class LprdTrafficWebsiteController {
    private readonly websiteService;
    constructor(websiteService: LprdTrafficWebsiteService);
    create(data: CreateLprdTrafficWebsiteDto): Promise<import("./entities/lprd-traffic-websites.entity").LprdTrafficWebsite>;
    findAll(): Promise<import("./entities/lprd-traffic-websites.entity").LprdTrafficWebsite[]>;
    findOne(id: number): Promise<import("./entities/lprd-traffic-websites.entity").LprdTrafficWebsite>;
    update(id: number, data: UpdateLprdTrafficWebsiteDto): Promise<import("./entities/lprd-traffic-websites.entity").LprdTrafficWebsite>;
    remove(id: number): Promise<void>;
}
