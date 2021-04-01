import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique} from "typeorm";

@Entity()
@Unique(['email'])
export class Student {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    email: string;

    @Column()
    domain: string;

    @Column({nullable: true })
    name: string = '';

    @Column({nullable: true })
    lastname: string = '';

    @Column({type: "simple-json", nullable: true })
    data: {}

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date
}