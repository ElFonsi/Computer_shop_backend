import express from 'express'
// import morgan from 'morgan'
import cors from 'cors'
import { AppDataSource } from './db';
import userRoutes from './router/routes'
import Producto from './models/products';

const app = express()

// app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(userRoutes)

async function main() {
    try{

        await AppDataSource.initialize();
        console.log('Database connected')
        app.listen(3310);
        console.log('Server is listening on port', 3310);

        const validation_product= AppDataSource.manager.getRepository(Producto)
        const product_exist= await validation_product.find()

        if (product_exist.length == 0){
            const newProduct = new Producto();
            newProduct.modelo = "LB-600";
            newProduct.pais = "Argelia";
            newProduct.precio = 2500;
            AppDataSource.manager.save([newProduct])
            console.log(product_exist)
        }

    }
    catch(error){
        console.log(error);
    } 
}

main();