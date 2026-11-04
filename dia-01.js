const usuarios = [
  { nombre: "Carlos", edad: 25, activo: true },
  { nombre: "Ana", edad: 17, activo: true },
  { nombre: "Luis", edad: 32, activo: false },
  { nombre: "María", edad: 28, activo: true },
  { nombre: "Pedro", edad: 16, activo: false },
  { nombre: "Sofía", edad: 21, activo: true }
];

function obtenerUsuariosActivos(usuarios) {

  return usuarios.filter(function(usuario) {
    return usuario.activo === true && usuario.edad >= 18;
  }).map(function(usuario) {
    return usuario.nombre;
  })
}

console.log(obtenerUsuariosActivos(usuarios));