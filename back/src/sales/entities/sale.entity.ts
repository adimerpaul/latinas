import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Detail} from "../../details/entities/detail.entity";

@Entity('sales')
export class Sale {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: true})
    name: string;
    @Column({nullable: true})
    ci: string;
    @Column({nullable: true})
    phone: string;
    @Column({nullable: true})
    date: string;
    @Column({nullable: true})
    time: string;
    @Column({nullable: true})
    description: string;
    @Column({nullable: true})
    total: number;
    @Column({nullable: true})
    status: string;
    @Column({nullable: true})
    comment: string;
    @OneToMany(() => Detail, detail => detail.sale)
    details: Detail[];
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;
}
