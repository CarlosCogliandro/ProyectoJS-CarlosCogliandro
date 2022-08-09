let navDonaciones = document.getElementById('navDona');


// NAVBAR DONACIONES

function mostrarNavDona() {
    const dona1 = document.createElement('dona1');
    dona1.classList.add('navbar');
    dona1.innerHTML =  `<div>
                        <ul class="navbar1">
                            <li><a class="link" href="../index.html">HOME</a></li>
                            <li><a class="link" href="">REWARDS</a></li>
                            <li><a class="link" href="">RULES</a></li>
                            <li><a class="link" href="./donaciones.html">DONATION</a></li>
                            <li><a class="link" href="">SUPPORT</a></li>
                        </ul>
                        </div>

                        <div>
                        <ul class="redessociales">
                            <li><a class="redes1" href="https://www.facebook.com/"><img class="redes" src="../img/redes/facebook.png" alt="facebook"></a></li>
                            <li><a class="redes1" href="https://www.twitter.com/"><img class="redes" src="../img/redes/gorjeo.png" alt="twitter"></a></li>
                            <li><a class="redes1" href="https://www.instagram.com/"><img class="redes" src="../img/redes/instagram.png" alt="instagram"></a></li>
                            <li><a class="redes1" href="https://www.twitch.com/"><img class="redes" src="../img/redes/twitch.png" alt="twitch"></a></li>
                            <li><a class="redes1" href="https://www.youtube.com/"><img class="redes" src="../img/redes/youtube.png" alt="youtube"></a></li>
                        </ul>
                        </div>

                        <button id="boton-carrito"> <i class="fas fa-shopping-cart"></i><span id="contadorCarrito">0</span></button>
                        `

    navDonaciones.appendChild(dona1);
}

mostrarNavDona();



