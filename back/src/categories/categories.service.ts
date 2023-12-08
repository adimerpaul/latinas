import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Categories} from "./entities/categories.entity";
import {Repository} from "typeorm";

@Injectable()
export class CategoriesService {
  constructor(
      @InjectRepository(Categories)
      private readonly categoryRepository: Repository<Categories>,
  ) {
  }
  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  async findAll() {
    return await this.categoryRepository.find({
      order: { id: 'ASC' },
      select: ['id', 'name']
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
