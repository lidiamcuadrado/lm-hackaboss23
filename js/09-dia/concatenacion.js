const nombre = "Juan";
const apellido = "Pérez";
const edad = 33;
const direccion = "Calle del Castillo, 1. Motilla del Palancar";

// Concatenación
// Unir mediante suma distintos contenidos
// Cuando sumamos string con número, termina siendo string, por eso podemos poner la edad
// Si queremos convertir explícitamente la edad, que es un número en un string añadimos: .toString()

"Hola, me llamo " +
  nombre +
  " " +
  apellido +
  ", tengo " +
  edad.toString() +
  " años y vivo en " +
  direccion;

// Syntactic Sugar
// Template String
// ${} -> Placeholder. En este espacio voy a agregar una instrucciòn en la que yo determino algo y termino retornando un string para poder concatenarlo con otro

`Hola, me llamo ${nombre} ${apellido}, tengo ${edad} años y vivo en ${direccion}`;
