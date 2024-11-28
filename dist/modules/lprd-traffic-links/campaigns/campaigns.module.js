"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LprdTrafficLinkCampaignsModule = void 0;
const common_1 = require("@nestjs/common");
const campaigns_service_1 = require("./campaigns.service");
const campaigns_controller_1 = require("./campaigns.controller");
const typeorm_1 = require("@nestjs/typeorm");
const lprd_traffic_links_entity_1 = require("../entities/lprd-traffic-links.entity");
const campaigns_entity_1 = require("./entities/campaigns.entity");
let LprdTrafficLinkCampaignsModule = class LprdTrafficLinkCampaignsModule {
};
exports.LprdTrafficLinkCampaignsModule = LprdTrafficLinkCampaignsModule;
exports.LprdTrafficLinkCampaignsModule = LprdTrafficLinkCampaignsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([campaigns_entity_1.LprdTrafficLinksCampaign, lprd_traffic_links_entity_1.LprdTrafficLinks])],
        providers: [campaigns_service_1.LprdTrafficLinksCampaignService],
        controllers: [campaigns_controller_1.LprdTrafficLinksCampaignController],
        exports: [campaigns_service_1.LprdTrafficLinksCampaignService]
    })
], LprdTrafficLinkCampaignsModule);
//# sourceMappingURL=campaigns.module.js.map