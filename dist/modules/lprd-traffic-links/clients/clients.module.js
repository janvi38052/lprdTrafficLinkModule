"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LprdTrafficLinkClientsModule = void 0;
const common_1 = require("@nestjs/common");
const clients_service_1 = require("./clients.service");
const typeorm_1 = require("@nestjs/typeorm");
const clients_entity_1 = require("./entities/clients.entity");
const lprd_traffic_links_entity_1 = require("../entities/lprd-traffic-links.entity");
const clients_controller_1 = require("./clients.controller");
;
let LprdTrafficLinkClientsModule = class LprdTrafficLinkClientsModule {
};
exports.LprdTrafficLinkClientsModule = LprdTrafficLinkClientsModule;
exports.LprdTrafficLinkClientsModule = LprdTrafficLinkClientsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([clients_entity_1.LprdTrafficLinksClient, lprd_traffic_links_entity_1.LprdTrafficLinks])],
        providers: [clients_service_1.LprdTrafficLinksClientService],
        controllers: [clients_controller_1.LprdTrafficLinksClientController],
        exports: [clients_service_1.LprdTrafficLinksClientService]
    })
], LprdTrafficLinkClientsModule);
//# sourceMappingURL=clients.module.js.map