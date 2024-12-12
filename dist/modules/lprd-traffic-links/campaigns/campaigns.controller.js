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
exports.LprdTrafficLinksCampaignController = void 0;
const common_1 = require("@nestjs/common");
const campaigns_service_1 = require("./campaigns.service");
const create_campaigns_dto_1 = require("./dtos/create-campaigns.dto");
const update_campaigns_dto_1 = require("./dtos/update.campaigns.dto");
const swagger_1 = require("@nestjs/swagger");
let LprdTrafficLinksCampaignController = class LprdTrafficLinksCampaignController {
    constructor(lprdTrafficLinksCampaignService) {
        this.lprdTrafficLinksCampaignService = lprdTrafficLinksCampaignService;
    }
    create(createDto) {
        return this.lprdTrafficLinksCampaignService.create(createDto);
    }
    findAll() {
        return this.lprdTrafficLinksCampaignService.findAll();
    }
    findOne(id) {
        return this.lprdTrafficLinksCampaignService.findOne(id);
    }
    update(id, updateDto) {
        return this.lprdTrafficLinksCampaignService.update(id, updateDto);
    }
    remove(id) {
        return this.lprdTrafficLinksCampaignService.remove(id);
    }
};
exports.LprdTrafficLinksCampaignController = LprdTrafficLinksCampaignController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new campaign' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Campaign created successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_campaigns_dto_1.CreateLprdTrafficLinksCampaignDto]),
    __metadata("design:returntype", void 0)
], LprdTrafficLinksCampaignController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all campaigns' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of campaigns.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LprdTrafficLinksCampaignController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a campaign by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the campaign', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Campaign retrieved successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Campaign not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LprdTrafficLinksCampaignController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a campaign by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the campaign', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Campaign updated successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Campaign not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_campaigns_dto_1.UpdateLprdTrafficLinksCampaignDto]),
    __metadata("design:returntype", void 0)
], LprdTrafficLinksCampaignController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a campaign by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the campaign', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Campaign deleted successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Campaign not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LprdTrafficLinksCampaignController.prototype, "remove", null);
exports.LprdTrafficLinksCampaignController = LprdTrafficLinksCampaignController = __decorate([
    (0, swagger_1.ApiTags)('Lprd Traffic Links Campaigns'),
    (0, common_1.Controller)('lprd-traffic-links-campaigns'),
    __metadata("design:paramtypes", [campaigns_service_1.LprdTrafficLinksCampaignService])
], LprdTrafficLinksCampaignController);
//# sourceMappingURL=campaigns.controller.js.map