///Common JS
//Es la antigua fórmula de generar módulos. Hace varios años JS necesitaba poder toamr el código y dividirlo en varios archivos, lo que no se podía hacer fácilmente.
// CommonJS es una iniciativa liderada por Node para poder divir nuestro código en varios módulos.
// Un módulo es un archivo que contiene todo lo necesario para pdoer funcionar y que es como una especie de trozo de código que exporta su contenido a otros elementos.
// En este sentido, puedo exportar archivos a distintos proyectos sin problema.

const arraySum = require("./modulos/arraySum.js");

const suma = arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(suma);

/// ESModules
