"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regExpress = void 0;
exports.regExpress = {
    email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,5}|[0-9]{1,3})(\]?)$/,
    numbersOnly: /^\d+$/,
    xssPrevent: /^[\w&@#*+?%'",.\-\/\s]+$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
};
//# sourceMappingURL=regex.js.map