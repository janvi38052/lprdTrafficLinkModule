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
const lprdTrafficLinks_service_1 = require("./lprdTrafficLinks.service");
const create_lprd_traffic_links_dto_1 = require("./dtos/create-lprd-traffic-links.dto");
const update_lprd_traffic_links_dto_1 = require("./dtos/update-lprd-traffic-links.dto");
const createLprdTrafficLinks_service_1 = require("./createLprdTrafficLinks.service");
const updateLprdTrafficLinks_service_1 = require("./updateLprdTrafficLinks.service");
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
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lprd_traffic_links_dto_1.default, Object]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinksController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_lprd_traffic_links_dto_1.default, Object]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinksController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LprdTrafficLinksController.prototype, "findOne", null);
exports.LprdTrafficLinksController = LprdTrafficLinksController = __decorate([
    (0, common_1.Controller)('lprd-traffic-links'),
    __metadata("design:paramtypes", [lprdTrafficLinks_service_1.LprdTrafficLinksService,
        createLprdTrafficLinks_service_1.CreateLprdTrafficLinkService,
        updateLprdTrafficLinks_service_1.UpdateLprdTrafficLinkService])
], LprdTrafficLinksController);
//# sourceMappingURL=lprd-traffic-links.controller.js.map