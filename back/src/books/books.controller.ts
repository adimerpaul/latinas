import {Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Put} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get('all') // Ruta: 'http://localhost:3000/books/all
  findAll() {
    return this.booksService.findAll();
  }
  @Post('upload/:id')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Param('id') id: string) {
    return this.booksService.uploadFile(file, id);
  }

  @Get()
  findAllGroupedByCategory() {
    return this.booksService.findAllGroupedByCategory();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
