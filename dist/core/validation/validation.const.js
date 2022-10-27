"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customExceptionFactory = void 0;
const validation_exception_1 = require("./validation.exception");
const customExceptionFactory = (errors) => {
    const messages = formatMessage(errors);
    return new validation_exception_1.ValidationException(messages);
};
exports.customExceptionFactory = customExceptionFactory;
const formatMessage = (errors, message = []) => {
    errors.forEach((error) => {
        if (error && error.children && error.children.length > 0) {
            formatMessage(error.children, message);
        }
        if (error.constraints) {
            message.push(`${error.property} is not valid. ${error.constraints ? Object.values(error.constraints).join(", ") : ""} `);
        }
    });
    return message;
};
//# sourceMappingURL=validation.const.js.map