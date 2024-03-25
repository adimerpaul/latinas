/// <reference types="multer" />
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<import("./entities/books.entity").Books>;
    findAll(): Promise<import("./entities/books.entity").Books[]>;
    uploadFile(file: Express.Multer.File, id: string): Promise<import("./entities/books.entity").Books>;
    findAllGroupedByCategory(): Promise<import("../categories/entities/categories.entity").Categories[]>;
    findOne(id: string): Promise<import("./entities/books.entity").Books>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<import("./entities/books.entity").Books>;
    remove(id: string): Promise<import("./entities/books.entity").Books>;
}
