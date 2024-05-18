  /* Se le solicita al usuario que ingrese los lados de un rectángulo. Realice el algoritmo para
   calcular e informar el perímetro y el área del rectángulo. 
   bueno la parte de perimetro no me estaria saliendo*/
let  lado1 = parseInt(prompt("ingrese el primer lado del rectángulo"))
let lado2 = parseInt(prompt("ingrese el segundo lado del rectángulo"))
let areaRectanculo = lado1 * lado2
let perimetroRectangulo = 2 * lado1 + 2 *lado2

alert("el área del rectangulo es " + areaRectanculo)
console.log("el área del rectangulo es " + areaRectangulo)

alert("el perímetro del rectangulo es " + perimetroRectanculo)
console.log("el perímetro del rectangulo es " + perimetroRectanculo)
