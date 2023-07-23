// Funciones flecha (Arrow function)
// () => {}

function saludar(nombre) {
  //codigo
  return `Hola ${nombre}, bienvenid@`;
}

const s = saludar("Juan");
s;

// const sayHi = (name) => {
// return `Hi ${name}, welcome!``
// }

const sayHi = (name) => `Hi ${name}, welcome!`;
const s2 = sayHi("John");

// La función flecha llegó a JavaScript con EmmaScript 6. Es relativamente nueva pero nos hace escribir funciones de manera más corta
// No necesitamos el return si lo ponemos en una sola línea
