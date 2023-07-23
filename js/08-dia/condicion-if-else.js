// Condición if/else

const mayorEdad = 18;
const pedroEdad = 19;
const juanEdad = 18;
const diegoEdad = 17;

// Condición booleana (debe ser true/false)
if (pedroEdad >= mayorEdad) {
  console.log("Pedro es mayor de edad");
} else {
  console.log("Pedro no es mayor de edad");
}

if (diegoEdad >= mayorEdad) {
  console.log("Diego es mayor de edad");
} // No sale nada en la consola porque Diego no es mayor de edad, tiene 17
else {
  console.log("Diego no es mayor de edad");
}

if (juanEdad >= mayorEdad) {
  console.log("Juan es mayor de edad");
} else {
  console.log("Juan no es mayor de edad");
}

if (pedroEdad === 19) {
  console.log("Pedro es mayor de edad hace rato");
} // Podemos revisar si se cumplen ciertas condiciones y en base a eso ejecutar distintas funciones

if (juanEdad >= 19) {
  // Si esta condición se cumple, no sigo evaluando el if. Si no, continúo
  console.log("Juan es mayor de edad hace rato");
} else if (juanEdad <= 17) {
  // Si la primera no se cumple, evalúo esta. Si se cumple, ejecuto el siguiente bloque de código. Si no se cumple, voy a la siguiente, y así sucesivamente
  console.log("A Juan le falta para ir a las discotecas");
} else {
  // Else es la condición por defecto: Si las otras no funcionan, esta funcionará
  console.log("Juan ya va a las discotecas");
}
