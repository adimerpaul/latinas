import { Books } from "../../books/entities/books.entity";
export declare class Categories {
    id: number;
    name: string;
    books: Books[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
