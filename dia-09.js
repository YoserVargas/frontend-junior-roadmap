const empleados = [
  { nombre: "Carlos", departamento: "Ventas", salario: 500000, ventas: 950000, activo: true },
  { nombre: "Ana", departamento: "Marketing", salario: 450000, ventas: 700000, activo: true },
  { nombre: "Luis", departamento: "Ventas", salario: 600000, ventas: 1200000, activo: true },
  { nombre: "María", departamento: "Ventas", salario: 550000, ventas: 850000, activo: true },
  { nombre: "Pedro", departamento: "IT", salario: 700000, ventas: 500000, activo: true },
  { nombre: "Sofía", departamento: "Ventas", salario: 480000, ventas: 1100000, activo: false },
  { nombre: "Jorge", departamento: "Ventas", salario: 650000, ventas: 1300000, activo: true },
  { nombre: "Laura", departamento: "Marketing", salario: 520000, ventas: 600000, activo: false }
];

function analianalizarEmpleados() {
    const cantidadEmpleadosActivos = empleados.filter(function (empleado) {
        return empleado.activo === true && empleado.departamento === "Ventas";
    });
    const totalVentas = cantidadEmpleadosActivos.reduce(function (acumulador, empleado) {
        return acumulador + empleado.ventas;
    }, 0);
    const promedioVentasTotal = totalVentas / cantidadEmpleadosActivos.length;
    const empleadosDestacados = cantidadEmpleadosActivos.filter(function (empleado) {
        return empleado.ventas >= 1000000;
    }).map(function (empleado) {
        return empleado.nombre;
    })
    return {
        EmpleadosActivos: cantidadEmpleadosActivos.length,
        TotalVentas: totalVentas,
        PromedioVentas: promedioVentasTotal,
        EmpleadosDestacados: empleadosDestacados
    };
}

console.log(analianalizarEmpleados());