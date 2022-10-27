"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewUserDto = void 0;
const user_entity_1 = require("../../../entities/user.entity");
class ViewUserDto extends user_entity_1.User {
    formatDataSet(data) {
        return {
            id: data.id,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            mobile_phone: data.phoneNumber,
            work_phone: data.work_phone,
            fax: data.fax,
        };
    }
}
exports.ViewUserDto = ViewUserDto;
//# sourceMappingURL=user-view.dto.js.map