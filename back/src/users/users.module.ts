import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Users} from "./entities/users.entity";
import {Carousels} from "../carousels/entities/carousels.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Users,Carousels])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
