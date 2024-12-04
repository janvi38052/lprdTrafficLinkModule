import { EntityManager, Repository } from 'typeorm';
import { LprdTrafficLinks } from './entities/lprd-traffic-links.entity';
import CreateLprdTrafficLinksDto from './dtos/create-lprd-traffic-links.dto';
import { LprdTrafficLinkCategoriesService } from './categories/categories.service';
import { LprdTrafficLinksCampaignService } from './campaigns/campaigns.service';
import { LprdTrafficLinksClientService } from './clients/clients.service';
import { LprdTrafficSourceService } from '../lprdtrafficsource/lprdtrafficsource.service';
export declare class CreateLprdTrafficLinkService {
    private readonly lprdTrafficLinkRepository;
    private readonly entityManager;
    private readonly lprdTrafficLinkCategoriesService;
    private readonly lprdTrafficLinkClientsService;
    private readonly lprdTrafficLinkCampaignsService;
    private readonly lprdTrafficSourceService;
    constructor(lprdTrafficLinkRepository: Repository<LprdTrafficLinks>, entityManager: EntityManager, lprdTrafficLinkCategoriesService: LprdTrafficLinkCategoriesService, lprdTrafficLinkClientsService: LprdTrafficLinksClientService, lprdTrafficLinkCampaignsService: LprdTrafficLinksCampaignService, lprdTrafficSourceService: LprdTrafficSourceService);
    createTrafficLink(trafficLinkRequest: CreateLprdTrafficLinksDto, req: any): Promise<any>;
    createLprdTrafficLinkCategory(categories: number[], lprdTrafficLink: LprdTrafficLinks, req: any, transactionalEntityManager: EntityManager): Promise<void>;
    createLprdTrafficLinkClient(clients: number[], lprdTrafficLink: LprdTrafficLinks, req: any, transactionalEntityManager: EntityManager): Promise<void>;
    createLprdTrafficLinkCampaign(campaigns: number[], lprdTrafficLink: LprdTrafficLinks, req: any, transactionalEntityManager: EntityManager): Promise<void>;
}
