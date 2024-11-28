"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LprdTrafficLinkCategoriesModule = void 0;
const common_1 = require("@nestjs/common");
const categories_service_1 = require("./categories.service");
const categories_controller_1 = require("./categories.controller");
const typeorm_1 = require("@nestjs/typeorm");
const categories_entity_1 = require("./entities/categories.entity");
const lprd_traffic_links_entity_1 = require("../entities/lprd-traffic-links.entity");
let LprdTrafficLinkCategoriesModule = class LprdTrafficLinkCategoriesModule {
};
exports.LprdTrafficLinkCategoriesModule = LprdTrafficLinkCategoriesModule;
exports.LprdTrafficLinkCategoriesModule = LprdTrafficLinkCategoriesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([categories_entity_1.LprdTrafficLinksCategory, lprd_traffic_links_entity_1.LprdTrafficLinks])],
        providers: [categories_service_1.LprdTrafficLinksCategoryService],
        controllers: [categories_controller_1.CategoriesController],
        exports: [categories_service_1.LprdTrafficLinksCategoryService]
    })
], LprdTrafficLinkCategoriesModule);
//# sourceMappingURL=categories.module.js.map