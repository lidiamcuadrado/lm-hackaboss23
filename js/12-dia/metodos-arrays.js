// Arrays
const comida = ["pizza", "hamburguesa", "ensalada", "pasta"];

comida[3];
comida[comida.length - 1]; //.length -1 entrega el último elemento del array

//Si comida fuese un objeto si podría hacer comida.1 (me pondría el objeto [comida] y luego la propiedad que estuviese en el índice 1)

//indexOf
//indexOf(item)

//lasttIntexOf
//lastIndexOf(item)
const i = comida.lastIndexOf("hamburguesa");
i;

//reverse
const reverse = comida.reverse();
reverse;
comida;

//join -> Convierte en un string
//join(separador)
const text = comida.join(" | ");
text;
