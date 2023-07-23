// Array + Objects
// Array --> Lista de elementos
// El array es una lista de variables

const listaSuper = [
  "Patatas",
  "Sal",
  "Azúcar",
  "Leche",
  ["Agua", true],
  ["Huevos", 24],
];
// JS permite listas de distintos tipos de contenidos (strings con booleanos y números, etc.) pero otros lenguajes de tipado fuerte no

// Para trabajar con array hay que especificar su estructura:
// Están construidos en base a un índice y su valor

// En este caso, Patatas tiene índice 0, Sal 1, Azúcar 2 y Leche 3
const a = ["Patatas", "Sal", "Azúcar", "Leche"];

//Si queremos mostrar Azúcar
a[2];

//Si queremos mostrar Patatas
a[0];

for (let i = 0; i < 4; i++) {
  // 4 porque hay 4 valores en la lista
  // En vez del 4 sería mejor poner a.length -1
  // Porque así aseguras recorrer todo el array entero sin necesidad de saber cuantos elementos contiene
  console.log(a[i]);
}

console.log(a.length);
