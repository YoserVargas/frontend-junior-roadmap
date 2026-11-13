const vendedores = [
  { nombre: "Carlos", ventas: 850000, activo: true, departamento: "Ventas" },
  { nombre: "Ana", ventas: 650000, activo: true, departamento: "Ventas" },
  { nombre: "Luis", ventas: 950000, activo: false, departamento: "Ventas" },
  { nombre: "María", ventas: 1200000, activo: true, departamento: "Ventas" },
  { nombre: "Pedro", ventas: 500000, activo: true, departamento: "IT" },
  { nombre: "Sofía", ventas: 750000, activo: true, departamento: "Ventas" },
  { nombre: "Jorge", ventas: 1100000, activo: true, departamento: "Ventas" },
  { nombre: "Laura", ventas: 900000, activo: false, departamento: "Ventas" }
];

function analizarRendimiento(vendedores) {
    const vendedoresActivos = vendedores.filter(function (vendedor) {
        return vendedor.activo === true && vendedor.departamento === "Ventas";
    });
    const totalVentas = vendedoresActivos.reduce(function (acumulador, vendedor) {
        return acumulador + vendedor.ventas;
    }, 0);
    const promedioVentas = totalVentas / vendedoresActivos.length;
    const nombresDestacados = vendedoresActivos.filter(function (vendedor) {
        return vendedor.ventas >= 800000;
    }).map(function (vendedor) {
        return vendedor.nombre;
    })
    return {
        VendedoresActivos: vendedoresActivos.length,
        TotalVentas: totalVentas,
        PromedioVentas: promedioVentas,
        NombresDestacados: nombresDestacados
    };
}

console.log(analizarRendimiento(vendedores));