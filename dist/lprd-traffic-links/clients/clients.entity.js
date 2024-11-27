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
exports.LprdTrafficLinksClient = void 0;
const typeorm_1 = require("typeorm");
const lprd_traffic_links_entity_1 = require("../lprd-traffic-links.entity");
let LprdTrafficLinksClient = class LprdTrafficLinksClient {
};
exports.LprdTrafficLinksClient = LprdTrafficLinksClient;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], LprdTrafficLinksClient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], LprdTrafficLinksClient.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], LprdTrafficLinksClient.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LprdTrafficLinksClient.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lprd_traffic_links_entity_1.LprdTrafficLinks, lprdTrafficLink => lprdTrafficLink.clients),
    (0, typeorm_1.JoinColumn)({ name: 'lprd_traffic_link_id' }),
    __metadata("design:type", lprd_traffic_links_entity_1.LprdTrafficLinks)
], LprdTrafficLinksClient.prototype, "lprdTrafficLink", void 0);
exports.LprdTrafficLinksClient = LprdTrafficLinksClient = __decorate([
    (0, typeorm_1.Entity)('clients')
], LprdTrafficLinksClient);
//# sourceMappingURL=clients.entity.js.map