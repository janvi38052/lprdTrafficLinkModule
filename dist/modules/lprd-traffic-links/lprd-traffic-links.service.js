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
exports.LprdTrafficLinksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const lprd_traffic_links_entity_1 = require("./entities/lprd-traffic-links.entity");
const categories_service_1 = require("./categories/categories.service");
const clients_service_1 = require("./clients/clients.service");
const max_delivery_client_service_1 = require("../max-delivery-client/max-delivery-client.service");
const max_delivery_campaign_service_1 = require("../max-delivery-campaign/max-delivery-campaign.service");
const lprdtrafficsource_service_1 = require("../lprdtrafficsource/lprdtrafficsource.service");
const lprd_traffic_websites_service_1 = require("../lprd-traffic-websites/lprd-traffic-websites.service");
const user_service_1 = require("../user/user.service");
const pagination_1 = require("../../shared/pagination");
const searching_1 = require("../../shared/searching");
const sorting_1 = require("../../shared/sorting");
let LprdTrafficLinksService = class LprdTrafficLinksService {
    constructor(lprdTrafficLinksRepository, categoryService, clientService, campaignsService, maxDeliveryClientService, maxDeliverCampaignService, lprdTrafficSourceService, lprdTrafficWebsiteService, userService) {
        this.lprdTrafficLinksRepository = lprdTrafficLinksRepository;
        this.categoryService = categoryService;
        this.clientService = clientService;
        this.campaignsService = campaignsService;
        this.maxDeliveryClientService = maxDeliveryClientService;
        this.maxDeliverCampaignService = maxDeliverCampaignService;
        this.lprdTrafficSourceService = lprdTrafficSourceService;
        this.lprdTrafficWebsiteService = lprdTrafficWebsiteService;
        this.userService = userService;
    }
    async create(data) {
        const newTrafficLink = this.lprdTrafficLinksRepository.create(data);
        return this.lprdTrafficLinksRepository.save(newTrafficLink);
    }
    async findAll(page = 1, limit = 10, searchQuery = '', sortBy = 'tag', order = 'ASC') {
        const query = searchQuery ? (0, searching_1.search)(searchQuery, ['tag', 'locale']) : {};
        const orderBy = sortBy ? (0, sorting_1.sort)(sortBy, order) : {};
        const trafficLinks = await (0, pagination_1.paginate)(this.lprdTrafficLinksRepository, page, limit, query);
        const categories = await this.categoryService.findAll();
        const clients = await this.clientService.findAll();
        const campaigns = await this.campaignsService.findAll();
        const maxDeliveryClients = await this.maxDeliveryClientService.findAll();
        const maxDeliveryCampaign = await this.maxDeliverCampaignService.findAll();
        const lprdTrafficSource = await this.lprdTrafficSourceService.findAll();
        const lprdTrafficwebsites = await this.lprdTrafficWebsiteService.findAll();
        const user = await this.userService.findAll();
        return {
            trafficLinks,
            categories,
            clients,
            campaigns,
            maxDeliveryClients,
            maxDeliveryCampaign,
            lprdTrafficSource,
            lprdTrafficwebsites,
            user
        };
    }
    async findOne(id) {
        const trafficLink = await this.lprdTrafficLinksRepository.findOne({ where: { id } });
        if (!trafficLink) {
            throw new Error(`Traffic link with ID ${id} not found`);
        }
        const categories = await this.categoryService.findAll();
        const clients = await this.clientService.findAll();
        const campaigns = await this.campaignsService.findAll();
        const maxDeliveryClients = await this.maxDeliveryClientService.findAll();
        const maxDeliveryCampaign = await this.maxDeliverCampaignService.findAll();
        const lprdTrafficSource = await this.lprdTrafficSourceService.findAll();
        const lprdTrafficwebsites = await this.lprdTrafficWebsiteService.findAll();
        const user = await this.userService.findAll();
        return {
            trafficLink,
            categories,
            clients,
            campaigns,
            maxDeliveryClients,
            maxDeliveryCampaign,
            lprdTrafficSource,
            lprdTrafficwebsites,
            user
        };
    }
    async update(id, data) {
        await this.lprdTrafficLinksRepository.update(id, data);
        return this.findOne(id);
    }
    async remove(id) {
        await this.lprdTrafficLinksRepository.delete(id);
        return { message: `Traffic link with ID ${id} has been removed.` };
    }
};
exports.LprdTrafficLinksService = LprdTrafficLinksService;
exports.LprdTrafficLinksService = LprdTrafficLinksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lprd_traffic_links_entity_1.LprdTrafficLinks)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        categories_service_1.LprdTrafficLinksCategoryService,
        clients_service_1.LprdTrafficLinksClientService,
        clients_service_1.LprdTrafficLinksClientService,
        max_delivery_client_service_1.MaxDeliveryClientService,
        max_delivery_campaign_service_1.MaxDeliveryCampaignService,
        lprdtrafficsource_service_1.LprdTrafficSourceService,
        lprd_traffic_websites_service_1.LprdTrafficWebsiteService,
        user_service_1.UserService])
], LprdTrafficLinksService);
//# sourceMappingURL=lprd-traffic-links.service.js.map