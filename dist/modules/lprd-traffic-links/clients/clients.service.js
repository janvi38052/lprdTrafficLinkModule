"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LprdTrafficLinksClientService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const clients_entity_1 = require("./entities/clients.entity");
let LprdTrafficLinksClientService = class LprdTrafficLinksClientService {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async createLprdTrafficLinkClient(values, transactionalEntityManager) {
        await transactionalEntityManager
            .createQueryBuilder()
            .insert()
            .into(clients_entity_1.LprdTrafficLinksClient)
            .values(values)
            .execute();
        const trafficLinkClients = values.map((value) => ({
            traffic_link_id: value.lprd_traffic_link_id,
            client_id: value.client_id,
        }));
    }
    async deleteLprdTrafficLinkClientByTrafficLinkId(lprdTrafficLinkId, transactionalEntityManager) {
        await transactionalEntityManager
            .createQueryBuilder()
            .delete()
            .from(clients_entity_1.LprdTrafficLinksClient)
            .where('lprd_traffic_link_id = :lprdTrafficLinkId', { lprdTrafficLinkId })
            .execute();
    }
    async deleteLprdTrafficLinkClient(removedElements, lprdTrafficLinkId, transactionalEntityManager) {
        await transactionalEntityManager
            .createQueryBuilder()
            .delete()
            .from(clients_entity_1.LprdTrafficLinksClient)
            .where('lprd_traffic_link_id = :lprdTrafficLinkId', { lprdTrafficLinkId })
            .andWhere('client_id IN (:...removedElements)', { removedElements })
            .execute();
        let trafficLinkClients = [];
        for (let i = 0; i < removedElements.length; i++) {
            trafficLinkClients.push({ traffic_link_id: lprdTrafficLinkId, client_id: removedElements[i] });
        }
    }
};
exports.LprdTrafficLinksClientService = LprdTrafficLinksClientService;
exports.LprdTrafficLinksClientService = LprdTrafficLinksClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(clients_entity_1.LprdTrafficLinksClient)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LprdTrafficLinksClientService);
//# sourceMappingURL=clients.service.js.map