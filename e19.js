// Crear un programa que permita calcular el IVA de un producto ingresado.
// Este calculador pide el valor original del producto y el nombre del producto, con esos datos
// calcular el IVA de ese producto (un 21% del valor original) y calcular el total del producto con IVA.
// Mostrar los datos del producto de forma que considere ordenada y prolija.

let nombreProducto = prompt ("Por favor ingrese el nombre del producto")
let valorProducto = parseInt (prompt("ingrese el valor del producto"))
let iva = valorProducto + ( valorProducto * 0.21)

alert (`El producto ${nombreProducto} con un valor de ${valorProducto} sumado el 21% del IVA queda con un valor final de ${iva}`)

//FUNCIONANDO