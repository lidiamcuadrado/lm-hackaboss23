// Funciones en arrays

const comidas = ["pizza", "hamburguesa", "ensalada", "pasta", "hamburguesa"];

for (let i = 0; i < comidas.length; i++) {
  // // Te imprime todos los índices dentro del array
  // console.log(i)
  // Te entrega todos los elementos:
  console.log(comidas[i]);
}

//Opción más optimizada para sacar los elementos: For of:
for (const comida of comidas) {
  console.log(comida);
}

//For in (índices)
for (const index in comidas) {
  console.log(index);
}

//map
//map es una función
// comida.map()

// Map(callback)
//// El objetivo del map es modificar todos los elementos de un array. El map siempre retorna un ARRAY. El map itera arrays y devuelve un array del mismo tamaño que el array original
comidas.map((comida) => `${comida} 🎉`);
//Esto de arriba es lo mismo que:
//comidas.map(i => `${i} 🎉`)

// La función map es una función de iteración
// Map no modifica el array original, se lo entrega a otra constante
// Lo que no se guarda dentro de una variable, 'se pierde'
const c = comidas.map((comida) => `${comida} 🎉`);
console.log(comidas);
console.log(c);
comidas.map((comida) => `${comida} 🎉`);

const users = [
  { id: 1, firstName: "Juan", lastName: "Pérez", age: 23, location: "London" },
  {
    id: 2,
    firstName: "Pedro",
    lastName: "Pérez",
    age: 30,
    location: "Barcelona",
  },
  {
    id: 3,
    firstName: "Diego",
    lastName: "Pérez",
    age: 27,
    location: "Canarias",
  },
];

const users_strings = users.map(
  (user) =>
    `El usuario ${user.firstName} ${user.lastName} tiene ${user.age} años y vive en ${user.location}`
);

users_strings;

//Filter
//Filter(callback)
const filteredFood = comidas.filter((comida) => comida !== "hamburguesa");
filteredFood;

//Sort
//Sort(callback)
const orderedFood = comidas.sort();
orderedFood;

//Cuando ocupemos sort con números, necesitamos pasarle un callback para que entienda cómo rdenar los números correctamente
const a = [7, 2, 9, 5, 8, 3, 10, 4, 1, 6];
const b = a.sort((a, b) => a - b);
b;

function animar(a) {
  //código de animación de contenido
  console.log(a);
  //cb()
}

animar("Hola mundo");

//El objetivo de un callback es realizar una acción dentro de una función y después ejecutar un callback.
//Llamada de vuelta :haces una llamada a otra función y te devuelve un valor

//Some / Every
const options = comidas.some((comida) => comida.includes("p"));
options;
const options1 = comidas.map((comida) => comida.includes("p"));
options1;
const options2 = comidas.every((comida) => comida.includes("p"));
options2;

//Find
const hamb = comidas.find((comida) => comida === "hamburguesa");
hamb;

///Find vs. Filter
//Find siempre va a entregar solo un elemento (el primero que encuentra).
//Filter, en cambio, encuentra todos los elementos quecumplan una condición
const user = users.find((user) => user.id === 2);
user;
