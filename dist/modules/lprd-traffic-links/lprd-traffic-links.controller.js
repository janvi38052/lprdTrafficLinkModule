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
exports.LprdTrafficLinksController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const lprdTrafficLinks_service_1 = require("./lprdTrafficLinks.service");
const create_lprd_traffic_links_dto_1 = require("./dtos/create-lprd-traffic-links.dto");
const update_lprd_traffic_links_dto_1 = require("./dtos/update-lprd-traffic-links.dto");
const createLprdTrafficLinks_service_1 = require("./createLprdTrafficLinks.service");
const updateLprdTrafficLinks_service_1 = require("./updateLprdTrafficLinks.service");
const auth_guard_1 = require("../../auth/auth.guard");
let LprdTrafficLinksController = class LprdTrafficLinksController {
    constructor(lprdTrafficLinksService, createLprdTrafficLinkService, updateLprdTrafficLinkService) {
        this.lprdTrafficLinksService = lprdTrafficLinksService;
        this.createLprdTrafficLinkService = createLprdTrafficLinkService;
        this.updateLprdTrafficLinkService = updateLprdTrafficLinkService;
    }
    async create(createLprdTrafficLinkDto, req) {
        return await this.createLprdTrafficLinkService.createTrafficLink(createLprdTrafficLinkDto, req);
    }
    async update(id, updateLprdTrafficLinkDto, req) {
        return await this.updateLprdTrafficLinkService.updateTrafficLink(id, updateLprdTrafficLinkDto, req);
    }
    async findAll(query) {
        return await this.lprdTrafficLinksService.findAll(query);
    }
    async findOne(id) {
        return await this.lprdTrafficLinksService.getTrafficLinkById(id);
    }
};
exports.LprdTrafficLinksController = LprdTrafficLinksController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new traffic link' }),
    (0, swagger_1.ApiBody)({ type: create_lprd_traffic_links_dto_1.default, description: 'Details of the traffic link to create' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Traffic link created successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation errors.' }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lprd_traffic_links_dto_1.default, Object]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinksController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing traffic link' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID of the traffic link to update' }),
    (0, swagger_1.ApiBody)({ type: update_lprd_traffic_links_dto_1.default, description: 'Details of the traffic link to update' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Traffic link updated successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Traffic link not found.' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_lprd_traffic_links_dto_1.default, Object]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinksController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all traffic links' }),
    (0, swagger_1.ApiQuery)({ name: 'query', required: false, description: 'Optional query parameters for filtering or pagination' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all traffic links retrieved successfully.' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinksController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a specific traffic link' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID of the traffic link to retrieve' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Traffic link retrieved successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Traffic link not found.' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinksController.prototype, "findOne", null);
exports.LprdTrafficLinksController = LprdTrafficLinksController = __decorate([
    (0, swagger_1.ApiTags)('LPRD Traffic Links'),
    (0, common_1.Controller)('lprd-traffic-links'),
    __metadata("design:paramtypes", [lprdTrafficLinks_service_1.LprdTrafficLinksService,
        createLprdTrafficLinks_service_1.CreateLprdTrafficLinkService,
        updateLprdTrafficLinks_service_1.UpdateLprdTrafficLinkService])
], LprdTrafficLinksController);
//# sourceMappingURL=lprd-traffic-links.controller.js.map