// Base de datos

import { Sequelize } from "sequelize";

// Ponemos primero el nombre de la base de datos, en nuestro caso database_app (que hemos creado con DBeaver)
// Siguiente el usuario de nuestra base de datos (de MySQL)
// Siguiente la contraseña de nuestra base de datos (de MySQL)
const db = new Sequelize("database_app", "lidiamaria", "1234", {
  host: "localhost",
  dialect: "mysql",
});

//Exportar para poder usarlo donde lo necesitemos
export default db;
