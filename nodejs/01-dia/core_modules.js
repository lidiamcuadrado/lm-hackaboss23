const os = require("node:os");
const path = require("node:path");
const fs = require("node:fs/promises");
// Entrega el sistema operativo donde estamos trabajando. En el caso de Express, hace referencia al servidor donde los estamos ejecutando

//Entrega la memoria RAM disponible o instalada en el sistema operativo // La cantidad de memoria en bytes que utilice el sistema operativo
// //freememory es memorialibre

// console.log(os.totalmem());
// console.log(os.freemem());

// console.log(os.hostname());
// console.log(os.cpus());

//const miArchivo = path.join(_dirname, 'script.js')
// const miArchivo = path.join(dirname, "script.js");
// const pathName = path.dirname(miArchivo);
// const ext = path.extname(miArchivo);
// const parsed = path.parse(miArchivo);

// console.log({ ext });
// console.log({ pathName });
// console.log({ miArchivo });

//Forma asíncrona writeFile
// fs.writeFile("texto-ejemplo.txt", "Hola mundo", (err) => {
//   if (err) return console.error("Fallo al guardar el archivo");
//   console.log("El archivo se escribió correctamente");
// });

//Forma síncrona writeFileSync
// fs.writeFileSync("texto-ejemplo-sync.txt", "Hola Mundo Síncrono");

//Cuando trabajemos en Node o en Express, trabajaremos en esto con promesas
async function readFile(filename) {
  const data = await fs.readFile(filename, "utf-8");
  return data;
}

readFile("texto-ejemplo-sync.txt")
  .then((file) => console.log(`El texto es: `, file))
  .catch((err) => {
    if (err.code === "ENOENT") console.log("El archivo no se ha encontrado.");
    console.error(err);
  });

//append es el final del archivo
//always read the documentation
async function editFile(name, newContent) {
  try {
    const f = await fs.appendFile(name, newContent);
    return "El archivo fue editado";
  } catch (error) {
    console.error(error);
  }
}

createFile("texto-ejemplo-sync.txt", "Hola Inmundo")
  .then((msg) => console.log(msg))
  .then(editFile("texto-ejemplo-async.txt", "\nEsta es una nueva línea"))
  .then((msg) => console.log(msg));

readFile("texto-ejemplo-async.txt").then((file) =>
  console.log(`El texto es: `, file)
);

//createFile, editFile, readFile, deleteFile
//palabras reservadas

async function deleteFIle(name) {
  const fileURL = path.resolve(_dirname, name);
  const fileObj = path.parse(fileURL);
}
