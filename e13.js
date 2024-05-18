/*13. Realizar un sistema para sueldos de una empresa. Se le solicita que nombre y apellido de la
persona, junto al valor de la hora, la cantidad de horas trabajadas en el mes y los años de
antigüedad en la empresa. Realice el algoritmo para calcular e informar el sueldo mensual
del empleado/a, teniendo en cuenta que se le asigna un bono mensual de 5% del sueldo por
año cada año de antigüedad (por 1 año de antigüedad plus de 5%, 2 años plus de 10%, 3
años plus de 15%... etc)*/

let nombre = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido")

let valor = prompt ("ingrese el valor de la hora")
let horas = prompt("ingrese la cantidad de horas diarias")
let atiguedad = prompt ("ingrese los años de antigüedad")


let mes = (valor * horas) * 20
alert ("su salario mensual es de " + mes)
 /*no tengo idea idea de como sumar porcentajes D:
 let bono = mes * 0.05
 alert ("su bono es de" + bono)*/
 let bono = mes * (aniguedad * 0.05)
 let sueldototal = mes + bono
 alet(`La persona ${nombre} ${apellido} gana un sueldo mensual de: ${mes}
       tiene un plus de antigüedad del: ${bono}
       su sueldo final es de: ${sueldototal}`)