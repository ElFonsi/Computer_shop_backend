import {DataSource} from "typeorm"
import Producto from "./models/products"

export const AppDataSource= new DataSource({
    type: "mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"1234",
    database:"backend",
    synchronize:true,
    logging:true,
    entities:[Producto],
    subscribers:[],
    migrations:[]
})

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
