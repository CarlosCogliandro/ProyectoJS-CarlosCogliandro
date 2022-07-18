
class producto {
    constructor(id,nombre,detalle,categoria,subcategoria,precio,stock) { //img (adentro -PREGUNTAR SI SE DECLARA O NO-)
        this.id = id;
        this.nombre = nombre;
        this.detalle = detalle;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    };
};


class rewardDonaciones {
    constructor(precio, coins) { //img (adentro -PREGUNTAR SI SE DECLARA O NO-)
        this.precio = precio;
        this.coins = coins;
        //this.img = img;
    };
};

class Cliente {
    constructor(nombre, email, telefono, productosComprados, donacionRealizada) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.productosComprados = productosComprados;
        this.donacionRealizada = donacionRealizada;
    };
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
        img: "./img/darkcrystal.png"
    },
    {
        id: 2,
        nombre: "Set Majestic Robe",
        detalle: "Set Robe",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        //img: "",
    },
    {
        id: 3,
        nombre: "Set Majestic Light",
        detalle: "Set Light",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        //img: "",
    },
    {
        id: 4,
        nombre: "Set Majestic Heavy",
        detalle: "Set Heavy",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        //img: "",
    },
    {
        id: 5,
        nombre: "Set Nightmare Light",
        detalle: "Set Light",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        //img: "",
    },
    {
        id: 6,
        nombre: "Set Nightmare Heavy",
        detalle: "Set Heavy",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        //img: "",
    },
    {
        id: 7,
        nombre: "Set Tallum Heavy",
        detalle: "Set Heavy",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        //img: "",
    },
    {
        id: 8,
        nombre: "Set Draconic",
        detalle: "Set Light",
        categoria: "set",
        subcategoria: "S",
        precio: 4000,
        stock: 1000,
        //img: "",
    },
    {
        id: 9,
        nombre: "Set Imperial Crusader",
        detalle: "Set Heavy",
        categoria: "set",
        subcategoria: "S",
        precio: 4000,
        stock: 1000,
        //img: "",
    },
    {
        id: 10,
        nombre: "Set Major Arcana",
        detalle: "Set Robe",
        categoria: "set",
        subcategoria: "S",
        precio: 4000,
        stock: 1000,
        //img: "",
    },
    {
        id: 11,
        nombre: "Arcana Mace",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        //img: "",
    },
    {
        id: 12,
        nombre: "Draconic Bow",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        //img: "",
    },
    {
        id: 13,
        nombre: "Heavens Divider",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        //img: "",
    },
    {
        id: 14,
        nombre: "Basalt Battlehammer",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        //img: "",
    },
    {
        id: 15,
        nombre: "Angel Slayer",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        //img: "",
    },
    {
        id: 16,
        nombre: "Tallum Blade*Dark Legion",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        //img: "",
    },
    {
        id: 17,
        nombre: "Demon Splinter",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        //img: "",
    },
    {
        id: 18,
        nombre: "Saint Spear",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        //img: "",
    },
    {
        id: 19,
        nombre: "Forgotten Blade",
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        //img: "",
    },
    {
        id: 20,
        nombre: "Dragon Slayer",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 3500,
        stock: 1000,
        //img: "",
    },
    {
        id: 21,
        nombre: "Elysian",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        //img: "",
    },
    {
        id: 22,
        nombre: "Soul Bow",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        //img: "",
    },
    {
        id: 23,
        nombre: "Soul Separator",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        //img: "",
    },
    {
        id: 24,
        nombre: " Tallum Blade*Damascus",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        //img: "",
    },
    {
        id: 25,
        nombre: "Dragon Grinder",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        //img: "",
    },
    {
        id: 26,
        nombre: "Tallum Glaive",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        //img: "",
    },
    {
        id: 27,
        nombre: "Sword Of Miracles",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        //img: "",
    },
    {
        id: 28,
        nombre: "Dark Legion's Edge",
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        //img: "",
    },
]

