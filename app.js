let start = prompt(`¿Que cuenta desea hacer?
1...Suma
2...Resta
3...Multiplicacion
4...Division`)

switch (start) {
    case "1":
        let num1suma = Number(prompt(`Ingrese el primer valor`));
        let num2suma = Number(prompt(`Ingrese el segundo valor`));
        
        resultadoSuma = num1suma + num2suma;
        
        alert("Tu resultado es: " + resultadoSuma);
        break;
            
    case "2":
        let num1resta = Number(prompt(`Ingrese el primer valor`));
        let num2resta = Number(prompt(`Ingrese el segundo valor`));
            
        resultadoResta = num1resta - num2resta;
        
        alert("Tu resultado es: " + resultadoResta);
        break;

    case "3":
        let num1Multi = Number(prompt(`Ingrese el primer valor`));
        let num2Multi = Number(prompt(`Ingrese el segundo valor`));
            
        resultadoMulti = num1Multi * num2Multi;
            
        alert("Tu resultado es: " + resultadoMulti);
        break;

    case "4":
        let num1Divicion = Number(prompt(`Ingrese el primer valor`));
        let num2Divicion = Number(prompt(`Ingrese el segundo valor`));
                
        resultadoDivicion = num1Divicion / num2Divicion;
                
        alert("Tu resultado es: " + resultadoDivicion);
        break;

        

    default:
        alert(`Gracias por Participar`)
        break;
}



// let num = Number(prompt(`Ingrese un numero`));

// if ( start == "si" || "Si" || "sI" || "SI"){
    
//     let num = Math.random()
// }
//  else if( start == "no" || "No" || "nO" || "NO"){
//     console.log(`Salu2 entonces`)
// }

