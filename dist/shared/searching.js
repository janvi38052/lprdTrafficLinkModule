"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const search = (query, fields) => {
    const searchQuery = fields.map(field => `${field} LIKE '%${query}%'`).join(' OR ');
    return searchQuery;
};
exports.search = search;
//# sourceMappingURL=searching.js.map