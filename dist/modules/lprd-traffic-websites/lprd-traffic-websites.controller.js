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
exports.LprdTrafficWebsiteController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const lprd_traffic_websites_service_1 = require("./lprd-traffic-websites.service");
const create_lprd_traffic_websites_dto_1 = require("./dtos/create-lprd-traffic-websites.dto");
const update_lprd_traffic_websites_dto_1 = require("./dtos/update-lprd-traffic-websites.dto");
let LprdTrafficWebsiteController = class LprdTrafficWebsiteController {
    constructor(websiteService) {
        this.websiteService = websiteService;
    }
    create(data) {
        return this.websiteService.create(data);
    }
    findAll() {
        return this.websiteService.findAll();
    }
    findOne(id) {
        return this.websiteService.findOne(id);
    }
    update(id, data) {
        return this.websiteService.update(id, data);
    }
    remove(id) {
        return this.websiteService.remove(id);
    }
};
exports.LprdTrafficWebsiteController = LprdTrafficWebsiteController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: create_lprd_traffic_websites_dto_1.CreateLprdTrafficWebsiteDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lprd_traffic_websites_dto_1.CreateLprdTrafficWebsiteDto]),
    __metadata("design:returntype", void 0)
], LprdTrafficWebsiteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LprdTrafficWebsiteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'The ID of the LPRD traffic website to retrieve',
        type: Number,
        example: 1,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LprdTrafficWebsiteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'The ID of the LPRD traffic website to update',
        type: Number,
        example: 1,
    }),
    (0, swagger_1.ApiBody)({ type: update_lprd_traffic_websites_dto_1.UpdateLprdTrafficWebsiteDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_lprd_traffic_websites_dto_1.UpdateLprdTrafficWebsiteDto]),
    __metadata("design:returntype", void 0)
], LprdTrafficWebsiteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'The ID of the LPRD traffic website to delete',
        type: Number,
        example: 1,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LprdTrafficWebsiteController.prototype, "remove", null);
exports.LprdTrafficWebsiteController = LprdTrafficWebsiteController = __decorate([
    (0, swagger_1.ApiTags)('LprdTrafficWebsites'),
    (0, common_1.Controller)('lprd-traffic-websites'),
    __metadata("design:paramtypes", [lprd_traffic_websites_service_1.LprdTrafficWebsiteService])
], LprdTrafficWebsiteController);
//# sourceMappingURL=lprd-traffic-websites.controller.js.map