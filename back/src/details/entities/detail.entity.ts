import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Sale} from "../../sales/entities/sale.entity";
import {Books} from "../../books/entities/books.entity";

@Entity('details')
export class Detail {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: true})
    name: string;
    @Column({nullable: true})
    quantity: number;
    @Column({nullable: true})
    price: number;
    @Column({nullable: true})
    total: number;
    @ManyToOne(() => Sale, sale => sale.details)
    sale: Sale;
    @ManyToOne(() => Books, books => books.details)
    book: Books;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;
}
