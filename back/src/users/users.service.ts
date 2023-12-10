import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from "./entities/users.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {EntityManager, getManager, Repository} from "typeorm";
import {faker} from "@faker-js/faker/locale/es";
import {Carousels} from "../carousels/entities/carousels.entity";
import {Categories} from "../categories/entities/categories.entity";
import {Books} from "../books/entities/books.entity";

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
      private readonly entityManager: EntityManager
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
    await this.entityManager.query('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
    // this.userRepository.clear();
    const facerUsers = [];
    for (let i = 0; i < 10; i++) {
      facerUsers.push({
        name: faker.person.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      });
    };
    await this.userRepository.save(facerUsers);

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
    await this.bookRepository.save([
      {
        name:'ADMINISTRACIÓN Y SUS FUNCIONES',
        image:'Captura de pantalla 2023-12-08 071432.png',
        indice:'https://drive.google.com/file/d/1Y01T3G1KQKtwKnYrrQdbJpUKIqGoZbLs/view',
        price: 35,
        category: {id:1}
      },
      {
        name:'ADMINISTRACIÓN Y SUS FUNCIONES',
        image:'Captura de pantalla 2023-12-09 050742.png',
        indice:'https://drive.google.com/file/d/1qwJvVmZz2q_I70FfEzcBkXf56qkliW4w/view',
        price: 35,
        category: {id:1}
      },
      {
        name:'GESTIÓN DEL TALENTO HUMANO',
        image:'Captura de pantalla 2023-12-10 085728.png',
        indice:'https://drive.google.com/file/d/12jgRg9AtXetRAFusHHjtKog61AVxPqNF/view',
        price: 35,
        category: {id:1}
      },
      {
        name:'ANALISIS E INTEGRACION DE ESTADOS FINANCIEROS',
        image:'Captura de pantalla 2023-12-10 085920.png',
        indice:'https://drive.google.com/file/d/1KPaQVUuhGEBiFMG4kNFc_A45PWOEUTYt/view',
        price: 30,
        category: {id:1}
      },
      {
        name:'AUDITORIA ENFOQUE TEORICO PRACTICO',
        image:'Captura de pantalla 2023-12-10 090014.png',
        indice:'https://drive.google.com/file/d/1wD6OLzLCLoV-Y4s9phtyTfa9FOWYHXmP/view',
        price: 60,
        category: {id:1}
      },
      {
        name:'AUDITORIA ENFOQUE TEORICO PRACTICO',
        image:'Captura de pantalla 2023-12-10 091143.png',
        indice:'https://drive.google.com/file/d/1lmAPVk8OVJJT6Qz7X1GWNrvQWN2MnB7O/view',
        price: 70,
        category: {id:1}
      },
      {
        name:'AUDITORIA ESPECIAL ENFOQUE TEORICO PRACTICO',
        image:'Captura de pantalla 2023-12-10 091313.png',
        indice:'https://drive.google.com/file/d/1ce0N98RPdYPj8vNeg_3EWXEBJyPES65q/view',
        price: 80,
        category: {id:1}
      },
      {
        name:'AUDITORIA Y SISTEMAS INFORMATICOS',
        image:'Captura de pantalla 2023-12-10 091400.png',
        indice:'https://drive.google.com/file/d/1C3owd0odnCfClMeavUoyKBMMQWfMtC2t/view',
        price: 25,
        category: {id:1}
      },
      {
        name:'CONTABILIDAD ADMINISTRATIVA MINERA',
        image:'Captura de pantalla 2023-12-10 091508.png',
        indice:'https://drive.google.com/file/d/1cyGyUF0WCyF_NY410MI8ylEiQX3EaQM4/view',
        price: 50,
        category: {id:1}
      },
      {
        name:'CONTABILIDAD BANCARIA',
        image:'Captura de pantalla 2023-12-10 091621.png',
        indice:'https://drive.google.com/file/d/1PxcAaMC1sPG6vQRiMOAiqtI7_1hQNT63/view',
        price: 45,
        category: {id:1}
      },
      {
        name:'CANTABILIDAD BASICA APLICADA',
        image:'Captura de pantalla 2023-12-10 091730.png',
        indice:'https://drive.google.com/file/d/1qYlJy9Y7tL0r5Ksc7BRb0Lvp49QsTDgr/view',
        price: 70,
        category: {id:1}
      },
      {
        name:'EQUIPAMIENTO URBANO',
        image:'Captura de pantalla 2023-12-09 051410.png',
        indice:'https://drive.google.com/file/d/1l8sdDdx76rbeDtA2KvumBhK3OHBWWNEV/view',
        price: 15,
        category: {id:2}
      },
      {
        name:'APUNTES DEL CARNANAL SAGRADO DE ORURO',
        image:'Captura de pantalla 2023-12-09 051906.png',
        indice:'https://drive.google.com/file/d/1FxOLEvGdtRe0cTf6iT7bMq8L5X9x_hWg/view',
        price: 40,
        category: {id:3}
      },
      {
        name:'EXPERIENCIAS DE LABORAORIO DE FÍSICA',
        image:'Captura de pantalla 2023-12-09 052154.png',
        indice:'https://drive.google.com/file/d/1ar9U4vfq0DhbFkp2wsMbkIXnf3SeIidk/view',
        price: 55,
        category: {id:4}
      },
      {
        name:'¿COMO NACIO LA RADIO EN ORURO?',
        image:'Captura de pantalla 2023-12-09 052540.png',
        indice:'https://drive.google.com/file/d/1ar9U4vfq0DhbFkp2wsMbkIXnf3SeIidk/view',
        price: 40,
        category: {id:5}
      },
      // Captura de pantalla 2023-12-09 052540.png
    ]);
  }
}
