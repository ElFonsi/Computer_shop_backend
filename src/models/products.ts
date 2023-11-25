import {Entity, Column, PrimaryGeneratedColumn, EntityManager} from "typeorm"


@Entity()
export default class Producto{
    @PrimaryGeneratedColumn()
    id!: number 
    @Column()
    nombre!:string
    @Column()
    descripcion!: string  
    @Column()
    precio!: number

    constructor(nombre:string, descripcion:string, precio:number){
        this.nombre= nombre;
        this.descripcion= descripcion;
        this.precio= precio;
    }


    static async eliminarPorNombre(nombre: string, entityManager: EntityManager): Promise<void> {
        const product = await entityManager.findOne(Producto, { where: { nombre } });
        if (product) {
            await entityManager.remove(product);
        }
    }

    static async agregarProducto(nombre: string, descripcion: string, precio: number, entityManager: EntityManager): Promise<void> {
        const newProduct = new Producto(nombre, descripcion, precio);
        newProduct.nombre = nombre;
        newProduct.descripcion = descripcion;
        newProduct.precio = precio;

        await entityManager.save(newProduct);
    }
}

