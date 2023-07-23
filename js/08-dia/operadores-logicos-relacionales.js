/*
Operadores lógicos y relacionales
*/

// Operador de asignación
// =
const hola = "Hola Mundo";
const numeroCinco = 5;
const edadJuan = 18;
const mayorEdad = 18;
let saludar;
const n = 0;

// Igualdad (revisar igualdad)
// ==
// Cuando comparamos igualdad es igualdad de valores, no igualdad completa. Por eso const numeroCinco = 5 y numeroCinco == '5' dan lo mismo aunque 5 es un texto y '5' es un string
hola == "Hola Mundo";
numeroCinco == "5";

// Igualdad de valores y tipos
// ===
numeroCinco === "5";

// Mayor que
// >

numeroCinco > 2;
numeroCinco > "2";

// Mayor o igual
// >=

numeroCinco >= 2;
numeroCinco >= "2";

edadJuan >= mayorEdad;

// Menor que
// <

numeroCinco < 2;
numeroCinco < "2";

// Menor o igual que

edadJuan <= 17;

// Condición AND
// a && n
//Si una de las dos es falsa, aparecen como falsas las dos. Si la primera es falsa, ya no va a evaluar la segunda

edadJuan > 18 && mayorEdad === 18; //Juan no tiene más de 18 años, así que es falso el conjunto
edadJuan >= 18 && mayorEdad === 18;

// Condición OR
// a || b
edadJuan > 18 || edadJuan === 18;

// Distinto de
// a != b
edadJuan != mayorEdad;
"Hola Mundo" != "hola mundo";
// password != passwordDB // si el password es distinto del password en la base de datos

// Negación
// !;a !=

edadJuan >= mayorEdad;
saludar != undefined;
saludar == undefined;
n == undefined;
n == null;
n == false;

saludar != undefined && saludar != null;
!saludar;

edadJuan == 18;
!(edadJuan == 18);
