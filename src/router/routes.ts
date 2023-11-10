
import express, { Request, Response } from "express";
import { products, Product } from "./products";
const inicial = express.Router()
inicial.use(express.json());

inicial.get('/', (_, res) => {
    res.send('The sedulous hyena ate the antelope!');
  });
  
// Obtener todos los productos
inicial.get("/productos", (_: Request, res: Response) => {
  res.json(products);
});

// Obtener productos cuyo precio sea mayor a 100
inicial.get("/productoss/precio_alto", (_: Request, res: Response) => {
  const precio_alto = products.filter((product) => product.precio > 100);
  res.json(precio_alto);
});

// Modificar un producto existente o manejar el caso cuando no existe
inicial.put("/productos/:modelo", (req: Request, res: Response) => {
  const modelo = req.params.modelo;
  const actualizarProducto: Product = req.body;
  const index = products.findIndex((product) => product.modelo === modelo);

  if (index !== -1) {
    products[index] = actualizarProducto;
    res.json(products[index]);
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
});

// Eliminar un producto por su modelo o manejar el caso cuando no existe
inicial.delete("/productos/eliminar/:modelo", (req: Request, res: Response) => {
  const modelo = req.params.modelo;
  const index = products.findIndex((product) => product.modelo === modelo);

  if (index !== -1) {
    products.splice(index, 1);
    res.json({ message: "Producto eliminado" });
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
});

// Obtener un producto por su país de origen
inicial.get("/products/pais/:pais", (req: Request, res: Response) => {
  const pais = req.params.pais;
  const product = products.find((p) => p.pais === pais);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
});

// Obtener un producto por su precio
inicial.get("/productos/precio/:precio", (req: Request, res: Response) => {
  const precio = parseInt(req.params.precio);
  const product = products.find((p) => p.precio === precio);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
});

// Crear un nuevo producto si tiene las mismas claves que los productos restantes

inicial.post("/productos/agregar", (req: Request, res: Response) => {
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
});




export default inicial
  
  