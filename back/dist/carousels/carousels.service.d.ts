/// <reference types="multer" />
import { CreateCarouselDto } from './dto/create-carousel.dto';
import { UpdateCarouselDto } from './dto/update-carousel.dto';
import { Carousels } from "./entities/carousels.entity";
import { Repository } from "typeorm";
import * as sharp from 'sharp';
export declare class CarouselsService {
    private readonly carouselRepository;
    constructor(carouselRepository: Repository<Carousels>);
    create(createCarouselDto: CreateCarouselDto, file: Express.Multer.File): Promise<Carousels>;
    resizeImage(filePath: string): Promise<sharp.OutputInfo>;
    findAll(): Promise<Carousels[]>;
    allActive(): Promise<Carousels[]>;
    findOne(id: number): Promise<Carousels>;
    update(id: number, updateCarouselDto: UpdateCarouselDto): Promise<Carousels>;
    remove(id: number): Promise<Carousels>;
}
