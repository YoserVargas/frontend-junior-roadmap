const vendedores = [
    { nombre: "Carlos", departamento: "Ventas", ventas: 950000, activo: true },
    { nombre: "Ana", departamento: "Marketing", ventas: 700000, activo: true },
    { nombre: "Luis", departamento: "Ventas", ventas: 1200000, activo: true },
    { nombre: "María", departamento: "Ventas", ventas: 850000, activo: true },
    { nombre: "Pedro", departamento: "IT", ventas: 500000, activo: true },
    { nombre: "Sofía", departamento: "Ventas", ventas: 1100000, activo: false },
    { nombre: "Jorge", departamento: "Ventas", ventas: 1300000, activo: true },
    { nombre: "Laura", departamento: "Marketing", ventas: 600000, activo: false },
    { nombre: "Diego", departamento: "Ventas", ventas: 1050000, activo: true },
    { nombre: "Elena", departamento: "Ventas", ventas: 750000, activo: true }
];

const analizarVentas = (vendedores, departamento) => {
    const cantidadVendedores = vendedores.filter(vendedor => vendedor.departamento === departamento && vendedor.activo === true)
    const vendedoresActivos = cantidadVendedores.length;
    const totalVentasVendedores = cantidadVendedores.reduce((acumulador, vendedor) => acumulador + vendedor.ventas, 0);
    const promedioVentasVendedores = totalVentasVendedores / vendedoresActivos;
    const NombreVendedoresDestacados = cantidadVendedores.filter(vendedor => vendedor.ventas >= 1000000).map(vendedor => vendedor.nombre);
    const ventasMasAlta = cantidadVendedores.reduce((acumulador, vendedor) => Math.max(acumulador, vendedor.ventas), 0);
    return {
        VendedoresActivos: vendedoresActivos,
        TotalVentasVendedores: totalVentasVendedores,
        PromedioVentasVendedores: promedioVentasVendedores,
        NombreVendedoresDestacados: NombreVendedoresDestacados,
        VentasMasAlta: ventasMasAlta
    };
}

console.log(analizarVentas(vendedores, "Ventas"));