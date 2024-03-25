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
exports.CarouselsService = void 0;
const common_1 = require("@nestjs/common");
const carousels_entity_1 = require("./entities/carousels.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const sharp = require("sharp");
let CarouselsService = class CarouselsService {
    constructor(carouselRepository) {
        this.carouselRepository = carouselRepository;
    }
    async create(createCarouselDto, file) {
        const carousel = this.carouselRepository.create({
            ...createCarouselDto,
            image: file.originalname,
        });
        return await this.carouselRepository.save(carousel);
    }
    async resizeImage(filePath) {
        try {
            const filePathSinExt = filePath.split('.')[0];
            const metadata = await sharp(`uploads/${filePath}`)
                .resize({
                width: 1042,
                height: 695
            })
                .toFormat("jpeg", { mozjpeg: true })
                .toFile(`uploads/${filePathSinExt}.jpeg`);
            return metadata;
        }
        catch (error) {
            console.log(`An error occurred during processing: ${error}`);
        }
    }
    async findAll() {
        return await this.carouselRepository.find({
            order: { id: 'ASC' },
            select: ['id', 'imageMobile', 'image', 'status'],
        });
    }
    async allActive() {
        return await this.carouselRepository.find({
            order: { id: 'ASC' },
            select: ['id', 'imageMobile', 'image', 'status'],
            where: { status: 'ACTIVE' }
        });
    }
    async findOne(id) {
        return await this.carouselRepository.findOne({ where: { id } });
    }
    async update(id, updateCarouselDto) {
        await this.carouselRepository.update(id, updateCarouselDto);
        return await this.carouselRepository.findOne({ where: { id } });
    }
    async remove(id) {
        const carouselToRemove = await this.carouselRepository.findOne({ where: { id } });
        if (carouselToRemove) {
            carouselToRemove.deletedAt = new Date();
            await this.carouselRepository.update(id, carouselToRemove);
            return carouselToRemove;
        }
        else {
            throw new common_1.NotFoundException(`Carousel with id ${id} not found`);
        }
    }
};
exports.CarouselsService = CarouselsService;
exports.CarouselsService = CarouselsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(carousels_entity_1.Carousels)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CarouselsService);
//# sourceMappingURL=carousels.service.js.map