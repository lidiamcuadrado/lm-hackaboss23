function arraySum(arr) {
  return arr.filter((i) => i > 3).reduce((sum, i) => sum + i);
}

//En Node existe el objeto module. El objeto module tiene un key exports (module.exports) que nos va a permitir exportar contenido de un módulo para poder utilizarlo en cualquier otro archivo.
// La utilidad de esto es que es una función que va a funcionar igual desde donde yo la llame.
// El módulo funciona como una cápsula: uno no debiese estar modificando este contenido.
// En un módulo puedes agregar la cantidad de funciones que tú quieras,

module.exports = { arraySum: arraySum, arrayRest: arrayRest };
//Módulos de EcmaScript 6
//Hay que conocer varias estructuras porque en el futuro no vamos a ocupar CommonJS sino los módulos de EcmaScript 6

function arrayRest(arr) {
  return arr.filter((i) => i < 3).reduce((sum, i) => sum + i, 0);
}
