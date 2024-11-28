"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lprd_traffic_links_module_1 = require("./modules/lprd-traffic-links/lprd-traffic-links.module");
const lprd_traffic_links_entity_1 = require("./modules/lprd-traffic-links/entities/lprd-traffic-links.entity");
const categories_entity_1 = require("./modules/lprd-traffic-links/categories/entities/categories.entity");
const categories_module_1 = require("./modules/lprd-traffic-links/categories/categories.module");
const clients_entity_1 = require("./modules/lprd-traffic-links/clients/entities/clients.entity");
const clients_module_1 = require("./modules/lprd-traffic-links/clients/clients.module");
const campaigns_entity_1 = require("./modules/lprd-traffic-links/campaigns/entities/campaigns.entity");
const max_delivery_client_module_1 = require("./modules/max-delivery-client/max-delivery-client.module");
const max_delivery_client_entity_1 = require("./modules/max-delivery-client/entities/max-delivery-client.entity");
const max_delivery_campaign_module_1 = require("./modules/max-delivery-campaign/max-delivery-campaign.module");
const max_delivery_campaign_entity_1 = require("./modules/max-delivery-campaign/entities/max-delivery-campaign.entity");
const lprdtrafficsource_module_1 = require("./modules/lprdtrafficsource/lprdtrafficsource.module");
const lprdtrafficsource_entity_1 = require("./modules/lprdtrafficsource/entities/lprdtrafficsource.entity");
const lprd_traffic_websites_module_1 = require("./modules/lprd-traffic-websites/lprd-traffic-websites.module");
const lprd_traffic_websites_entity_1 = require("./modules/lprd-traffic-websites/entities/lprd-traffic-websites.entity");
const user_module_1 = require("./modules/user/user.module");
const user_entity_1 = require("./modules/user/entities/user.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'collegedb',
                entities: [lprd_traffic_links_entity_1.LprdTrafficLinks, categories_entity_1.LprdTrafficLinksCategory, clients_entity_1.LprdTrafficLinksClient, campaigns_entity_1.LprdTrafficLinksCampaign, max_delivery_client_entity_1.MaxDeliveryClient, max_delivery_campaign_entity_1.MaxDeliveryCampaign, lprdtrafficsource_entity_1.LprdTrafficSource, lprd_traffic_websites_entity_1.LprdTrafficWebsite, user_entity_1.User],
                synchronize: true,
                logging: true,
            }),
            lprd_traffic_links_module_1.LprdTrafficLinksModule,
            categories_module_1.LprdTrafficLinkCategoriesModule,
            clients_module_1.LprdTrafficLinkClientsModule,
            campaigns_entity_1.LprdTrafficLinksCampaign,
            max_delivery_client_module_1.MaxDeliveryClientModule,
            max_delivery_campaign_module_1.MaxDeliveryCampaignModule,
            lprdtrafficsource_module_1.LprdtrafficsourceModule,
            lprd_traffic_websites_module_1.LprdTrafficWebsitesModule,
            user_module_1.UserModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map