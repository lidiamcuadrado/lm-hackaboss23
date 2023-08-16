//// Levantar el servidor
// Nos da las rutas
import express from "express";
import cors from "cors";
// Base de datos
import db from "./database/db.js";
// Qué hacemos con las rutas que tenemos
import blogRoutes from "./routes/routes.js"; // Nos da las rutas

/// Pasamos express completo para poder trabajar con él más comodamente, igual que en routes hemos pasado la parte de las rutas
const app = express();

//// Middlewares
app.use(cors());
app.use(express.json()); // Este es totalmente imprescindible porque levanta el servidor
// Limitar que lo que acabamos de hacer solo quede en blogs, porque seguramente tendremos más cosas en nuestra página
app.use("/blogs", blogRoutes);

/// Conectamos con la base de datos -> tiene que ser asíncrona sí o sí, porque si no nos tira la página hasta que conecte
try {
  await db.authenticate();
  console.log("Se ha conectado a la base de datos");
} catch (error) {
  console.error("Error al conectar a la base de datos: ", error);
}

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(3500, () => {
  console.log("Servidor corriendo en el puerto http://localhost:3500");
});
