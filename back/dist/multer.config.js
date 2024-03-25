"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptions = void 0;
const multer_1 = require("multer");
exports.multerOptions = {
    storage: (0, multer_1.diskStorage)({
        destination: './uploads',
        filename: (req, file, callback) => {
            const timestamp = new Date().toISOString().replace(/[-T:\.Z]/g, '');
            callback(null, `${timestamp}_${file.originalname}`);
        },
    }),
};
//# sourceMappingURL=multer.config.js.map