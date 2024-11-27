import { Repository } from 'typeorm';
import { LprdTrafficLinks } from './lprd-traffic-links.entity';
import { CreateLprdTrafficLinksDto } from './create-lprd-traffic-links.dto';
import { UpdateLprdTrafficLinksDto } from './update-lprd-traffic-links.dto';
import { LprdTrafficLinksCategoryService } from './categories/categories.service';
import { LprdTrafficLinksClientService } from './clients/clients.service';
import { MaxDeliveryClientService } from 'src/max-delivery-client/max-delivery-client.service';
import { MaxDeliveryCampaignService } from 'src/max-delivery-campaign/max-delivery-campaign.service';
import { LprdTrafficSourceService } from 'src/lprdtrafficsource/lprdtrafficsource.service';
import { LprdTrafficWebsiteService } from 'src/lprd-traffic-websites/lprd-traffic-websites.service';
import { UserService } from 'src/user/user.service';
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
    findAll(): Promise<{
        trafficLinks: LprdTrafficLinks[];
        categories: import("./categories/categories.entity").LprdTrafficLinksCategory[];
        clients: import("./clients/clients.entity").LprdTrafficLinksClient[];
        campaigns: import("./clients/clients.entity").LprdTrafficLinksClient[];
        maxDeliveryClients: import("../max-delivery-client/max-delivery-client.entity").MaxDeliveryClient[];
        maxDeliveryCampaign: import("../max-delivery-campaign/max-delivery-campaign.entity").MaxDeliveryCampaign[];
        lprdTrafficSource: import("../lprdtrafficsource/lprdtrafficsource.entity").LprdTrafficSource[];
        lprdTrafficwebsites: import("../lprd-traffic-websites/lprd-traffic-websites.entity").LprdTrafficWebsite[];
        user: import("../user/user.entity").User[];
    }>;
    findOne(id: number): Promise<{
        trafficLink: LprdTrafficLinks;
        categories: import("./categories/categories.entity").LprdTrafficLinksCategory[];
        clients: import("./clients/clients.entity").LprdTrafficLinksClient[];
        campaigns: import("./clients/clients.entity").LprdTrafficLinksClient[];
        maxDeliveryClients: import("../max-delivery-client/max-delivery-client.entity").MaxDeliveryClient[];
        maxDeliveryCampaign: import("../max-delivery-campaign/max-delivery-campaign.entity").MaxDeliveryCampaign[];
        lprdTrafficSource: import("../lprdtrafficsource/lprdtrafficsource.entity").LprdTrafficSource[];
        lprdTrafficwebsites: import("../lprd-traffic-websites/lprd-traffic-websites.entity").LprdTrafficWebsite[];
        user: import("../user/user.entity").User[];
    }>;
    update(id: number, data: UpdateLprdTrafficLinksDto): Promise<{
        trafficLink: LprdTrafficLinks;
        categories: import("./categories/categories.entity").LprdTrafficLinksCategory[];
        clients: import("./clients/clients.entity").LprdTrafficLinksClient[];
        campaigns: import("./clients/clients.entity").LprdTrafficLinksClient[];
        maxDeliveryClients: import("../max-delivery-client/max-delivery-client.entity").MaxDeliveryClient[];
        maxDeliveryCampaign: import("../max-delivery-campaign/max-delivery-campaign.entity").MaxDeliveryCampaign[];
        lprdTrafficSource: import("../lprdtrafficsource/lprdtrafficsource.entity").LprdTrafficSource[];
        lprdTrafficwebsites: import("../lprd-traffic-websites/lprd-traffic-websites.entity").LprdTrafficWebsite[];
        user: import("../user/user.entity").User[];
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
