import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import {Books} from "./entities/books.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Categories} from "../categories/entities/categories.entity";

@Injectable()
export class BooksService {
  constructor(
     @InjectRepository(Books)
        private booksRepository: Repository<Books>,
     @InjectRepository(Categories)
        private categoriesRepository: Repository<Categories>,
  ) {}
  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  async findAll() {
    return await this.booksRepository.find();
  }
  async findAllGroupedByCategory() {
    // return await this.booksRepository.find({
    //   relations: ['category'], // Cargar la relación con la categoría
    //   // order: { category: 'ASC', createdAt: 'DESC' }, // Opcional: Ordenar por categoría y fecha de creación descendente
    // });
    return await this.categoriesRepository.find({
        relations: ['books'], // Cargar la relación con la categoría
        order: { id: 'ASC' }, // Opcional: Ordenar por categoría y fecha de creación descendente
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
