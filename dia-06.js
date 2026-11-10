const empleados = [
  { nombre: "Carlos", departamento: "Ventas", salario: 500000, activo: true },
  { nombre: "Ana", departamento: "Marketing", salario: 450000, activo: true },
  { nombre: "Luis", departamento: "Ventas", salario: 600000, activo: false },
  { nombre: "María", departamento: "Ventas", salario: 550000, activo: true },
  { nombre: "Pedro", departamento: "IT", salario: 700000, activo: true },
  { nombre: "Sofía", departamento: "Marketing", salario: 480000, activo: false },
  { nombre: "Jorge", departamento: "Ventas", salario: 650000, activo: true },
  { nombre: "Laura", departamento: "IT", salario: 800000, activo: true }
];

function analizarSalarios(empleados) {
    const EmpleadosActivos = empleados.filter(function(empleado) {
    return empleado.activo === true;
    });
    const TotalSalario = EmpleadosActivos.reduce(function(acumulador, empleado) {
        return acumulador + empleado.salario;
    }, 0)
    const salarioPromedio = TotalSalario / EmpleadosActivos.length;
    return {
        totalSalario: TotalSalario,
        salarioPromedio: salarioPromedio,
        empleadosActivos: EmpleadosActivos.length
    };
}

console.log(analizarSalarios(empleados));
