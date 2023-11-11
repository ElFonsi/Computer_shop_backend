import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"


@Entity()
export default class Producto{
    @PrimaryGeneratedColumn()
    id!: number 
    @Column()
    modelo!:string
    @Column()
    pais!: string  
    @Column()
    precio!: number

}

