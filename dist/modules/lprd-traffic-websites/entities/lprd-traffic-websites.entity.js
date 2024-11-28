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
exports.LprdTrafficWebsite = void 0;
const lprd_traffic_links_entity_1 = require("../../lprd-traffic-links/entities/lprd-traffic-links.entity");
const typeorm_1 = require("typeorm");
let LprdTrafficWebsite = class LprdTrafficWebsite {
};
exports.LprdTrafficWebsite = LprdTrafficWebsite;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LprdTrafficWebsite.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LprdTrafficWebsite.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lprd_traffic_links_entity_1.LprdTrafficLinks, (trafficLink) => trafficLink.trafficWebsite),
    __metadata("design:type", Array)
], LprdTrafficWebsite.prototype, "trafficLinks", void 0);
exports.LprdTrafficWebsite = LprdTrafficWebsite = __decorate([
    (0, typeorm_1.Entity)('lprd_traffic_websites')
], LprdTrafficWebsite);
//# sourceMappingURL=lprd-traffic-websites.entity.js.map