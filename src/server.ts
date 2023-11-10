import express from 'express';
import inicial from './router/routes'
import "reflect-metadata"
import {DataSource} from "typeorm"
import {Photo} from "./router/products"

const app = express();
const port = 8080;

app.use('/',inicial)

app.listen(port,()=>{
    console.log(port);
});

export const AppDataSource= new DataSource({
    type: "postgres",
    host:"localhost",
    port:8080,
    username:"test",
    password:"test",
    database:"test",
    synchronize:true,
    logging:true,
    entities:[Photo]
})

AppDataSource.initialize()
    .then(()=>{

    })
    .catch((error)=> console.log(error))