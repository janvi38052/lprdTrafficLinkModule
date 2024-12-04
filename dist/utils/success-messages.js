"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessMessages = void 0;
exports.getSuccessMessage = getSuccessMessage;
exports.SuccessMessages = {
    TRAFFIC_LINK_CREATED: 'Traffic Link created successfully.',
    TRAFFIC_LINK_UPDATED: 'Traffic Link updated successfully.',
    TRAFFIC_LINK_DELETED: 'Traffic Link deleted successfully.',
    TRAFFIC_LINK_CATEGORIES_CREATED: 'Traffic Link categories created successfully.',
    TRAFFIC_LINK_CLIENTS_CREATED: 'Traffic Link clients created successfully.',
    TRAFFIC_LINK_CAMPAIGNS_CREATED: 'Traffic Link campaigns created successfully.',
};
function getSuccessMessage(key) {
    return exports.SuccessMessages[key];
}
//# sourceMappingURL=success-messages.js.map