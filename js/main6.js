// modal
const modalContainer = document.getElementById('modal_container');
const openCart = document.getElementById('open');
const closeCart = document.getElementById('close');
const modalCart = document.getElementById('modalCart');

openCart.addEventListener('click', () =>{
    modalContainer.classList.toggle('modal-active');
});

closeCart.addEventListener('click', () => {
    modalContainer.classList.remove('modal-active');
});

modalContainer.addEventListener('click', () => {
    closeCart.click();
});

modalCart.addEventListener('click', (e) =>{
    e.stopPropagation();
});

//* INVENTARIO DEL PRODUCTOS

class Productos {
    constructor(id,nombre,detalle,categoria,subcategoria,precio,stock) {
        this.id = id;
        this.nombre = nombre;
        this.detalle = detalle;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }
};

const listaProductos = [
    {
        id: 1,
        nombre: "Set Dark Crystal Robe",
        detalle: "Set Robe",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        img: "../img/set/darkcrystal.png"
    },
    {
        id: 2,
        nombre: "Set Majestic Robe",
        detalle: "Set Robe",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        img: "../img/set/majesticrobe.png",
    },
    {
        id: 3,
        nombre: "Set Majestic Light",
        detalle: "Set Light",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        img: "../img/set/majesticlight.png",
    },
    {
        id: 4,
        nombre: "Set Majestic Heavy",
        detalle: "Set Heavy",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        img: "../img/set/majesticheavy.png",
    },
    {
        id: 5,
        nombre: "Set Nightmare Light",
        detalle: "Set Light",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        img: "../img/set/nightmarishlight.png",
    },
    {
        id: 6,
        nombre: "Set Nightmare Heavy",
        detalle: "Set Heavy",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        img: "../img/set/nightmareheavy.png",
    },
    {
        id: 7,
        nombre: "Set Tallum Heavy",
        detalle: "Set Heavy",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        img: "../img/set/tallumheavy.png",
    },
    {
        id: 8,
        nombre: "Set Draconic",
        detalle: "Set Light",
        categoria: "set",
        subcategoria: "S",
        precio: 4000,
        stock: 1000,
        img: "../img/set/draconic.png",
    },
    {
        id: 9,
        nombre: "Set Imperial Crusader",
        detalle: "Set Heavy",
        categoria: "set",
        subcategoria: "S",
        precio: 4000,
        stock: 1000,
        img: "../img/set/imperialcrusader.png",
    },
    {
        id: 10,
        nombre: "Set Major Arcana",
        detalle: "Set Robe",
        categoria: "set",
        subcategoria: "S",
        precio: 4000,
        stock: 1000,
        img: "../img/set/majorarcana.png",
    },
    {
        id: 11,
        nombre: "Arcana Mace",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/weapon/arcanamace.png",
    },
    {
        id: 12,
        nombre: "Draconic Bow",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/weapon/draconicbow.png",
    },
    {
        id: 13,
        nombre: "Heavens Divider",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/weapon/heavendivider.png",
    },
    {
        id: 14,
        nombre: "Basalt Battlehammer",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/weapon/basaltbattlehammer.png",
    },
    {
        id: 15,
        nombre: "Angel Slayer",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/weapon/angelslayer.png",
    },
    {
        id: 16,
        nombre: "Tallum Blade*Dark Legion",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/weapon/tallumblade-darklegionedge.png",
    },
    {
        id: 17,
        nombre: "Demon Splinter",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/weapon/demonsplinter.png",
    },
    {
        id: 18,
        nombre: "Saint Spear",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/weapon/saintspear.png",
    },
    {
        id: 19,
        nombre: "Forgotten Blade",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/weapon/forgottenblade.png",
    },
    {
        id: 20,
        nombre: "Dragon Slayer",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 3500,
        stock: 1000,
        img: "../img/weapon/dragonslayer.png",
    },
    {
        id: 21,
        nombre: "Elysian",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        img: "../img/weapon/elysian.png",
    },
    {
        id: 22,
        nombre: "Soul Bow",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        img: "../img/weapon/soulbow.png",
    },
    {
        id: 23,
        nombre: "Soul Separator",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        img: "../img/weapon/soulseparator.png",
    },
    {
        id: 24,
        nombre: " Tallum Blade*Damascus",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        img: "../img/weapon/tallumblade-damascus.png",
    },
    {
        id: 25,
        nombre: "Dragon Grinder",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        img: "../img/weapon/dragongrinder.png",
    },
    {
        id: 26,
        nombre: "Tallum Glaive",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        img: "../img/weapon/tallumglaive.png",
    },
    {
        id: 27,
        nombre: "Sword Of Miracles",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        img: "../img/weapon/swordsofmiracles.png",
    },
    {
        id: 28,
        nombre: "Dark Legion's Edge",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        img: "../img/weapon/darklegionedge.png",
    },
]

