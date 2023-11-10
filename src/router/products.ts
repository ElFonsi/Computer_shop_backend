import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"


@Entity()
export class Photo{
    @PrimaryGeneratedColumn()
    id!: number 
    @Column()
    modelo!:string
    @Column()
    pais!: string  
    @Column()
    precio!: number

}


export interface Product {
    modelo: string;
    pais: string;
    precio: number;

  }
  
  export const products: Product[] = [
    { modelo: "Producto1", pais: "País1", precio: 120 },
    { modelo: "Producto2", pais: "País2", precio: 90 },
    { modelo: "Producto3", pais: "País3", precio: 200 },

  ];

