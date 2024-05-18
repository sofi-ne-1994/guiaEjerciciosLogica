
let plan = parseInt (prompt  ("selecione el plan: \n 1. Plan plus \n 2. Plan Mix "))
let capitas = null 
let valorTotal = 0
let edad = null
let precioBase = 0
let recargo = 0

switch (plan){
    case 1: alert("elegiste el plan PLUS")
    capitas = parseInt(prompt("ingrese cantidad de capitas"))

    for(let i = 1; i <= capitas; i++){
        if(i == 1)
            precioBase = 5637
        if(i == 2)
            precioBase =8584
        if(i ==  3) 
            precioBase = 11532
        if( i == 4)
            precioBase = 14907
        if(i > 4 )
            precioBase = precioBase + 3725

    }
    valorTotal = precioBase

    for(let i = 1; i<=capitas; i++ ){
        edad =  parseInt (prompt("ingrese edad de la persona: " +i))
        
        if(edad >= 65 && edad <= 69){
            valorTotal = valorTotal + 1176
        }else if(edad >= 70 && edad <= 74){
            valorTotal =  valorTotal + 1570
        }else if(edad >= 75 && edad <= 79){
            valorTotal =  valorTotal + 2148
        }else if( edad >=  80){
            valorTotal = valorTotal + 3951
        }
        
        
    }

    break;

    case 2: alert("elegiste el plan MIX")
    break;

    default: 
    break;
 }
 alert ("el precio del plan es: " + valorTotal)