// FUNCIONES

const mostrarProductos = (listaProductos) =>{
    const productsContainer = document.getElementById('product-container');
    listaProductos.forEach(product => {
        const card = document.createElement('card');
        card.innerHTML +=   `<div class="card" style:"width: 18rem>
                            <img src="${product.img}" class="card-img-top" alt="..."
                                <div class="card-body">
                                    <h5 class="card-tittle">${product.nombre}</h5>
                                    <p id="stock" class="card-text">${product.detalle}</p>
                                    <p id="precio" class="card-text">Price: ${product.precio}</p>
                                    <button class="btn btn-primary" id="button${product.id}">Add to Cart</button>
                                </div>
                            </div>`
                            
                            
        productsContainer.appendChild(card);
        const button = document.getElementById(`button${product.id}`);
        button.addEventListener('click', ()=>{
            cart(product.id);
            alert(`Agregaste ${product.nombre}`)
        })
    })
};

mostrarProductos(listaProductos);






// class rewardDonaciones {
//     constructor(precio, coins) { //img (adentro -PREGUNTAR SI SE DECLARA O NO-)
//         this.precio = precio;
//         this.coins = coins;
//         //this.img = img;
//     };
// };

// class Cliente {
//     constructor(nombre, email, telefono, productosComprados, donacionRealizada) {
//         this.nombre = nombre;
//         this.email = email;
//         this.telefono = telefono;
//         this.productosComprados = productosComprados;
//         this.donacionRealizada = donacionRealizada;
//     };
// };


