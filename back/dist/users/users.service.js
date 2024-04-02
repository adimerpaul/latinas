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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_entity_1 = require("./entities/users.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const carousels_entity_1 = require("../carousels/entities/carousels.entity");
const categories_entity_1 = require("../categories/entities/categories.entity");
const books_entity_1 = require("../books/entities/books.entity");
const fs = require("fs");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(userRepository, carouselRepository, categoryRepository, bookRepository, entityManager, jwtService) {
        this.userRepository = userRepository;
        this.carouselRepository = carouselRepository;
        this.categoryRepository = categoryRepository;
        this.bookRepository = bookRepository;
        this.entityManager = entityManager;
        this.jwtService = jwtService;
    }
    async create(createUserDto) {
        const user = this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }
    async findAll() {
        return await this.userRepository.find({
            order: { id: 'ASC' }
        });
    }
    async login(createUserDto) {
        const user = await this.userRepository.findOne({ where: { username: createUserDto.username }, });
        if (!user) {
            throw new common_1.BadRequestException(`User with email ${createUserDto.username} not found`);
        }
        if (!await bcrypt.compare(createUserDto.password, user.password)) {
            throw new common_1.BadRequestException(`Invalid password`);
        }
        const jwt = await this.jwtService.signAsync({ id: user.id });
        return {
            message: 'success',
            token: jwt,
            user,
        };
    }
    async findOne(id) {
        return await this.userRepository.findOne({ where: { id } });
    }
    async update(id, updateUserDto) {
        await this.userRepository.update(id, updateUserDto);
        return await this.userRepository.findOne({ where: { id } });
    }
    async remove(id) {
        const userToRemove = await this.userRepository.findOne({ where: { id } });
        if (userToRemove) {
            userToRemove.deletedAt = new Date();
            await this.userRepository.update(id, userToRemove);
            return userToRemove;
        }
        else {
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
    }
    async me(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.BadRequestException(`User with id ${id} not found`);
        }
        return user;
    }
    async generate() {
        await this.entityManager.query('TRUNCATE TABLE users;');
        await this.entityManager.query('ALTER TABLE users AUTO_INCREMENT = 1; ');
        await this.userRepository.save([{
                name: 'Administrador',
                email: 'admin@test.com',
                username: 'admin',
                role: 'admin',
                password: await bcrypt.hash('admin123Admin', 10),
            }]);
        this.entityManager.query('TRUNCATE TABLE carousels;');
        this.entityManager.query('ALTER TABLE carousels AUTO_INCREMENT = 1; ');
        const carousels = [];
        carousels.push({
            image: 'banner_1.jpg',
            imageMobile: 'cel_8.jpg',
        });
        carousels.push({
            image: 'Lourdes_ferro_-_banner.jpg',
            imageMobile: 'Lourdes_ferro_-_cel.jpg',
        });
        carousels.push({
            image: 'Lotrece_preguntas_-_banner_2.jpg',
            imageMobile: 'trece_preguntas_-_cel_2.jpg',
        });
        await this.carouselRepository.save(carousels);
        await this.entityManager.query('SET FOREIGN_KEY_CHECKS=0');
        await this.entityManager.query('TRUNCATE TABLE books;');
        await this.entityManager.query('ALTER TABLE books AUTO_INCREMENT = 1; ');
        let jsonData = fs.readFileSync('src/books/data/books.json', 'utf8');
        let booksData = JSON.parse(jsonData);
        await this.bookRepository.save(booksData);
        await this.entityManager.query('TRUNCATE TABLE categories;');
        await this.entityManager.query('ALTER TABLE categories AUTO_INCREMENT = 1; ');
        await this.categoryRepository.save([
            { name: 'ADMINISTRACIÓN, CONTABILIDAD Y ECONOMÍA' },
            { name: 'ARQUITECTURA' },
            { name: 'CARNAVAL DE ORURO' },
            { name: 'CIENCIAS BÁSICAS' },
            { name: 'CIENCIAS SOCIALES' },
            { name: 'DERECHO' },
            { name: 'ESCOLAR - PRE UNIVERSITARIO' },
            { name: 'ESTADÍSTICA' },
            { name: 'IDIOMAS' },
            { name: 'INGENIERÍA' },
        ]);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __param(1, (0, typeorm_1.InjectRepository)(carousels_entity_1.Carousels)),
    __param(2, (0, typeorm_1.InjectRepository)(categories_entity_1.Categories)),
    __param(3, (0, typeorm_1.InjectRepository)(books_entity_1.Books)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.EntityManager,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map