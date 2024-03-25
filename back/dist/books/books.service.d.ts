/// <reference types="multer" />
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Books } from "./entities/books.entity";
import { Repository } from "typeorm";
import { Categories } from "../categories/entities/categories.entity";
export declare class BooksService {
    private booksRepository;
    private categoriesRepository;
    constructor(booksRepository: Repository<Books>, categoriesRepository: Repository<Categories>);
    create(createBookDto: CreateBookDto): Promise<Books>;
    uploadFile(file: Express.Multer.File, id: any): Promise<Books>;
    findAll(): Promise<Books[]>;
    findAllGroupedByCategory(): Promise<Categories[]>;
    findOne(id: number): Promise<Books>;
    update(id: number, updateBookDto: UpdateBookDto): Promise<Books>;
    remove(id: number): Promise<Books>;
}