// const listaProductos = [
//     {
//         id: 1,
//         nombre: "Set Dark Crystal Robe",
//         detalle: "Set Robe",
//         categoria: "set",
//         subcategoria: "A",
//         precio: 1500,
//         stock: 1000,
//         img: "../img/set/darkcrystal.png"
//     },
//     {
//         id: 2,
//         nombre: "Set Majestic Robe",
//         detalle: "Set Robe",
//         categoria: "set",
//         subcategoria: "A",
//         precio: 1500,
//         stock: 1000,
//         img: "./img/set/majesticrobe.png",
//     },
//     {
//         id: 3,
//         nombre: "Set Majestic Light",
//         detalle: "Set Light",
//         categoria: "set",
//         subcategoria: "A",
//         precio: 1500,
//         stock: 1000,
//         img: "./img/set/majesticlight.png",
//     },
//     {
//         id: 4,
//         nombre: "Set Majestic Heavy",
//         detalle: "Set Heavy",
//         categoria: "set",
//         subcategoria: "A",
//         precio: 1500,
//         stock: 1000,
//         img: "./img/set/majesticheavy.png",
//     },
//     {
//         id: 5,
//         nombre: "Set Nightmare Light",
//         detalle: "Set Light",
//         categoria: "set",
//         subcategoria: "A",
//         precio: 1500,
//         stock: 1000,
//         img: "./img/set/nightmarelight.png",
//     },
//     {
//         id: 6,
//         nombre: "Set Nightmare Heavy",
//         detalle: "Set Heavy",
//         categoria: "set",
//         subcategoria: "A",
//         precio: 1500,
//         stock: 1000,
//         img: "./img/set/nightmareheavy.png",
//     },
//     {
//         id: 7,
//         nombre: "Set Tallum Heavy",
//         detalle: "Set Heavy",
//         categoria: "set",
//         subcategoria: "A",
//         precio: 1500,
//         stock: 1000,
//         img: "./img/set/tallumlight.png",
//     },
//     {
//         id: 8,
//         nombre: "Set Draconic",
//         detalle: "Set Light",
//         categoria: "set",
//         subcategoria: "S",
//         precio: 4000,
//         stock: 1000,
//         img: "./img/set/draconic.png",
//     },
//     {
//         id: 9,
//         nombre: "Set Imperial Crusader",
//         detalle: "Set Heavy",
//         categoria: "set",
//         subcategoria: "S",
//         precio: 4000,
//         stock: 1000,
//         img: "./img/set/imperialcrusader.png",
//     },
//     {
//         id: 10,
//         nombre: "Set Major Arcana",
//         detalle: "Set Robe",
//         categoria: "set",
//         subcategoria: "S",
//         precio: 4000,
//         stock: 1000,
//         img: "./img/set/majorarcana.png",
//     },
//     {
//         id: 11,
//         nombre: "Arcana Mace",
//         detalle: "Weapon S",
//         categoria: "Weapons",
//         subcategoria: "S",
//         precio: 3500,
//         stock: 1000,
//         img: "./img/weapon/arcanamace.png",
//     },
//     {
//         id: 12,
//         nombre: "Draconic Bow",
//         detalle: "Weapon S",
//         categoria: "Weapons",
//         subcategoria: "S",
//         precio: 3500,
//         stock: 1000,
//         img: "./img/weapon/draconicbow.png",
//     },
//     {
//         id: 13,
//         nombre: "Heavens Divider",
//         detalle: "Weapon S",
//         categoria: "Weapons",
//         subcategoria: "S",
//         precio: 3500,
//         stock: 1000,
//         img: "./img/weapon/heavendivider.png",
//     },
//     {
//         id: 14,
//         nombre: "Basalt Battlehammer",
//         detalle: "Weapon S",
//         categoria: "Weapons",
//         subcategoria: "S",
//         precio: 3500,
//         stock: 1000,
//         img: "./img/weapon/basaltbattlehammer.png",
//     },
//     {
//         id: 15,
//         nombre: "Angel Slayer",
//         detalle: "Weapon S",
//         categoria: "Weapons",
//         subcategoria: "S",
//         precio: 3500,
//         stock: 1000,
//         img: "./img/weapon/angelslayer.png",
//     },
//     {
//         id: 16,
//         nombre: "Tallum Blade*Dark Legion",
//         detalle: "Weapon S",
//         categoria: "Weapons",
//         subcategoria: "S",
//         precio: 3500,
//         stock: 1000,
//         img: "./img/weapon/tallumblade-darklegionedge.png",
//     },
//     {
//         id: 17,
//         nombre: "Demon Splinter",
//         detalle: "Weapon S",
//         categoria: "Weapons",
//         subcategoria: "S",
//         precio: 3500,
//         stock: 1000,
//         img: "./img/weapon/demonsplinter.png",
//     },
//     {
//         id: 18,
//         nombre: "Saint Spear",
//         detalle: "Weapon S",
//         categoria: "Weapons",
//         subcategoria: "S",
//         precio: 3500,
//         stock: 1000,
//         img: "./img/weapon/saintspear.png",
//     },
//     {
//         id: 19,
//         nombre: "Forgotten Blade",
//         detalle: "Weapon S",
//         categoria: "Weapons",
//         subcategoria: "S",
//         precio: 3500,
//         stock: 1000,
//         img: "./img/weapon/forgottenblade.png",
//     },
//     {
//         id: 20,
//         nombre: "Dragon Slayer",
//         detalle: "Weapon A",
//         categoria: "Weapons",
//         subcategoria: "A",
//         precio: 3500,
//         stock: 1000,
//         img: "./img/weapon/dragonslayer.png",
//     },
//     {
//         id: 21,
//         nombre: "Elysian",
//         detalle: "Weapon A",
//         categoria: "Weapons",
//         subcategoria: "A",
//         precio: 2500,
//         stock: 1000,
//         img: "./img/weapon/elysian.png",
//     },
//     {
//         id: 22,
//         nombre: "Soul Bow",
//         detalle: "Weapon A",
//         categoria: "Weapons",
//         subcategoria: "A",
//         precio: 2500,
//         stock: 1000,
//         img: "./img/weapon/soulbow.png",
//     },
//     {
//         id: 23,
//         nombre: "Soul Separator",
//         detalle: "Weapon A",
//         categoria: "Weapons",
//         subcategoria: "A",
//         precio: 2500,
//         stock: 1000,
//         img: "./img/weapon/soulseparator.png",
//     },
//     {
//         id: 24,
//         nombre: " Tallum Blade*Damascus",
//         detalle: "Weapon A",
//         categoria: "Weapons",
//         subcategoria: "A",
//         precio: 2500,
//         stock: 1000,
//         img: "./img/weapon/tallumblade-damascus.png",
//     },
//     {
//         id: 25,
//         nombre: "Dragon Grinder",
//         detalle: "Weapon A",
//         categoria: "Weapons",
//         subcategoria: "A",
//         precio: 2500,
//         stock: 1000,
//         img: "./img/weapon/dragongrinder.png",
//     },
//     {
//         id: 26,
//         nombre: "Tallum Glaive",
//         detalle: "Weapon A",
//         categoria: "Weapons",
//         subcategoria: "A",
//         precio: 2500,
//         stock: 1000,
//         img: "../img/weapon/tallumglaive.png",
//     },
//     {
//         id: 27,
//         nombre: "Sword Of Miracles",
//         detalle: "Weapon A",
//         categoria: "Weapons",
//         subcategoria: "A",
//         precio: 2500,
//         stock: 1000,
//         img: "./img/weapon/swordofmiracles.png",
//     },
//     {
//         id: 28,
//         nombre: "Dark Legion's Edge",
//         detalle: "Weapon A",
//         categoria: "Weapons",
//         subcategoria: "A",
//         precio: 2500,
//         stock: 1000,
//         img: "./img/weapon/darklegionedge.png",
//     },
// ]

