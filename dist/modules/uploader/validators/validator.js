"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileTypeImageValidator = exports.fileTypeVideoValidator = exports.fileNameLengthValidator = void 0;
const common_1 = require("@nestjs/common");
const fileNameLengthValidator = (filename) => {
    if (filename && filename.length > 200) {
        return { status: false, msg: "File name is too long" };
    }
    return { status: true };
};
exports.fileNameLengthValidator = fileNameLengthValidator;
const fileTypeVideoValidator = (req, file, callback) => {
    const status = (0, exports.fileNameLengthValidator)(file.originalname);
    if (!status.status) {
        return callback(new common_1.BadRequestException(`${status.msg}`), false);
    }
    if (!file.originalname.match(/\.(mp4|mov|MOV)$/i)) {
        return callback(new common_1.BadRequestException("Invalid Video file type"), false);
    }
    return callback(null, true);
};
exports.fileTypeVideoValidator = fileTypeVideoValidator;
const fileTypeImageValidator = (req, file, callback) => {
    const status = (0, exports.fileNameLengthValidator)(file.originalname);
    if (!status.status) {
        return callback(new common_1.BadRequestException(`${status.msg}`), false);
    }
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|doc|docx|xlsx|xls|ppt|pptx|pdf|vsd|vsdx)$/i)) {
        return callback(new common_1.BadRequestException("Invalid Image file type"), false);
    }
    return callback(null, true);
};
exports.fileTypeImageValidator = fileTypeImageValidator;
//# sourceMappingURL=validator.js.map