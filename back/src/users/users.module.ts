import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Users} from "./entities/users.entity";
import {Carousels} from "../carousels/entities/carousels.entity";
import {Categories} from "../categories/entities/categories.entity";
import {Books} from "../books/entities/books.entity";
import {JwtModule} from "@nestjs/jwt";
import * as process from "process";
import {ConfigModule} from "@nestjs/config";
@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forFeature([Users,Carousels, Categories,Books]),
      JwtModule.register({
        global: true,
        secret: process.env.SECRET_KEY,
        // signOptions: { expiresIn: '60s' },
      }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
