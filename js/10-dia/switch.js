//Condicionales

//if
const text = "Hola mundo";
if (text === "Hola mundo") {
  console.log("El texto es verdadero");
} else if (text === "Hola-mundo") {
  console.log("El texto es verdadero pero con un guion");
} else {
  console.log("El texto es falso");
}

//switch
switch (text) {
  case "Hola mundo":
    console.log("El texto es verdadero");
    break;
  case "Hola-mundo":
    console.log("El texto es verdadero pero con un guion");
    break;
  default:
    console.log("El texto es falso");
}

// El break lo que hace es terminar el switch, y dejar de ejecutar el resto del switch. El break nos permite dejar de evaluar hacia abajo.

// default = else final
// if{}
// else if{}
// else{}

//Switch: no usar en JavaScript

const switchObj = {
  "Hola mundo": "El texto es verdadero",
  "Hola-mundo": "El texto es verdadero pero con un guion",
};

let option = "El texto es falso";
option = switchObj[text];

//Operador ternario (ternary operator
// condición ? true : false
// establece una condición que puede ser true or false
// text === 'Hola Mundo' ? console.log('Es verdadero') : console.log('Es falso el texto');

//Optimizamos:
const contenido = text === "Hola mundo" ? "Es verdadero" : "Es falso el texto";
console.log(contenido);

//El undefined se convierte en booleano a falso
const opcion = switchObj[text] ? switchObj[text] : "El texto es falso";
console.log(opcion);

// || Operador or
let op = null;
if (switchObj[text] !== undefined) {
  op = switchObj[text];
} else {
  op = "El texto es falso";
}
console.log(op);

// if (a || b){}

const opt = switchObj[text] || "El texto es falso";
console.log(opt);
