"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxDeliveryClientModule = void 0;
const common_1 = require("@nestjs/common");
const max_delivery_client_service_1 = require("./max-delivery-client.service");
const max_delivery_client_controller_1 = require("./max-delivery-client.controller");
const typeorm_1 = require("@nestjs/typeorm");
const lprd_traffic_links_entity_1 = require("../lprd-traffic-links/lprd-traffic-links.entity");
const max_delivery_client_entity_1 = require("./max-delivery-client.entity");
let MaxDeliveryClientModule = class MaxDeliveryClientModule {
};
exports.MaxDeliveryClientModule = MaxDeliveryClientModule;
exports.MaxDeliveryClientModule = MaxDeliveryClientModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lprd_traffic_links_entity_1.LprdTrafficLinks, max_delivery_client_entity_1.MaxDeliveryClient])],
        providers: [max_delivery_client_service_1.MaxDeliveryClientService],
        controllers: [max_delivery_client_controller_1.MaxDeliveryClientController],
        exports: [max_delivery_client_service_1.MaxDeliveryClientService]
    })
], MaxDeliveryClientModule);
//# sourceMappingURL=max-delivery-client.module.js.map