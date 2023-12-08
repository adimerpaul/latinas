import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Users} from "./entities/users.entity";
import {Carousels} from "../carousels/entities/carousels.entity";
import {Categories} from "../categories/entities/categories.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Users,Carousels, Categories])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
