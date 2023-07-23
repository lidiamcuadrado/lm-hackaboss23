let edad = +prompt("Introduce tu edad");
while (isNaN(edad)) {
  edad = +prompt("A ver, subnormal, escribe un número entero");
}

if (edad >= 18) {
  document.write("Felicidades, puedes entrar a la discoteca");
} else if (edad === 18) {
  document.write("Puedes entrar por los pelos");
} else {
  document.write("Anda, tira para casa a ver Pocoyó");
}
