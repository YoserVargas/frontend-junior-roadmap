const empleados = [
  { nombre: "Carlos", ventas: 150000, meta: 120000 },
  { nombre: "Ana", ventas: 90000, meta: 100000 },
  { nombre: "Luis", ventas: 200000, meta: 180000 },
  { nombre: "María", ventas: 110000, meta: 110000 },
  { nombre: "Pedro", ventas: 80000, meta: 95000 },
  { nombre: "Sofía", ventas: 175000, meta: 150000 }
];

function obtenerEmpleadosDestacados(empleados) {
  return empleados.filter(function (empleado) {
    return empleado.ventas - empleado.meta >= 30000;
  }).map(function (empleado) {
    return empleado.nombre;
  });
}

console.log(obtenerEmpleadosDestacados(empleados));