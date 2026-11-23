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

const analizarEmpleados = (empleados, departamento) => {
    const empleadosActivos = empleados.filter(empleado => empleado.departamento === departamento && empleado.activo === true);
    const empleadosCantidad = empleadosActivos.length;
    const salarioTotal = empleadosActivos.reduce((acumulador, empleado) => acumulador + empleado.salario, 0);
    const promedioSalario = salarioTotal / empleadosCantidad;
    const empleadosDestacados = empleadosActivos.filter(empleado => empleado.salario >= 600000).map(empleado => empleado.nombre);
    const salarioMasAlto = empleadosActivos.reduce((acumulador, empleado) => Math.max(acumulador, empleado.salario), 0);


    return {
        cantidadEmpleados: empleadosCantidad,
        totalSalarios: salarioTotal,
        promedioSalarios: promedioSalario,
        empleadosDestacados: empleadosDestacados,
        salarioMasAlto: salarioMasAlto
    };
};

console.log(analizarEmpleados(empleados, "Ventas"));