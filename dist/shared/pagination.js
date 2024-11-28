"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
const paginate = async (repo, page, limit, query) => {
    const skip = (page - 1) * limit;
    const [data, total] = await repo.findAndCount({
        where: query,
        skip,
        take: limit,
    });
    return {
        data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
    };
};
exports.paginate = paginate;
//# sourceMappingURL=pagination.js.map