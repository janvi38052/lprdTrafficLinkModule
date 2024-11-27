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
const create_lprd_traffic_links_dto_1 = require("./create-lprd-traffic-links.dto");
const update_lprd_traffic_links_dto_1 = require("./update-lprd-traffic-links.dto");
let LprdTrafficLinksController = class LprdTrafficLinksController {
    constructor(service) {
        this.service = service;
    }
    create(data) {
        return this.service.create(data);
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(+id);
    }
    update(id, data) {
        return this.service.update(+id, data);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
exports.LprdTrafficLinksController = LprdTrafficLinksController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lprd_traffic_links_dto_1.CreateLprdTrafficLinksDto]),
    __metadata("design:returntype", void 0)
], LprdTrafficLinksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LprdTrafficLinksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LprdTrafficLinksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_lprd_traffic_links_dto_1.UpdateLprdTrafficLinksDto]),
    __metadata("design:returntype", void 0)
], LprdTrafficLinksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LprdTrafficLinksController.prototype, "remove", null);
exports.LprdTrafficLinksController = LprdTrafficLinksController = __decorate([
    (0, common_1.Controller)('lprd-traffic-links'),
    __metadata("design:paramtypes", [lprd_traffic_links_service_1.LprdTrafficLinksService])
], LprdTrafficLinksController);
//# sourceMappingURL=lprd-traffic-links.controller.js.map