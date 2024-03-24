import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@Entity()
// @Index("IDX_USER_DELETED_AT", ["deletedAt"])
// @Index("IDX_USER_EMAIL", ["email"], { unique: true })
export class Users {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    username: string;
    @Column()
    password: string;
    @Column({ default: 'user' })
    role: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;
}
