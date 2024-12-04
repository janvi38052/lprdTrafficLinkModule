import { EntityManager, Repository } from 'typeorm';
import { LprdTrafficLinks } from './entities/lprd-traffic-links.entity';
import { LprdTrafficLinkCategoriesService } from './categories/categories.service';
import { LprdTrafficLinksCampaignService } from './campaigns/campaigns.service';
import { LprdTrafficLinksClientService } from './clients/clients.service';
import UpdateLprdTrafficLinkDto from './dtos/update-lprd-traffic-links.dto';
import { LprdTrafficSourceService } from '../lprdtrafficsource/lprdtrafficsource.service';
export declare class UpdateLprdTrafficLinkService {
    private readonly lprdTrafficLinkRepository;
    private readonly entityManager;
    private readonly lprdTrafficLinkCategoriesService;
    private readonly lprdTrafficLinkClientsService;
    private readonly lprdTrafficLinkCampaignsService;
    private readonly lprdTrafficSourceService;
    constructor(lprdTrafficLinkRepository: Repository<LprdTrafficLinks>, entityManager: EntityManager, lprdTrafficLinkCategoriesService: LprdTrafficLinkCategoriesService, lprdTrafficLinkClientsService: LprdTrafficLinksClientService, lprdTrafficLinkCampaignsService: LprdTrafficLinksCampaignService, lprdTrafficSourceService: LprdTrafficSourceService);
    updateTrafficLink(id: number, trafficLinkRequest: UpdateLprdTrafficLinkDto, req: any): Promise<any>;
    createAndDeleteLprdTrafficLinkCategory(categories: number[], lprdTrafficLink: LprdTrafficLinks, req: any, transactionalEntityManager: EntityManager): Promise<void>;
    createAndDeleteLprdTrafficLinkClient(clients: number[], lprdTrafficLink: LprdTrafficLinks, req: any, transactionalEntityManager: EntityManager): Promise<void>;
    createAndDeleteLprdTrafficLinkCampaign(campaigns: number[], lprdTrafficLink: LprdTrafficLinks, req: any, transactionalEntityManager: EntityManager): Promise<void>;
}
