import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from "./entities/users.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {EntityManager, getManager, Repository} from "typeorm";
import {faker} from "@faker-js/faker/locale/es";
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
    const user = await this.userRepository.findOne({where: { email: createUserDto.email },});
    if (!user) {
      throw new BadRequestException(`User with email ${createUserDto.email} not found`);
    }
    if (!await bcrypt.compare(createUserDto.password, user.password)) {
        throw new BadRequestException(`Invalid password`);
    }
    const jwt = await this.jwtService.signAsync({ id: user.id });
    return {
        message: 'success',
        jwt,
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
    async getProfile(id: number) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
        throw new BadRequestException(`User with id ${id} not found`);
        }
        return user;
    }
  async generate() {
    await this.entityManager.query('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
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
      name: 'admin',
      email: 'admin@test.com',
      password: await bcrypt.hash('123456', 10),
    } ]);

    // Generar nuevos carousels
    await this.entityManager.query('TRUNCATE TABLE carousels RESTART IDENTITY CASCADE');
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

    // this.categoryRepository.clear();
    await this.entityManager.query('TRUNCATE TABLE categories RESTART IDENTITY CASCADE');

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
    // this.bookRepository.clear();
    await this.entityManager.query('TRUNCATE TABLE books RESTART IDENTITY CASCADE');

    let jsonData = fs.readFileSync('src/books/data/books.json', 'utf8');
    let booksData = JSON.parse(jsonData);
    await this.bookRepository.save(booksData);
    jsonData = fs.readFileSync('src/books/data/booksMigrate.json', 'utf8');
    booksData = JSON.parse(jsonData);
    await this.bookRepository.save(booksData);
    jsonData = fs.readFileSync('src/books/data/booksMigrate2.json', 'utf8');
    booksData = JSON.parse(jsonData);
    await this.bookRepository.save(booksData);
  }
}
