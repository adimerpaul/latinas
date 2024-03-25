import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Books} from "./entities/books.entity";
import {Categories} from "../categories/entities/categories.entity";
import {MulterModule} from "@nestjs/platform-express";
import { diskStorage } from 'multer';
import { extname } from 'path';

@Module({
  imports: [
      MulterModule.register({
          storage: diskStorage({
              destination: './uploads',
              filename: (req, file, callback) => {
                  const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                  return callback(null, randomName + extname(file.originalname));
              },
          }),
      }),
      TypeOrmModule.forFeature([Books, Categories]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
