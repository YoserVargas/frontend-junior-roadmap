const vendedores = [
  { nombre: "Carlos", ventas: 850000, activo: true },
  { nombre: "Ana", ventas: 650000, activo: true },
  { nombre: "Luis", ventas: 950000, activo: false },
  { nombre: "María", ventas: 1200000, activo: true },
  { nombre: "Pedro", ventas: 500000, activo: false },
  { nombre: "Sofía", ventas: 750000, activo: true },
  { nombre: "Jorge", ventas: 1100000, activo: true },
  { nombre: "Laura", ventas: 900000, activo: false }
];

function analizarVentas(vendedores) {
    const cantidadVendedores = vendedores.filter(function(vendedor) {
    return vendedor.activo === true;
    })
    const totalVentas = cantidadVendedores.reduce(function(acumulador, vendedor) {
        return acumulador + vendedor.ventas;
    }, 0)
    const promedioVentas = totalVentas / cantidadVendedores.length;
    return {
        TotalVentas: totalVentas,
        PromedioVentas: promedioVentas,
        CantidadVendedores: cantidadVendedores.length
    };
}

console.log(analizarVentas(vendedores));