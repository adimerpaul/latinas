"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselsController = void 0;
const common_1 = require("@nestjs/common");
const carousels_service_1 = require("./carousels.service");
const create_carousel_dto_1 = require("./dto/create-carousel.dto");
const update_carousel_dto_1 = require("./dto/update-carousel.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
let CarouselsController = class CarouselsController {
    constructor(carouselsService) {
        this.carouselsService = carouselsService;
    }
    uploadFile(file, createCarouselDto) {
        return this.carouselsService.create(createCarouselDto, file);
    }
    findAll() {
        return this.carouselsService.findAll();
    }
    findAllActive() {
        return this.carouselsService.allActive();
    }
    findOne(id) {
        return this.carouselsService.findOne(+id);
    }
    update(id, updateCarouselDto) {
        return this.carouselsService.update(+id, updateCarouselDto);
    }
    remove(id) {
        return this.carouselsService.remove(+id);
    }
};
exports.CarouselsController = CarouselsController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_carousel_dto_1.CreateCarouselDto]),
    __metadata("design:returntype", void 0)
], CarouselsController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarouselsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('allActive'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarouselsController.prototype, "findAllActive", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarouselsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_carousel_dto_1.UpdateCarouselDto]),
    __metadata("design:returntype", void 0)
], CarouselsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarouselsController.prototype, "remove", null);
exports.CarouselsController = CarouselsController = __decorate([
    (0, swagger_1.ApiTags)('carousels'),
    (0, common_1.Controller)('carousels'),
    __metadata("design:paramtypes", [carousels_service_1.CarouselsService])
], CarouselsController);
//# sourceMappingURL=carousels.controller.js.map