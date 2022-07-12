
ingresarDatos()
function ingresarDatos(){
    let credito = parseInt(prompt("Ingrese el monto del credito"))
    let meses = parseInt(prompt("Ingrese la cantidad de cuotas"))
    let banco = prompt("Ingrese un banco")
    let interes = calcInteres(banco)
    let cuota = calcCuota(credito,interes,meses)
    mostrar(banco,credito,interes,cuota,meses)
}




// console.log (calcCuota(50000,20,12))
function calcCuota(credito,interes,meses){
    let cuota = credito *(1 + interes/100)/meses
    return cuota.toFixed(2)
}



function calcInteres(banco){
    switch (banco){
        case "macro":
            return 27
        case "santander":
            return 23
        case "superville":S
            return 20
        default:
            return 0
    }
}


// console.log(mostrar("superville",50000,20,12,6))
function mostrar (banco,credito,interes,cuota,meses){
    document.write (`el precio del banco ${banco} es de ${credito} con un interes de ${interes} a pagar en cueotas de ${cuota} durante ${meses}`)

}