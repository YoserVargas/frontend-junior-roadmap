const empleados = [
  { nombre: "Carlos", departamento: "Ventas", salario: 500000, activo: true },
  { nombre: "Ana", departamento: "Marketing", salario: 450000, activo: true },
  { nombre: "Luis", departamento: "Ventas", salario: 600000, activo: false },
  { nombre: "María", departamento: "Ventas", salario: 550000, activo: true },
  { nombre: "Pedro", departamento: "IT", salario: 700000, activo: true },
  { nombre: "Sofía", departamento: "Marketing", salario: 480000, activo: false },
  { nombre: "Jorge", departamento: "Ventas", salario: 650000, activo: true }
];

function analizarEmpleadosVentas(empleados) {
    return empleados.filter(function(empleado) {
        return empleado.departamento === "Ventas" && empleado.activo && empleado.salario >= 500000;
    }).map(function(empleado) {
        return empleado.nombre;
    })
}

console.log(analizarEmpleadosVentas(empleados));