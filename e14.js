/*14. Realizar un algoritmo que pida al usuario nombre, apellido y edad, en caso de ingresar nombre
o apellido vacio ( “” ) mostrar el mensaje: “No puede realizar un input vacio para su
(nombre/apellido)”. También evaluar si la edad es mayor o igual a 18, en caso de cumplir la
condición devolver que puede comprar en la tienda, de lo contrario, “Usted aún no cumplió la
mayoría de edad, no puede comprar en nuestra tienda”*/  

let nombre = prompt ("ingrese su nombre")
let apellido = prompt ("ingrese su apellido")
let edad =  prompt ("ingrese su edad")

/*no me doy cuenta como poner que nombre y apellido sean igual a espacio vacio, me fije en los apuntes y flashie que capas podria ser null pero la verdad no estoy muy segura de si lo interprete bien*/

/*bueno googlie y resulta que para mostrar el vacio es "" capas no lei a fondo el apunte y de ansiosa dije ya fuepero wen funciona asique joya si era de otra forma me decis(?)*/


if(nombre == "" || apellido == ""){
    alert("no se puede realizar un input vacio para (nombre/apellido). Vuelva a ingresarlo")
}else{
    alert (`Bienvenido ${nombre} `)
}


if( edad >= 18){
    alert ("genial sos mayor de 18 podes ingresar para comprar en la tienda")
}else{
    alet ("Usted aún no cumplió la mayoría de eedad, no puede comprar en nuestra tienda")
}