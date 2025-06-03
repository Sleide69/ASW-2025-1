import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "../../../../practica_3/node_modules/typeorm";
import { View } from "./View";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @OneToMany(() => View, (view: View) => view.user)
    views!: View[];
} 