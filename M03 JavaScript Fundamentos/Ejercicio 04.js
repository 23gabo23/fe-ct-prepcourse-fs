/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   return Math.pow(num, 2);
}
console.log(elevarAlCuadrado(2));

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   let elevado = Math.pow(num, 3)
   return elevado ;
}
console.log(elevarAlCubo(3));

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   let resul = Math.pow(num, exponent);
   return resul;
}
console.log(elevar(12, 4));
console.log(elevar(10, 90));
console.log(elevar(400, 6));

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   return Math.round(num);
}
console.log(redondearNumero(1.01));
console.log(redondearNumero(1.91));
console.log(redondearNumero(1.50));
console.log(redondearNumero(1.00));


function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   return Math.ceil(num);
}
console.log(redondearHaciaArriba(2.01));
console.log(redondearHaciaArriba(1.50));
console.log(redondearHaciaArriba(1.99));
console.log(redondearHaciaArriba(2.99));

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   return Math.random();
}
console.log(numeroRandom());

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
