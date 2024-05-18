// 23. Realizar un simulador que permita el cálculo de interés compuesto hasta que se alcance un
// monto objetivo suponiendo una tasa de interes anual fija.
// El usuario deberá ingresar: 
// el monto inicial, 
// el monto objetivo 
// la tasa de interes anual;
// con esos datos se deberá calcular cuantos años deberán pasar para que el monto inicial iguales o 
// supere al monto objetivo.
// El monto inicial siempre debe ser menor que el objetivo, en caso de que el usuario ingrese un monto
// inicial mayor indicarle el error. Al menos una vez se deberá realizar la operación, luego evaluar
// la condición correspondiente. 
// (Ejemplo: montoInicial 100, montoObjetivo 150 y tasa de interes 20%...
// Primer calculo el monto  inicial pasa a ser 120, ya que se le suma en un año el 20%;
// Segundo calculo el 20% de 120 es 24; por lo tanto el monto se actualiza a 144...
// tercer calculo  el 20% de 144 es 28,8 por lo tanto el monto se actualiza a 172,8 y ya supera el monto objetivo:
// Se informa el monto conseguido y que deben pasar 3 años para llegar al objetivo).


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// P R I M E R   I N T E N TO

// let montoInicial = parseInt(prompt("ingrese monto inicial"))
// let montoObjetivo=  parseInt(prompt("ingrese su objetivo"))
// let interesAnual=  parseInt(prompt("ingrese interés anual"))
// let anios = 0;

// let montoconintres = montoInicial + (montoInicial * interesAnual)

// while(montoconintres<montoObjetivo){
//     anios++ 
//     montoconintres = montoconintres + (montoconintres * interesAnual)

//     alert(`El monto conseguido es ${montoconintres} y tardo ${anios} años`)

// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// S E G U N D O    I N T E N T O



let montoInicial = parseInt(prompt("ingrese monto inicial"))
let montoObjetivo=  parseInt(prompt("ingrese su objetivo"))

// let interesAnual=  parseFloat(prompt("ingrese interés anual"))

let interes = parseInt(prompt("ingrese el interés"))
let contadorAnio = 0
do{
    let sumaInteres = montoInicial * interes / 100
    console.log(`El resultado del interes del monto inicial es de: ${sumaInteres}`)
   // alert(`El resultado del interes del monto inicial es de: ${sumaInteres}`)

    montoInicial = montoInicial +sumaInteres
    console.log(`La suma del interes del monto inicial sumado al monto inicial es ${montoInicial}`)
   // alert(`La suma del interes del monto inicial sumado al monto inicial es ${montoInicial}`)

    contadorAnio++
    console.log( `el monto estuvo siendo invvertido durante ${contadorAnio}`) 
   // alert( `el monto estuvo siendo invvertido durante ${contadorAnio}`)
    
}while(montoInicial<montoObjetivo)

alert(`Va a llegar al monto objetivo $${montoObjetivo} en ${contadorAnio} años 
y el monto retirado es $${montoInicial}`)


//FUNCIONANDO corrección en la clase 9 (1/6/2023)



////////////////////////////////////////////////////////////////////////////////////////////////////////////
// T E R C E R     I N T E N T O



// let monto = parseInt(prompt("ingrese monto inicial"))
// let interes = 20
// let montoObjetivo = parseInt(prompt("ingrese su objetivo"))

// // let interesAnual=  parseFloat(prompt("ingrese interés anual"))
// let contadorAnio = 0
// do{
//     let sumaInteres = monto * interes / 100
//     console.log(`El resultado del interes del monto inicial es de: ${sumaInteres}`)
//    // alert(`El resultado del interes del monto inicial es de: ${sumaInteres}`)

//     monto = monto + sumaInteres
//     console.log(`La suma del interes del monto inicial sumado al monto inicial es ${monto}`)
//    // alert(`La suma del interes del monto inicial sumado al monto inicial es ${montoInicial}`)

//    contadorAnio = contadorAnio + 1
//     console.log( `el monto estuvo siendo invvertido durante ${contadorAnio}`) 
//    // alert( `el monto estuvo siendo invvertido durante ${contadorAnio}`)
    
// }while(monto < montoObjetivo)
// alert(`Va a llegar al monto objetivo $${montoObjetivo} en ${contadorAnio} años 
// y el monto retirado es $${monto}`)



