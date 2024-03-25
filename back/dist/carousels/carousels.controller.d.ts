/// <reference types="multer" />
import { CarouselsService } from './carousels.service';
import { CreateCarouselDto } from './dto/create-carousel.dto';
import { UpdateCarouselDto } from './dto/update-carousel.dto';
export declare class CarouselsController {
    private readonly carouselsService;
    constructor(carouselsService: CarouselsService);
    uploadFile(file: Express.Multer.File, createCarouselDto: CreateCarouselDto): Promise<import("./entities/carousels.entity").Carousels>;
    findAll(): Promise<import("./entities/carousels.entity").Carousels[]>;
    findAllActive(): Promise<import("./entities/carousels.entity").Carousels[]>;
    findOne(id: string): Promise<import("./entities/carousels.entity").Carousels>;
    update(id: string, updateCarouselDto: UpdateCarouselDto): Promise<import("./entities/carousels.entity").Carousels>;
    remove(id: string): Promise<import("./entities/carousels.entity").Carousels>;
}
