import { Sale } from "../../sales/entities/sale.entity";
import { Books } from "../../books/entities/books.entity";
export declare class Detail {
    id: number;
    name: string;
    quantity: number;
    price: number;
    total: number;
    sale: Sale;
    book: Books;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
