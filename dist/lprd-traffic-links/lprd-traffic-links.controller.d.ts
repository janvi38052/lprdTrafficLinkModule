import { LprdTrafficLinksService } from './lprd-traffic-links.service';
import { CreateLprdTrafficLinksDto } from './create-lprd-traffic-links.dto';
import { UpdateLprdTrafficLinksDto } from './update-lprd-traffic-links.dto';
export declare class LprdTrafficLinksController {
    private readonly service;
    constructor(service: LprdTrafficLinksService);
    create(data: CreateLprdTrafficLinksDto): Promise<import("./lprd-traffic-links.entity").LprdTrafficLinks>;
    findAll(): Promise<{
        trafficLinks: import("./lprd-traffic-links.entity").LprdTrafficLinks[];
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
        trafficLink: import("./lprd-traffic-links.entity").LprdTrafficLinks;
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
        trafficLink: import("./lprd-traffic-links.entity").LprdTrafficLinks;
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
