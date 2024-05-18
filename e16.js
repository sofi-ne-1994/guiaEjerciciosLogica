/*16. Agregar al ejercicio n°11 (tres notas calcular promedio): Si la nota es menor a 4: usted ha
desaprobado, si la nota es entre 4 y menor a 8 usted ha aprobado y debe render final, si la nota
es 8 o menor a 10 usted ha promocionado la materia y en caso de ser 10 devolver que ha
promocionado la materia con nota máxima.*/


/*este tambien lo vimos en clase*/




//Ingreso de información
let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let DNI = parseInt(prompt("Ingrese su n° de DNI"))

//pedir Notas
let nota1 = parseInt(prompt("Ingrese la primer nota"))
let nota2 = parseInt(prompt("Ingrese la segunda nota"))
let nota3 = parseInt(prompt("Ingrese la tercera nota"))

//calcular 
let sumaNotas = (nota1 + nota2 + nota3)
let promedio =  sumaNotas / 3 

//mostrar info
alert(`El alumno ${nombre} ${apellido} con DNI ${DNI}
Tiene por promedio ${promedio}
La suma de las tres notas es ${sumaNotas}`)


if (promedio < 4){
    //en caso de ser true entra acá y no lee las siguientes condiciones. 
    //En caso de ser false sigue evaluando las condiciones en el orden correspondiente
    alert(`Usted ha desaprobado, su promedio es ${promedio}`)
}else if (promedio < 8){
    alert(`Usted ha aprobado la materia y debe rendir final. Su promedio ${promedio}`)
}else if (promedio < 10){
    alert(`Usted ha promocionado la materia. Su promedio ${promedio}`)     
}else if(promedio == 10){
    alert(`Usted ha promocionado con nota máxima. Su promedio ${promedio}`)   
}else{
    alert("Nota fuera de rango")
}
