// Preguntamos el nombre del cliente.
const nombre = prompt('Ingresa tu nombre');
alert(`Hola ${nombre}, bienvenido a Lineage 2 - Twisters`);

// Le ofrecemos los tipos de donacion.
let donacion= prompt('¿Qué tipo de donacion deseas realizar? (100 Pesos: 100 DonateCoin, 200 Pesos: 230 DonateCoin, 300 Pesos: 370 DonateCoin, 400 Pesos: 500 DonateCoin o 500 Pesos: 750 DonateCoin)');

// Defininos la variabllo que va a recibir (Fuera del bucle).
let donado = 0;

// Le agrego un prompt para que me deje un email de contacto
let contactarte = prompt("Dejanos un email para contactarte:")

// Bucle para asignar precios de la donacion elegida, si elijo un numero no disponible, se repite el bucle.
do {
    if(donacion == 100){
        donado = 100;
        alert(`recibiras ${donado} DonateCoins`);
        
    } else if(donacion == 200){
        donado = 230;
        alert(`recibiras ${donado} DonateCoins`);
        
    } else if(donacion == 300){
        donado = 370;
        alert(`recibiras ${donado} DonateCoins`);
        
    } else if(donacion == 400){
        donado = 500;
        alert(`recibiras ${donado} DonateCoins`);
        
    } else if(donacion == 500){
        donado = 750;
        alert(`recibiras ${donado} DonateCoins`);
        
    } else {
        alert('El numero no coincide con las ofertas ofrecidas...');
        donacion = prompt('¿Qué tipo de donacion deseas realizar? (100 Pesos: 100 DonateCoin, 200 Pesos: 230 DonateCoin, 300 Pesos: 370 DonateCoin, 400 Pesos: 500 DonateCoin o 500 Pesos: 750 DonateCoin)');
        
    }
  
} 

while(donacion != 100 && donacion != 200 && donacion != 300 && donacion != 400 && donacion != 500);

