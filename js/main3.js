let donado
let donacion
let suma

alert("Donaciones - L2 Twisters By Carlos Cogliandro")

do {
    donado = parseInt(prompt("Ingresá un numero en pesos"))
    donacion = parseInt(prompt("ingresar lo que deseo recibir"))
    suma =prompt("ingrese valor deseado de donacion: 100, 200, 300, 400 o 500")
    if(isNaN(donado ) || isNaN(donacion)){

        alert("No es una operacion valida")

    }
} 

while (isNaN(donado) || isNaN(donacion));

switch (suma) {
    case "100":
        alert ("Lo donado es " + donado  + " y lo recibido sera " + (donado * 1))
        break;
    case "200":
        alert ("Lo donado es " + donado  + " y lo recibido sera " + (donado * 1.3))
         break;
    case "300":
        alert ("Lo donado es " + donado  + " y lo recibido sera " + (donado * 1.4))
         break;
    case "400":
        alert ("Lo donado es " + donado  + " y lo recibido sera " + (donado * 1.6))
         break;
    case "500":
        alert ("Lo donado es " + donado  + " y lo recibido sera " + (donado * 2))
         break;

    default:
        alert("No es una operacion valida")
        break;
    
}