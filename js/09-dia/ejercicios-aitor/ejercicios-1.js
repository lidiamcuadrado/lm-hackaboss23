let string = "Hola, Mundo";

console.log(string.match("a"));

// .match all nos enseña todos los caracteres

function suma(a, b) {
  a = a * 3;
  return a + b;
}

//Buenas prácticas es que la función sea lo más explícita y lo más pequeña posible

console.log(suma(2, 5));

const persona = {
  nombre: "Aitor",
  edad: 40,
  isDeveloper: true,
  saludo: function () {
    return `Bienvenido ${this.nombre}`;
    // Es lo mismo poner return `Bienvenido ${persona.nombre}` porque llama solo a esta variable específica
  },
};

console.log(persona.saludo());

//Constructor backend para hacer usuarios

class Persona {
  constructor(name, age, isDeveloper, saludo) {
    (this.name = name),
      (this.age = age),
      (this.isDeveloper = isDeveloper),
      (this.saludo = `Hola ${this.name}`);
  }
}

const Aitor = new Persona("Aitor", 40, true);

console.log(Aitor);

// Crear una función que reciba un valor cualquiera y lo muestre ocupando console.log(), llamar a la función pasando el valor 5

function primeraFuncion(valor) {
  console.log(valor);
}

primeraFuncion(4);

// La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla

function multiply(a, b) {
  a * b;
}

// Solución:
function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 4));

function stringReverse(string) {
  /* let stringDelReves =""
  for (let i = string.length -1; i >= 0; i--) {
    stringDelReves = stringDelReves + string[i]
  }
  return stringDelReves */
  //Lo de arriba es lo mismo que:
  return string.split("").reverse().join(" ");
}

console.log(stringReverse("Michael"));

// Para que html lea un archivo de Javasript (dentro del body) <script src="/index.js"></script>
//Prompt es la ventana que introducen los navegadores para interactuar con el usuario
// const edad = +prompt("Introduce tu edad")

/*
document.write(edad)
while(condition){} */

let edad = +prompt("Introduce tu edad");
while (isNaN(edad)) {
  edad = +prompt("A ver, subnormal, escribe un número entero");
}
// document.write(edad);
// }

if (edad >= 18) {
  document.write("Felicidades, puedes entrar a la discoteca");
} else if (edad === 18) {
  document.write("Puedes entrar por los pelos");
} else {
  document.write("Anda, tira para casa a ver Pocoyó");
}
