import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from "./entities/users.entity";
import { EntityManager, Repository } from "typeorm";
import { Carousels } from "../carousels/entities/carousels.entity";
import { Categories } from "../categories/entities/categories.entity";
import { Books } from "../books/entities/books.entity";
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private readonly userRepository;
    private readonly carouselRepository;
    private readonly categoryRepository;
    private readonly bookRepository;
    private readonly entityManager;
    private jwtService;
    constructor(userRepository: Repository<Users>, carouselRepository: Repository<Carousels>, categoryRepository: Repository<Categories>, bookRepository: Repository<Books>, entityManager: EntityManager, jwtService: JwtService);
    create(createUserDto: CreateUserDto): Promise<Users>;
    findAll(): Promise<Users[]>;
    login(createUserDto: CreateUserDto): Promise<{
        message: string;
        token: string;
        user: Users;
    }>;
    findOne(id: number): Promise<Users>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<Users>;
    remove(id: number): Promise<Users>;
    me(id: number): Promise<Users>;
    generate(): Promise<void>;
}
