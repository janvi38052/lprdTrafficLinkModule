"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const lprd_traffic_links_entity_1 = require("./modules/lprd-traffic-links/entities/lprd-traffic-links.entity");
const categories_entity_1 = require("./modules/lprd-traffic-links/categories/entities/categories.entity");
const clients_entity_1 = require("./modules/lprd-traffic-links/clients/entities/clients.entity");
const campaigns_entity_1 = require("./modules/lprd-traffic-links/campaigns/entities/campaigns.entity");
const max_delivery_client_entity_1 = require("./modules/max-delivery-client/entities/max-delivery-client.entity");
const max_delivery_campaign_entity_1 = require("./modules/max-delivery-campaign/entities/max-delivery-campaign.entity");
const lprdtrafficsource_entity_1 = require("./modules/lprdtrafficsource/entities/lprdtrafficsource.entity");
const lprd_traffic_websites_entity_1 = require("./modules/lprd-traffic-websites/entities/lprd-traffic-websites.entity");
const user_entity_1 = require("./modules/user/entities/user.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'npm',
    entities: [lprd_traffic_links_entity_1.LprdTrafficLinks, categories_entity_1.LprdTrafficLinksCategory, clients_entity_1.LprdTrafficLinksClient, campaigns_entity_1.LprdTrafficLinksCampaign, max_delivery_client_entity_1.MaxDeliveryClient, max_delivery_campaign_entity_1.MaxDeliveryCampaign, lprdtrafficsource_entity_1.LprdTrafficSource, lprd_traffic_websites_entity_1.LprdTrafficWebsite, user_entity_1.User],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
    logging: true,
});
//# sourceMappingURL=data-source.js.map