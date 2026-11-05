const productos = [
  { nombre: "Laptop", precio: 350000, categoria: "tecnologia", disponible: true },
  { nombre: "Mouse", precio: 12000, categoria: "tecnologia", disponible: true },
  { nombre: "Teclado", precio: 18000, categoria: "tecnologia", disponible: false },
  { nombre: "Silla", precio: 45000, categoria: "muebles", disponible: true },
  { nombre: "Audifonos", precio: 15000, categoria: "tecnologia", disponible: true },
  { nombre: "Monitor", precio: 95000, categoria: "tecnologia", disponible: false },
  { nombre: "Lampara", precio: 8000, categoria: "hogar", disponible: true },
  { nombre: "Webcam", precio: 19000, categoria: "tecnologia", disponible: true }
];

function obtenerProductosDisponibles(productos) {
    return productos.filter(function(producto) {
        return producto.disponible === true && producto.precio < 20000 && producto.categoria === "tecnologia";
    }).map(function(producto) {
        return producto.nombre;
    })
}

console.log(obtenerProductosDisponibles(productos));