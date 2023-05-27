// Archivo pra hacer pruevas o prácticas.

// //Suma
// console.log(3 + 5); //8

// //Resta
// console.log(14 - 7);//7

// //Multiplicacion
// console.log(8 * 6);//48

// //Division
// console.log(30 / 9);//3.3333

// //Resto
// console.log(95 % 4);//3

// //Prueba de precedencia
// console.log(3 + 5 * 2 - 8);//8

// -------------------------------

// function sumarTres(n1, n2, n3){
//     console.log(n1 + n2 + n3);
// }
// sumarTres(1, 2, 3);

// ------------------------------------

// function camino(val1){
//     if(val1 === "brasil"){
//         return "Debe transitar por el carril izquierdo.";
//     } else if (val1 === "argentina") {
//         return "Dede transitar por el carril de la derecha.";
//     } else {
//         return "Devuelvase y busque otro camino para llegar a su destino.";
//     }
// }
// console.log(camino("Colombia"));

// -----------------------------------------

// console.log(Math.pow(5, 2));
// console.log(Math.round(0.59)); // Acertivo
// console.log(Math.round(0.21)); // Acertivo
// console.log(Math.floor(10.99)); // Nosa ayuda a nosotros los clientes
// console.log(Math.ceil(1.01)); // Les ayuda a los mercados


// console.log(Math.max(56, 23, 45, 100, 101, 2029, 12, 21, 23, 34, 43));
// console.log(Math.min(56, 23, 45, 100, 101, 2029, 12, 21, 23, 34, 43));

// console.log(Math.random());

// ------------------------------------------

// Operadores logicos.
// >< && %
// function menorMayorPar(num){
//     if(num > 5 && num < 10 && num % 2 === 0)
//     console.log(true);
//     else { console.log(false);}
// }
// menorMayorPar(8);
// menorMayorPar(9);
// menorMayorPar(10);

// function operadorOr(str){
//     if(str === "Gabriel" || str.length < 3){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(operadorOr("Gabrie"));

// ---------------------------

// Funcion con negación
// function negacion(n){
//     if( n !== 18 || n < 18){
//         return "No tiene acceso.";
//     } else {
//         return "Acceda";
//     }
// }
// console.log(negacion(18));
// console.log(negacion(2));
// console.log(negacion(3));
// console.log(negacion(01));
// console.log(negacion(02));
// console.log(negacion(17));
//  ----------------------
// Funcion compleja

// function condicionCompeja(num) {
//     if ( num > 9 && num % 2 === 0 || num === 3 ) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(condicionCompeja(20));
// console.log(condicionCompeja(2));
// console.log(condicionCompeja(9));

// ----------------------------------------

// vERACIDAD

// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(-1));
// console.log(Boolean(true));
// console.log(Boolean(false));
// console.log(Boolean("perro"));
// console.log(Boolean());
// console.log(Boolean([]));


// ---------------------------------------------

        // FOR


// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < 5; i++) {
//     console.log(arr[i]);
// }

// function encontrarLetraP(str) {

//     let letras = str.split("");

//     for (let i = 0 ; i < str.length ; i++) {


//         if(letras[i] === "p") {
//             return "Contiene una p.";
//         }
//     }
// }
// console.log(encontrarLetraP("patricio"));
// console.log(encontrarLetraP("Legarda"));
// console.log(encontrarLetraP("Monpere"));

// ---------------------------------------------

// WHILE


// let arr = [];

// while (arr.length < 5 ) {
//     arr.push("Boom");
// }
// console.log(arr);


function elevarAlCubo(num) {
    // Retorna el valor de "num" elevado al cubo.
    // Tu código:
    // return Math.pow(2, 3);
    // return Math.pow(4, 3);
    let elevado = Math.pow(num, 3)
    return elevado ;
 }
 console.log(elevarAlCubo(3));