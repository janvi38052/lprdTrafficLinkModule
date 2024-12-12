"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseOK = void 0;
const responseOK = (data, message = '', meta = null, links = null) => {
    return {
        status: 'success',
        message,
        data,
        meta,
        links,
    };
};
exports.responseOK = responseOK;
//# sourceMappingURL=reponseOk.js.map