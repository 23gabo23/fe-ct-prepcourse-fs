/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if( num > 0 ){
      return "Es positivo";
   } else if ( num < 0 ) {
      return "Es negativo";
   } else {
      return false;
   }
}
console.log(esPositivo(1));
console.log(esPositivo(0));
console.log(esPositivo(-1));
console.log(esPositivo(-1000));
console.log(esPositivo(1000));
console.log(esPositivo(0));

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   let palabraSeparada = str.split("");
   palabraSeparada.push("!");
   let palabraArreglada = palabraSeparada.join("");
   return(palabraArreglada);
}
console.log(agregarSimboloExclamacion("Hello world"));


function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   let nombreCom = [nombre, apellido];
   let nombreArr = nombreCom.join(" ");
   return nombreArr;
}
console.log(combinarNombres("Chancla", "Hernández"));
console.log(combinarNombres("Ramiro", "Montañéz"));
console.log(combinarNombres("Pablo", "Picapiedra"));
console.log(combinarNombres("Chancho", "Picapiedra"));


function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   let saludar = ["Hola ", nombre, "!"];
   let segunda = saludar.join("");
   return segunda;
}
console.log(obtenerSaludo("federico"));
console.log(obtenerSaludo("Javier"));
console.log(obtenerSaludo("Julian"));


function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   let area = alto * ancho;
   return area;
}
console.log(obtenerAreaRectangulo(7, 15));
console.log(obtenerAreaRectangulo(3, 10));
console.log(obtenerAreaRectangulo(12, 50));



function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   let peri = lado + lado + lado + lado;
   return peri;
}
console.log(retornarPerimetro(2));
console.log(retornarPerimetro(8));
console.log(retornarPerimetro(0));


function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   let area = (base * altura) /2;
   return area ;
}

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   let dolar = 1.20;
   let proceso = dolar * euro;
   return proceso; 
}
console.log(deEuroAdolar(3));



function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   if (letra === "a"|| letra === "e"|| letra === "i"|| letra === "o"|| letra === "u") {
      return "Es vocal";
   } else if( letra.lenght != 1 ) {
      return "Dato incorrecto";
   } else if (letra !== "") {
      return "Dato incorrecto";
   }
}
console.log(esVocal("a"));
console.log(esVocal("ab"));
console.log(esVocal(1234));
console.log(esVocal("b"));
console.log(esVocal("perro"));


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
