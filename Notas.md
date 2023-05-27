Pequeños clips para entender grandes cosas.

el metodo (lenght();) solo se utiliza en tipos de datos string.

------------------------------------------------------------------

El modulo o resto, se representa con el simbolo de %.

console.log(95 % 4);

// 3

-------------------------------------------------------------------

Precedencia de signos:
- primero: Precede el signo de potenciacion 
- segundo: preceden los signos de multiplicacion, división y resto.
- tercero: preceden o se ejecutan los signos de suma y resta.

--------------------------------------------------------------------

OPERADORES DE IGUALDAD O ASIGNACIÓN

Operador de igualdad ( ==  /  === )

Igualdad estricta ( === )
Verifica que coincidan el tipo de dato y el valor.
    3 === 3; // true
    3 === "3";// false


Igualdad (  ==  )
Verifica si el valor es el mismo.
    3 == "3"; //true
    3 == 3; //true

Operador de asignación (  =  )
Se asigna para declarar variables.

let animal = "perro";

-------------------

//Asignación y asociatividad
var a = 1;
var b = 2;
var c = a = b;
console.log (c); 

------------------------------------------------------------------

LAS TRES FORMAS DE EXPRESAR UNA FUNCIÓN

Primera:
function sumarTres(n1, n2, n3){
    console.log(n1 + n2 + n3);
}
sumarTres(1, 2, 3);
----------------------------------------
Segunda:
let vari = function sumarTres(n1, n2, n3){
    return n1 + n2 + n3;
}
sumarTres(1, 2, 3);
----------------------------------------
Tercera:
let vari = (n1, n2, n3) => {
    return n1 + n2 + n3;
}
sumarTres(1, 2, 3);
----------------------------------------

Error común:
Console.log(); solo es utilizado miestras comenzamos a programar, este nunca se verá en
un proograma real para ver los resultados de nuestras operaciones.
solo se usa el RETURN.

-----------------------------------------------------------------------------

NOMENCLATURA:

Las nomenclaturas son formas de llamar a las cosas. En programación existen ciertas reglas sobre las cuales llevamos uniformidad en el código y nos proporcionan un estándar de trabajo especialmente dentro de equipos de desarrollo de software.

Existen 3 tipos de nomenclatura principal: camelCase, PascalCase, snake_case.

-------------------------------------------------------------------

                Console.log()
                Objeto | Metodo

--------------------------------------------------------------------

                        OBJETO Math

Math.pow
Metodo pow = Math.pow();
–
Este método nos permite potenciar un número. Por ejemplo, 2 elevado al cubo, sería igual a multiplicar 2 x 2 x 2. Es decir, 8.

El primer número es la base, y el segundo será la potencia.
--------------
Metodo round:
Aproxima el valor al más cercano

console.log(Math.round(0.59)); // Acertivo
console.log(Math.round(0.21)); // Acertivo
--------------
Metodo floor:

Aproxima el valor al más bajo.

 console.log(Math.floor(10.99)); // Nosa ayuda a nosotros los clientes
--------------
Metodo ceil:
Aproxima el valor al más alto.

 console.log(Math.ceil(1.01)); // Les ayuda a los mercados
--------------

Metodo max:
Ayuda a encontrar el valor más grande de los demás valores.
console.log(Math.max(56, 23, 45, 100, 101, 2029, 12, 21, 23, 34, 43));
Rta: 2029
---------------

Metodo min:
Ayuda a encontrar el valor más pequeño de los demás valores.
console.log(Math.min(56, 23, 45, 100, 101, 2029, 12, 21, 23, 34, 43));
Rta: 12
---------------

Math.random
–
Este último método nos permitirá generar un número aleatorio. Es importante tener en cuenta que el número que se generará es decimal, y puede ser cualquiera entre el 0 y el 1.

Rta = 0.8715730717014409
-------------------------------------------

    SABER SI UN NUMERO ES PAR O ES INPAR CON RESTO

    
console.log(98 % 2);
console.log(1 % 2);
console.log(8 % 2);  // Si es 0: par
console.log(2 % 2);  // si es 1: inpar
console.log(238 % 2);
------------------------------------------
Operador Significado	Ejemplo              Resultado
&&	        and	        (5 < 2) && (5 > 3)	    false
||	        or	        (5 < 2) || (5 >3)       true
!	        not	        ! (5 < 2)	            true
.
----------------------------------------------

                VERACIDAD

    1           // true
0           // false
-1          // true
true        // true
false       // false
'string'    // true
null        // false
undefined   // false
[]          // true

.
---------------------------------------------

            ARRAY

        el metodo LENGTH, nos permite saber cuantos elementos hay en el array.

let listaDeCompras = [];

listaDeCompras[0] = "Tomates";
listaDeCompras[1] = "Lechuga"; 

console.log(listaDeCompras.length);
//RTA: 2

        Por otro lado, está el concepto de índice. Los índices no representan al dato en sí mismo, sino la posición en la que se está guardando

                


