import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    title: string;

    @Column()
    description: string;
}