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
const utils_1 = require("../../../utils/utils");
const error_messages_1 = require("../../../utils/error-messages");
const class_validator_1 = require("class-validator");
class CreateLprdTrafficLinksDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "traffic_source_id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "traffic_website_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "max_provider_delivery", void 0);
__decorate([
    (0, class_validator_1.MinLength)(2, {
        message: (0, utils_1.replaceMultipleSubstring)(error_messages_1.ErrorMessages.MIN_CHARACTERS_REQUIRED, {
            '{LENGTH}': 2,
        }),
    }),
    (0, class_validator_1.MaxLength)(64, {
        message: (0, utils_1.replaceMultipleSubstring)(error_messages_1.ErrorMessages.MAX_CHARACTERS_REQUIRED, {
            '{LENGTH}': 64,
        }),
    }),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", String)
], CreateLprdTrafficLinksDto.prototype, "locale", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "approved", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "ignore_campaign_active_status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "path_style_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "use_radius_range", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "use_ip_blacklist", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "lock_category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "use_capping", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "bypass_time_based_capping", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "block_bots", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "test_traffic", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.test_traffic === 1),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "test_traffic_percentage", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(2, {
        message: (0, utils_1.replaceMultipleSubstring)(error_messages_1.ErrorMessages.MIN_CHARACTERS_REQUIRED, {
            '{LENGTH}': 2,
        }),
    }),
    (0, class_validator_1.MaxLength)(64, {
        message: (0, utils_1.replaceMultipleSubstring)(error_messages_1.ErrorMessages.MAX_CHARACTERS_REQUIRED, {
            '{LENGTH}': 64,
        }),
    }),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", String)
], CreateLprdTrafficLinksDto.prototype, "tag", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.lock_category === 0),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Array)
], CreateLprdTrafficLinksDto.prototype, "categories", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Array)
], CreateLprdTrafficLinksDto.prototype, "clients", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Array)
], CreateLprdTrafficLinksDto.prototype, "campaigns", void 0);
exports.default = CreateLprdTrafficLinksDto;
//# sourceMappingURL=create-lprd-traffic-links.dto.js.map