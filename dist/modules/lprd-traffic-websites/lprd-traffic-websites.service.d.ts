import { Repository } from 'typeorm';
import { LprdTrafficWebsite } from './entities/lprd-traffic-websites.entity';
import { CreateLprdTrafficWebsiteDto } from './dtos/create-lprd-traffic-websites.dto';
import { UpdateLprdTrafficWebsiteDto } from './dtos/update-lprd-traffic-websites.dto';
export declare class LprdTrafficWebsiteService {
    private readonly websiteRepository;
    constructor(websiteRepository: Repository<LprdTrafficWebsite>);
    create(data: CreateLprdTrafficWebsiteDto): Promise<LprdTrafficWebsite>;
    findAll(): Promise<LprdTrafficWebsite[]>;
    findOne(id: number): Promise<LprdTrafficWebsite>;
    update(id: number, data: UpdateLprdTrafficWebsiteDto): Promise<LprdTrafficWebsite>;
    remove(id: number): Promise<void>;
}
