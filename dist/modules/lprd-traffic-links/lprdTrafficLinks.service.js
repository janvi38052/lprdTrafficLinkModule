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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const lprd_traffic_links_entity_1 = require("./entities/lprd-traffic-links.entity");
const common_1 = require("@nestjs/common");
const pagination_1 = require("../../shared/pagination");
const searching_1 = require("../../shared/searching");
const sorting_1 = require("../../shared/sorting");
const createLprdTrafficLinks_service_1 = require("./createLprdTrafficLinks.service");
const updateLprdTrafficLinks_service_1 = require("./updateLprdTrafficLinks.service");
let LprdTrafficLinksService = class LprdTrafficLinksService {
    constructor(lprdTrafficLinkRepository, createLprdTrafficLinkService, updateLprdTrafficLinkService) {
        this.lprdTrafficLinkRepository = lprdTrafficLinkRepository;
        this.createLprdTrafficLinkService = createLprdTrafficLinkService;
        this.updateLprdTrafficLinkService = updateLprdTrafficLinkService;
    }
    async findAll(query) {
        try {
            const { page = 1, limit = 20, sortBy = 'id', order = 'ASC', searchQuery = '' } = query;
            const whereQuery = {};
            if (searchQuery) {
                const searchFields = [
                    'id',
                    'max_provider_delivery',
                    'quality_score',
                    'trafficSource.name',
                    'trafficWebsite.name',
                    'categories.lprdTrafficCategory.name',
                    'updatedByUser.first_name',
                ];
                whereQuery['search'] = (0, searching_1.search)(searchQuery, searchFields);
            }
            const sortQuery = (0, sorting_1.sort)(sortBy, order);
            const paginationResult = await (0, pagination_1.paginate)(this.lprdTrafficLinkRepository, page, limit, whereQuery);
            const response = {
                data: paginationResult.data,
                meta: {
                    total: paginationResult.total,
                    totalPages: paginationResult.totalPages,
                    page: paginationResult.page,
                    limit: paginationResult.limit,
                },
                links: {
                    next: paginationResult.page < paginationResult.totalPages ? `/traffic-links?page=${paginationResult.page + 1}` : null,
                    prev: paginationResult.page > 1 ? `/traffic-links?page=${paginationResult.page - 1}` : null,
                },
            };
            return response;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw new common_1.BadRequestException(error.message);
            }
            else if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException(error.message);
            }
        }
    }
    handleCategoryFilter(query, qb) {
        const categoryIds = query.filter?.lprd_category_ids;
        if (categoryIds) {
            qb.innerJoin('lprdTrafficLink.categories', 'categories');
            if (typeof categoryIds === 'string' && categoryIds.includes(',')) {
                const splitCategoryIds = categoryIds.split(',');
                qb.andWhere('categories.lprd_traffic_categories_id IN (:...categoryIds)', { categoryIds: splitCategoryIds });
            }
            else {
                qb.andWhere('categories.lprd_traffic_categories_id = :categoryId', { categoryId: categoryIds });
            }
        }
    }
    async getTrafficLinkById(id) {
        const trafficLink = await this.lprdTrafficLinkRepository.findOne({
            where: { id: id },
            relations: [
                'trafficWebsite',
                'trafficSource',
                'categories',
                'clients',
                'campaigns',
            ],
            loadEagerRelations: true,
        });
        if (!trafficLink) {
            throw new common_1.NotFoundException('Traffic link not found');
        }
        return trafficLink;
    }
};
exports.LprdTrafficLinksService = LprdTrafficLinksService;
exports.LprdTrafficLinksService = LprdTrafficLinksService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(lprd_traffic_links_entity_1.LprdTrafficLinks)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        createLprdTrafficLinks_service_1.CreateLprdTrafficLinkService,
        updateLprdTrafficLinks_service_1.UpdateLprdTrafficLinkService])
], LprdTrafficLinksService);
//# sourceMappingURL=lprdTrafficLinks.service.js.map