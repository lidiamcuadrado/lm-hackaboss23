// Edita el archivo script.js para añadir las variables de nombre y edad del ejercicio anterior.
// A continuación, utiliza un condicional para sacar por consola la frase correspondiente de la siguientes:

// A nombre le corresponde el descuento infantil (menores de 12).
// A nombre le corresponde el descuento juvenil (menores de 30).
// A nombre le corresponde el descuento de jubilados (mayores de 60).
// A nombre no le corresponde ningún descuento.

let nombre = "Lidia";
let edad = 28;
let color = "blanco";

//Lo ideal es que prácticamente todo esté dentro de una función porque así se puede reutilizar en vez de ir cambiando los valores a la variable para ver si funciona.
if (edad < 12) {
  console.log(`A ${nombre} le corresponde el descuento infantil.`);
  // No hace falta que le añada la condición 12 <, porque está asumido que la primera condición no se cumple de todo el bloque.
} else if (12 < edad > 30) {
  console.log(`A ${nombre} le corresponde el descuento juvenil.`);
} else if (edad > 60) {
  console.log(`A ${nombre} le corresponde el descuento de jubilados.`);
} else {
  console.log(`A ${nombre} no le corresponde ningún descuento.`);
}

// Si queremos cubrirnos las espaldas, siempre poner else if (aunque sepamos que sea imposible que se cumpln las dos a la vez)