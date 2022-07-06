import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class TodoModel{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    createdAt: string

    @Column({ nullable: true })
    completedAt: string

    @Column()
    isFinished: boolean
}