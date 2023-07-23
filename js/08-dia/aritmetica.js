/*
Operadores aritméticos
*/

// Concatenación o Suma:
// a + b

var numeroDiez = 10;
var numeroCinco = 5;

var hola = "Hola";
var mundo = "Mundo";

console.log(numeroDiez + numeroCinco);
console.log(hola + " " + mundo);
console.log(numeroCinco + numeroDiez + hola);
// Cuando tiene que sumar dos números, los suma. Una vez que encuentra el primer string, el resto son concatenaciones

// El console.log se usa principalmente cuando manipulas el DOM, para comprobar que todo va saliendo bien. Son como pequeños checks para ver que todos los pasos van saliendo como uno espera

//Resta
//a - b

console.log(numeroDiez - numeroCinco);

// Multiplicación
// a*b

console.log(numeroDiez * numeroCinco);

//División
// a / b

console.log(numeroDiez / numeroCinco);

//Módulo
// a % b
// El módulo es el resto del cociente (El operador módulo da como resultado el resto de la división entera)

console.log(numeroDiez % numeroCinco);
console.log(7 % 2);

// Potencias
//a ** b

console.log(numeroDiez ** numeroCinco);
console.log(5 ** 5);

// Asignación e incremento
// a++ ó a += n
// += sirve para hacer incrementos mayores que 1
// ++ es un incremento de 1

var suma = numeroCinco + 1;
console.log(suma);

var puntajeJugador = 0;
puntajeJugador = puntajeJugador + 1;
puntajeJugador += 3;
puntajeJugador++;
// ++ en el fondo es incrementar en 1 más, pero no lo ves
console.log(puntajeJugador);
// console.log (puntajeJugador++)
console.log(++puntajeJugador); //Primero incrementa y luego evalúa
console.log(puntajeJugador);
++puntajeJugador;
console.log(puntajeJugador);

// Asignación y decremento
// a-- ó a-= n

puntajeJugador--;
--puntajeJugador;
puntajeJugador -= 3;

// Asignación y multiplicación
// a *= n

puntajeJugador *= 10;

// Asignación y división
// a /= b

puntajeJugador /= 5;

// Asignación y módulo
// a %= n

puntajeJugador %= 2;
