import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Categories} from "../../categories/entities/categories.entity";

@Entity('books')
export class Books {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: true})
    name: string;
    @Column({nullable: true})
    description: string;
    @Column({nullable: true,default: 'notFound.jpg'})
    image: string;
    @Column({nullable: true})
    indice: string;
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    price: number;
    @Column({type: 'decimal', precision: 10, scale: 2, nullable: true})
    priceOffer: number;
    @Column({default: 0})
    stock: number;
    @Column({nullable: true})
    author: string;
    @ManyToOne(() => Categories, (category ) => category.books,{ nullable: true })
    category: Categories;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;
}
