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
exports.CreateMaxDeliveryClientDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateMaxDeliveryClientDto {
}
exports.CreateMaxDeliveryClientDto = CreateMaxDeliveryClientDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Client Id' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateMaxDeliveryClientDto.prototype, "client_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'tid' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateMaxDeliveryClientDto.prototype, "tid", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'max_delivery_percentage' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateMaxDeliveryClientDto.prototype, "max_delivery_percentage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'status' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateMaxDeliveryClientDto.prototype, "active", void 0);
//# sourceMappingURL=create-max-delivery-client.dto.js.map