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
    async create(createBookDto: CreateBookDto) {
        const { categoryId, ...bookData } = createBookDto;
        const category = await this.categoriesRepository.findOne({ where: { id: categoryId } });
        if (!category) {
            throw new Error(`Category with id ${categoryId} not found`);
        }
        bookData.image = 'notFound.jpg';
        const book = this.booksRepository.create({ ...bookData, category });
        return await this.booksRepository.save(book);
    }

    async uploadFile(file: Express.Multer.File, id) {
        const book = await this.booksRepository.findOne({ where: { id } });
        book.image = file.filename;
        await this.booksRepository.save(book);
        return book;
    }

    async findAll() {
      //ordenar desendente
        return await this.booksRepository.find({ relations: ['category'], order: { createdAt: 'DESC' } });
    }
    async findAllGroupedByCategory() {
        const categories = await this.categoriesRepository.find({
            relations: ['books'],
            order: { id: 'ASC' },
        });

        // Limitar a 5 libros por categoría
        categories.forEach(category => {
            if (category.books.length > 5) {
                category.books = category.books.slice(0, 5);
            }
        });

        return categories;
    }

  async findOne(id: number) {
    return await this.booksRepository.findOne({ where: { id } });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const { categoryId, ...bookData } = updateBookDto;
    const category = await this.categoriesRepository.findOne({ where: { id: categoryId } });
    if (!category) {
      throw new Error(`Category with id ${categoryId} not found`);
    }
    const book = await this.booksRepository.findOne({ where: { id } });
    this.booksRepository.merge(book, { ...bookData, category });
    return await this.booksRepository.save(book);
  }

  async remove(id: number) {
    const book = await this.booksRepository.findOne({ where: { id } });
    return await this.booksRepository.remove(book);
  }
}
