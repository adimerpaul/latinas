import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateCarouselDto } from './dto/create-carousel.dto';
import { UpdateCarouselDto } from './dto/update-carousel.dto';
import {Carousels} from "./entities/carousels.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class CarouselsService {
  constructor(
    @InjectRepository(Carousels)
    private readonly carouselRepository: Repository<Carousels>,
  ) {}
  async create(createCarouselDto: CreateCarouselDto) {
    const carousel = this.carouselRepository.create(createCarouselDto);
    return await this.carouselRepository.save(carousel);
  }

  async findAll() {
    return await this.carouselRepository.find({
      order: { id: 'ASC' }
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
