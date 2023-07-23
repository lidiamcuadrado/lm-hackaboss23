// Edita el archivo script.js para añadir tres variables: nombre (string), color (string) y edad (number).
// Después, utiliza esas variables para que salga por consola el mensaje "Hola, me llamo nombre, tengo edad años y mi color favorito es el color."

let nombre = "Lidia";
let edad = 28;
let color = "blanco";

//Con template string
console.log(
  `Hola, me llamo ${nombre}, tengo ${edad} años y mi color favorito es el ${color}.`
);

//Concatenando
console.log(
  "Hola, me llamo " +
    nombre +
    ", tengo " +
    edad +
    " años y mi color favorito es el " +
    color +
    "."
);
