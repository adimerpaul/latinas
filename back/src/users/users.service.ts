import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {User} from "./entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(User)
      private readonly userRepository: Repository<User>,
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
    const facerUsers = [];
    for (let i = 0; i < 10000; i++) {
      facerUsers.push({
        name: `Facer ${i}`,
        email: `fakeruser${i}`,
        password: `fakeruser${i}`,
      });
    };
    return await this.userRepository.save(facerUsers);
  }
}
