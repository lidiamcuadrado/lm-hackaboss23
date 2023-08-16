const a = 2;
const b = 3;
console.log("El resultado:", a + b);

// console.log(process);

process.on("exit", () => {
  console.log("El servidor de Node está por cerrarse");
});

process.on("uncaughtException", (err) => {
  console.log("Ocurrió un error muy grave");
  console.log(err.stack);
});

throw new Error("Este es un error gravísimo!");

// En las aplicaciones pueden ocurrir errores, y son parte muy importante de codificar la aplicación. Por ejemplo, el usuario no entrega un e-mail sino un texto, etc. Si llega a haber un error y no he validado, voy a tener problemas.

// La variable process es parte de Node
