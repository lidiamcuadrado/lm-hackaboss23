function contabilizarAnimales(animals) {
  const animales = {}; // CREAMOS EL OBJETO VACIO DONDE EL ESCLAVO VA A IR METIENDO LOS DATOS
  for (const animal of animals) {
    // RECORREMOS EL ARRAY ORIGINAL CON LOS ANIMALES
    const species = animal.species; //CREAMOS EN UNA VARIABLE LA SINTAXIS "animal.species" PARA NO TENER QUE PONERLO TODO EL RATO
    if (!animales[species]) {
      // EL ESCLAVO COMPRUEBA SI EN EL OBJETO VACIO EXISTE "animals.species" QUE ES EL NOJMBRE DEL ANIMAL DEL OBJETO ORIGINAL
      animales[species] = 0; // SI NO EXISTE, AÑADE UN NUEVO ANIMAL AL OBJETO CON EL VALOR 0
    }
    animales[species]++; // AQUÍ SUMA 1 TANTO SI EXISTE LA CLASE COMO A LA CLASE NUEVA QUE ACABAMOS DE CREAR EN EL OBJETO
  }
  return animales; // EL ESCLAVO NOS DEVUELVE EL NUEVO OBJETO DESPUES DE HABER RECORRIDO EL ARRAY ORIGINAL Y AÑADIENDO TODOS LOS ANIMALES
}

function alternativa(animals) {
  const animales = {}; // CREAMOS EL OBJETO VACIO DONDE EL ESCLAVO VA A IR METIENDO LOS DATOS
  animals.map((x) => {
    // RECORREMOS EL OBJETO CON UN MAP, ASIGNANDO A CADA ITERACIÓN LA VARIABLE "X"
    if (!animales[x.species]) animales[x.species] = 0; //COMPROBAMOS SI NO EXISTE EN EL OBJETO NUEVO, EL ANIMAL QUE ESTAMOS ITERANDO EN EL OBJETO ORIGINAL, EN CASO DE QUE NO EXISTA DIRECTAMENTE LO INTRODUCIMOS CON EL VALOR 0
    animales[x.species]++; // AQUÍ AÑADIMOS EL VALOR QUE ESTAMOS ITERANDO SUMANDO 1 AL ANIMAL, TANTO SI EXISTE EN EL NUEVO OBJETO COMO SI LO ACABAMOS DE CREAR EN LA LINEA ANTERIOR
  });
  return animales; // LE DECIMOS AL ESCLAVO QUE NOS DEVULVA EL NUEVO OBJETO CON LOS ANIMALES, QUE NOS CAE MUY BIEN PERO QUE TIENE UNA PINTA DE DELINCUENTE QUE TIRA PARA ATRÁS Y QUE NO NOS FIAMOS DE ÉL NI UN PELO.
}

function init(array) {
  const especies = array.map((animal) => animal.species);
  console.log(especies);

  const obj = {};
  for (const name of especies) {
    console.log(name, obj[name]);
    if (obj[name] === undefined) {
      obj[name] = 1;
    } else {
      obj[name] += 1;
    }
  }
  return obj;
}

init(animals);
