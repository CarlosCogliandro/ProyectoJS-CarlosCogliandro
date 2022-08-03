
const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('vaciar-carrito');
const contadorCarrito = document.getElementById('contadorCarrito');
const cantidad = document.getElementById('cantidad');
const precioTotal = document.getElementById('precioTotal');
const cantidadTotal = document.getElementById('cantidadTotal');


class Productos {
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


let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
        actualizarCarrito();
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito();
})


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


function capturarBotonAgregar(producto) {
    const boton = document.getElementById(`agregar${producto.id}`);

    boton.addEventListener('click', () => {
        
    })
}


function mostrarTodosLosProductos() {
    stockProductos.forEach((producto) => {
        mostrarProducto(producto)
        capturarBotonAgregar(producto)
    })
}


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


const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);

    const indice = carrito.indexOf(item);

    carrito.splice(indice, 1);
    actualizarCarrito();
    console.log(carrito);
}

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


// BUSCADOR POR PRODUCTO   

const formulario = document.querySelector('#formulario');
// const botonBuscar = document.querySelector('#botonBuscar');      LO DEJO COMENTADO PORQUE BUSCO DIRECTAMENTE POR KEYUP

const filtrar = () => {
    contenedorProductos.innerHTML = '';

    const textoUsuario = formulario.value.toLowerCase();

    for (let produc1 of stockProductos) {
        let nombreBuscar = produc1.nombre.toLowerCase();
        if (nombreBuscar.indexOf(textoUsuario) !== -1) {
           mostrarProducto(produc1)
           capturarBotonAgregar(produc1)
        }
    }

    if (contenedorProductos.innerHTML === '') {
        contenedorProductos.innerHTML += `<li>Not found...</li>
                                        `
    }

}

// botonBuscar.addEventListener('click', filtrar)                   LO DEJO COMENTADO PORQUE BUSCO DIRECTAMENTE POR KEYUP

formulario.addEventListener('keyup', filtrar);

filtrar();



contenedorProductos.addEventListener("click", (e)=>{
    if(e.target.classList.contains("boton-agregar")){
        let id=parseInt(e.target.id.substring(7))
        console.log(id)
        agregarAlCarrito(id);

        // Swal.fire({
        //     tittle: 'Tu producto fue agregado',
        //     text: 'Tu producto fue agregado',
        //     icon: 'success',
        //     confirmButtonText: 'Cool',  
        //     timer: '1000'
        // })

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








// EVENTOS

// Submit (La idea es buscar el elemento solicitado por el usuario)

// let miFormulario = document.getElementById("formulario");
// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e){
//     e.preventDefault();
//     console.log("Buscando lo pedido");
// }


// // Input (Para que vaya dando opciones a medida que voy tipeando)

// let InputText = document.getElementById("nombre");

// InputText.addEventListener("input", ()=>{
//     console.log(`Estas buscando: ${InputText.value}`);
// });