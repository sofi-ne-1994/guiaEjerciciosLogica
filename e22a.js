// 22. Pedirle al usuario un número y mediante un ciclo for establecer cuales y cuantos números del
// 1 al 100 son divisibles por el número ingresado (por divisibles nos referimos a números que
// dividimos por númeroIngresado el resto de la division sea 0 – ejemplo usuario ingresa el num
// 17 el programa debería responder que hay 5 números divisibles por 17 del 1 al 100 y ellos son:
// 17, 34, 51, 68 y 85

//-------TERCER INTENTO AL REVEZ---
//divisibles por el nuemero ingresado

let numero = parseInt(prompt("ingrese un numero"))
let contadorDiv = 0
for(let i = 1; i <=100; i++){
    if(numero % i== 0) {
        alert(`el numero ${i} es divisible ${numero} `)
        console.log (`el numero ${i} es divisible ${numero} `)
        contadorDiv++
    }

}
alert(`La cantidad de numeros divisibles por ${numero} es ${contadorDiv}`)
console.log(`La cantidad de numeros divisibles por ${numero} es ${contadorDiv}`)
