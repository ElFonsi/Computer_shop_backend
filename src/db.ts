import {Photo} from "./router/products"
import {AppDataSource} from "./server"

const photo= new Photo()
photo.modelo="B6600X" 
photo.pais="Alemania"
photo.precio=500

async function Save() {
    await AppDataSource.manager.save(photo)
}

Save()
