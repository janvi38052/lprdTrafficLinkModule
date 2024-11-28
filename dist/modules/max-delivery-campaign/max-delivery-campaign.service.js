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
exports.MaxDeliveryCampaignService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const max_delivery_campaign_entity_1 = require("./entities/max-delivery-campaign.entity");
let MaxDeliveryCampaignService = class MaxDeliveryCampaignService {
    constructor(campaignRepository) {
        this.campaignRepository = campaignRepository;
    }
    async create(data) {
        const campaign = this.campaignRepository.create({
            ...data,
            active: data.active ? 1 : 0,
        });
        return this.campaignRepository.save(campaign);
    }
    async findAll() {
        return this.campaignRepository.find();
    }
    async findOne(id) {
        return this.campaignRepository.findOne({ where: { id } });
    }
    async update(id, data) {
        const transformedData = {
            ...data,
            active: data.active !== undefined ? (data.active ? 1 : 0) : undefined,
        };
        await this.campaignRepository.update(id, transformedData);
        return this.findOne(id);
    }
    async remove(id) {
        await this.campaignRepository.delete(id);
    }
};
exports.MaxDeliveryCampaignService = MaxDeliveryCampaignService;
exports.MaxDeliveryCampaignService = MaxDeliveryCampaignService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(max_delivery_campaign_entity_1.MaxDeliveryCampaign)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MaxDeliveryCampaignService);
//# sourceMappingURL=max-delivery-campaign.service.js.map