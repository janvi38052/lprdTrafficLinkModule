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
exports.LprdTrafficLinks = exports.ConfidenceScore = void 0;
const typeorm_1 = require("typeorm");
const categories_entity_1 = require("./categories/categories.entity");
const clients_entity_1 = require("./clients/clients.entity");
const campaigns_entity_1 = require("./campaigns/campaigns.entity");
const max_delivery_client_entity_1 = require("../max-delivery-client/max-delivery-client.entity");
const max_delivery_campaign_entity_1 = require("../max-delivery-campaign/max-delivery-campaign.entity");
const lprdtrafficsource_entity_1 = require("../lprdtrafficsource/lprdtrafficsource.entity");
const lprd_traffic_websites_entity_1 = require("../lprd-traffic-websites/lprd-traffic-websites.entity");
const user_entity_1 = require("../user/user.entity");
var ConfidenceScore;
(function (ConfidenceScore) {
    ConfidenceScore["VeryConfident"] = "Very Confident";
    ConfidenceScore["Confident"] = "Confident";
    ConfidenceScore["Medium"] = "Medium";
    ConfidenceScore["Low"] = "Low";
    ConfidenceScore["VeryLow"] = "Very Low";
})(ConfidenceScore || (exports.ConfidenceScore = ConfidenceScore = {}));
let LprdTrafficLinks = class LprdTrafficLinks extends typeorm_1.BaseEntity {
};
exports.LprdTrafficLinks = LprdTrafficLinks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LprdTrafficLinks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LprdTrafficLinks.prototype, "approved", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LprdTrafficLinks.prototype, "max_provider_delivery", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LprdTrafficLinks.prototype, "ignore_campaign_active_status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LprdTrafficLinks.prototype, "locale", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LprdTrafficLinks.prototype, "path_style_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', nullable: true, default: null }),
    __metadata("design:type", Number)
], LprdTrafficLinks.prototype, "use_radius_range", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LprdTrafficLinks.prototype, "use_ip_blacklist", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LprdTrafficLinks.prototype, "lock_category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LprdTrafficLinks.prototype, "use_capping", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LprdTrafficLinks.prototype, "bypass_time_based_capping", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LprdTrafficLinks.prototype, "block_bots", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LprdTrafficLinks.prototype, "test_traffic_percentage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LprdTrafficLinks.prototype, "tag", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LprdTrafficLinks.prototype, "quality_score", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => categories_entity_1.LprdTrafficLinksCategory, (category) => category.lprdTrafficLink, { eager: true }),
    __metadata("design:type", Array)
], LprdTrafficLinks.prototype, "categories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => clients_entity_1.LprdTrafficLinksClient, (trafficLinkClient) => trafficLinkClient.lprdTrafficLink),
    __metadata("design:type", Array)
], LprdTrafficLinks.prototype, "clients", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => campaigns_entity_1.LprdTrafficLinksCampaign, (trafficLinkCampaign) => trafficLinkCampaign.lprdTrafficLink),
    __metadata("design:type", Array)
], LprdTrafficLinks.prototype, "campaigns", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => max_delivery_client_entity_1.MaxDeliveryClient, (deliveryClient) => deliveryClient.lprdTrafficLinkClient),
    __metadata("design:type", max_delivery_client_entity_1.MaxDeliveryClient)
], LprdTrafficLinks.prototype, "maxDeliveryClient", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => max_delivery_campaign_entity_1.MaxDeliveryCampaign, (deliveryCampaign) => deliveryCampaign.lprdTrafficLinkCampaign),
    __metadata("design:type", max_delivery_campaign_entity_1.MaxDeliveryCampaign)
], LprdTrafficLinks.prototype, "maxDeliveryCampaign", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lprdtrafficsource_entity_1.LprdTrafficSource, (trafficSource) => trafficSource.trafficLinks),
    (0, typeorm_1.JoinColumn)({ name: 'traffic_source_id' }),
    __metadata("design:type", lprdtrafficsource_entity_1.LprdTrafficSource)
], LprdTrafficLinks.prototype, "trafficSource", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lprd_traffic_websites_entity_1.LprdTrafficWebsite, (trafficWebsite) => trafficWebsite.trafficLinks),
    (0, typeorm_1.JoinColumn)({ name: 'traffic_website_id' }),
    __metadata("design:type", lprd_traffic_websites_entity_1.LprdTrafficWebsite)
], LprdTrafficLinks.prototype, "trafficWebsite", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.lprdTrafficLinkUpdatedBy),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", user_entity_1.User)
], LprdTrafficLinks.prototype, "updatedByUser", void 0);
exports.LprdTrafficLinks = LprdTrafficLinks = __decorate([
    (0, typeorm_1.Entity)('lprd_traffic_links')
], LprdTrafficLinks);
//# sourceMappingURL=lprd-traffic-links.entity.js.map