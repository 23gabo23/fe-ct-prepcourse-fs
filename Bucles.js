// Bucle for:
// var suma = 0;

// for (var i = 0; i < 5; i++){
//     suma = suma + i;
//     console.log("Variable de iteración",  i);
// }
// console.log("Variable suma",  suma);

// -----

// Bucle while

// while(suma < 9){
//     suma = suma + 1;
//     console.log(suma);
// }


function esPositivo(num) {
    // La función recibe un entero. Devuelve como resultado un string que indica si el número
    // es positivo o negativo.
    // Si el número es positivo ---> "Es positivo".
    // Si el número es negativo ---> "Es negativo".
    // Si el número es 0, devuelve false.
    // Tu código:
    if( num > 0 ){
       return "El número es positivo.";
    } else if ( num < 0 ) {
       return "El número es negativo";
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
 