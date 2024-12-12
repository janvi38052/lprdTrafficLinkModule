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
exports.LprdTrafficLinksClientController = void 0;
const common_1 = require("@nestjs/common");
const clients_service_1 = require("./clients.service");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const create_clients_dto_1 = require("./dtos/create-clients.dto");
let LprdTrafficLinksClientController = class LprdTrafficLinksClientController {
    constructor(lprdTrafficLinksClientService, entityManager) {
        this.lprdTrafficLinksClientService = lprdTrafficLinksClientService;
        this.entityManager = entityManager;
    }
    async createTrafficLinkClient(values) {
        const normalizedValues = Array.isArray(values) ? values : [values];
        await this.lprdTrafficLinksClientService.createLprdTrafficLinkClient(normalizedValues, this.entityManager);
        return { message: 'Traffic link clients created successfully' };
    }
    async deleteTrafficLinkClientByTrafficLinkId(lprdTrafficLinkId) {
        await this.lprdTrafficLinksClientService.deleteLprdTrafficLinkClientByTrafficLinkId(lprdTrafficLinkId, this.entityManager);
        return { message: 'Traffic link client deleted successfully' };
    }
    async deleteTrafficLinkClients(lprdTrafficLinkId, removedElements) {
        await this.lprdTrafficLinksClientService.deleteLprdTrafficLinkClient(removedElements, lprdTrafficLinkId, this.entityManager);
        return { message: 'Selected traffic link clients deleted successfully' };
    }
};
exports.LprdTrafficLinksClientController = LprdTrafficLinksClientController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create traffic link clients' }),
    (0, swagger_1.ApiBody)({
        description: 'Client details to be created',
        type: [create_clients_dto_1.CreateLprdTrafficLinksClientDto],
        examples: {
            singleClient: {
                value: { client_id: 1, lprd_traffic_link_id: 101 },
            },
            multipleClients: {
                value: [
                    { client_id: 1, lprd_traffic_link_id: 101 },
                    { client_id: 2, lprd_traffic_link_id: 102 },
                ],
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Traffic link clients created successfully',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinksClientController.prototype, "createTrafficLinkClient", null);
__decorate([
    (0, common_1.Delete)(':lprdTrafficLinkId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete all clients associated with a specific Traffic Link ID',
    }),
    (0, swagger_1.ApiParam)({
        name: 'lprdTrafficLinkId',
        description: 'ID of the Traffic Link',
        example: 101,
    }),
    (0, swagger_1.ApiResponse)({
        status: 204,
        description: 'Traffic link clients deleted successfully',
    }),
    __param(0, (0, common_1.Param)('lprdTrafficLinkId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinksClientController.prototype, "deleteTrafficLinkClientByTrafficLinkId", null);
__decorate([
    (0, common_1.Delete)(':lprdTrafficLinkId/clients'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete specific clients by Traffic Link ID and Client IDs',
    }),
    (0, swagger_1.ApiParam)({
        name: 'lprdTrafficLinkId',
        description: 'ID of the Traffic Link',
        example: 101,
    }),
    (0, swagger_1.ApiBody)({
        description: 'Array of Client IDs to delete',
        type: [Number],
        examples: {
            clientIds: {
                value: [1, 2, 3],
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 204,
        description: 'Selected traffic link clients deleted successfully',
    }),
    __param(0, (0, common_1.Param)('lprdTrafficLinkId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinksClientController.prototype, "deleteTrafficLinkClients", null);
exports.LprdTrafficLinksClientController = LprdTrafficLinksClientController = __decorate([
    (0, swagger_1.ApiTags)('LPRD Traffic Links Client'),
    (0, common_1.Controller)('lprd-traffic-links-client'),
    __param(1, (0, common_1.Inject)(typeorm_1.EntityManager)),
    __metadata("design:paramtypes", [clients_service_1.LprdTrafficLinksClientService,
        typeorm_1.EntityManager])
], LprdTrafficLinksClientController);
//# sourceMappingURL=clients.controller.js.map