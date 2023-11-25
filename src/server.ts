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
            const producto1 = new Producto("Notebook Lenovo 15","Thinkpad E15 I7-1255u | Ram 16gb | Ssd 512gb | Mx550 | W10", 1400)
            const producto2 = new Producto("Outlet Pc Gamer Intel","I3 10100f - 16gb Ram - 240gb Ssd - Gtx 1660 Super - 500w 80p White", 650)
            AppDataSource.manager.save([producto1, producto2])
             console.log(product_exist)
        }
    }
    catch(error){
        console.log(error);
    } 
}

main();