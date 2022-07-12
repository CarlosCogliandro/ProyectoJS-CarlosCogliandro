//     // ejemplos de variables
// let numero = 15
// let numero2 = 20
// const anio = 1987

// let numeroProducto = 12
// console.log(numero)
// console.log(numero2)
// numero2 = 21
// console.log(anio)


//     //   puedo guardar textos o numeros
// let texto1 = "hola mundo"
// console.log(texto1)     // SIRVE PARA VER LOS RESULTADOS OBTENIDOS

    
//     // Operaciones con numeros
// let numero1 = 120
// let numero20 = 20
// const NUMERO3 = 10

// let resultadoSuma = numero1 + numero20 // 140
// console.log(resultadoSuma)

// let resultadoResta = numero1 - numero20 // 100
// console.log(resultadoResta)

// let resultadoMulti = numero1 * NUMERO3 // 1200
// console.log(resultadoMulti)

// let resultadoDivi = numero1 / numero20 // 6
// console.log(resultadoDivi)

// let resultadoFinal = resultadoSuma + resultadoResta + resultadoDivi + resultadoMulti // 1446
// console.log(resultadoFinal) 

    
//     // Operaciones con texto
// let texto1 = "hola," //o puedo dejar un espacio despues de la coma
// let nombre = "carlos"
// const espacio = " "
// let saludo = texto1 + " " + nombre
// console.log(saludo)

// nombre = "hernan"
// saludo = texto1 + espacio + nombre
// console.log(saludo)

    
//     // PROMPT
// let nombre = prompt("Ingrese su nombre")
// console.log("hola, " + nombre)

// let numero1 = prompt("Por favor ingrese un nombre")
// let numero2 = prompt("Ingrese otro numero")

// // lo concatena
// let resultado = numero1 + numero2
// console.log("El resultado es: " + resultado)

// // para que lo sume // parsefloat lo suma
// numero1 = parsefloat(numero1)
// numero2 = parseFloat(numero2)
// let resultado = numero1 + numero2
// console.log("El resultado es: " + resultado)

// // parseint te redondea el numero


    // ALERT
// let nombre = prompt("Ingrese su nombre")
// alert("hola, " + nombre)
    
// let numero1 = prompt("Por favor ingrese un nombre")
// let numero2 = prompt("Ingrese otro numero")
// let resultado = numero1 + numero2
// alert("El resultado es: " + resultado)

// numero1 = parsefloat(numero1)
// numero2 = parseFloat(numero2)
// let resultado = numero1 + numero2
// alert("El resultado es: " + resultado)


let variante1
let variante2
let operacion

alert("HAGAMOS UNA PRUEBITA MATEMATICA! By CarlosCogliandro")

do {
    variante1=parseFloat(prompt("Ingresá un numero positivo, negativo o decimal"))
    variante2=parseFloat(prompt("Ingresá otro numero positivo o negativo o decimal"))
    operacion=prompt("Ingresá un Simbolo Matematico, como por ejemplo: +,-,*,/")
    if(isNaN(variante1) || isNaN(variante2)){

        alert("No es una operacion valida")

    }
} 

while (isNaN(variante1) || isNaN(variante2));

switch (operacion) {
    case "+":
        alert ("La suma de " + variante1 + " y " + variante2 + " es = " + (variante1 + variante2))
        break;
    case "-":
        alert ("La resta de " + variante1 + " y " + variante2 + " es = " + (variante1 - variante2))
         break;
    case "*":
        alert ("La multiplicacion de " + variante1 + " y " + variante2 + " es = " + (variante1 * variante2))
         break;
    case "/":
        alert ("La division de " + variante1 + " y " + variante2 + " es = " + (variante1 / variante2))
         break
    default:
        alert("No es una operacion valida")
        break;
    
}