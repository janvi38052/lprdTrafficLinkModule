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
exports.MaxDeliveryClient = void 0;
const typeorm_1 = require("typeorm");
const lprd_traffic_links_entity_1 = require("../lprd-traffic-links/lprd-traffic-links.entity");
let MaxDeliveryClient = class MaxDeliveryClient {
};
exports.MaxDeliveryClient = MaxDeliveryClient;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], MaxDeliveryClient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], MaxDeliveryClient.prototype, "client_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, default: 0 }),
    __metadata("design:type", Number)
], MaxDeliveryClient.prototype, "max_delivery_percentage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', unsigned: true, default: 0 }),
    __metadata("design:type", Number)
], MaxDeliveryClient.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lprd_traffic_links_entity_1.LprdTrafficLinks),
    (0, typeorm_1.JoinColumn)({ name: 'tid' }),
    __metadata("design:type", lprd_traffic_links_entity_1.LprdTrafficLinks)
], MaxDeliveryClient.prototype, "lprdTrafficLinkClient", void 0);
exports.MaxDeliveryClient = MaxDeliveryClient = __decorate([
    (0, typeorm_1.Entity)('max_delivery_client')
], MaxDeliveryClient);
//# sourceMappingURL=max-delivery-client.entity.js.map