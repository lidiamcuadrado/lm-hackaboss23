// Importo queryString desde Node (módulo propio de Node)
const queryString = require("node:querystring");

const str = "foo=bar&abc=xyz&abcd=123";

// The querystring.parse() method parses a URL query string (str) into a collection of key and value pairs.
const data = queryString.parse(str);
console.log({ data });

//Convertir a string los queryParams
console.log(queryString.stringify(data));
