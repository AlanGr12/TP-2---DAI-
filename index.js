//Ejercicio 1 

const stringUno = console.log('Hola');
const stringDos = console.log('Todo Bien?'); 

console.log('' + stringUno + '' + stringDos);
console.log(`${stringUno} ${stringDos}`);

//Ejercicio 2
// hacer esto antes y despues cambiar matematica mkdir src mkdir src/modules y hacer el import import {sumar, restar, multiplicar, dividir, PI} from './src/modules/matematica.js'

const resultadoUno = sumar(10, 2)
console.log(resultadoUno)

const resultadoDos = restar(10, 2)
console.log(resultadoDos)

const resultadoTres = multiplicar(10, 2)
console.log(resultadoTres)

const resultadoCuatro = dividir(10, 2)
console.log(resultadoCuatro)

console.log(`Numero ${PI}`)
//Ejercicio 3
// crear la carpeta models con mkdir src/models y dsp la carpeta alumno.js
import Alumno from './src/models/alumno.js'

const nuevoAlumno = new Alumno("Juan",12345678)
const nuevoAlumnoDos = new Alumno("Mati",21356878)

console.log(`El dni del ${nuevoAlumno.username} es ${nuevoAlumno.DNI}`)
console.log(`El dni del ${nuevoAlumnoDos.username} es ${nuevoAlumnoDos.DNI}`)
//Ejercicio 4
import fs from 'fs'

function copiar(entrada, salida){
const contenido  = fs.readFileSync(entrada,'utf-8')
fs.writeFileSync(salida, contenido)
}


copiar('./entrada.txt', './salida.txt')
console.log(`El archivo se creo perfectamente`)
