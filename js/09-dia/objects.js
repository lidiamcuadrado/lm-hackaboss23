//Objects
// Los array y los objects son prácticamente mellizos. Pero en el array, el índice es extremadamente importante porque no solo me permite acceder al elemento en cuestión, sino que los elementos son ORDENADOS por el índice.
// En el objeto, los elementos dependen de un índice para poer obtener su valor, pero el orden de los índices no es importante.

// Índice/Valor
// Index explícito

const usuario = {
  first_name: "Juan",
  last_name: "Pérez",
  age: 23,
  address: "Calle del Castillo, 1. Motilla del Palancar",
};

// Index implícito

const listaSuper = [
  "Patatas",
  "Sal",
  "Azúcar",
  "Leche",
  ["Agua", true],
  ["Huevos", 24],
];

usuario["address"];
usuario["first_name"];

console.log(usuario.address);

console.log(listaSuper.sort());
//.sort() ordena por orden alfabético

//Lista de objetos
const users = [
  {
    first_name: "Juan",
    last_name: "Pérez",
    age: 23,
    address: "Calle del Castillo, 1. Motilla del Palancar",
  },
  {
    first_name: "Diego",
    last_name: "Mencía",
    age: 25,
    address: "Calle del Hornillo, 1. Motilla del Palancar",
  },
  { first_name: "Pedro", last_name: "Fontana", age: 27, address: null },
];

users[1]["first_name"];
users[users.length - 2];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

for (let i = 0; i < users.length; i++) {
  const address = users[i]["address"];
  console.log(address);
  //Saltar undefined:
  // if (address !== undefined && !== null) console.log(address)
  // if (address) console.log(address)
}

// Undefined y null siempre van a ser false, porque no tienen . 0 es no tener contenido también

//address && console.log(address)
