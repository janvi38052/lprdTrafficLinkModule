"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxDeliveryCampaignModule = void 0;
const common_1 = require("@nestjs/common");
const max_delivery_campaign_controller_1 = require("./max-delivery-campaign.controller");
const max_delivery_campaign_service_1 = require("./max-delivery-campaign.service");
const typeorm_1 = require("@nestjs/typeorm");
const max_delivery_campaign_entity_1 = require("./entities/max-delivery-campaign.entity");
const lprd_traffic_links_entity_1 = require("../lprd-traffic-links/entities/lprd-traffic-links.entity");
let MaxDeliveryCampaignModule = class MaxDeliveryCampaignModule {
};
exports.MaxDeliveryCampaignModule = MaxDeliveryCampaignModule;
exports.MaxDeliveryCampaignModule = MaxDeliveryCampaignModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([max_delivery_campaign_entity_1.MaxDeliveryCampaign, lprd_traffic_links_entity_1.LprdTrafficLinks])],
        controllers: [max_delivery_campaign_controller_1.MaxDeliveryCampaignController],
        providers: [max_delivery_campaign_service_1.MaxDeliveryCampaignService],
        exports: [max_delivery_campaign_service_1.MaxDeliveryCampaignService]
    })
], MaxDeliveryCampaignModule);
//# sourceMappingURL=max-delivery-campaign.module.js.map