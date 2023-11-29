import { Module } from '@nestjs/common';
import { CarouselsService } from './carousels.service';
import { CarouselsController } from './carousels.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Carousels} from "./entities/carousels.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Carousels])],
  controllers: [CarouselsController],
  providers: [CarouselsService],
})
export class CarouselsModule {}
