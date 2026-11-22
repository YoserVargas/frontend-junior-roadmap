
const empleados = [
    { nombre: "Carlos", departamento: "Ventas", salario: 500000, activo: true },
    { nombre: "Ana", departamento: "Marketing", salario: 450000, activo: true },
    { nombre: "Luis", departamento: "Ventas", salario: 600000, activo: true },
    { nombre: "María", departamento: "Ventas", salario: 550000, activo: true },
    { nombre: "Pedro", departamento: "IT", salario: 700000, activo: true },
    { nombre: "Sofía", departamento: "Ventas", salario: 480000, activo: false },
    { nombre: "Jorge", departamento: "Ventas", salario: 650000, activo: true },
    { nombre: "Laura", departamento: "Marketing", salario: 520000, activo: false },
    { nombre: "Diego", departamento: "IT", salario: 750000, activo: true },
    { nombre: "Elena", departamento: "Ventas", salario: 580000, activo: true }
];

const analizarDepartamento = (empleados, departamento) => {

    // 1. Filtrar empleados activos del departamento
    const empleadosActivos = empleados.filter(empleado =>
        empleado.departamento === departamento && empleado.activo === true
    );

    // 2. Contar empleados
    const cantidadEmpleados = empleadosActivos.length;

    // 3. Sumar salarios
    const totalSalario = empleadosActivos.reduce((acumulador, empleado) =>
        acumulador + empleado.salario, 0
    );

    // 4. Calcular promedio
    const promedioSalario = totalSalario / cantidadEmpleados;

    // 5. Obtener nombres de empleados con salario >= 550000
    const nombreEmpleadosSuperiorSalario = empleadosActivos.filter(empleado => 
        empleado.salario >= 550000).map(empleado => 
            empleado.nombre);

    // 6. Encontrar el salario más alto
    const salarioAltoDepartamento = empleadosActivos.reduce((acumulador, empleado) =>
        Math.max(acumulador, empleado.salario), 0
    );

    // 7. Devolver resultados
    return {
        EmpleadosActivos: cantidadEmpleados,
        TotalSalario: totalSalario,
        PromedioSalario: promedioSalario,
        NombreEmpleadosSuperiorSalario: nombreEmpleadosSuperiorSalario,
        SalarioAltoDepartamento: salarioAltoDepartamento
    };
};

console.log(analizarDepartamento(empleados, "Ventas"));
