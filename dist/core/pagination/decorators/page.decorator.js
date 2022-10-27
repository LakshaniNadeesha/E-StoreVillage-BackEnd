"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pager = void 0;
const common_1 = require("@nestjs/common");
exports.Pager = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    if (req.query) {
        const query = req.query;
        const p = +query.page;
        const q = +query.limit;
        const page = p ? p : 1;
        const limit = q ? q : 10;
        return { page, limit, skip: (page - 1) * limit };
    }
    return { page: 1, limit: 10, skip: 0 };
});
//# sourceMappingURL=page.decorator.js.map