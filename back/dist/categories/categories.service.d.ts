import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Categories } from "./entities/categories.entity";
import { Repository } from "typeorm";
export declare class CategoriesService {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Categories>);
    create(createCategoryDto: CreateCategoryDto): string;
    findAll(): Promise<Categories[]>;
    findOne(id: number): string;
    update(id: number, updateCategoryDto: UpdateCategoryDto): string;
    remove(id: number): string;
}
