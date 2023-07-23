// Loops
const listaSuper = ["Arroz", "Aceite", "Patatas", "Azúcar"];

//For
for (let i = 0; i < 10; i++) {
  // Para que te haga lo mismo: i = 1; i <= 10
  // console.log(i + 1);
}

// For ... of (entrega el elemento del array)
for (const producto of listaSuper) {
  // console.log(producto.toUpperCase());
}

// For ... in (entrega el índice del elemento del array)
for (const index in listaSuper) {
  console.log(listaSuper[index]); // Muestra los elementos del array
  //console.log(index)
  // index entrega los índices de los elementos del array
}

// While: No sé cuántas veces voy a iterar
// let i = 0;
// const password_db = 'hola mundo'
// while(i < listaSuper.length){
//   console.log(listaSuper[i])
//   i++
// }

//While
//No sé cuántos intentos va a tener la persona de entregarme el password correcto, así que uso el while
// const password_db = 'hola mundo';
// let text = prompt('Ingresa tu clave');

// while (text !== password_db){
//   text = prompt('Ingresa tu clave');
// }

// Do ... While
// const password_db = 'hola mundo';

// do{
//   let text = prompt('Ingresa tu clave');
// } while (text !== password_db)

const user = prompt("Escribe tu elección: piedra, papel o tijera");
while (user !== "piedra" && user !== "papel" && user !== "tijera") {
  user = promp("Escribe tu elección: piedra, papel o tijera");
}

console.log(`La opción del usuario es ${user}`);
