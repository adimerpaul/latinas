"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselsModule = void 0;
const common_1 = require("@nestjs/common");
const carousels_service_1 = require("./carousels.service");
const carousels_controller_1 = require("./carousels.controller");
const typeorm_1 = require("@nestjs/typeorm");
const carousels_entity_1 = require("./entities/carousels.entity");
const platform_express_1 = require("@nestjs/platform-express");
const multer_config_1 = require("../multer.config");
let CarouselsModule = class CarouselsModule {
};
exports.CarouselsModule = CarouselsModule;
exports.CarouselsModule = CarouselsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([carousels_entity_1.Carousels]),
            platform_express_1.MulterModule.register(multer_config_1.multerOptions),
        ],
        controllers: [carousels_controller_1.CarouselsController],
        providers: [carousels_service_1.CarouselsService],
    })
], CarouselsModule);
//# sourceMappingURL=carousels.module.js.map