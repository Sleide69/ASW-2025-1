import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "../../../../practica_3/node_modules/typeorm";
import { User } from "./User";

@Entity()
export class View {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @ManyToOne(() => User, (user: User) => user.views)
    user!: User;

} 