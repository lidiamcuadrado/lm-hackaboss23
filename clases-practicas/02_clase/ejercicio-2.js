// Ejercicio 2: Partiendo de un objeto que incluye una serie de personaas con sus respectivas edades, saca por consola un mensaje por cada persona que diga "Nombre es mayor de edad" o "Nombre es menor de edad", según corresponda. Haz que sea una función que reciba el objeto como parámetro.

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};

// console.log(Object.values(people).length)
// console.log(Object.values(people))
// console.log(Object.keys(people))

const mayorEdad = 18;
//Invoca palabra clave Object luego la función (en este caso keys o values) y después del objeto específico)

const nombre = Object.keys(people);
const edad = Object.values(people);
// console.log(nombre);
// console.log(edad);

// Index es singular y array/object es plural
function mayoriaEdad() {
  for (i = 0; i < nombre.length; i++) {
    //   console.log(nombre[i]);
    //   console.log(edad[i]);
    if (edad[i] >= mayorEdad) {
      console.log(`${nombre[i]} tiene ${edad[i]} y es mayor de edad.`);
    } else {
      console.log(`${nombre[i]} tiene ${edad[i]} y es menor de edad.`);
    }
  }
}

//Invocamos a la función:
mayoriaEdad(people);
