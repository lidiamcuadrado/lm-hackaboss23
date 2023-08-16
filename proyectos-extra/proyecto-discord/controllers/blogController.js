// Controladores. Como es un blog, blogController.js

//CRUD

import blogModel from "../models/blogModel.js";

//// Mostrar todos los blogs (posts)

//La funcióon tiene que ser asíncrona para no parar la database.
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.findAll();
    //Hace siempre la respuesta: que devuelva un Json de lo que se ha encontrado
    res.json(blogs);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//// Mostrar un blog (post) por su id // Por el id es más cómodo porque es un número único

export const getBlog = async (req, res) => {
  try {
    const blog = await blogModel.findAll({
      where: { id: req.params.id },
    });
    res.json(blog[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//// Crear un blog (post)

export const createBlog = async (req, res) => {
  try {
    // Body es el body de la página (HTML). Queremos que se cree en el body
    await blogModel.create(req.body);
    res.json({
      message: "Blogpost creado correctamente",
    });
  } catch (error) {}
};
//// Actualizar un blog (post) por su id

export const updateBlog = async (req, res) => {
  try {
    // Aquí necesito que me pase un id para saber cuál es el post que quiero actualizar
    await blogModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "Blogpost actualizado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//// Eliminar un blog (post) por su id

export const deleteBlog = async (req, res) => {
  try {
    const blog = await blogModel.findByIdAndDelete(req.params.id);
    // await blogModel.destroy({
    //   where: { id: req.params.id },
    // });
    res.json(blog);
  } catch (error) {
    res.json({ message: error.message });
  }
};
