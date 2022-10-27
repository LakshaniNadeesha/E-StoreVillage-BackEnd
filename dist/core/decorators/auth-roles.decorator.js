"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoles = void 0;
const common_1 = require("@nestjs/common");
const AuthRoles = (...args) => (0, common_1.SetMetadata)("roles", args);
exports.AuthRoles = AuthRoles;
//# sourceMappingURL=auth-roles.decorator.js.map