import { LprdTrafficLinksService } from './lprd-traffic-links.service';
import { CreateLprdTrafficLinksDto } from './dtos/create-lprd-traffic-links.dto';
import { UpdateLprdTrafficLinksDto } from './dtos/update-lprd-traffic-links.dto';
export declare class LprdTrafficLinksController {
    private readonly lprdTrafficLinksService;
    constructor(lprdTrafficLinksService: LprdTrafficLinksService);
    create(createLprdTrafficLinksDto: CreateLprdTrafficLinksDto): Promise<import("./entities/lprd-traffic-links.entity").LprdTrafficLinks>;
    findAll(page?: number, limit?: number, searchQuery?: string, sortBy?: string, order?: 'ASC' | 'DESC'): Promise<{
        trafficLinks: {
            data: import("./entities/lprd-traffic-links.entity").LprdTrafficLinks[];
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
        trafficLink: import("./entities/lprd-traffic-links.entity").LprdTrafficLinks;
        categories: import("./categories/entities/categories.entity").LprdTrafficLinksCategory[];
        clients: import("./clients/entities/clients.entity").LprdTrafficLinksClient[];
        campaigns: import("./clients/entities/clients.entity").LprdTrafficLinksClient[];
        maxDeliveryClients: import("../max-delivery-client/entities/max-delivery-client.entity").MaxDeliveryClient[];
        maxDeliveryCampaign: import("../max-delivery-campaign/entities/max-delivery-campaign.entity").MaxDeliveryCampaign[];
        lprdTrafficSource: import("../lprdtrafficsource/entities/lprdtrafficsource.entity").LprdTrafficSource[];
        lprdTrafficwebsites: import("../lprd-traffic-websites/entities/lprd-traffic-websites.entity").LprdTrafficWebsite[];
        user: import("../user/entities/user.entity").User[];
    }>;
    update(id: number, updateLprdTrafficLinksDto: UpdateLprdTrafficLinksDto): Promise<{
        trafficLink: import("./entities/lprd-traffic-links.entity").LprdTrafficLinks;
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
