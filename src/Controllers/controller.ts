import  { Request, Response } from "express";
import {  AppDataSource } from "../db";
import  Producto  from "../models/products";

export const llamar_productos = async(_: Request, res: Response) => {
  try {
    const productos = await AppDataSource.manager.find(Producto);
    res.json(productos);
} catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
}
};

export const addProduct = async (req: Request, res: Response) => {
  const { nombre, descripcion, precio } = req.body;

  try {
      await Producto.agregarProducto(nombre, descripcion, precio, AppDataSource.manager);
      res.send('Product added successfully');
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
};

export const eliminarProducto = async (req: Request, res: Response) => {
  const { nombre } = req.params;

  try {
      const entityManager = AppDataSource.manager;
      const product = await entityManager.findOne(Producto, { where: { nombre } });

      if (!product) {
          return res.status(404).send(`Product ${nombre} not found`);
      }

      await entityManager.remove(product);
      return res.send(`Product ${nombre} deleted successfully`);
  } catch (error) {
      console.error(error);
      return res.status(500).send('Internal Server Error');
  }
};

// export const elim_producto =(req: Request, res: Response) => {
//   const modelo = req.params.modelo;
// const index = Producto.findIndex((product) => product.modelo === modelo);

// if (index !== -1) {
//   Producto.splice(index, 1);
//   res.json({ message: "Producto eliminado" });
// } else {
//   res.status(404).json({ message: "Producto no encontrado" });
// }
// };

// export const productos_mas100 =(_: Request, res: Response) => {
//     const precio_alto = Producto.filter((Producto) => Producto.precio > 100);
//     res.json(precio_alto);
// };
/*
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




