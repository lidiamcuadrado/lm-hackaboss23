// Reduce
//reduce (callback)
//recude((acc, curr, index, arr) => {})
// acc es el acumulador
// curr es el current value

const a = [7, 2, 9, 5, 20, 8, 3, 10, 4, 1, 6];
const suma = a.reduce((acc, curr) => acc + curr, 0);
suma;

// sort ordena de menos a más y en orden alfabético si es (a - b)
// sort ordena de más a menos si hacemos (a + b)

// .sort() ordena en orden alfabético de caracter
// .sort((a, b) => a - b) ordena números de menor a mayor
// .sort((a, b) => b - a) ordena números de mayor a menor
