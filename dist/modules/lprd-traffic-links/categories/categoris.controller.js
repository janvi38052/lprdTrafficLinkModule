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
exports.LprdTrafficLinkCategoriesController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const categories_service_1 = require("./categories.service");
const categories_entity_1 = require("./entities/categories.entity");
const swagger_1 = require("@nestjs/swagger");
let LprdTrafficLinkCategoriesController = class LprdTrafficLinkCategoriesController {
    constructor(lprdTrafficLinkCategoriesService, entityManager) {
        this.lprdTrafficLinkCategoriesService = lprdTrafficLinkCategoriesService;
        this.entityManager = entityManager;
    }
    async getAllCategories() {
        return this.lprdTrafficLinkCategoriesService.getAllCategories();
    }
    async create(categories) {
        await this.lprdTrafficLinkCategoriesService.createLprdTrafficLinkCategory(categories, this.entityManager);
        return { message: 'Traffic Link Categories created successfully' };
    }
    async deleteCategories(trafficLinkId, categoryIds) {
        await this.lprdTrafficLinkCategoriesService.deleteLprdTrafficLinkCategory(categoryIds, trafficLinkId, this.entityManager);
        return { message: 'Traffic Link Categories deleted successfully' };
    }
    async deleteByTrafficLinkId(trafficLinkId) {
        await this.lprdTrafficLinkCategoriesService.deleteLprdTrafficLinkCategoryByTrafficLinkId(trafficLinkId, this.entityManager);
        return {
            message: 'Traffic Link Categories deleted by Traffic Link ID successfully',
        };
    }
};
exports.LprdTrafficLinkCategoriesController = LprdTrafficLinkCategoriesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all traffic link categories' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of all traffic link categories',
        type: [categories_entity_1.LprdTrafficLinksCategory],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LprdTrafficLinkCategoriesController.prototype, "getAllCategories", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create new traffic link categories' }),
    (0, swagger_1.ApiBody)({
        description: 'Array of traffic link categories to create',
        type: [categories_entity_1.LprdTrafficLinksCategory],
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Traffic Link Categories created successfully',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinkCategoriesController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':trafficLinkId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete traffic link categories by their IDs',
    }),
    (0, swagger_1.ApiParam)({
        name: 'trafficLinkId',
        description: 'ID of the traffic link',
        example: 1,
    }),
    (0, swagger_1.ApiBody)({
        description: 'Array of category IDs to delete',
        type: [Number],
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Traffic Link Categories deleted successfully',
    }),
    __param(0, (0, common_1.Param)('trafficLinkId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinkCategoriesController.prototype, "deleteCategories", null);
__decorate([
    (0, common_1.Delete)('by-traffic-link/:trafficLinkId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete all traffic link categories by Traffic Link ID',
    }),
    (0, swagger_1.ApiParam)({
        name: 'trafficLinkId',
        description: 'ID of the traffic link',
        example: 1,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Traffic Link Categories deleted by Traffic Link ID successfully',
    }),
    __param(0, (0, common_1.Param)('trafficLinkId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinkCategoriesController.prototype, "deleteByTrafficLinkId", null);
exports.LprdTrafficLinkCategoriesController = LprdTrafficLinkCategoriesController = __decorate([
    (0, swagger_1.ApiTags)('LPRD Traffic Link Categories'),
    (0, common_1.Controller)('lprd-traffic-link-categories'),
    __param(1, (0, typeorm_1.InjectEntityManager)()),
    __metadata("design:paramtypes", [categories_service_1.LprdTrafficLinkCategoriesService,
        typeorm_2.EntityManager])
], LprdTrafficLinkCategoriesController);
//# sourceMappingURL=categoris.controller.js.map