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
exports.CreateLprdTrafficLinkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const lprd_traffic_links_entity_1 = require("./entities/lprd-traffic-links.entity");
const common_2 = require("@nestjs/common");
const categories_service_1 = require("./categories/categories.service");
const campaigns_service_1 = require("./campaigns/campaigns.service");
const clients_service_1 = require("./clients/clients.service");
const lprdtrafficsource_service_1 = require("../lprdtrafficsource/lprdtrafficsource.service");
const typeorm_3 = require("@nestjs/typeorm");
const utils_1 = require("../../utils/utils");
const error_messages_1 = require("../../utils/error-messages");
const success_messages_1 = require("../../utils/success-messages");
const helpers_util_1 = require("../../utils/helpers.util");
let CreateLprdTrafficLinkService = class CreateLprdTrafficLinkService {
    constructor(lprdTrafficLinkRepository, entityManager, lprdTrafficLinkCategoriesService, lprdTrafficLinkClientsService, lprdTrafficLinkCampaignsService, lprdTrafficSourceService) {
        this.lprdTrafficLinkRepository = lprdTrafficLinkRepository;
        this.entityManager = entityManager;
        this.lprdTrafficLinkCategoriesService = lprdTrafficLinkCategoriesService;
        this.lprdTrafficLinkClientsService = lprdTrafficLinkClientsService;
        this.lprdTrafficLinkCampaignsService = lprdTrafficLinkCampaignsService;
        this.lprdTrafficSourceService = lprdTrafficSourceService;
    }
    async createTrafficLink(trafficLinkRequest, req) {
        const { traffic_source_id, traffic_website_id, locale, lock_category, categories, clients, campaigns, } = trafficLinkRequest;
        const sortedCategories = categories && !lock_category
            ? JSON.parse(JSON.stringify(categories))?.sort((a, b) => a - b)
            : [];
        const whereCondition = {
            traffic_source_id,
            traffic_website_id,
            locale,
            lock_category,
            category_ids: JSON.stringify(sortedCategories),
        };
        const existingTrafficLinks = await this.lprdTrafficLinkRepository.findOne({
            where: whereCondition,
        });
        if (existingTrafficLinks) {
            throw new common_2.ConflictException((0, utils_1.replaceMultipleSubstring)(error_messages_1.ErrorMessages.TRAFFIC_LINK_CONFLICT_EXCEPTION, {
                '{id}': existingTrafficLinks.id,
            }));
        }
        const lprdTrafficSource = await this.lprdTrafficSourceService.getTrafficSourceById(traffic_source_id);
        try {
            return await this.entityManager.transaction(async (transactionalEntityManager) => {
                const lprdTrafficLink = new lprd_traffic_links_entity_1.LprdTrafficLinks();
                lprdTrafficLink.category_ids = JSON.stringify(sortedCategories);
                Object.assign(lprdTrafficLink, trafficLinkRequest);
                lprdTrafficLink.lock_category = lock_category;
                const savedLprdTrafficLink = await transactionalEntityManager.save(lprdTrafficLink);
                if (savedLprdTrafficLink) {
                    if (categories && !lock_category) {
                        await this.createLprdTrafficLinkCategory(categories, savedLprdTrafficLink, req, transactionalEntityManager);
                    }
                    if (clients) {
                        await this.createLprdTrafficLinkClient(clients, savedLprdTrafficLink, req, transactionalEntityManager);
                    }
                    if (campaigns) {
                        await this.createLprdTrafficLinkCampaign(campaigns, savedLprdTrafficLink, req, transactionalEntityManager);
                    }
                }
                return (0, helpers_util_1.responseCreated)({ ...savedLprdTrafficLink }, (0, success_messages_1.getSuccessMessage)('TRAFFIC_LINK_CREATED'));
            });
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async createLprdTrafficLinkCategory(categories, lprdTrafficLink, req, transactionalEntityManager) {
        const lprdTrafficLinkCategories = categories.map((categoryId) => ({
            lprd_traffic_categories_id: categoryId,
            lprd_traffic_link_id: lprdTrafficLink.id,
        }));
        await this.lprdTrafficLinkCategoriesService.createLprdTrafficLinkCategory(lprdTrafficLinkCategories, transactionalEntityManager);
    }
    async createLprdTrafficLinkClient(clients, lprdTrafficLink, req, transactionalEntityManager) {
        const lprdTrafficLinkClients = clients.map((clientId) => ({
            client_id: clientId,
            lprd_traffic_link_id: lprdTrafficLink.id,
        }));
        await this.lprdTrafficLinkClientsService.createLprdTrafficLinkClient(lprdTrafficLinkClients, transactionalEntityManager);
    }
    async createLprdTrafficLinkCampaign(campaigns, lprdTrafficLink, req, transactionalEntityManager) {
        const lprdTrafficLinkCampaigns = campaigns.map((campaignId) => ({
            campaign_id: campaignId,
            lprd_traffic_link_id: lprdTrafficLink.id,
        }));
        await this.lprdTrafficLinkCampaignsService.createLprdTrafficLinkCampaign(lprdTrafficLinkCampaigns, transactionalEntityManager);
    }
};
exports.CreateLprdTrafficLinkService = CreateLprdTrafficLinkService;
exports.CreateLprdTrafficLinkService = CreateLprdTrafficLinkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lprd_traffic_links_entity_1.LprdTrafficLinks)),
    __param(1, (0, typeorm_3.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.EntityManager,
        categories_service_1.LprdTrafficLinkCategoriesService,
        clients_service_1.LprdTrafficLinksClientService,
        campaigns_service_1.LprdTrafficLinksCampaignService,
        lprdtrafficsource_service_1.LprdTrafficSourceService])
], CreateLprdTrafficLinkService);
//# sourceMappingURL=createLprdTrafficLinks.service.js.map