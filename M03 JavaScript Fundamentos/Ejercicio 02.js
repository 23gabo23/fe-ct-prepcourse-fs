/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}
console.log(devolverString("Perro"));

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   let resul = x + y;
   return resul;
}
console.log(suma(12, 12));

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   let resul = x - y;
   return resul;
}
console.log(resta(12, 4));

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   let resul = x / y;
   return resul;
}
console.log(divide(12, 2));

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   let res = x * y;
   return res;
}
console.log(multiplica(12, 3));

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   let resul = x % y;
   return resul;
}
console.log(obtenerResto(24, 2));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