// // const listaDonaciones = [
// //     {
// //         precio: 100,
// //         coins: 100,
// //         //img: "",
// //     },
// //     {
// //         precio: 500,
// //         coins: 550,
// //         //img: "",
// //     },
// //     {
// //         precio: 1000,
// //         coins: 1200,
// //         //img: "",
// //     },
// //     {
// //         precio: 1500,
// //         coins: 2000,
// //         //img: "",
// //     },
// //     {
// //         precio: 2000,
// //         coins: 3000,
// //         //img: "",
// //     },
// //     {
// //         precio: 5000,
// //         coins: 7500,
// //         //img: "",
// //     },
// //     {
// //         precio: 10000,
// //         coins: 20000,
// //         //img: "",
// //     },
// // ]



// // const agregarProd = () => {
// //     let id = parseInt(prompt("ID del producto"));
// //     let nombre = prompt("Nombre del producto");
// //     let detalle = prompt("Detalle del producto");
// //     let categoria = prompt("Categoria del producto");
// //     let subcategoria = prompt("Subcategoria del producto");
// //     let precio = parseFloat(prompt("Precio del producto"));
// //     let stock = parseInt(prompt("Stock del producto"));
// //     let prod = new producto(id, nombre, detalle, categoria, subcategoria, precio, stock);
// //     listaProductos.push(prod);
// //     console.log(listaProductos);

// //     listaProductos.push(prod);

// //     console.log(listaProductos);
// // }

// // for( let producto of listaProductos) {
// //     console.log(`Este producto es ${producto.nombre}, su ID es ${producto.id}, detalle ${producto.detalle}, categoria ${producto.categoria}, subcategoria ${producto.subcategoria}, precio ${producto.precio}, stock ${producto.stock}`);
// // }



// // const agregarDonacion = () => {
// //     let precio = parseFloat(prompt("Agregar precio de la donacion"))
// //     let coins = parseInt(prompt("Agregar Coins por donacion"))
// //     let dona = new rewardDonaciones(precio, coins);
// //     listaDonaciones.push(dona);
// //     console.log(listaDonaciones);

// //     listaDonaciones.push(dona);

// //     console.log(listaDonaciones);
// // }

// // for( let rewardDonaciones of listaDonaciones) {
// //     console.log(`La donacion es de $${rewardDonaciones.precio} y su reward es de ${rewardDonaciones.coins} coins`);
// // }


// const agregarProd = () => {
//     let id = parseInt(document.querySelector("#id").value);
//     let nombre = document.querySelector("#nombre").value; //en un input con ID nombre
//     let detalle = document.querySelector("#detalle").value;
//     let categoria =  document.querySelector("#categoria").value;
//     let subcategoria =  document.querySelector("#subcategoria").value;
//     let precio = parseFloat(document.querySelector("#precio").value);
//     let stock = parseInt( document.querySelector("#stock").value);
    
//     let productoNuevo = new producto(id, nombre, detalle, categoria, subcategoria, precio, stock);
//     listaProductos.push(productoNuevo);
    
//     localStorage.setItem()

//     return productoNuevo;
// }

// listaProductos.forEach(el => {
//     let nodo = document.createElement("div");
//     nodo.className= "producto"`
//     nodo.setAttribute("id", el.id)
//     nodo.innerHTML = `<p>${el.id}</p>
//                     <img>${el.img}</img>
//                     <h3>${el.nombre}</h3>
//                     <p>${el.detalle}</p>
//                     <p>${el.categoria}</p>
//                     <p>${el.subcategoria}</p>
//                     <p>${el.precio}</p>
//                     <p>${el.stock}</p>`;

//     document.getElementById("productos").appendChild(nodo);
// })



// // const agregarDonacion = () => {
// //     let precio = parseInt(document.querySelector("#precio").value);
// //     let coins = parseInt(document.querySelector("#coins").value);

// //     let dona = new rewardDonaciones(precio, coins);
// //     listaDonaciones.push(dona);
// //     return dona;
// // }

// // listaDonaciones.forEach(el => {
// //     let nodo2 = document.createElement("div");
// //     nodo2.className= "donaciones"
// //     nodo2.innerHTML = `<p>${el.precio}</p>
// //                     <h3>${el.coins}</h3>`;

// //     document.getElementById("donaciones").appendChild(nodo2);
// // })



// // EVENTOS

// // Submit (La idea es buscar el elemento solicitado por el usuario)

// let miFormulario = document.getElementById("formulario");
// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e){
//     e.preventDefault();
//     console.log("Buscando lo pedido");
// }


// // Input (Para que vaya dando opciones a medida que voy tipeando)

// let InputText = document.querySelector("#nombre");

// InputText.addEventListener("input", ()=>{
//     console.log(`Estas buscando: ${InputText.value}`);
// })



