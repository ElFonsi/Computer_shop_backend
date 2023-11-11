import express from 'express';
import inicial from './router/routes'
import "reflect-metadata"
import { AppDataSource } from './db';

const app = express();
const port = 8080;

app.use('/',inicial)

app.listen(port,()=>{
    console.log(port);
});


AppDataSource.initialize()
    .then(()=>{

    })
    .catch((error)=> console.log(error))
