// var deportes = {
//     // propiedad: valor,
//     conBalon: ["football", "Bascketball", "Rugby"],
//     sinBalon: ["Boxeo", "Surf", "Trekking"]
// };

// var persona = {
//     nombre: "Lukas",
//     edad: 23,
//     estudios: {esProgramador: true}
// };

// // console.log(persona.edad);
// // Asignar un
// persona.nombre = "Perro";
// // console.log(persona.nombre);
// persona.edad = 12;
// // console.log(persona.edad);

// var autos = {};

// autos.marca = ["Fords","Ferrari","BMW"];
// delete autos.marca;
// // console.log(autos);

// var misFunciones = {
//     saludar : function () 
//     {
//         console.log("Hola");
//     }
// }  
// // misFunciones.saludar();

// var atuendos = {
//     manos : [
//         "guantes",
//         "anillos",
//     ],
//     pies : [
//         "medias",
//         "zapatos"
//     ],
// }
// // console.log(atuendos.manos);
// atuendos["piernas"] = ["bermudas", "pantalones"];
// // console.log(atuendos); 

// var comidas = {};
// var diferenciaDeNotaciones = function(propUno, propDos) {
//     comidas[propUno] = ["Frutas", "Verduras "];
//     comidas[propDos] = ["Hamburguesa", "Papas fritas"];
// }
// diferenciaDeNotaciones("Saludable", "noSaludable");
// console.log(comidas);


// Ahora comienza lo avanzado


var libro = {
    autor : "Pedro",
    genero : "Historia",
    año : 2000,
}
// console.log(libro.hasOwnProperty("nombre"));
// console.log(libro.hasOwnProperty("autor"));
let todasPropiedades = Object.keys(libro);

// console.log(todasPropiedades);

let mundo = {
    continente : 7,
    pais : 195,
    oceanos: 5
};

// for (let prop in mundo) {
//     console.log( "Esta es la propiedad " + prop );
//     console.log( "Esta es el valor " + mundo[prop] );
// }

let mascota = {
    animal: "perro",
    raza  : "Pastor alemán",
    amistoso : true,
    dueña : "María López",
    info : function () {
        console.log("Mi perro es un "+ this.raza);
    }
}
mascota.info();

