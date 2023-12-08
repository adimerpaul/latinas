import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from "./entities/users.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {getManager, Repository} from "typeorm";
import {faker} from "@faker-js/faker/locale/es";
import {Carousels} from "../carousels/entities/carousels.entity";
import {Categories} from "../categories/entities/categories.entity";

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(Users)
      private readonly userRepository: Repository<Users>,
      @InjectRepository(Carousels)
        private readonly carouselRepository: Repository<Carousels>,
      @InjectRepository(Categories)
        private readonly categoryRepository: Repository<Categories>,
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
  async generate() {
    //const entityManager = getManager();  // getEntityManager() method is deprecated
    // await entityManager.query('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
    this.userRepository.clear();
    const facerUsers = [];
    for (let i = 0; i < 1000; i++) {
      facerUsers.push({
        name: faker.person.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      });
    };
    await this.userRepository.save(facerUsers);

    await this.carouselRepository.clear();

    // Generar nuevos carousels
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
    this.categoryRepository.clear();
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
