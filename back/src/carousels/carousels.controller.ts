import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarouselsService } from './carousels.service';
import { CreateCarouselDto } from './dto/create-carousel.dto';
import { UpdateCarouselDto } from './dto/update-carousel.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('carousels')
@Controller('carousels')
export class CarouselsController {
  constructor(private readonly carouselsService: CarouselsService) {}

  @Post()
  create(@Body() createCarouselDto: CreateCarouselDto) {
    return this.carouselsService.create(createCarouselDto);
  }

  @Get()
  findAll() {
    return this.carouselsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carouselsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarouselDto: UpdateCarouselDto) {
    return this.carouselsService.update(+id, updateCarouselDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carouselsService.remove(+id);
  }
}
