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

const analizarDepartamento = (empleados,departamento) => {
    const empleadosActivos = empleados.filter(empleado => empleado.departamento === departamento && empleado.activo);
    const totalEmpleados = empleadosActivos.length;
    const totalSalario = empleadosActivos.reduce((acumulador, empleado) => acumulador + empleado.salario, 0);
    const salarioPromedio = totalEmpleados > 0 ? totalSalario / totalEmpleados : 0;
    const salarioNombreAlto = empleadosActivos.filter(empleado => empleado.salario >= 600000).map(empleado => empleado.nombre);
    const salarioAlto = empleadosActivos.reduce((acumulador, empleado) => Math.max(acumulador, empleado.salario), 0);
    const comprobarSalarioSuperior = empleadosActivos.some(empleado => empleado.salario > 750000);
    const comprobarEmpleadosSalarioInferior = empleadosActivos.every(empleado => empleado.salario >= 450000);

    return {
        totalEmpleados: totalEmpleados,
        totalSalario: totalSalario,
        salarioPromedio: salarioPromedio,
        salarioNombreAlto: salarioNombreAlto,
        salarioAlto: salarioAlto,
        comprobarSalarioSuperior: comprobarSalarioSuperior,
        comprobarEmpleadosSalarioInferior: comprobarEmpleadosSalarioInferior
    }
}

console.log(analizarDepartamento(empleados, "Ventas"));