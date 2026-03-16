import fs from 'fs'

function copiar(entrada, salida){
const contenido  = fs.readFileSync(entrada,'utf-8')
fs.writeFileSync(salida, contenido)
}


copiar('./entrada.txt', './salida.txt')
console.log(`El archivo se creo perfectamente`)
