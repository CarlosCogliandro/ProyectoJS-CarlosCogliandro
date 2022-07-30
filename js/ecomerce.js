const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('Vaciar-carrito');
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () =>{
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito();
    }
})

botonVaciar.addEventListener('click', ()=>{
    carrito.length = 0;
    actualizarCarrito();
}) 


stockProductos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('producto')
    div.innerHTML= `<div class="card">
                    <img src="${producto.img}" class="card-img-top" alt="..."
                    <div class="card-body">
                    <h5 class="card-tittle">${producto.nombre}</h5>
                    <p id="stock" class="card-text">${producto.detalle}</p>
                    <p id="precio" class="card-text">Price: ${producto.precio}</p>
                    <button id="agregar${producto.id}" class="btn btn-primary boton-agregar">Add to Cart<i class=""fas fa-shopping-cart></i></button>
                    </div>
                    </div>`
                    
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })

})

let agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId);

    if (existe){
        const prod = carrito.map (prod =>{
            if (prod.id === prodId)
                prod.cantidad++
        })
    } else {
        const item = stockProductos.find((prod) => prod.id == prodId)
        carrito.push(item);
        console.log(carrito);
    }
    
    actualizarCarrito();
}

const eliminarDelCarrito = (prodId) =>{
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
}


const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div =document.createElement('div');
        div.classname = ('productoEnCarrito');
        div.innerHTML = `<p>${prod.nombre}</p>
                        <p>Price: $${prod.precio}</p>
                        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
                        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div);

        localStorage.setItem('carrito', JSON.stringify(carrito));
    })

    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
}