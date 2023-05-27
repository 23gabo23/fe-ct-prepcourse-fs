/*
let listaDeCompras = [];

listaDeCompras[0] = "Tomates";
listaDeCompras[1] = "Lechuga";
 listaDeCompras[2] = "Cebolla";
 listaDeCompras[0] = "Remolacha";

 console.log(listaDeCompras.length);
 let elementoDelArray = listaDeCompras[1];
 console.log(elementoDelArray);
 -------------------------------------
 
        METODOS DE ARRAY :

 let colores = ["amarillo", "azul"];

 colores.push("perro")
 colores.shift();
 colores.unshift("Rojo");
 colores.pop();
 console.log(colores);

 console.log(colores.includes("azul"));
 let pintores = ["Picasso","Velazquez","Van gogh"];
 
 let includeDali = pintores.includes("Dalí");
 //  let includeDali = pintores.includes("Gabriel");
 
 console.log(pintores);
 
 
 */
 /*
var numeros = [1,2,3,4,5,6,7,8,9,10];

let cumpleCondicion = numeros.every((num) => {
    return num > 5
});

console.log(cumpleCondicion);

var numeros = [10,20,30,40,50,60,70,80];

let condicion = numeros.every((num) => {
    return num > 0;
});

console.log(condicion);

        ¿PRIMOS MAYORES?

let primos = [15, 22, 24, 25, 26, 20];

let condicion = primos.every((num) => {
    return num > 18;
});

console.log(condicion);


let color = ["Ne","Nl","Am","Ro","Ve"];

// color.push("Gr","Mor"); Agrega los que quirea
// color.pop("Ro", "Ve"); solo eleimina el ultimo aún con especificar.
color.shift("Ne", "Nl"); // elimina uno principio.
color.unshift("Per","Gat"); //Agregar al principio los que quiera.

console.log(color);

        ARREGLAR ARREGLO CON SPLIT Y JOIN.

let palabra = "Andersom";

let palabraSeparada = palabra.split("");

palabraSeparada.pop();
palabraSeparada.push("n");
// console.log(palabraSeparada);
let palabraArreglada = palabraSeparada.join("");
console.log(palabraArreglada);


FOREACH = PARA CADA UNO
let numeros = [1,2,3,4,5,3,3,6,7];
//  numeros.forEach((num) => console.log(num));

// numeros.forEach(num => {if(num === 3){
    //     console.log(num);}                    //Averigua cuantos 3 hay en el array y los imprime
    // });
    
    let masUno = numeros.map((num) => {return num + 1 ;});
    console.log(masUno);

    */

    // function combinarNombres(nombre, apellido) {
    //     // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
    //     // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
    //     // Tu código:
    //     let nombreCon = [nombre, apellido];
    //     let nombreArr = nombreCon.join(" ");
    //     return nombreArr;
    //  }

    //  console.log(combinarNombres("Anderson", "Hernández"));
    //  console.log(combinarNombres("Ramiro", "Montañéz"));
    //  console.log(combinarNombres("Pablo", "Picapiedra"));
    //  console.log(combinarNombres("Chancho", "Picapiedra"));
   

    // function obtenerSaludo(nombre) {
    //     // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
    //     // Ejemplo: "Martin" ---> "Hola Martin!"
    //     // Tu código:
    //     let saludar = ["Hola ", nombre, "!"];
    //     let segunda = saludar.join("");
    //     return segunda;
    //  }

    //  console.log(obtenerSaludo("federico"));
    //  console.log(obtenerSaludo("Javier"));
    //  console.log(obtenerSaludo("Julian"));

    // function obtenerAreaRectangulo(alto, ancho) {
    //     // Retornar el área de un rectángulo teniendo su altura y ancho.
    //     // Tu código:
    //     let area = alto * ancho;
    //     return area;
    //  }
    //  console.log(obtenerAreaRectangulo(7, 15));
    //  console.log(obtenerAreaRectangulo(3, 10));
    //  console.log(obtenerAreaRectangulo(12, 50));

    // function deEuroAdolar(euro) {
    //     // Supongamos que 1 euro equivale a 1.20 dólares.
    //     // Debes calcular el valor recibido como argumento pasándolo a dolares.
    //     // Tu código:
    //     let dolar = 1.20;
     
    //     let proceso = dolar * euro;
    //     return proceso;
        
    //  }
    //  console.log(deEuroAdolar(3));


    // function esVocal(letra) {
    //     // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
    //     // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
    //     // Si no es vocal, tambien debe retornar "Dato incorrecto".
    //     // Tu código:
    //     if (letra === "a"|| letra === "e"|| letra === "i"|| letra === "o"|| letra === "u") {
    //        return "Es vocal";
    //     } else if( letra.lenght != 1 ) {
    //        return "Dato incorrecto";
    //     } else if (letra !== "") {
    //        return "Dato incorrecto";
    //     }
    //  }
    //  console.log(esVocal("a"));
    //  console.log(esVocal("ab"));
    //  console.log(esVocal(1234));
    //  console.log(esVocal("b"));
    //  console.log(esVocal("perro"));


    // --------------------------------------------------
    // --------------------------------------------------
    // --------------------------------------------------
    // --------------------------------------------------
    // --------------------------------------------------
    // --------------------------------------------------

                // HOMEWORK

                // 1

                // function obtenerMayor(x, y) {
                //     // "x" e "y" son números enteros.
                //     // Retornar el número más grande.
                //     // Si son iguales, retornar cualquiera de los dos.
                //     // Tu código:
                //     // Number. isInteger()

                //     let aleat = [x, y];

                //     if(x > y){
                //         return x ;
                //     } else if(y === x){
                //         return "Los dos son números iguales " + y;
                //     }  else if(x === y){
                //         return "Los dos son números iguales " + x;
                //     } else {
                //         return y ;
                //     }
                //  }
                //  console.log(obtenerMayor(1, 2));
                //  console.log(obtenerMayor(10, 2));
                //  console.log(obtenerMayor(1, 22));
                //  console.log(obtenerMayor(200, 200));

        
                // Siiiiiiii

                // 2.

                 
                //  function mayoriaDeEdad(edad) {
                //     // Determinar si la persona puede ingresar al evento según su edad.
                //     // Si tiene 18 años ó más debe retornar el string: "Allowed".
                //     // Caso contrario: "Not allowed".
                //     // Tu código:

                //     if(edad >= 18 ){
                //         return "Allowed" ;
                //     } else {
                //         return "Not allowed";
                //     }
                //  }
                //  console.log(mayoriaDeEdad(-12));
                //  console.log(mayoriaDeEdad(12));
                //  console.log(mayoriaDeEdad(112));
                //  console.log(mayoriaDeEdad(17));
                //  console.log(mayoriaDeEdad(18));
                //  console.log(mayoriaDeEdad(19));


            
                // Siiiiiiii



                // 3.                 
                //  function conection(status) {
                //     // El argumento "status" representa el estado de conexión de un usuario.
                //     // Si el estado es igual a 1, el usuario está "Online".
                //     // Si el estado es igual a 2, el usuario está "Away".
                //     // De lo contrario, presumimos que el usuario está "Offline".
                //     // Retornar el estado de conexión del usuario.
                //     // Tu código:
                //     if(status == 1 )
                //     {
                //         return "Online";
                //     } else if (status == 2 )
                //     {
                //         return "Away";
                //     } else {
                //         return "Offline";
                //     }
                //  }
                //  console.log(conection(1));
                //  console.log(conection(3));
                //  console.log(conection(33));
                //  console.log(conection(32));
                //  console.log(conection(23));
                //  console.log(conection(2));

                // Siiiiiiii




                // 4.


                 
                //  function saludo(idioma) {
                //     // Retornar un saludo en tres diferentes lenguajes:
                //     // Si "idioma" es "aleman", devuelve "Guten Tag!".
                //     // Si "idioma" es "mandarin", devuelve "Ni Hao!".
                //     // Si "idioma" es "ingles", devuelve "Hello!".
                //     // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
                //     // Tu código:
                    
                //     switch (idioma) {
                //         case "aleman":
                //             return "Guten Tag!";
                //             break;
                //         case "mandarin":
                //             return "Ni Hao!"; 
                //             break;
                //         case "ingles":
                //             return "Hello!";
                //             break;
                //         default:
                //             return "Hola!";
                //             break;
                //     }
                    
                // }
                // console.log(saludo("ingles"));
                // console.log(saludo("aleman"));
                // console.log(saludo("mandarin"));
                // console.log(saludo(""));

                // Siiiiiiii




                // 5.
                 
                //  function colors(color) {
                //     // La función recibe un color. Retornar el string correspondiente:
                //     // En caso que el color recibido sea "blue"   --> "This is blue".
                //     // En caso que el color recibido sea "red"    --> "This is red".
                //     // En caso que el color recibido sea "green"  --> "This is green".
                //     // En caso que el color recibido sea "orange" --> "This is orange".
                //     // Si no es ninguno de esos colores           --> "Color not found".
                //     // IMPORTANTE: utilizar el statement SWITCH.
                //     // Tu código:

                //     switch (color) 
                //     {
                //         case "blue":
                //             return "This is blue";
                //             break;
                //         case "red":
                //             return "This is red";
                //             break;
                //         case "green":
                //             return "This is green";
                //             break;
                //         case "orange":
                //             return "This is orange";
                //             break;
                //             default:
                //                 return "Color not found";
                //                 break;
                //     }
                //  }
                //  console.log(colors("red"));
                //  console.log(colors("blue"));
                //  console.log(colors("green"));
                //  console.log(colors("yellow"));
                //  console.log(colors("orange"));
                 

                //  Siiiiiiii



                // 6.
                //  function esDiezOCinco(num) {
                //     // Retornar true si "num" es 10 o 5.
                //     // De lo contrario, retornar false.
                //     // Tu código:
                //     if (num === 10 || num === 5) {
                //         return true ;
                //     } else {
                //         return false ; 
                //     }
                // }
                //     console.log(esDiezOCinco(10));
                //     console.log(esDiezOCinco(8));
                //     console.log(esDiezOCinco(5));
                //     console.log(esDiezOCinco(20));
                //     console.log(esDiezOCinco(-5));
                //     Siiiiiiii




                // 7.

                //  function estaEnRango(num) {
                //     // Retornar true si "num" es menor que 50 y mayor que 20.
                //     // De lo contrario, retornar false.
                //     // Tu código:
                //     if (num < 50 && num > 20) {
                //         return true ;
                //     } else { 
                //         return false;
                //     }
                //  }
                // console.log(estaEnRango(10));                 
                // console.log(estaEnRango(-4));                 
                // console.log(estaEnRango(40));                 
                // console.log(estaEnRango(80));                 
                // console.log(estaEnRango(100)); 
                // Siiiiiiii

                
                





                // 8.

                //  function esEntero(num) {
                //     // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
                //     // Ejemplo: 0.8   ---> false
                //     // Ejemplo: 1     ---> true
                //     // Ejemplo: (-10) ---> true
                //     // De lo contrario, retorna false.
                //     // Tu código:

                //     if (num % 1 == 0)    return true;
                //     else return false ;  
                //  }
                //  console.log(esEntero(0));
                //  console.log(esEntero(1));
                //  console.log(esEntero(10));
                //  console.log(esEntero(1.1));
                //  console.log(esEntero(100.1));
                 




                // 9.
                //  function fizzBuzz(num) {
                //     // Si "num" es divisible entre 3, retorna "fizz".
                //     // Si "num" es divisible entre 5, retorna "buzz".
                //     // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
                //     // De lo contrario, retorna false.
                //     // Tu código:
                //     if (num % 3 === 0) return "fizz"; 
                //     else if (num % 5 === 0) return "buzz";
                //     else if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz"; 
                //     else return false;
                //  }
                //     console.log(fizzBuzz(3));                 
                //     console.log(fizzBuzz(5));                 
                //     console.log(fizzBuzz(9));                 
                //     console.log(fizzBuzz(18));                 
                //     console.log(fizzBuzz(15));                 
                //     console.log(fizzBuzz(10));                 
                //     console.log(fizzBuzz(0));                 





                10.
                 function operadoresLogicos(num1, num2, num3) {
                    // La función recibe tres números distintos.
                    // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
                    // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
                    // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
                    // Si todos los argumentos son cero, retornar ---> "Error".
                    // Si no se cumple ninguna de las condiciones anteriores, retornar false.
                    // Tu código:
                    if (num1 > num2 && num1 > num3 && num1 > 0) return "Numero 1 es mayor y positivo";
                    else if (num1 < 0 || num2 > 0 || num3 > 0) return "Hay negativos";
                    // else if (num3 > num1 && num3 > num2) foreach (num3; num3++ ){};  
                    else if (num1 === 0 && num2 === 0 && num3 === 0) return "Error"; 
                    else return false;
                 }
                 





                11.
                 function esPrimo(num) {
                    // Retornar true si "num" es primo.
                    // De lo contrario retorna false.
                    // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
                    // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
                    // [Nota]: los números negativos, 0 y 1 NO son números primos.
                    // Tu código:
                    if (num % 1 === 0) {return true;}
                    
                 }
                 




                // 12.
                //  function esVerdadero(valor) {
                //     // Si "valor" es verdadero retornar "Soy verdadero".
                //     // Caso contrario, retornar "Soy falso".
                //     // Tu código:
                //  }
                 




                // 13.
                //  function tieneTresDigitos(num) {
                //     // Si el número recibido tiene tres dígitos retornar true.
                //     // Caso contrario, retornar false.
                //     // Tu código:
                //  }
                 




                // 14
                //  function doWhile(num) {
                //     // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
                //     // Retornar el valor final.
                //     // Utilizar el bucle Do-While.
                //     // Tu código:
                //  }