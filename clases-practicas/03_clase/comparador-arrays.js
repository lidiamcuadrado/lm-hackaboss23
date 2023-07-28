//Crea una función que reciba dos arrays y devuelva true si tienen exactamente el mismo contenido (en el mismo orden) y false si no

let arr1 = ["rojo", "azul", "verde"]; //a comparar
let arr2 = ["rojo", "azul", "verde"]; //true
let arr3 = ["rojo", "amarillo", "verde"]; //false
let arr4 = ["rojo", "azul", "verde", "amarillo"]; //false

//arrA y arrB SIEMPRE van a ser distintos porque son elementos distintos dentro de la memoria. Lo que necesitamos es comparar el contenido, y por eso utilizamos [i]
function comparar(arrA, arrB) {
  //logica de la compracion
  if (arrA.length != arrB.length) return false;
  // Como ya hemos descartado que la longitud sea distinta, da igual poner arrA.A length or arrB.length en la siguiente línea, ya que en la primera línea hemos hecho que sean de la misma longitud
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] === arrB[i]) {
      return true;
    } else {
      return false;
    }
  }
  return true;
}

console.log(comparar(arr1, arr2)); //true
console.log(comparar(arr1, arr3)); //false
console.log(comparar(arr1, arr4)); //false

let arr5 = [1, 2, 3];
let arr6 = [1, 2, 3];

console.log(comparar(arr5, arr6)); //true
