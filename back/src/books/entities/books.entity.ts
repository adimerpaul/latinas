import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Categories} from "../../categories/entities/categories.entity";

@Entity('books')
export class Books {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: true})
    name: string;
    @Column({nullable: true})
    description: string;
    @Column()
    image: string;
    @Column()
    indice: string;
    @ManyToOne(() => Categories, (category ) => category.books)
    category: Categories;
}
