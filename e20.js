// 20. Realizar con la estructura switch un calculador que pida dos números a usuario y una operación.
// Las operaciones posibles son + - / o * Para cada una en la estructura switch indicar y resolver la
// operación adecuada entre numero1 y numero2, en caso de ingresar un caracter incorrecto (que
// no sea + - / * ) alertar diciendo que la operación ingresada no existe.

// let v1 = parseInt(prompt("ingrese un primer valor"))
// let nose = promt("ingrese una operacion sea, suma + resta - multiplicacion * division /")
// let v2 = parseInt(prompt"ingrese un segundo valor")



let n1= parseInt(prompt("primer num"))
let n2= parseInt (prompt("segundo num"))
let n3 = prompt ("signo")

switch (n3) {
    case "+":
        resultado = n1 + n2
        alert (resultado)
        break;


    case "*":
        resultado = n1 * n2
        alert (resultado)
        break;

    case "-":
        if(n1>n2){
            resultado = n1 - n2
        }else{
            resultado= n2 -n1 
        }
        alert (resultado)
        break;

   case "/":
    if(n1>n2){
        resultado = n1 / n2
    }else{
        resultado= n2 /n1
    }
    alert (resultado)
    break;

    default:
        break;
}


// no seee no me muestra el resultado T.T