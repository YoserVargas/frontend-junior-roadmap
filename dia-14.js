const empleados = [
    { nombre: "Carlos", departamento: "Ventas", salario: 520000, activo: true },
    { nombre: "Ana", departamento: "Marketing", salario: 480000, activo: true },
    { nombre: "Luis", departamento: "Ventas", salario: 650000, activo: true },
    { nombre: "María", departamento: "Ventas", salario: 580000, activo: true },
    { nombre: "Pedro", departamento: "IT", salario: 750000, activo: true },
    { nombre: "Sofía", departamento: "Ventas", salario: 490000, activo: false },
    { nombre: "Jorge", departamento: "Ventas", salario: 700000, activo: true },
    { nombre: "Laura", departamento: "Marketing", salario: 550000, activo: false },
    { nombre: "Diego", departamento: "IT", salario: 800000, activo: true },
    { nombre: "Elena", departamento: "Ventas", salario: 620000, activo: true }
];

const analizarEmpleados = (empleados, departamento, nombre) => {
    const empleadosDepartamento = empleados.filter(empleado => empleado.departamento === departamento && empleado.activo);
    const cantidadEmpleados = empleadosDepartamento.length;
    const totalSalario = empleadosDepartamento.reduce((acumulador, empleado) => acumulador + empleado.salario, 0);
    const promedioSalario = totalSalario / cantidadEmpleados;
    const nombreEmpleadosDestacados = empleadosDepartamento
        .filter(empleado => empleado.salario >= 600000)
        .map(empleado => empleado.nombre);
    const salarioMasAlto = empleadosDepartamento.reduce(
        (acumulador, empleado) => Math.max(acumulador, empleado.salario),
        0
    );
    const empleadoEncontrado = empleados.find(
        empleado => empleado.nombre === nombre
    );

    return {
        cantidadEmpleados: cantidadEmpleados,
        totalSalario: totalSalario,
        promedioSalario: promedioSalario,
        nombreEmpleadosDestacados: nombreEmpleadosDestacados,
        salarioMasAlto: salarioMasAlto,
        empleadoEncontrado: empleadoEncontrado
    }
}

console.log(analizarEmpleados(empleados, "Ventas", "Jorge"));