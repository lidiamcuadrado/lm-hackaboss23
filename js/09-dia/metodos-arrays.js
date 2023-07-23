// Métodos de arrays

const listaSuper = ["Arroz", "Azúcar", "Té", "Café"];

// Push = Añadir elemento
listaSuper.push("Pastas");

listaSuper;
listaSuper.length;

//String, numbers, booleans, null, undefined
/*
let a = 'Hola Mundo'
let b = a

b
b = 'Hola Mundo Cruel'
b
a

*/

//Técnicamente = es una asignación, no una igualdad
// Igualdad es ==
let lista = [1, 2, 3, 4, 5, 6];
let nuevaLista = lista;
// Push es una función que modifica el Array original
nuevaLista.push(100);
lista;

const nuevoArray = [...listaSuper];
// Se crea un nuevo array con una nueva referencia

//Concat genera una lista en base a la nueva lista y le añade un elemento. Asigna otra referencia para que no haya mutabilidad
//Push añade un nuevo elemento a la misma referencia
const z = nuevaLista.concat(200);
z;
nuevaLista;
lista;

z.push(300);
z;
nuevaLista;
lista;

//for...of
//Muy parecido al for, pero más automático. En cada iteración se saca, de listaSuper, cada uno de los elementos y se asigna a producto, y en cada vuelta buscará el siguiente, etcétera.
for (const producto of listaSuper) {
  console.log(producto);
}

// Para crear una copia y no una referencia, es con ...
