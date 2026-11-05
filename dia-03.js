const ventas = [
  { producto: "Laptop", monto: 350000, estado: "pagada" },
  { producto: "Mouse", monto: 12000, estado: "pagada" },
  { producto: "Teclado", monto: 18000, estado: "pendiente" },
  { producto: "Monitor", monto: 95000, estado: "pagada" },
  { producto: "Audifonos", monto: 15000, estado: "cancelada" },
  { producto: "Webcam", monto: 19000, estado: "pagada" }
];

function calcularTotalVentas(ventas) {
    return ventas.filter(function(venta) {
        return venta.estado === "pagada";
    }).reduce(function(acumulador, venta) {
        return acumulador + venta.monto;
    }, 0);
}

console.log(calcularTotalVentas(ventas));