"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseCreated = responseCreated;
function responseCreated(data, message = 'Success') {
    return {
        statusCode: 201,
        message,
        data,
    };
}
//# sourceMappingURL=helpers.util.js.map