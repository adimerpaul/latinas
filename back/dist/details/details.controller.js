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
exports.DetailsController = void 0;
const common_1 = require("@nestjs/common");
const details_service_1 = require("./details.service");
const create_detail_dto_1 = require("./dto/create-detail.dto");
const update_detail_dto_1 = require("./dto/update-detail.dto");
let DetailsController = class DetailsController {
    constructor(detailsService) {
        this.detailsService = detailsService;
    }
    create(createDetailDto) {
        return this.detailsService.create(createDetailDto);
    }
    findAll() {
        return this.detailsService.findAll();
    }
    findOne(id) {
        return this.detailsService.findOne(+id);
    }
    update(id, updateDetailDto) {
        return this.detailsService.update(+id, updateDetailDto);
    }
    remove(id) {
        return this.detailsService.remove(+id);
    }
};
exports.DetailsController = DetailsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_detail_dto_1.CreateDetailDto]),
    __metadata("design:returntype", void 0)
], DetailsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DetailsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DetailsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_detail_dto_1.UpdateDetailDto]),
    __metadata("design:returntype", void 0)
], DetailsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DetailsController.prototype, "remove", null);
exports.DetailsController = DetailsController = __decorate([
    (0, common_1.Controller)('details'),
    __metadata("design:paramtypes", [details_service_1.DetailsService])
], DetailsController);
//# sourceMappingURL=details.controller.js.map