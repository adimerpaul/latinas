import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/users.entity").Users>;
    findAll(): Promise<import("./entities/users.entity").Users[]>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./entities/users.entity").Users>;
    remove(id: string): Promise<import("./entities/users.entity").Users>;
    generate(): Promise<void>;
    login(createUserDto: CreateUserDto): Promise<{
        message: string;
        token: string;
        user: import("./entities/users.entity").Users;
    }>;
    getProfile(req: any): Promise<import("./entities/users.entity").Users>;
}
