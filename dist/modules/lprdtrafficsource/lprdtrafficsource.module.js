"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LprdtrafficsourceModule = void 0;
const common_1 = require("@nestjs/common");
const lprdtrafficsource_service_1 = require("./lprdtrafficsource.service");
const lprdtrafficsource_controller_1 = require("./lprdtrafficsource.controller");
const typeorm_1 = require("@nestjs/typeorm");
const lprd_traffic_links_entity_1 = require("../lprd-traffic-links/entities/lprd-traffic-links.entity");
const lprdtrafficsource_entity_1 = require("./entities/lprdtrafficsource.entity");
let LprdtrafficsourceModule = class LprdtrafficsourceModule {
};
exports.LprdtrafficsourceModule = LprdtrafficsourceModule;
exports.LprdtrafficsourceModule = LprdtrafficsourceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lprdtrafficsource_entity_1.LprdTrafficSource, lprd_traffic_links_entity_1.LprdTrafficLinks])],
        providers: [lprdtrafficsource_service_1.LprdTrafficSourceService],
        controllers: [lprdtrafficsource_controller_1.LprdTrafficSourceController],
        exports: [lprdtrafficsource_service_1.LprdTrafficSourceService]
    })
], LprdtrafficsourceModule);
//# sourceMappingURL=lprdtrafficsource.module.js.map