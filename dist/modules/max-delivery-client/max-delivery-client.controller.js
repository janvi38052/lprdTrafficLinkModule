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
exports.MaxDeliveryClientController = void 0;
const common_1 = require("@nestjs/common");
const max_delivery_client_service_1 = require("./max-delivery-client.service");
const create_max_delivery_client_dto_1 = require("./dtos/create-max-delivery-client.dto");
const update_max_delivery_client_dto_1 = require("./dtos/update.max-delivery-client.dto");
let MaxDeliveryClientController = class MaxDeliveryClientController {
    constructor(maxDeliveryClientService) {
        this.maxDeliveryClientService = maxDeliveryClientService;
    }
    async create(createDto) {
        return this.maxDeliveryClientService.create(createDto);
    }
    async findAll() {
        return this.maxDeliveryClientService.findAll();
    }
    async findOne(id) {
        return this.maxDeliveryClientService.findOne(id);
    }
    async update(id, updateDto) {
        return this.maxDeliveryClientService.update(id, updateDto);
    }
    async remove(id) {
        return this.maxDeliveryClientService.remove(id);
    }
};
exports.MaxDeliveryClientController = MaxDeliveryClientController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_max_delivery_client_dto_1.CreateMaxDeliveryClientDto]),
    __metadata("design:returntype", Promise)
], MaxDeliveryClientController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaxDeliveryClientController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MaxDeliveryClientController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_max_delivery_client_dto_1.UpdateMaxDeliveryClientDto]),
    __metadata("design:returntype", Promise)
], MaxDeliveryClientController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MaxDeliveryClientController.prototype, "remove", null);
exports.MaxDeliveryClientController = MaxDeliveryClientController = __decorate([
    (0, common_1.Controller)('max-delivery-client'),
    __metadata("design:paramtypes", [max_delivery_client_service_1.MaxDeliveryClientService])
], MaxDeliveryClientController);
//# sourceMappingURL=max-delivery-client.controller.js.map