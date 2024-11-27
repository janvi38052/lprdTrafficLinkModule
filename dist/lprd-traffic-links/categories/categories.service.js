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
exports.LprdTrafficLinksCategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const categories_entity_1 = require("./categories.entity");
let LprdTrafficLinksCategoryService = class LprdTrafficLinksCategoryService {
    constructor(lprdTrafficLinksCategoryRepository) {
        this.lprdTrafficLinksCategoryRepository = lprdTrafficLinksCategoryRepository;
    }
    async create(data) {
        const category = this.lprdTrafficLinksCategoryRepository.create(data);
        return this.lprdTrafficLinksCategoryRepository.save(category);
    }
    async findAll() {
        return this.lprdTrafficLinksCategoryRepository.find();
    }
    async findOne(id) {
        return this.lprdTrafficLinksCategoryRepository.findOne({ where: { id } });
    }
    async update(id, data) {
        await this.lprdTrafficLinksCategoryRepository.update(id, data);
        return this.findOne(id);
    }
    async remove(id) {
        await this.lprdTrafficLinksCategoryRepository.delete(id);
    }
};
exports.LprdTrafficLinksCategoryService = LprdTrafficLinksCategoryService;
exports.LprdTrafficLinksCategoryService = LprdTrafficLinksCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(categories_entity_1.LprdTrafficLinksCategory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LprdTrafficLinksCategoryService);
//# sourceMappingURL=categories.service.js.map