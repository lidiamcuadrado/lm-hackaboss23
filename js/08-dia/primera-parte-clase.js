//Esto es un comentario de una sola línea

/*
Esto es un comentario de varias líneas
*/

//Variables -> Contenedores de información
/*
	Textos (String)
  Números -> Todos los tipos de números, incluyendo NaN (Not a Number)
  Valores booleanos -> Valores que pueden ser true/false (por ejemplo, si el usuario ha iniciado sesión o no, o si está activo o no)
  Listas de elementos
  Objetos
	null / undefined -> son similares. 'null' es un elemento vacío, y 'undefined' es que no se ha definido su contenido
*/

/*
	Las variables deben empezar por una letra (sin caracteres epeciales)
  Pueden empezar con los signos: $ y _ (aunque no es obligatorio)
  Pueden tener números siempre y cuando no sea el primer caracter (si pongo un número al principio de una variable va a pensar que es un número, no una variable)
  No pueden tener espacios. Reemplazar por camelCase o por snake_case (nunca -)
*/

var saludo = 'Hola Mundo'
saludo = 'Hello World!'

saludo = 13

var numeroDiez = 10
var numero_11 = 11 // -> Integer (número entero) -> number
let numeros_flotantes = 3.14159 // Float (decimal) -> number 
var edad = '25' // String

var activo = true
var pi 0 3.14159
var ressultadoSuma = 2

/*

ES6 EcmaScript 6 (2015) -> EcmaScript es el estándar de JavaScript que va definiendo cómo se comporta el lenguaje. EcmaScript es la versión que funciona hasta el 2015. Del 2015 al adelante, cada junio hay actualizaciones del lenguaje, pero EcmaScript 6 sigue siendo la versión actual

var es lo mismo que let -> Se comporta de la misma forma y aplican los mismos modos de escritura, aunque hay algunas cosas distintas: solo puedo llamar 'let' desde ciertos lugares

const es una constante -> La diferencia entre let y const es que las constantes tienen un valor constante. En algunos contextos, las constantes sí pueden variar
*/

let nuevaVariable = true
const nuevaConstante = false

typeof saludo 

// let y const no se pueden re-declarar

typeof nuevaVariable // nos va a decir que es boolean (true/false)

var variableSimple 

typeof variableSimple 

console.log(numeros_flotantes) // Console hace referencia a la consola. log es un registro. el valor entre () es el registro que yo quiero dejar en la consola; en este caso, el valor de los números flotantes