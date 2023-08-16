// Rutas -> Verbos: get, post...

// Para las rutas, necesitamos express sí o sí

import express from "express";

// Importamos lo que hemos creado en los controles del blog (blogController.js)
import {
  createBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";

// Guardamos en la variable router las funciones de express Router, que define las rutas (funciones del servidor)
const router = express.Router();

//Crear -> El verbo de crear es 'post'
// '/' es el path: root del servidor
router.post("/", createBlog);

// Mostrar todos los blogs -> 'get'
router.get("/", getAllBlogs);

// Mostrar solo uno (por ID): el id está en al ruta
router.get("/:id", getBlog);

// Actualizar -> put
router.put("/:id", updateBlog);

// Borrar -> delete
router.delete("/:id", deleteBlog);

// Con los códigos de arriba hemos definido las rutas donde queremos que haga las funciones.

export default router;
