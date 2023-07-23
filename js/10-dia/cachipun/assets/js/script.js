// const gameOptions = ["Piedra", "Papel", "Tijera"];

// const pc_game = Math.random() * 3;
// console.log(gameOptions[pc_game]);

// let user_game;

// do {
//   user_game = prompt("Selección entre: piedra, papel o tijera").toLowerCase();
// } while (
//   user_game !== "Piedra" ||
//   user_game !== "Papel" ||
//   user_game !== "Tijera"
// );
// {
//   console.log(user_game);
// }

const gameOptions = ["piedra", "papel", "tijera"];

const pc_index = parseInt(Math.random() * gameOptions.length);
const pc_game = gameOptions[pc_index];
console.log(pc_game);

let user_game;

while (!gameOptions.includes(user_game)) {
  user_game = prompt("Selecciona entre: piedra, papel o tijera").toLowerCase;
}

console.log(pc_game);
console.log(user_game);

// while (
//   user_game !== "piedra" &&
//   user_game !== "papel" &&
//   user_game !== "tijera"
// ) {
//   user_game = prompt("Selecciona entre: piedra, papel o tijera").toLowerCase();
//   console.log(user_game);
// }

// console.log("hola");
