import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateCarouselDto } from './dto/create-carousel.dto';
import { UpdateCarouselDto } from './dto/update-carousel.dto';
import {Carousels} from "./entities/carousels.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import * as sharp from 'sharp';



@Injectable()
export class CarouselsService {
  constructor(
    @InjectRepository(Carousels)
    private readonly carouselRepository: Repository<Carousels>,
  ) {}
  async create(createCarouselDto: CreateCarouselDto,file: Express.Multer.File) {
    // console.log(file);
    // const resizedImageBuffer = await this.resizeImage(file.filename);
    // console.log(resizedImageBuffer);
    const carousel = this.carouselRepository.create({
        ...createCarouselDto,
        image: file.originalname,
    });
    return await this.carouselRepository.save(carousel);
  }
  async resizeImage(filePath: string) {
    try {
      const filePathSinExt = filePath.split('.')[0];
      const metadata = await sharp(`uploads/${filePath}`)
          .resize({
            width: 1042,
            height: 695
          })
          .toFormat("jpeg", { mozjpeg: true })
          .toFile(`uploads/${filePathSinExt}.jpeg`);
      // console.log(metadata);
      return metadata;
    } catch (error) {
      console.log(`An error occurred during processing: ${error}`);
    }
  }

  async findAll() {
    return await this.carouselRepository.find({
      order: { id: 'ASC' },
      select: ['id', 'name', 'description', 'image', 'status'],
    });
  }

  async findOne(id: number) {
    return await this.carouselRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCarouselDto: UpdateCarouselDto){
    await this.carouselRepository.update(id, updateCarouselDto);
    return await this.carouselRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const carouselToRemove = await this.carouselRepository.findOne({ where: { id } });

    if (carouselToRemove) {
      carouselToRemove.deletedAt = new Date();
      await this.carouselRepository.update(id, carouselToRemove);
      return carouselToRemove;
    } else {
      throw new NotFoundException(`Carousel with id ${id} not found`);
    }
  }
}
