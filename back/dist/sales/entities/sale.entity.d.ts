import { Detail } from "../../details/entities/detail.entity";
export declare class Sale {
    id: number;
    name: string;
    ci: string;
    phone: string;
    date: string;
    time: string;
    description: string;
    total: number;
    status: string;
    comment: string;
    details: Detail[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
