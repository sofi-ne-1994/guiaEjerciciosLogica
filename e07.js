/* Se le solicita al usuario que ingrese su nombre y luego su apellido. Realice el algoritmo
que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido del usuario. */
//pedirle la edad y mostrar en el mensaje final al usuario

let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let edad = parseInt(prompt("Ingrese su edad"))
//concatenación: una de las maneras de concatenar
alert("Bienvenido " + nombre + " " + apellido + ". Su edad es: "+ edad)
//segunda forma (más agil)
//comillas backticks `` alt + 96
//para incorporar una variable: ${nombreVariable}
alert(`Bienvenido ${nombre} ${apellido}. Su edad es: ${edad}. Con backticks`)

