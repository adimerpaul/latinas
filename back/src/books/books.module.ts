import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Books} from "./entities/books.entity";
import {Categories} from "../categories/entities/categories.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Books, Categories])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
