// 22. Pedirle al usuario un número y mediante un ciclo for establecer cuales y cuantos números del
// 1 al 100 son divisibles por el número ingresado (por divisibles nos referimos a números que
// dividimos por númeroIngresado el resto de la division sea 0 – ejemplo usuario ingresa el num
// 17 el programa debería responder que hay 5 números divisibles por 17 del 1 al 100 y ellos son:
// 17, 34, 51, 68 y 85



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// P R I M E R   I N T E N T O

// let numero = parseInt(prompt("ingrese un numero"))
// for(let i = 1; i <=100; i++){
//     if(numero % i== 0) {
//         alert(i)
//     }

// }
//no se como hacer para que responda todos en un mismo msj


// let numero = parseInt(prompt("ingrese un numero"))
// for(let i = 1; i <=100; i++){
//     if(i % numero == 0) {
//         alert(i)
//     }



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   S E G U N D O   I N T E N T O


let numero = parseInt(prompt("ingrese un numero que desea por cuales divisibles"))
let contadorDiv = 0
for(let i = 1; i <=100; i++){
    if(i % numero == 0) {
        alert(`El numero ${i} es divisible por ${numero}`)
        console.log(`El numero ${i} es divisible por ${numero}`)
        //aumentamos en uno el contador
        contadorDiv++
    }

}
alert(`La cantidad de numeros divisibles por ${numero} del 1 al 100 es ${contadorDiv}`)
console.log(`La cantidad de numeros divisibles por ${numero} es ${contadorDiv}`)

