import { Categories } from "../../categories/entities/categories.entity";
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
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
