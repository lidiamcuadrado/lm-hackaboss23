// Objetos
// Los objetos se marcan con {}. Pueden tener atributos/propiedades que tienen un key (antes de :) y un valor (después de :)
// En otros lenguajes, el objeto se llama "diccionario" por esta posibilidad de tener key y value
// const obj = {}

// const color = 'café';
// color = 'azul' // Aquí sí que le estoy asignando un nuevo contenido. Esto no lo deberíamos hacer.
const coche = {
  color: "rojo",
  puertas: 5,
  deportivo: false,
  conductoresDesignados: ["Juan", "Julia"],
  capacidadEstanque: 50,
  kmsPorLitro: 10,
  tipo: {
    marca: "Fiat",
    modelo: "600",
    //No es recomendable poner ñs. Si ponemos el código en inglés evitamos caracteres especiales
    año: "2022",
  },
  //Entre paréntesis va la variable de la función
  avanzar: function (kms) {
    const consumo = kms / this.kmsPorLitro;
    this.capacidadEstanque -= consumo;
    //Como hemos puesto la palabra reservada .this, solo se refiere al color de este objeto, no a la variable color que hemos asignado anteriormente
    // También podríamos poner coche.color, peor es más correcto ocupar el this.
    console.log(
      `El coche de color ${
        this.color
      } ha avanzado ${kms} kms y su consumo es de ${consumo} ${this.pluralize(
        consumo,
        "litros",
        "litro"
      )}`
    );
  },
  //Lo hacemos dentro de una función aparte porque no solo desde dentro de una función se puede hace referencia a las propiedades
  pluralize: function (num, plural, singular) {
    return num > 1 ? plural : singular;
  },
};

coche.avanzar(10);
coche.avanzar(20);

//Podemos añadir un nuevo key al objeto:
// Como los array y los objetos son elementos más complejos, no estamos cambiando la referencia del objeto dentro de la memoria (que sí haríamos con un string)
coche.seguroAccidentes = true;
console.log(coche);

// function hola(nombre)
// {console.log(`Hola ${nombre}`)}

// hola('Pedro');

////Llamamos a la variable que contiene el objeto
//coche

//// Podemos asignar un key a una variable
// const deportivo = 'deportivo'

// const doors = 'puertas'
/// es lo mismo que:
// coche[doors]

// Si solo queremos que nos enseñe a uno de los dos, ponemos el índice de uno de los dos
coche["conductoresDesignados"][1];

//Anotación de corchetes
coche["deportivo"];

// Anotación de punto
// Los arrays no tienen anotación de punto
coche.color;
coche.conductoresDesignados[0];
coche.tipo;
coche.tipo.año;
coche.tipo["año"];

//Object.keys me entrega todos los keys del objeto, incluyendo las que son funciones

Object.keys(coche);
//Entrega el primer valor de la primera key
for (const key of Object.keys(coche)) {
  console.log(coche[key]);
}

// for ... in te entrega el índice
// for ... of te entrega el valor (las keys)
for (const index in ["hola", "chao", "adios"]) {
  console.log(index);
}

const keys = Object.keys(coche);
console.log(keys);
keys.includes("color");

const values = Object.values(coche);
console.log(values);

// entries son los keys y los values
const entries = Object.entries(coche);
console.log(entries);

const obj1 = {
  propiedad1: "azul",
  propiedad2: true,
};

const obj2 = {
  propiedad1: "azul",
  propiedad2: true,
};

//El contenedor se llama distinto. En los objetos y los arrays, la variable que los contiene va a hacer siempre referencia al msmo lugar dentro de la memoria. Cuando los creo, aunque las propiedades sean los mismos, serán objetos distintos (hacen referencia a distintos elementos de la memoria)
obj1 === obj2;

const obj3 = obj1;
obj1 === obj3;

const a = "Hola Mundo";
const b = "Hola Mundo";

//Esto sí que nos da true (el contenido es el mismo)
a === b;

//Duplicar un objeto: structured clone or shadow clone
//// STRUCTURED CLONE
const obj4 = structuredClone(obj1);
obj4;

obj1 === obj4;

//Se puede insertar un objeto dentro de un objeto
// const obj5 = { obj1 };
// console.log(obj5)

//Spread operator: Los tres puntos nos permiten verter todo el CONTENIDO del objeto antiguo en un nuevo elemento
/// SHALLOW CLONE
// Queremos seguir manteniendo la referencia al elemento original pero sin dejar de utilizarlo
const obj6 = { ...obj1 };
console.log(obj6);

// Si son cosas complicadas, un objeto que tiene funciones, etc. haremos un structured clone; si no, hacemos un spread operator
// Spread operator usarlo con cosas más sencillas y directas

const obj8 = structuredClone(obj1);
obj8.active = true;

//  *** Si clonas y después modificas esa clonación, cambia también el contenido original y con el spread operator conservas el original

// El spread operator hace que desde el tercer indice en adelante, agrupa contenido de los valores que le demos
// function suma(a, b, ...c){}
// suma(1,2,3,4,5,6,7,8)
// console.log(c)

//Desestructuración
const color = coche.color;
const puertas = coche.puertas;

color;
puertas;

const listaUsuarios = [
  { name: "Pedro", age: 23 },
  { name: "Juan", age: 26 },
  { name: "Diego", age: 34 },
  { name: "Joaquina", age: 30 },
  { name: "Silvia", age: 28 },
];

for (const user of listaUsuarios) {
  // console.log(user)
  const name = user.name;
  console.log(`Hola ${user.name}, te damos la bienvenida a la isla`);
}

// Con desestructuración
// Creamos una variable y le pasamos un objeto (coche) y le pasamos dos variables (color, puertas). Es importante que los parámetros sean keys de coche
// const {color, puertas} = coche;
// color;
// puertas;

// También podemos desestructurar en un for: se recibe un objeto y de ese objeto solo se quieren crear dos constantes
