import { Categories } from "../../categories/entities/categories.entity";
import { Detail } from "../../details/entities/detail.entity";
export declare class Books {
    id: number;
    name: string;
    description: string;
    image: string;
    indice: string;
    price: number;
    priceOffer: number;
    stock: number;
    author: string;
    category: Categories;
    details: Detail[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
