const vendedores = [
    { nombre: "Carlos", departamento: "Ventas", ventas: 950000, activo: true },
    { nombre: "Ana", departamento: "Marketing", ventas: 700000, activo: true },
    { nombre: "Luis", departamento: "Ventas", ventas: 1200000, activo: true },
    { nombre: "María", departamento: "Ventas", ventas: 850000, activo: true },
    { nombre: "Pedro", departamento: "IT", ventas: 500000, activo: true },
    { nombre: "Sofía", departamento: "Ventas", ventas: 1100000, activo: false },
    { nombre: "Jorge", departamento: "Ventas", ventas: 1300000, activo: true },
    { nombre: "Laura", departamento: "Marketing", ventas: 600000, activo: false },
    { nombre: "Diego", departamento: "Ventas", ventas: 1050000, activo: true }
];

function analizarVendedores() {
    const vendedoresActivos = vendedores.filter(function (vendedor) {
        return vendedor.activo === true && vendedor.departamento === "Ventas";
    });
    const cantidadVendedoresActivos = vendedoresActivos.length;
    const totalVentas = vendedoresActivos.reduce(function (acumulador, vendedor) {
        return acumulador + vendedor.ventas;
    }, 0);
    const promedioVentas = totalVentas / vendedoresActivos.length;
    const nombreVenderoesMayorVenta = vendedoresActivos.filter(function (vendedor) {
        return vendedor.ventas >= 1000000;
    }).map(function (vendedor) {
        return vendedor.nombre;
    });
    const ventaAlta = vendedoresActivos.reduce(function (acumulador, vendedor) {
        if (acumulador > vendedor.ventas) {
            return acumulador;
        } else {
            return vendedor.ventas;
        }
    }, 0);
    return {
        EmpleadosActivos: cantidadVendedoresActivos,
        TotalVentas: totalVentas,
        PromedioVentas: promedioVentas,
        NombreVendedoresMayorVenta: nombreVenderoesMayorVenta,
        VentaAlta: ventaAlta
    };
}

console.log(analizarVendedores());
