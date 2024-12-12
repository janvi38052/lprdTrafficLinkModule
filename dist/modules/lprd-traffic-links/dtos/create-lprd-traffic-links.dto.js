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
const swagger_1 = require("@nestjs/swagger");
class CreateLprdTrafficLinksDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Traffic source ID',
        example: 1,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "traffic_source_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLprdTrafficLinksDto.prototype, "updated_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Traffic website ID',
        example: 2,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "traffic_website_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Maximum provider delivery',
        example: 50,
        minimum: 1,
        maximum: 100,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "max_provider_delivery", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Locale of the traffic link',
        example: 'en-US',
    }),
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
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Approval status (1 for approved, 0 for not approved)',
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "approved", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Whether to ignore campaign active status (1 for true, 0 for false)',
        example: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "ignore_campaign_active_status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Path style ID (1 for default, 0 for custom)',
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "path_style_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Whether to use radius range (1 for true, 0 for false)',
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "use_radius_range", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Whether to use IP blacklist (1 for true, 0 for false)',
        example: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "use_ip_blacklist", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Whether to lock category (1 for locked, 0 for unlocked)',
        example: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "lock_category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Whether to use capping (1 for true, 0 for false)',
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "use_capping", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Whether to bypass time-based capping (1 for true, 0 for false)',
        example: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "bypass_time_based_capping", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Whether to block bots (1 for true, 0 for false)',
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "block_bots", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Test traffic status (1 for test traffic, 0 for normal traffic)',
        example: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "test_traffic", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Test traffic percentage (only applies if test_traffic is 1)',
        example: 10,
    }),
    (0, class_validator_1.ValidateIf)((o) => o.test_traffic === 1),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Number)
], CreateLprdTrafficLinksDto.prototype, "test_traffic_percentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tag associated with the traffic link',
        example: 'promotion1',
    }),
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
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Categories associated with the traffic link (if lock_category is 0)',
        example: [1, 2, 3],
    }),
    (0, class_validator_1.ValidateIf)((o) => o.lock_category === 0),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Array)
], CreateLprdTrafficLinksDto.prototype, "categories", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Clients associated with the traffic link',
        example: [100, 200],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Array)
], CreateLprdTrafficLinksDto.prototype, "clients", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Campaigns associated with the traffic link',
        example: [1000, 2000],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)({ message: error_messages_1.ErrorMessages.FIELD_REQUIRED }),
    __metadata("design:type", Array)
], CreateLprdTrafficLinksDto.prototype, "campaigns", void 0);
exports.default = CreateLprdTrafficLinksDto;
//# sourceMappingURL=create-lprd-traffic-links.dto.js.map