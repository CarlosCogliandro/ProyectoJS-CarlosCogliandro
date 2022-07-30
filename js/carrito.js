// // crear funcion para agregar prod en carrito

const shoppingCart = [];

const cart = (productId) =>{
    const cartContainer = document.getElementById('cart-container');
    
    const mostrarEnCarrito = () =>{
        let product = listaProductos.find(product => product.id == productId)
        shoppingCart.push(product);
        localStorage.setItem("listaProductos", JSON.stringify(shoppingCart));
        let div = document.createElement('div');
        div.classList.add('productsInCart');
        div.innerHTML = `<img src="${product.img}" class="imgcarrito" alt="...">
                        <p>${product.nombre}</p>
                        <p>${product.detalle}</p>
                        <p>Price: ${product.precio}</p>
                        <button class="btn btn-danger btn-sm" id="delete${product.id}">X</button>`
        cartContainer.appendChild(div);
        
        let buttonDelete = document.getElementById(`delete${product.id}`)
        buttonDelete.addEventListener('click', (e)=>{
        deleteProduct(e, product.id);
        })

    }

    mostrarEnCarrito()
}


function deleteProduct(e){
    let btnClicked = e.target;
    btnClicked.parentElement.remove()
}

































// const shoppingCart = [];

// const cart = (productId) => {
//     const shoppingCart = JSON.parse(localStorage.getItem("listaProductos")) || [];
    
//     console.log(shoppingCart.some(product => product.id == productId))
//     console.log(shoppingCart.findIndex(product => product.id === productId))
    
//     let indice = shoppingCart.findIndex(product => product.id === productId)


//     console.log(shoppingCart[indice].cantidad)


//     let product = listaProductos.find(product => product.id == productId)
//     shoppingCart.push(...product, cantidad);
//     localStorage.setItem("listaProductos", JSON.stringify(shoppingCart));
//     mostrarEnCarrito(product);
// }

// const mostrarEnCarrito = (product) => {
//     const cartContainer = document.getElementById('cart-container');
//     let div = document.createElement('div');
//     div.classList.add('productsInCart');
//     div.innerHTML = `<img src="${product.img}" class="imgcarrito" alt="...">
//                             <p>${product.nombre}</p>
//                             <p>${product.detalle}</p>
//                             <p>Price: ${product.precio}</p>
//                             <button class="btn btn-danger btn-sm" id="delete${product.id}">X</button>`
//             cartContainer.appendChild(div);

//     let buttonDelete = document.getElementById(`delete${product.id}`)
//     buttonDelete.addEventListener('click', (e)=>{
//     deleteProduct(e, product.id);
//     })
// }

// function deleteProduct(e, productId){
//     const shoppingCart = JSON.parse(localStorage.getItem("listaProductos"));
//     let carritoFinal = shoppingCart.filter(product => product.id !== productId)
//     localStorage.setItem("listaProductos", JSON.stringify(carritoFinal))
//     let btnclicked = e.terget
//     btnclicked.parentElement.remove();
// }






















