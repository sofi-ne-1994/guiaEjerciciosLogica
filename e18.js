// 18. Agregar al ejercicio 14: En caso de que además de mayor de 18 sea mayor de 60 años un
// descuento en compras del 15%


let nombre = prompt ("ingrese su nombre")
let apellido = prompt ("ingrese su apellido")
let edad =  prompt ("ingrese su edad")




if(nombre == "" || apellido == ""){
    alert("no se puede realizar un input vacio para (nombre/apellido). Vuelva a ingresarlo")
}else{
    alert (`Bienvenido ${nombre} `)
}


if( edad >= 60){
    alert ("genial sos mayor de 18 podes ingresar para comprar en la tienda y ademas tenes un 15% de descuento")
}else if(edad >= 18){
   alert(" felicidades son mayor de edad podes ingresar a la web")
}else if (edad < 18){
    alert ("Usted aún no cumplió la mayoría de eedad, no puede comprar en nuestra tienda")
}