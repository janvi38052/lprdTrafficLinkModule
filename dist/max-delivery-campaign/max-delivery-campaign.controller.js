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
exports.MaxDeliveryCampaignController = void 0;
const common_1 = require("@nestjs/common");
const max_delivery_campaign_service_1 = require("./max-delivery-campaign.service");
const create_max_delivery_campaign_dto_1 = require("./create.max-delivery-campaign.dto");
const update_max_delivery_campaign_dto_1 = require("./update.max-delivery-campaign.dto");
let MaxDeliveryCampaignController = class MaxDeliveryCampaignController {
    constructor(campaignService) {
        this.campaignService = campaignService;
    }
    create(createDto) {
        return this.campaignService.create(createDto);
    }
    findAll() {
        return this.campaignService.findAll();
    }
    findOne(id) {
        return this.campaignService.findOne(id);
    }
    update(id, updateDto) {
        return this.campaignService.update(id, updateDto);
    }
    remove(id) {
        return this.campaignService.remove(id);
    }
};
exports.MaxDeliveryCampaignController = MaxDeliveryCampaignController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_max_delivery_campaign_dto_1.CreateMaxDeliveryCampaignDto]),
    __metadata("design:returntype", void 0)
], MaxDeliveryCampaignController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MaxDeliveryCampaignController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MaxDeliveryCampaignController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_max_delivery_campaign_dto_1.UpdateMaxDeliveryCampaignDto]),
    __metadata("design:returntype", void 0)
], MaxDeliveryCampaignController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MaxDeliveryCampaignController.prototype, "remove", null);
exports.MaxDeliveryCampaignController = MaxDeliveryCampaignController = __decorate([
    (0, common_1.Controller)('max-delivery-campaign'),
    __metadata("design:paramtypes", [max_delivery_campaign_service_1.MaxDeliveryCampaignService])
], MaxDeliveryCampaignController);
//# sourceMappingURL=max-delivery-campaign.controller.js.map