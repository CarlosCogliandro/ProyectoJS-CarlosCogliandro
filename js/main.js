
//   CLASES

class Producto {
    constructor(id, nombre, detalle, categoria, subcategoria, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.detalle = detalle;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }
}


//   VARIABLES

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('vaciar-carrito');
const contadorCarrito = document.getElementById('contadorCarrito');
const cantidad = document.getElementById('cantidad');
const precioTotal = document.getElementById('precioTotal');
const cantidadTotal = document.getElementById('cantidadTotal');

let stockProductos;
let carrito = [];

// Buscador pro producto
const formulario = document.querySelector('#formulario');
const botonBuscar = document.querySelector('#botonBuscar');


//   FUNCIONES

// CREO UNA CARD PARA LUEGO GENERARLE TODAS LAS DEMAS

function mostrarProducto(producto) {    
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `<div class="card">
                <img src="${producto.img}" class="img1 card-img-top" alt="..."></img>
                <div class="card-body">
                <h5 class="card-tittle">${producto.nombre}</h5>
                <p id="stock" class="card-text">${producto.detalle}</p>
                <p id="precio" class="card-text">Price: ${producto.precio}</p>
                <button id="agregar${producto.id}" class="btn btn-primary boton-agregar">Add to Cart<i class=""fas fa-shopping-cart></i></button>
                </div>
                </div>`

    contenedorProductos.appendChild(div);
}


// FUNCION DEL BOTON PARA AGREGAR PRODUCTOS AL CARRITO

function capturarBotonAgregar(producto) {
    const boton = document.getElementById(`agregar${producto.id}`);
        boton.addEventListener('click', () => {
        })
}


// EL FOR..EACH PARA GENERAR TODAS LAS CARD

function mostrarTodosLosProductos(stockProductos) {
    stockProductos.forEach((producto) => {
        mostrarProducto(producto);
        capturarBotonAgregar(producto);
    })
}


// Agrego productos al carrito

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id === prodId)

    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === prodId);
        carrito.push(item);
    }

    actualizarCarrito()
}


// ACTUALIZACION DE CARRITO 

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div');
        div.className = ('productoEnCarrito');
        div.innerHTML = `<img src="${prod.img}" class="img1 card-img-top imgcarrito" alt="..."></img>
                        <p>${prod.nombre}</p>
                        <p>Price:$${prod.precio}</p>
                        <p>Quantity: <span id="cantidad">${prod.cantidad}</span></p>
                        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                        `

        contenedorCarrito.appendChild(div);

        localStorage.setItem('carrito', JSON.stringify(carrito));

    })

    contadorCarrito.innerText = carrito.length;
    console.log(carrito);
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
}


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
        actualizarCarrito();
    }
})


// Elimino productos del carrito

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);

    const indice = carrito.indexOf(item);

    carrito.splice(indice, 1);
    actualizarCarrito();
    console.log(carrito);
}


// VACIAR CARRITO

botonVaciar.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarrito();
})


// Boton para agregar productos al carrito, solo quedando activo el boton para que no se sobresature la pagina con las 40 card que tengo disponibles

contenedorProductos.addEventListener("click", (e)=>{
    if(e.target.classList.contains("boton-agregar")){
        let id = parseInt(e.target.id.substring(7))
        agregarAlCarrito(id);

        // LIBRERIA TOASTIFY PARA MENSAJE DEL PRODUCTO AGREGADO

        Toastify({
            text: "Added to Cart",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            className: "toast",
        }).showToast();
    }
})


// BUSCADOR POR PRODUCTO   

const filtrar = () => {
    contenedorProductos.innerHTML = '';

    const textoUsuario = formulario.value.toLowerCase();

    for (let produc1 of stockProductos) {
        let nombreBuscar = produc1.nombre.toLowerCase();
        if (nombreBuscar.indexOf(textoUsuario) !== -1) {
           mostrarProducto(produc1);
           capturarBotonAgregar(produc1);
        }
    }

    if (contenedorProductos.innerHTML === '') {
        contenedorProductos.innerHTML += `<h1 class="busquedaInexistente">Not found...</h1>
                                        `
    }

}

botonBuscar.addEventListener('click', filtrar);             // uso esta porque keyup es molesta          

// formulario.addEventListener('keyup', filtrar);           // filtrar la busqueda a medida que vamos escribiendo




//   FETCH

const obtenerDatos = async () => {
    let response = await fetch('../data/productos.json');
    stockProductos = await response.json();
    mostrarTodosLosProductos(stockProductos);
    }
    
    obtenerDatos();