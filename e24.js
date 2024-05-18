// 24. Pedirle al usuario un número y evaluar si se trata de un número primo o no.

let numero = parseInt(prompt("ingrese un número"))

for( let i = 2; i < numero; i++)
if(numero % i == 0){
alert (`${i}`)
}

// const esPrimo = numero => {
// 	// Casos especiales
// 	if (numero == 0 || numero == 1 || numero == 4) return false;
// 	for (let x = 2; x < numero / 2; x++) {
// 		if (numero % x == 0) return false;
// 	}
// 	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
// 	return true;