const listaDonaciones = [
    {
        precio: 100,
        coins: 100,
        //img: "",
    },
    {
        precio: 500,
        coins: 550,
        //img: "",
    },
    {
        precio: 1000,
        coins: 1200,
        //img: "",
    },
    {
        precio: 1500,
        coins: 2000,
        //img: "",
    },
    {
        precio: 2000,
        coins: 3000,
        //img: "",
    },
    {
        precio: 5000,
        coins: 7500,
        //img: "",
    },
    {
        precio: 10000,
        coins: 20000,
        //img: "",
    },
]



// const agregarProd = () => {
//     let id = parseInt(prompt("ID del producto"));
//     let nombre = prompt("Nombre del producto");
//     let detalle = prompt("Detalle del producto");
//     let categoria = prompt("Categoria del producto");
//     let subcategoria = prompt("Subcategoria del producto");
//     let precio = parseFloat(prompt("Precio del producto"));
//     let stock = parseInt(prompt("Stock del producto"));
//     let prod = new producto(id, nombre, detalle, categoria, subcategoria, precio, stock);
//     listaProductos.push(prod);
//     console.log(listaProductos);

//     listaProductos.push(prod);

//     console.log(listaProductos);
// }

// for( let producto of listaProductos) {
//     console.log(`Este producto es ${producto.nombre}, su ID es ${producto.id}, detalle ${producto.detalle}, categoria ${producto.categoria}, subcategoria ${producto.subcategoria}, precio ${producto.precio}, stock ${producto.stock}`);
// }



// const agregarDonacion = () => {
//     let precio = parseFloat(prompt("Agregar precio de la donacion"))
//     let coins = parseInt(prompt("Agregar Coins por donacion"))
//     let dona = new rewardDonaciones(precio, coins);
//     listaDonaciones.push(dona);
//     console.log(listaDonaciones);

//     listaDonaciones.push(dona);

//     console.log(listaDonaciones);
// }

// for( let rewardDonaciones of listaDonaciones) {
//     console.log(`La donacion es de $${rewardDonaciones.precio} y su reward es de ${rewardDonaciones.coins} coins`);
// }


const agregarProd = () => {
    let id = parseInt(document.querySelector("#id").value);
    let nombre = document.querySelector("#nombre").value; //en un input con ID nombre
    let detalle = document.querySelector("#detalle").value;
    let categoria =  document.querySelector("#categoria").value;
    let subcategoria =  document.querySelector("#subcategoria").value;
    let precio = parseFloat(document.querySelector("#precio").value);
    let stock = parseInt( document.querySelector("#stock").value);
    
    let productoNuevo = new producto(id, nombre, detalle, categoria, subcategoria, precio, stock);
    listaProductos.push(productoNuevo);
    return productoNuevo;
}

listaProductos.forEach(el => {
    let nodo = document.createElement("div");
    nodo.className= "producto"
    nodo.setAttribute("id", el.id)
    nodo.innerHTML = `<p>${el.id}</p>
                    <p>${el.img}</p>
                    <h3>${el.nombre}</h3>
                    <p>${el.detalle}</p>
                    <p>${el.categoria}</p>
                    <p>${el.subcategoria}</p>
                    <p>${el.precio}</p>
                    <p>${el.stock}</p>`;

    document.getElementById("productos").appendChild(nodo);
})



const agregarDonacion = () => {
    let precio = parseInt(document.querySelector("#precio").value);
    let coins = parseInt(document.querySelector("#coins").value);

    let dona = new rewardDonaciones(precio, coins);
    listaDonaciones.push(dona);
    return dona;
}

listaDonaciones.forEach(el => {
    let nodo2 = document.createElement("div");
    nodo2.className= "donaciones"
    nodo2.innerHTML = `<p>${el.precio}</p>
                    <h3>${el.coins}</h3>`;

    document.getElementById("donaciones").appendChild(nodo2);
})