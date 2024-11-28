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
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_campaigns_dto_1.CreateLprdTrafficLinksCampaignDto]),
    __metadata("design:returntype", void 0)
], LprdTrafficLinksCampaignController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LprdTrafficLinksCampaignController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LprdTrafficLinksCampaignController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_campaigns_dto_1.UpdateLprdTrafficLinksCampaignDto]),
    __metadata("design:returntype", void 0)
], LprdTrafficLinksCampaignController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LprdTrafficLinksCampaignController.prototype, "remove", null);
exports.LprdTrafficLinksCampaignController = LprdTrafficLinksCampaignController = __decorate([
    (0, common_1.Controller)('lprd-traffic-links-campaigns'),
    __metadata("design:paramtypes", [campaigns_service_1.LprdTrafficLinksCampaignService])
], LprdTrafficLinksCampaignController);
//# sourceMappingURL=campaigns.controller.js.map