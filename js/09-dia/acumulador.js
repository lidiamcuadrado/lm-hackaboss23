function mostrar(txt) {
  console.log(txt);
}

function sumar(a, b) {
  return a + b;
}

let acumulador = 0;
for (let i = 10; i > 0; i--) {
  // Declaración de variable ; condición ; incremento
  const suma = sumar(acumulador, i);
  acumulador = suma;
}

mostrar(acumulador);
