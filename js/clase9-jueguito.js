const keyCodes = {
    izquierda: 37,
    arriba: 38,
    derecha: 39,
    abajo: 40
}

const estadoJugador = {
    velocidad: 100,
    mostrar: true,
    top: 0,
    left: 0
}

const desaparecer = document.getElementById("desaparecer");
const jugador = document.getElementById("jugador");

//vamos a desaparecerlo:

desaparecer.onclick = ()=>{
    if(estadoJugador.mostrar) {
        jugador.style.opacity = 0;
        estadoJugador.mostrar = false;
    }else{
        jugador.style.opacity = 1;
        estadoJugador.mostrar = true;
    }
}

// vamnos a moverlo:

const mover = (e)=>{
    switch (e.keyCode) {
        case keyCodes.arriba:
            estadoJugador.top -= estadoJugador.velocidad;
            jugador.style.top = estadoJugador.top + "px";
            break;
        case keyCodes.abajo:
            estadoJugador.top += estadoJugador.velocidad;
            jugador.style.top = estadoJugador.top + "px";  
            break;
        case keyCodes.derecha: 
            estadoJugador.left += estadoJugador.velocidad;
            jugador.style.left = estadoJugador.left + "px";
            break;
        case keyCodes.izquierda: 
            estadoJugador.left -= estadoJugador.velocidad;
            jugador.style.left = estadoJugador.left + "px";
            break;
        default:
            alert("SOLO PODES APRETAR FLECHAS");
            break;
    }
}

window.addEventListener("keyDown", mover);
