/*1. Cree una clase que permita simular una mascota, para un sistema de atención veterinaria:

La mascota deberá tener:

nombre

responsable (Debe ser un atributo de otra clase, llamada usuario con (nombre, apellido, id))

tipo: perro o gato

edad

vacunas (sí o no. Sí solo si están completas / no, si están incompletas)

2. Cree un sistema que permita

a. Ingresar los datos para una mascota. (Debe imprimir los datos de la mascota en el formato:

Nombre:

Responsable:

Tipo:

Edad:

Vacunas: ) [NO PUEDE IMPRIMIR EL OBJETO DE MANERA LITERAL]

b. Ingresar los datos para un usuario. (nombre, apellido, id ) [NO PUEDE IMPRIMIR EL OBJETO DE MANERA LITERAL]

c. Seleccionar la opción FIN, para cerrar el programa.

NOTA: Para imprimir los datos de mascota o usuario, debe llamar a una función definida en la clase Mascota/Usuario, según corresponda.
*/

class usuario{
    constructor(nombre,apellido,id){
        this.nombre = nombre
        this.apellido = apellido
        this.id = id
    }
    imprimir (objeto){
        for(const clave in objeto){
            alert(`${clave} : ${objeto[clave]}`)
        }

    }
}

class mascota {
    constructor (nombre,reponsable,tipo,edad,vacunas){
        this.nombre = nombre
        this.reponsable = reponsable
        this.tipo = tipo
        this.edad = edad
        this.vacunas = vacunas
    }
    imprimir(){
        for(const clave in objeto){
            alert(`${clave} : ${objeto[clave]}`)
        }
    }
}

alert("Bienvenido al sistema de Registro Animal")
let usuarioRegistrado = {}
let mascotaRegistrada = {}
let salida = false
while(salida != true){
    let nombreMascota = prompt("Ingrese el nombre de la mascota")
    alert("Le pediremos los datos del dueño")
    let nombre = prompt("Ingrese su nombre")
    let apellido = prompt("Ingrese su apellido")
    let id = prompt("Ingrese su DNI")
    alert("Perfecto, sigamos con los datos de su mascota")
    let tipoMascota = prompt("Ingrese la raza")
    let edadMascota = prompt("Ingrese la edad de su mascota")
    let vacunasMascota = prompt("Esta vacunado? Si / No")
    
    usuarioRegistrado = new usuario(nombre,apellido,id)
    mascotaRegistrada = new mascota(nombreMascota,id,tipoMascota,edadMascota,vacunasMascota)


    salida = confirm("Los datos ingresados son correctos?")
}

let verMascota = confirm("Quiere ver los datos de la mascota?")
if(verMascota){
    mascotaRegistrada.imprimir(mascotaRegistrada)
}

let verUsuario = confirm("Quiere ver los datos del Usuario?")
if(verUsuario){
    usuarioRegistrado.imprimir(usuarioRegistrado)
}
