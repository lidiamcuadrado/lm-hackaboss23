// Funciones
// Las funciones son "empaquetadores de código". Podemos "empaquetar" (englobar) una cierta cantidad de código que estimemos conveniente para poder reutilizarlo cuando lo necesitemos.
// Dentro de los paréntesis establecemos los parámetros (características) de la función sumar para que no siempre me entregue el mismo contenido
// Lo que está entre las llaves es una cierta cantidad de código que nos permite establecer que el código que se ejecuta va a empezar en el primer corchete y se cierra con el segundo (el de cierre)
// Algunas funciones pueden tener "efectos secundarios" (side effects). Se deduce que cuando tenemos un efecto secundario, tenemos uno primario.

function sumar(a, b) {
  const resultado = a + b;
  console.log(resultado);
}

//El efecto primario de la función sumar está construida para sumar los números, pero no para hacer un console.log. Eso sería un efecto secundario: una acción para la cual la función no está construida de manera principal.
// En este caso, nuestra función sumar tiene dos efectos: el primario, que es sumar, y el segundo, imprimir el resultado en la consola, que es una tarea para la que no está construida.

sumar(5, 7);
sumar(2, 8);
sumar(4, 2);

function sumar(a, b) {
  const resultado = a + b;
  return resultado;
}

// Función return
// Esta función ahora está haciendo solo una cosa, que es retornar el resultado de lo que haya obtenido

const suma = sumar(5, 7);
const nuevaSuma = sumar(suma, 8);
console.log(nuevaSuma);

function concatenar(texto1, texto2) {
  const txt = `${texto1} ${texto2}`;
  console.log(txt);
}

concatenar("hola", "inmundo");

// Función suma más limpia:
/* function sumas(a,b){
    return a + b
  }
  */
