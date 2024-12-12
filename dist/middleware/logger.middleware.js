"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
(0, common_1.Injectable)();
class LoggerMiddleware {
    use(req, res, next) {
        console.log(`Request... Method: ${req.method}, URL: ${req.url}`);
        next();
    }
}
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=logger.middleware.js.map