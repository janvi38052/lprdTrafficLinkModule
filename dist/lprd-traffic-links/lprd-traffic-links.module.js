"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LprdTrafficLinksModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lprd_traffic_links_controller_1 = require("./lprd-traffic-links.controller");
const lprd_traffic_links_service_1 = require("./lprd-traffic-links.service");
const lprd_traffic_links_entity_1 = require("./lprd-traffic-links.entity");
const categories_entity_1 = require("./categories/categories.entity");
const categories_service_1 = require("./categories/categories.service");
const clients_module_1 = require("./clients/clients.module");
const clients_entity_1 = require("./clients/clients.entity");
const clients_service_1 = require("./clients/clients.service");
const campaigns_module_1 = require("./campaigns/campaigns.module");
const campaigns_entity_1 = require("./campaigns/campaigns.entity");
const campaigns_service_1 = require("./campaigns/campaigns.service");
const max_delivery_client_entity_1 = require("../max-delivery-client/max-delivery-client.entity");
const max_delivery_client_module_1 = require("../max-delivery-client/max-delivery-client.module");
const max_delivery_client_service_1 = require("../max-delivery-client/max-delivery-client.service");
const max_delivery_campaign_entity_1 = require("../max-delivery-campaign/max-delivery-campaign.entity");
const max_delivery_campaign_module_1 = require("../max-delivery-campaign/max-delivery-campaign.module");
const max_delivery_campaign_service_1 = require("../max-delivery-campaign/max-delivery-campaign.service");
const lprdtrafficsource_entity_1 = require("../lprdtrafficsource/lprdtrafficsource.entity");
const lprdtrafficsource_module_1 = require("../lprdtrafficsource/lprdtrafficsource.module");
const lprdtrafficsource_service_1 = require("../lprdtrafficsource/lprdtrafficsource.service");
const lprd_traffic_websites_entity_1 = require("../lprd-traffic-websites/lprd-traffic-websites.entity");
const lprd_traffic_websites_module_1 = require("../lprd-traffic-websites/lprd-traffic-websites.module");
const lprd_traffic_websites_service_1 = require("../lprd-traffic-websites/lprd-traffic-websites.service");
const user_entity_1 = require("../user/user.entity");
const user_module_1 = require("../user/user.module");
const user_service_1 = require("../user/user.service");
let LprdTrafficLinksModule = class LprdTrafficLinksModule {
};
exports.LprdTrafficLinksModule = LprdTrafficLinksModule;
exports.LprdTrafficLinksModule = LprdTrafficLinksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([lprd_traffic_links_entity_1.LprdTrafficLinks, categories_entity_1.LprdTrafficLinksCategory, clients_entity_1.LprdTrafficLinksClient, campaigns_entity_1.LprdTrafficLinksCampaign, max_delivery_client_entity_1.MaxDeliveryClient, max_delivery_campaign_entity_1.MaxDeliveryCampaign, lprdtrafficsource_entity_1.LprdTrafficSource, lprd_traffic_websites_entity_1.LprdTrafficWebsite, user_entity_1.User]),
            clients_module_1.LprdTrafficLinkClientsModule,
            campaigns_module_1.LprdTrafficLinkCampaignsModule,
            campaigns_module_1.LprdTrafficLinkCampaignsModule,
            max_delivery_client_module_1.MaxDeliveryClientModule,
            max_delivery_campaign_module_1.MaxDeliveryCampaignModule,
            lprdtrafficsource_module_1.LprdtrafficsourceModule,
            lprd_traffic_websites_module_1.LprdTrafficWebsitesModule,
            user_module_1.UserModule
        ],
        controllers: [lprd_traffic_links_controller_1.LprdTrafficLinksController],
        providers: [
            lprd_traffic_links_service_1.LprdTrafficLinksService,
            categories_service_1.LprdTrafficLinksCategoryService,
            clients_service_1.LprdTrafficLinksClientService,
            campaigns_service_1.LprdTrafficLinksCampaignService,
            max_delivery_client_service_1.MaxDeliveryClientService,
            max_delivery_campaign_service_1.MaxDeliveryCampaignService,
            lprdtrafficsource_service_1.LprdTrafficSourceService,
            lprd_traffic_websites_service_1.LprdTrafficWebsiteService,
            user_service_1.UserService
        ],
    })
], LprdTrafficLinksModule);
//# sourceMappingURL=lprd-traffic-links.module.js.map