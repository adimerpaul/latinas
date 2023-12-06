import { Module } from '@nestjs/common';
import { CarouselsService } from './carousels.service';
import { CarouselsController } from './carousels.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Carousels} from "./entities/carousels.entity";
import {MulterModule} from "@nestjs/platform-express";
import {multerOptions} from "../multer.config";

@Module({
  imports: [
      TypeOrmModule.forFeature([Carousels]),
      MulterModule.register(multerOptions),
  ],
  controllers: [CarouselsController],
  providers: [CarouselsService],
})
export class CarouselsModule {}
