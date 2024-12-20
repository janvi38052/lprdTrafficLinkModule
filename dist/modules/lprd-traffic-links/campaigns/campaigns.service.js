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
exports.LprdTrafficLinksCampaignService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const campaigns_entity_1 = require("./entities/campaigns.entity");
let LprdTrafficLinksCampaignService = class LprdTrafficLinksCampaignService {
    constructor(campaignRepository) {
        this.campaignRepository = campaignRepository;
    }
    async createLprdTrafficLinkCampaign(values, transactionalEntityManager) {
        await transactionalEntityManager
            .createQueryBuilder()
            .insert()
            .into(campaigns_entity_1.LprdTrafficLinksCampaign)
            .values(values)
            .execute();
        const trafficLinkCampaigns = values.map((value) => ({
            traffic_link_id: value.lprd_traffic_link_id,
            campaign_id: value.campaign_id,
        }));
    }
    async deleteLprdTrafficLinkCampaignByTrafficLinkId(lprdTrafficLinkId, transactionalEntityManager) {
        await transactionalEntityManager.createQueryBuilder()
            .delete()
            .from(campaigns_entity_1.LprdTrafficLinksCampaign)
            .where('lprd_traffic_link_id = :lprdTrafficLinkId', { lprdTrafficLinkId })
            .execute();
    }
    async deleteLprdTrafficLinkCampaign(removedElements, lprdTrafficLinkId, transactionalEntityManager) {
        await transactionalEntityManager.createQueryBuilder()
            .delete()
            .from(campaigns_entity_1.LprdTrafficLinksCampaign)
            .where('lprd_traffic_link_id = :lprdTrafficLinkId', { lprdTrafficLinkId })
            .andWhere('campaign_id IN (:...removedElements)', { removedElements })
            .execute();
        let trafficLinkCampaigns = [];
        for (let i = 0; i < removedElements.length; i++) {
            trafficLinkCampaigns.push({ traffic_link_id: lprdTrafficLinkId, campaign_id: removedElements[i] });
        }
    }
    async create(data) {
        const campaign = this.campaignRepository.create(data);
        return this.campaignRepository.save(campaign);
    }
    async findAll() {
        return this.campaignRepository.find({ relations: ['lprdTrafficLink'] });
    }
    async findOne(id) {
        return this.campaignRepository.findOne({ where: { id }, relations: ['lprdTrafficLink'] });
    }
    async update(id, data) {
        await this.campaignRepository.update(id, data);
        return this.findOne(id);
    }
    async remove(id) {
        await this.campaignRepository.delete(id);
    }
};
exports.LprdTrafficLinksCampaignService = LprdTrafficLinksCampaignService;
exports.LprdTrafficLinksCampaignService = LprdTrafficLinksCampaignService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(campaigns_entity_1.LprdTrafficLinksCampaign)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LprdTrafficLinksCampaignService);
//# sourceMappingURL=campaigns.service.js.map