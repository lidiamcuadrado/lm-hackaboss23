// Modelos. Como es un blog, blogModel.js

//Importamos datos desde la base de datos. Hay que salir para llegar a Node (..). SIEMPRE poner extensión .js aunque no nos salga, porque en los módulos de ECMAScript 6 se necesita el .js aunque no lo autocomplete
import db from "../database/db.js";
import { DataTypes } from "sequelize";

// Definimos cómo es la tabla dentro de la base de datos
const blogModel = db.define("blogs", {
  // Pasamos un objeto con los datos de la tabla
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.STRING, allowNull: false },
});

export default blogModel;
