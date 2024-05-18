// 21. Realizar un simulador que ofrezca al usuario el ingreso de la cantidad de notas que desea
// ingresar. Calcular el promedio y la suma total de las notas.


let cantNotas = parseInt(prompt("Ingrese la cantidad de notas deseadas"))

let sumaNotas = 0

for(let i = 1; i <= cantNotas; i = i + 1){

    let nota = parseInt(prompt(`Ingrese la nota nª ${i}`))
    console.log(nota)
   
    sumaNotas = sumaNotas + nota
    console.log(`El resultado total parcial es: ${sumaNotas}`)

}
console.log(`La suma total de notas es ${sumaNotas}`)
alert(`La suma total de notas es ${sumaNotas}`)
let promedio = sumaNotas / cantNotas
console.log(`El promedio de sus notas es ${promedio}`)
alert(`El promedio de sus notas es ${promedio}`)
