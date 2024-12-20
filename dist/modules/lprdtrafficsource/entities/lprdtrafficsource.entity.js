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
exports.LprdTrafficSource = void 0;
const lprd_traffic_links_entity_1 = require("../../lprd-traffic-links/entities/lprd-traffic-links.entity");
const typeorm_1 = require("typeorm");
let LprdTrafficSource = class LprdTrafficSource {
};
exports.LprdTrafficSource = LprdTrafficSource;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LprdTrafficSource.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LprdTrafficSource.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LprdTrafficSource.prototype, "max_provider_delivery_percentage", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lprd_traffic_links_entity_1.LprdTrafficLinks, (trafficLink) => trafficLink.trafficSource),
    __metadata("design:type", Array)
], LprdTrafficSource.prototype, "trafficLinks", void 0);
exports.LprdTrafficSource = LprdTrafficSource = __decorate([
    (0, typeorm_1.Entity)('lprd_traffic_source')
], LprdTrafficSource);
//# sourceMappingURL=lprdtrafficsource.entity.js.map