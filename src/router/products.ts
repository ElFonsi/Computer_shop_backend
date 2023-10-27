
export interface Product {
    modelo: string;
    pais: string;
    precio: number;
    // Otras propiedades del producto
  }
  
  export const products: Product[] = [
    { modelo: "Producto1", pais: "País1", precio: 120 },
    { modelo: "Producto2", pais: "País2", precio: 90 },
    { modelo: "Producto3", pais: "País3", precio: 200 },
    // Agregar más productos
  ];