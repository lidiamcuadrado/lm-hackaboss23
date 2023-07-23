// Bucles
// Los bucles tienen varias funciones. Lo más sencillo de entender es, por ejemplo, cuando tengo una lista de elementos y quiero realizar una tarea por cada lista de elementos

// for - no lo tendríamos que utilizar nunca
/* for(expresionInicial; condicion; incremento){
sentencia
}
*/

/* for(var i = 0; i <= 10; i++){
  console.log(i)
} */

for (var i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(i); // Si es par, muéstrame el número
  } else console.log("Número impar"); // si es impar, múestrame el texto
}
