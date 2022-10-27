"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFiles = exports.CheckFileType = exports.fileTypeFilter = void 0;
const fs = __importStar(require("fs"));
const fileTypeFilter = (req, file, callback) => {
    if (!(0, exports.CheckFileType)(file.originalname)) {
        req.fileValidationError = "Invalid file type";
        return callback(null, false);
    }
    if (file.originalname.length > 200) {
        req.fileNameError = "Too long";
        return callback(null, false);
    }
    callback(null, true);
};
exports.fileTypeFilter = fileTypeFilter;
const CheckFileType = (filename) => {
    if (!filename.match(/\.(jpg|jpeg|png|gif|doc|docx|xlsx|xls|ppt|pptx|pdf|vsd|vsdx)$/)) {
        return false;
    }
    else {
        return true;
    }
};
exports.CheckFileType = CheckFileType;
const deleteFiles = (files) => {
    for (const file of files) {
        fs.unlink(file.path, (err) => {
            if (err)
                throw err;
        });
    }
    console.log("Files deleted due to malicious content");
};
exports.deleteFiles = deleteFiles;
//# sourceMappingURL=validation.helper.js.map