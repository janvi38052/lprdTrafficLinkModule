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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMaxDeliveryCampaignDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateMaxDeliveryCampaignDto {
}
exports.CreateMaxDeliveryCampaignDto = CreateMaxDeliveryCampaignDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'campagin_id' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateMaxDeliveryCampaignDto.prototype, "campaign_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'max_delivery_percentage' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateMaxDeliveryCampaignDto.prototype, "max_delivery_percentage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateMaxDeliveryCampaignDto.prototype, "active", void 0);
//# sourceMappingURL=create.max-delivery-campaign.dto.js.map