//EJERCICIO
//Crea una función que reciba dos objetos y devuelva true si son iguales y false si no.
//En los ejemplos, son iguales los dos primeros

const obj1 = {
  key1: "a",
  key2: "b",
};

const obj2 = {
  key2: "b",
  key1: "a",
};

const obj3 = {
  key1: "a",
  key2: "c",
};

const obj4 = {
  key1: "a",
  key2: "b",
  key3: "c",
};

const obj5 = {
  key1: "a",
  key3: "b",
};

function sonIguales(objA, objB) {
  let objAkeys = Object.keys(objA);
  let objBkeys = Object.keys(objA);
  if (objAkeys.length !== objBkeys.length) return false; // Distinta cantidad de claves (keys)

  for (i = 0; i < objAkeys.length; i++) {
    let key = objAKeys[i]; //Me interesa lo que haya en cada key [el value] // 'Key' es la 'i' en el array
    console.log("key", key);
    console.log(objB[key]);
  }
}

console.log(sonIguales(obj1, obj2)); //true
console.log(sonIguales(obj1, obj3)); //false
console.log(sonIguales(obj1, obj4)); //false
console.log(sonIguales(obj1, obj5)); //false
