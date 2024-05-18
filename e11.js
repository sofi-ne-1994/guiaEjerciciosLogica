/*11. Realizar un sistema que permita sacar el promedio de notas. Se pedirá el ingreso de nombre,
apellido y DNI del alumno/a, también las tres calificaciones obtenidas en el cuatrimestre: Devolver
de forma prolija e informative (utilizando concatenación con backticks alt + 96 ``) los datos del
alumno/a, el promedio obtenido y la suma de las tres notas*/

let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let dni = parseInt(prompt("Ingrese su DNI"))
let nota1 = parseInt(prompt("Ingrese la primer nota"))
let nota2 = parseInt(prompt("Ingrese la segunda nota"))
let nota3 = parseInt(prompt("Ingrese la tercer nota"))
let sumanotas = nota1 + nota2 +nota3
let promedio = (nota1 + nota2 + nota3)/3
alert(` ${nombre} ${apellido} ${dni}. su promedio es ${promedio}`)
alert(` la suma de sus notas es ${sumanotas}`)

/*Corrección profe:
Ejer 11) Excelente, tanto el uso de backticks como  el código. Falto mostrar la suma de las tres notas.
Podes hacer
let sumaNotas = nota1 + nota2 + nota3
let promedio = sumaNotas / 3 


let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let dni = parseInt(prompt("Ingrese su DNI"))
let nota1 = parseInt(prompt("Ingrese la primer nota"))
let nota2 = parseInt(prompt("Ingrese la segunda nota"))
let nota3 = parseInt(prompt("Ingrese la tercer nota"))
let sumanotas = nota1 + nota2 +nota3
let promedio = sumanotas /3
alert(` ${nombre} ${apellido} ${dni}. su promedio es ${promedio}`)
alert(` la suma de sus notas es ${sumanotas}`)
*/
