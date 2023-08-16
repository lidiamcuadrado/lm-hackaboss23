// console.log(process)

//globalThis tiene un montón de funciones.
//Enseña las variables.

//console.log(globalThis)
{
  /* <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 65.9603180885315,
      nodeStart: 6.672140121459961,
      v8Start: 10.9862699508667,
      bootstrapComplete: 38.970175981521606,
      environment: 21.69420099258423,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1691144561104.113
  },
  fetch: [AsyncFunction: fetch]
} */
}

//Warn y error nos enseñan colores distintos en la consola (no en el terminal)
// console.warn("Esto es una alerta");
// console.error("Esto es un error");

//globalThis es una variable global que contiene otras variables que vamos a estar utilizando.
// globalThis.console.warn("Esto es una alerta");

// Otra variable importante que vamos a utilizar dentro de Node es el objeto module
// El objeto module tiene la información sobre los módulos en los que estamos trabajando (que estamos expoertando)
//console.log(module)

//module NO existe en ECMAScript 6 (no tiene contenido)

//filename y dirname no existen en ECMAScript 6 tampoco
// console.log({ _filename }); // Hace referencia al archivo donde estamos trabajando
// console.log({ _dirname }); // Hace referencia a la carpeta donde está el archivo donde estamos trabajando

//require es una función que permite importar contenido. Nos permite traer módulos externos a nuestro código
// //require TAMPOCO existe en ECMAScript 6
// console.log(require);

// console.log(process.env.PATH);
//No se recomienda imprimir console.log(process.env). Obtendríamos información del proceso process.env pero no se recomienda imprimirlo porque expondría variables sensibles del proyecto

const argumentos = process.argv.splice(2);

console.log(
  `Hola ${argumentos[0]} ${argumentos[1]}! Bienvenido a la súper app!`
);

//argv añade argumentos
