"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LprdTrafficWebsitesModule = void 0;
const common_1 = require("@nestjs/common");
const lprd_traffic_websites_service_1 = require("./lprd-traffic-websites.service");
const lprd_traffic_websites_controller_1 = require("./lprd-traffic-websites.controller");
const typeorm_1 = require("@nestjs/typeorm");
const lprd_traffic_websites_entity_1 = require("./lprd-traffic-websites.entity");
const lprd_traffic_links_entity_1 = require("../lprd-traffic-links/lprd-traffic-links.entity");
let LprdTrafficWebsitesModule = class LprdTrafficWebsitesModule {
};
exports.LprdTrafficWebsitesModule = LprdTrafficWebsitesModule;
exports.LprdTrafficWebsitesModule = LprdTrafficWebsitesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lprd_traffic_websites_entity_1.LprdTrafficWebsite, lprd_traffic_links_entity_1.LprdTrafficLinks])],
        providers: [lprd_traffic_websites_service_1.LprdTrafficWebsiteService],
        controllers: [lprd_traffic_websites_controller_1.LprdTrafficWebsiteController],
        exports: [lprd_traffic_websites_service_1.LprdTrafficWebsiteService]
    })
], LprdTrafficWebsitesModule);
//# sourceMappingURL=lprd-traffic-websites.module.js.map