import Alumno from './src/models/alumno.js'

const nuevoAlumno = new Alumno("Juan",12345678)
const nuevoAlumnoDos = new Alumno("Mati",21356878)

console.log(`El dni del ${nuevoAlumno.username} es ${nuevoAlumno.DNI}`)
console.log(`El dni del ${nuevoAlumnoDos.username} es ${nuevoAlumnoDos.DNI}`)