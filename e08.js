/*8. Se le solicita al usuario que ingrese el diámetro de un círculo. Realice el algoritmo para
calcular e informar el perímetro y el área del círculo. Se considerará para este ejercicio que el
valor de PI será 3.1416.*/

let diametro = parseInt (prompt("Por favor, ingresa el diametro del círculo"))
let pi = 3.1416
let radio = diametro / 2

let perimetroCirculo = diametro * pi
let areaCirculo = pi* radio * radio

alert("El perimetro del circulo  es " + perimetroCirculo)
alert("El radio del círculo es" + radio)
alert("El area de un ciruclo es " + areaCirculo)

/* correcion del profe:
Excelente! podrías declarar pi con const, ya que es una constante
const pi = 3.1416y por las dudas podría los parentesis en area circulo (aunque la multiplicación es conmutativa, no importa el orden, queda más prolijo
Ej: 
let areaCirculo = pi* (radio * radio)
o
let areaCirculo = pi* (radio **2)*/