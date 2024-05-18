// 17. Agregar al ejercicio n°12: En caso de que el sueldo anual proyectado sea menor a 10000 indicar
// que el sueldo es bajo, en caso de ser entre 10000 o 20000 indicar que es un sueldo medio y si
// supera los 20000 indicar que es un sueldo alto y calcular un 10% de impuestos (re calcular cual
// sería el sueldo final con esa quita). Mostrar los datos relevantes según corresponda.



let nombre = prompt("Ingrese su nombre")
let valor = prompt("ingrese el valor de la hora")
let horas = prompt("ingrese cantidad de horas trabajadas")
let dato = prompt("ingerse la cantidad de dias que trabaja al mes")

let dia = valor * horas



alert("el dia de hoy usted gano" + dia)
// let mes = dia * 20
let mes1 = dia * dato
alert("trabajando " + dato + " dias por mes, su salario es de " + mes1)
let anio = mes1 * 12
alert("al año deberia ganar " + anio)

alert(`el día de hoy usted ganó ${dia}, al mes ganaría ${mes1} y al año ${anio}`)

if(mes1 < 100000){
    alert("su sueldo es bajo")

}else if(mes1 <200000) {
    alert("su sueldo es medio")

}else if(mes1 >= 200000){
    let impuesto = mes1 -(mes1 * 0.10)
    alert(`Su sueldo es alto, felicidades usted no es pobre, pero tiene un impuesto del 10% y su sueldo queda en ${impuesto} ` 
    )


}




// let impuesto= mes1 - (mes1 * 0.10) 
//bueno en algun lado pondria esa formula o calculo pero ya intente poniendo lo arriba
// y se para, deja de mostrar las ventantinas no se me ocurre porque podria ser
//es mas no estoy muy segura pero capas deberia ir dentro del if? pero 
