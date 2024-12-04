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
exports.UpdateLprdTrafficLinkService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const lprd_traffic_links_entity_1 = require("./entities/lprd-traffic-links.entity");
const common_1 = require("@nestjs/common");
const categories_service_1 = require("./categories/categories.service");
const campaigns_service_1 = require("./campaigns/campaigns.service");
const clients_service_1 = require("./clients/clients.service");
const utils_1 = require("../../utils/utils");
const helpers_util_1 = require("../../utils/helpers.util");
const error_messages_1 = require("../../utils/error-messages");
const lprdtrafficsource_service_1 = require("../lprdtrafficsource/lprdtrafficsource.service");
let UpdateLprdTrafficLinkService = class UpdateLprdTrafficLinkService {
    constructor(lprdTrafficLinkRepository, entityManager, lprdTrafficLinkCategoriesService, lprdTrafficLinkClientsService, lprdTrafficLinkCampaignsService, lprdTrafficSourceService) {
        this.lprdTrafficLinkRepository = lprdTrafficLinkRepository;
        this.entityManager = entityManager;
        this.lprdTrafficLinkCategoriesService = lprdTrafficLinkCategoriesService;
        this.lprdTrafficLinkClientsService = lprdTrafficLinkClientsService;
        this.lprdTrafficLinkCampaignsService = lprdTrafficLinkCampaignsService;
        this.lprdTrafficSourceService = lprdTrafficSourceService;
    }
    async updateTrafficLink(id, trafficLinkRequest, req) {
        const { traffic_source_id, traffic_website_id, locale, lock_category, categories, clients, campaigns, } = trafficLinkRequest;
        const sortedCategories = categories && !lock_category
            ? JSON.parse(JSON.stringify(categories))?.sort((a, b) => a - b)
            : [];
        const whereCondition = {
            traffic_source_id,
            traffic_website_id,
            locale,
            lock_category: lock_category,
            id: (0, typeorm_2.Not)(id),
            category_ids: JSON.stringify(sortedCategories),
        };
        const existingDuplicateTrafficLinks = await this.lprdTrafficLinkRepository.findOne({
            where: whereCondition,
        });
        if (existingDuplicateTrafficLinks) {
            throw new common_1.ConflictException((0, utils_1.replaceMultipleSubstring)(error_messages_1.ErrorMessages.TRAFFIC_LINK_CONFLICT_EXCEPTION, {
                '{id}': existingDuplicateTrafficLinks.id,
            }));
        }
        const lprdTrafficLink = await this.lprdTrafficLinkRepository.findOne({
            where: { id: id },
            relations: ['categories', 'clients', 'campaigns'],
        });
        const lprdTrafficSource = await this.lprdTrafficSourceService.getTrafficSourceById(traffic_source_id);
        try {
            delete trafficLinkRequest.campaigns;
            delete trafficLinkRequest.clients;
            delete trafficLinkRequest.categories;
            return await this.entityManager.transaction(async (transactionalEntityManager) => {
                lprdTrafficLink.updated_by = req?.body?.created_by;
                lprdTrafficLink.category_ids = JSON.stringify(sortedCategories);
                if (!('max_provider_delivery' in trafficLinkRequest)) {
                    lprdTrafficLink.max_provider_delivery = null;
                }
                if (!('tag' in trafficLinkRequest)) {
                    lprdTrafficLink.tag = null;
                }
                if (!('test_traffic_percentage' in trafficLinkRequest)) {
                    lprdTrafficLink.test_traffic_percentage = null;
                }
                Object.assign(lprdTrafficLink, trafficLinkRequest);
                lprdTrafficLink.lock_category = lock_category;
                const savedLprdTrafficLink = await transactionalEntityManager.save(lprdTrafficLink);
                if (categories && !lock_category) {
                    await this.createAndDeleteLprdTrafficLinkCategory(categories, lprdTrafficLink, req, transactionalEntityManager);
                }
                else {
                    await this.lprdTrafficLinkCategoriesService.deleteLprdTrafficLinkCategoryByTrafficLinkId(lprdTrafficLink.id, transactionalEntityManager);
                }
                if (clients) {
                    this.createAndDeleteLprdTrafficLinkClient(clients, lprdTrafficLink, req, transactionalEntityManager);
                }
                else {
                    await this.lprdTrafficLinkClientsService.deleteLprdTrafficLinkClientByTrafficLinkId(lprdTrafficLink.id, transactionalEntityManager);
                }
                if (campaigns) {
                    this.createAndDeleteLprdTrafficLinkCampaign(campaigns, lprdTrafficLink, req, transactionalEntityManager);
                }
                else {
                    await this.lprdTrafficLinkCampaignsService.deleteLprdTrafficLinkCampaignByTrafficLinkId(lprdTrafficLink.id, transactionalEntityManager);
                }
                return (0, helpers_util_1.responseCreated)(savedLprdTrafficLink, 'Traffic Link updated Successfully');
            });
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async createAndDeleteLprdTrafficLinkCategory(categories, lprdTrafficLink, req, transactionalEntityManager) {
        const existingCategories = lprdTrafficLink.categories.map((category) => category.id);
        const { removedElements, addedElements } = (0, utils_1.findArrayDifferences)(existingCategories, categories);
        if (addedElements.length > 0) {
            const lprdTrafficLinkCategories = addedElements.map((categoryId) => ({
                lprd_traffic_categories_id: categoryId,
                lprd_traffic_link_id: lprdTrafficLink.id,
                created_by: req?.body?.created_by,
                updated_by: req?.body?.created_by,
            }));
            await this.lprdTrafficLinkCategoriesService.createLprdTrafficLinkCategory(lprdTrafficLinkCategories, transactionalEntityManager);
        }
        if (removedElements.length > 0) {
            await this.lprdTrafficLinkCategoriesService.deleteLprdTrafficLinkCategory(removedElements, lprdTrafficLink.id, transactionalEntityManager);
        }
    }
    async createAndDeleteLprdTrafficLinkClient(clients, lprdTrafficLink, req, transactionalEntityManager) {
        const existingClients = lprdTrafficLink.clients.map((client) => client.client_id);
        const { removedElements, addedElements } = (0, utils_1.findArrayDifferences)(existingClients, clients);
        if (addedElements.length > 0) {
            const lprdTrafficLinkClients = addedElements.map((clientId) => ({
                client_id: clientId,
                lprd_traffic_link_id: lprdTrafficLink.id,
                created_by: req?.body?.created_by,
                updated_by: req?.body?.created_by,
            }));
            await this.lprdTrafficLinkClientsService.createLprdTrafficLinkClient(lprdTrafficLinkClients, transactionalEntityManager);
        }
        if (removedElements.length > 0) {
            await this.lprdTrafficLinkClientsService.deleteLprdTrafficLinkClient(removedElements, lprdTrafficLink.id, transactionalEntityManager);
        }
    }
    async createAndDeleteLprdTrafficLinkCampaign(campaigns, lprdTrafficLink, req, transactionalEntityManager) {
        const existingCampaign = lprdTrafficLink.campaigns.map((campaign) => campaign.campaign_id);
        const { removedElements, addedElements } = (0, utils_1.findArrayDifferences)(existingCampaign, campaigns);
        if (addedElements.length > 0) {
            const lprdTrafficLinkCampaigns = addedElements.map((campaignId) => ({
                campaign_id: campaignId,
                lprd_traffic_link_id: lprdTrafficLink.id,
                created_by: req?.body?.created_by,
                updated_by: req?.body?.created_by,
            }));
            await this.lprdTrafficLinkCampaignsService.createLprdTrafficLinkCampaign(lprdTrafficLinkCampaigns, transactionalEntityManager);
        }
        if (removedElements.length > 0) {
            await this.lprdTrafficLinkCampaignsService.deleteLprdTrafficLinkCampaign(removedElements, lprdTrafficLink.id, transactionalEntityManager);
        }
    }
};
exports.UpdateLprdTrafficLinkService = UpdateLprdTrafficLinkService;
exports.UpdateLprdTrafficLinkService = UpdateLprdTrafficLinkService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(lprd_traffic_links_entity_1.LprdTrafficLinks)),
    __param(1, (0, typeorm_1.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.EntityManager,
        categories_service_1.LprdTrafficLinkCategoriesService,
        clients_service_1.LprdTrafficLinksClientService,
        campaigns_service_1.LprdTrafficLinksCampaignService,
        lprdtrafficsource_service_1.LprdTrafficSourceService])
], UpdateLprdTrafficLinkService);
//# sourceMappingURL=updateLprdTrafficLinks.service.js.map