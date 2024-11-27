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
exports.LprdTrafficSourceController = void 0;
const common_1 = require("@nestjs/common");
const lprdtrafficsource_service_1 = require("./lprdtrafficsource.service");
const create_lprdtrafficsource_dto_1 = require("./create-lprdtrafficsource.dto");
const update_lprdtrafficsource_dto_1 = require("./update-lprdtrafficsource.dto");
let LprdTrafficSourceController = class LprdTrafficSourceController {
    constructor(lprdTrafficSourceService) {
        this.lprdTrafficSourceService = lprdTrafficSourceService;
    }
    async create(createLprdTrafficSourceDto) {
        return this.lprdTrafficSourceService.create(createLprdTrafficSourceDto);
    }
    async findAll() {
        return this.lprdTrafficSourceService.findAll();
    }
    async findOne(id) {
        return this.lprdTrafficSourceService.findOne(id);
    }
    async update(id, updateLprdTrafficSourceDto) {
        return this.lprdTrafficSourceService.update(id, updateLprdTrafficSourceDto);
    }
    async remove(id) {
        return this.lprdTrafficSourceService.remove(id);
    }
};
exports.LprdTrafficSourceController = LprdTrafficSourceController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lprdtrafficsource_dto_1.CreateLprdTrafficSourceDto]),
    __metadata("design:returntype", Promise)
], LprdTrafficSourceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LprdTrafficSourceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LprdTrafficSourceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_lprdtrafficsource_dto_1.UpdateLprdTrafficSourceDto]),
    __metadata("design:returntype", Promise)
], LprdTrafficSourceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LprdTrafficSourceController.prototype, "remove", null);
exports.LprdTrafficSourceController = LprdTrafficSourceController = __decorate([
    (0, common_1.Controller)('lprd-traffic-sources'),
    __metadata("design:paramtypes", [lprdtrafficsource_service_1.LprdTrafficSourceService])
], LprdTrafficSourceController);
//# sourceMappingURL=lprdtrafficsource.controller.js.map