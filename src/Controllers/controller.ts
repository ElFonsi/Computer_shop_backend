import  { Request, Response } from "express";
import { products, AppDataSource } from "../db";
import  Producto  from "../models/products";

export const llamar_productos =(_: Request, res: Response) => {
    res.json(products);
};

export const addProduct = async (req: Request, res: Response) => {
    console.log(req.body);
    
    const { pais, modelo, precio } = req.body;
    const newProduct = new Producto();
    newProduct.modelo = modelo;
    newProduct.pais = pais;
    newProduct.precio = precio;

    await AppDataSource.manager.save(newProduct);

    res.send('ProductAdded')
}


/*export const productos_mas100 =(_: Request, res: Response) => {
    const precio_alto = products.filter((product) => product.precio > 100);
    res.json(precio_alto);
};

export const modificar_producto =(req: Request, res: Response) => {
    const modelo = req.params.modelo;
  const actualizarProducto: Product = req.body;
  const index = products.findIndex((product) => product.modelo === modelo);

  if (index !== -1) {
    products[index] = actualizarProducto;
    res.json(products[index]);
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
};

export const elim_producto =(req: Request, res: Response) => {
    const modelo = req.params.modelo;
  const index = products.findIndex((product) => product.modelo === modelo);

  if (index !== -1) {
    products.splice(index, 1);
    res.json({ message: "Producto eliminado" });
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
};

export const producto_por_pais =(req: Request, res: Response) => {
    const pais = req.params.pais;
  const product = products.find((p) => p.pais === pais);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
};

export const productos_por_precio =(req: Request, res: Response) => {
    const precio = parseInt(req.params.precio);
  const product = products.find((p) => p.precio === precio);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
};

export const crear_por_clase =(req: Request, res: Response) => {
    const nuevoProducto: Product = req.body;
  const mismaskeys = products.every(
    (product) => Object.keys(product).sort().toString() === Object.keys(nuevoProducto).sort().toString()
  );

  if (mismaskeys) {
    products.push(nuevoProducto);
    res.json(nuevoProducto);
  } else {
    res.status(400).json({ message: "El nuevo producto debe tener las mismas claves que los productos existentes" });
  }
};*/




