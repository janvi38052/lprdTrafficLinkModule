import { Repository, SelectQueryBuilder } from 'typeorm';
import { LprdTrafficLinks } from './entities/lprd-traffic-links.entity';
import { CreateLprdTrafficLinkService } from './createLprdTrafficLinks.service';
import { UpdateLprdTrafficLinkService } from './updateLprdTrafficLinks.service';
export declare class LprdTrafficLinksService {
    private readonly lprdTrafficLinkRepository;
    private readonly createLprdTrafficLinkService;
    private readonly updateLprdTrafficLinkService;
    constructor(lprdTrafficLinkRepository: Repository<LprdTrafficLinks>, createLprdTrafficLinkService: CreateLprdTrafficLinkService, updateLprdTrafficLinkService: UpdateLprdTrafficLinkService);
    findAll(query: any): Promise<any>;
    handleCategoryFilter(query: any, qb: SelectQueryBuilder<LprdTrafficLinks>): void;
    getTrafficLinkById(id: number): Promise<LprdTrafficLinks>;
}
