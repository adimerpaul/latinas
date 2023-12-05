// create-carousel.dto.ts
import { IsString } from 'class-validator';

export class CreateCarouselDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    // Otros campos del DTO
}
