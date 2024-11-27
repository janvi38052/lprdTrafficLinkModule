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
exports.MaxDeliveryClientService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const max_delivery_client_entity_1 = require("./max-delivery-client.entity");
let MaxDeliveryClientService = class MaxDeliveryClientService {
    constructor(maxDeliveryClientRepository) {
        this.maxDeliveryClientRepository = maxDeliveryClientRepository;
    }
    async create(data) {
        const maxDeliveryClient = this.maxDeliveryClientRepository.create(data);
        return this.maxDeliveryClientRepository.save(maxDeliveryClient);
    }
    async findAll() {
        return this.maxDeliveryClientRepository.find();
    }
    async findOne(id) {
        const maxDeliveryClient = await this.maxDeliveryClientRepository.findOne({ where: { id } });
        if (!maxDeliveryClient) {
            throw new common_1.NotFoundException(`MaxDeliveryClient with ID ${id} not found`);
        }
        return maxDeliveryClient;
    }
    async update(id, data) {
        await this.maxDeliveryClientRepository.update(id, data);
        return this.findOne(id);
    }
    async remove(id) {
        await this.maxDeliveryClientRepository.delete(id);
    }
};
exports.MaxDeliveryClientService = MaxDeliveryClientService;
exports.MaxDeliveryClientService = MaxDeliveryClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(max_delivery_client_entity_1.MaxDeliveryClient)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MaxDeliveryClientService);
//# sourceMappingURL=max-delivery-client.service.js.map