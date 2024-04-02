import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from "./entities/users.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {EntityManager, getManager, Repository} from "typeorm";
//import {faker} from "@faker-js/faker/locale/es";
import {Carousels} from "../carousels/entities/carousels.entity";
import {Categories} from "../categories/entities/categories.entity";
import {Books} from "../books/entities/books.entity";
import * as fs from 'fs';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {response} from "express";
@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(Users)
      private readonly userRepository: Repository<Users>,
      @InjectRepository(Carousels)
        private readonly carouselRepository: Repository<Carousels>,
      @InjectRepository(Categories)
        private readonly categoryRepository: Repository<Categories>,
      @InjectRepository(Books)
        private readonly bookRepository: Repository<Books>,
      private readonly entityManager: EntityManager,
      private jwtService: JwtService
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }
  async findAll() {
    return await this.userRepository.find({
      order: { id: 'ASC' }
    });
  }
  async login(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOne({where: { username: createUserDto.username },});
    if (!user) {
      throw new BadRequestException(`User with email ${createUserDto.username} not found`);
    }
    if (!await bcrypt.compare(createUserDto.password, user.password)) {
        throw new BadRequestException(`Invalid password`);
    }
    const jwt = await this.jwtService.signAsync({ id: user.id });
    return {
        message: 'success',
        token: jwt,
        user,
    }
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
    return await this.userRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const userToRemove = await this.userRepository.findOne({ where: { id } });

    if (userToRemove) {
      userToRemove.deletedAt = new Date();
      await this.userRepository.update(id, userToRemove);
      return userToRemove;
    } else {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }
    async me(id: number) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
        throw new BadRequestException(`User with id ${id} not found`);
        }
        return user;
    }
  async generate() {
    // await this.entityManager.query('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
    await this.entityManager.query('TRUNCATE TABLE users;');
    await this.entityManager.query('ALTER TABLE users AUTO_INCREMENT = 1; ');
    // this.userRepository.clear();
    // const facerUsers = [];
    // // for (let i = 0; i < 10; i++) {
    //   facerUsers.push({
    //     name: faker.person.firstName(),
    //     email: faker.internet.email(),
    //     password: faker.internet.password(),
    //   });
    // // };
    await this.userRepository.save([ {
      name: 'Administrador',
      email: 'admin@test.com',
      username: 'admin',
      role: 'admin', // 'user' | 'admin
      password: await bcrypt.hash('admin123Admin', 10),
    } ]);

    // Generar nuevos carousels
    // await this.entityManager.query('TRUNCATE TABLE carousels RESTART IDENTITY CASCADE');
    this.entityManager.query('TRUNCATE TABLE carousels;');
    this.entityManager.query('ALTER TABLE carousels AUTO_INCREMENT = 1; ');

    // await this.carouselRepository.clear();
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
    // this.bookRepository.clear();
    // await this.entityManager.query('TRUNCATE TABLE books RESTART IDENTITY CASCADE');
    await this.entityManager.query('SET FOREIGN_KEY_CHECKS=0');
    await this.entityManager.query('TRUNCATE TABLE books;');
    await this.entityManager.query('ALTER TABLE books AUTO_INCREMENT = 1; ');

    let jsonData = fs.readFileSync('src/books/data/books.json', 'utf8');
    let booksData = JSON.parse(jsonData);
    await this.bookRepository.save(booksData);
    // jsonData = fs.readFileSync('src/books/data/booksMigrate.json', 'utf8');
    // booksData = JSON.parse(jsonData);
    // await this.bookRepository.save(booksData);
    // jsonData = fs.readFileSync('src/books/data/booksMigrate2.json', 'utf8');
    // booksData = JSON.parse(jsonData);
    // await this.bookRepository.save(booksData);

    // this.categoryRepository.clear();
    // await this.entityManager.query('TRUNCATE TABLE categories RESTART IDENTITY CASCADE');
    await this.entityManager.query('TRUNCATE TABLE categories;');
    await this.entityManager.query('ALTER TABLE categories AUTO_INCREMENT = 1; ');

    await this.categoryRepository.save([
      {name:'ADMINISTRACIÓN, CONTABILIDAD Y ECONOMÍA'},
      {name:'ARQUITECTURA'},
      {name:'CARNAVAL DE ORURO'},
      {name:'CIENCIAS BÁSICAS'},
      {name:'CIENCIAS SOCIALES'},
      {name:'DERECHO'},
      {name:'ESCOLAR - PRE UNIVERSITARIO'},
      {name:'ESTADÍSTICA'},
      {name:'IDIOMAS'},
      {name:'INGENIERÍA'},
    ]);
  }
}
