import { Repository } from 'typeorm';
import { LprdTrafficLinks } from './entities/lprd-traffic-links.entity';
import { CreateLprdTrafficLinksDto } from './dtos/create-lprd-traffic-links.dto';
import { UpdateLprdTrafficLinksDto } from './dtos/update-lprd-traffic-links.dto';
import { LprdTrafficLinksCategoryService } from './categories/categories.service';
import { LprdTrafficLinksClientService } from './clients/clients.service';
import { MaxDeliveryClientService } from 'src/modules/max-delivery-client/max-delivery-client.service';
import { MaxDeliveryCampaignService } from 'src/modules/max-delivery-campaign/max-delivery-campaign.service';
import { LprdTrafficSourceService } from 'src/modules/lprdtrafficsource/lprdtrafficsource.service';
import { LprdTrafficWebsiteService } from 'src/modules/lprd-traffic-websites/lprd-traffic-websites.service';
import { UserService } from 'src/modules/user/user.service';
export declare class LprdTrafficLinksService {
    private readonly lprdTrafficLinksRepository;
    private readonly categoryService;
    private readonly clientService;
    private readonly campaignsService;
    private readonly maxDeliveryClientService;
    private readonly maxDeliverCampaignService;
    private readonly lprdTrafficSourceService;
    private readonly lprdTrafficWebsiteService;
    private readonly userService;
    constructor(lprdTrafficLinksRepository: Repository<LprdTrafficLinks>, categoryService: LprdTrafficLinksCategoryService, clientService: LprdTrafficLinksClientService, campaignsService: LprdTrafficLinksClientService, maxDeliveryClientService: MaxDeliveryClientService, maxDeliverCampaignService: MaxDeliveryCampaignService, lprdTrafficSourceService: LprdTrafficSourceService, lprdTrafficWebsiteService: LprdTrafficWebsiteService, userService: UserService);
    create(data: CreateLprdTrafficLinksDto): Promise<LprdTrafficLinks>;
    findAll(page?: number, limit?: number, searchQuery?: string, sortBy?: string, order?: 'ASC' | 'DESC'): Promise<{
        trafficLinks: {
            data: LprdTrafficLinks[];
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        categories: import("./categories/entities/categories.entity").LprdTrafficLinksCategory[];
        clients: import("./clients/entities/clients.entity").LprdTrafficLinksClient[];
        campaigns: import("./clients/entities/clients.entity").LprdTrafficLinksClient[];
        maxDeliveryClients: import("../max-delivery-client/entities/max-delivery-client.entity").MaxDeliveryClient[];
        maxDeliveryCampaign: import("../max-delivery-campaign/entities/max-delivery-campaign.entity").MaxDeliveryCampaign[];
        lprdTrafficSource: import("../lprdtrafficsource/entities/lprdtrafficsource.entity").LprdTrafficSource[];
        lprdTrafficwebsites: import("../lprd-traffic-websites/entities/lprd-traffic-websites.entity").LprdTrafficWebsite[];
        user: import("../user/entities/user.entity").User[];
    }>;
    findOne(id: number): Promise<{
        trafficLink: LprdTrafficLinks;
        categories: import("./categories/entities/categories.entity").LprdTrafficLinksCategory[];
        clients: import("./clients/entities/clients.entity").LprdTrafficLinksClient[];
        campaigns: import("./clients/entities/clients.entity").LprdTrafficLinksClient[];
        maxDeliveryClients: import("../max-delivery-client/entities/max-delivery-client.entity").MaxDeliveryClient[];
        maxDeliveryCampaign: import("../max-delivery-campaign/entities/max-delivery-campaign.entity").MaxDeliveryCampaign[];
        lprdTrafficSource: import("../lprdtrafficsource/entities/lprdtrafficsource.entity").LprdTrafficSource[];
        lprdTrafficwebsites: import("../lprd-traffic-websites/entities/lprd-traffic-websites.entity").LprdTrafficWebsite[];
        user: import("../user/entities/user.entity").User[];
    }>;
    update(id: number, data: UpdateLprdTrafficLinksDto): Promise<{
        trafficLink: LprdTrafficLinks;
        categories: import("./categories/entities/categories.entity").LprdTrafficLinksCategory[];
        clients: import("./clients/entities/clients.entity").LprdTrafficLinksClient[];
        campaigns: import("./clients/entities/clients.entity").LprdTrafficLinksClient[];
        maxDeliveryClients: import("../max-delivery-client/entities/max-delivery-client.entity").MaxDeliveryClient[];
        maxDeliveryCampaign: import("../max-delivery-campaign/entities/max-delivery-campaign.entity").MaxDeliveryCampaign[];
        lprdTrafficSource: import("../lprdtrafficsource/entities/lprdtrafficsource.entity").LprdTrafficSource[];
        lprdTrafficwebsites: import("../lprd-traffic-websites/entities/lprd-traffic-websites.entity").LprdTrafficWebsite[];
        user: import("../user/entities/user.entity").User[];
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
