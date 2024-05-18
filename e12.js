/*12. Realizar un sistema para registro de horas trabajadas. Se solicita que se ingrese el valor de
la hora y la cantidad de horas trabajadas en el mes. Calcular y mostrar cuanto se facturaría
durante ese mes y cual sería la proyección anual (considerando 12 meses al año) si
ganaramos ese monto fijo los 11 meses siguientes*/

let nombre = prompt("Ingrese su nombre")
let valor = prompt("ingrese el valor de la hora")
let horas = prompt("ingrese cantidad de horas trabajadas")
let dato = prompt("ingerse la cantidad de dias que trabaja al mes")
let dia = valor * horas



alert("el dia de hoy usted gano" + dia)
let mes = dia * 20
let mes1 = dia * dato
alert("suponiendo que trabaja 20 dias al mes usted gana " + mes)
let anio = mes * 12
alert("al año deberia ganar " + anio)
/* puse anio porqueno me acordaba si se podia usar la Ñ o no y segui haciendo los alert por separado porque habia algo que no me estaba saliendo y era que puse alet en vez de alert */
alert(`el día de hoy usted ganó ${dia}, al mes ganaría ${mes1} y al año ${anio}`)