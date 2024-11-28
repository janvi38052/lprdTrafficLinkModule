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
const lprd_traffic_links_service_1 = require("./lprd-traffic-links.service");
const create_lprd_traffic_links_dto_1 = require("./dtos/create-lprd-traffic-links.dto");
const update_lprd_traffic_links_dto_1 = require("./dtos/update-lprd-traffic-links.dto");
let LprdTrafficLinksController = class LprdTrafficLinksController {
    constructor(lprdTrafficLinksService) {
        this.lprdTrafficLinksService = lprdTrafficLinksService;
    }
    async create(createLprdTrafficLinksDto) {
        return this.lprdTrafficLinksService.create(createLprdTrafficLinksDto);
    }
    async findAll(page = 1, limit = 10, searchQuery = '', sortBy = 'tag', order = 'ASC') {
        return this.lprdTrafficLinksService.findAll(page, limit, searchQuery, sortBy, order);
    }
    async findOne(id) {
        return this.lprdTrafficLinksService.findOne(id);
    }
    async update(id, updateLprdTrafficLinksDto) {
        return this.lprdTrafficLinksService.update(id, updateLprdTrafficLinksDto);
    }
    async remove(id) {
        return this.lprdTrafficLinksService.remove(id);
    }
};
exports.LprdTrafficLinksController = LprdTrafficLinksController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lprd_traffic_links_dto_1.CreateLprdTrafficLinksDto]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('sortBy')),
    __param(4, (0, common_1.Query)('order')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, String]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_lprd_traffic_links_dto_1.UpdateLprdTrafficLinksDto]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinksController.prototype, "remove", null);
exports.LprdTrafficLinksController = LprdTrafficLinksController = __decorate([
    (0, common_1.Controller)('lprd-traffic-links'),
    __metadata("design:paramtypes", [lprd_traffic_links_service_1.LprdTrafficLinksService])
], LprdTrafficLinksController);
//# sourceMappingURL=lprd-traffic-links.controller.js.map