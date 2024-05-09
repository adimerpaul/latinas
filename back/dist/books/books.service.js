"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const books_entity_1 = require("./entities/books.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const categories_entity_1 = require("../categories/entities/categories.entity");
let BooksService = class BooksService {
    constructor(booksRepository, categoriesRepository) {
        this.booksRepository = booksRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async create(createBookDto) {
        const { categoryId, ...bookData } = createBookDto;
        const category = await this.categoriesRepository.findOne({ where: { id: categoryId } });
        if (!category) {
            throw new Error(`Category with id ${categoryId} not found`);
        }
        bookData.image = 'notFound.jpg';
        const book = this.booksRepository.create({ ...bookData, category });
        return await this.booksRepository.save(book);
    }
    async uploadFile(file, id) {
        const book = await this.booksRepository.findOne({ where: { id } });
        book.image = file.filename;
        await this.booksRepository.save(book);
        return book;
    }
    async findAll() {
        return await this.booksRepository.find();
    }
    async findAllGroupedByCategory() {
        const categories = await this.categoriesRepository.find({
            relations: ['books'],
            order: { id: 'ASC' },
            select: ['id', 'name'],
        });
        return categories;
    }
    async findOne(id) {
        return await this.booksRepository.findOne({ where: { id } });
    }
    async update(id, updateBookDto) {
        const { categoryId, ...bookData } = updateBookDto;
        const category = await this.categoriesRepository.findOne({ where: { id: categoryId } });
        if (!category) {
            throw new Error(`Category with id ${categoryId} not found`);
        }
        const book = await this.booksRepository.findOne({ where: { id } });
        this.booksRepository.merge(book, { ...bookData, category });
        return await this.booksRepository.save(book);
    }
    async remove(id) {
        const book = await this.booksRepository.findOne({ where: { id } });
        return await this.booksRepository.remove(book);
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(books_entity_1.Books)),
    __param(1, (0, typeorm_1.InjectRepository)(categories_entity_1.Categories)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BooksService);
//# sourceMappingURL=books.service.js.map