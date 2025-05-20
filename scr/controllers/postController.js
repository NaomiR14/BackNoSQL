import Post from "../model/Post.js";
import User from "../model/Users.js";


//Logica 1 Recuperar todos los post de mongo con el modelo post
export const getAllPosts = async (req,res) => {

    try {
        const post = await Post.find()
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({message: error.message});
    }

};

//Logica 1 Crear post  de mongo con el modelo User
export const createPost = async (req, res) => {
    const {title, description, user} = req.body

    //console.log("Taco " + user)

    //verificacion de existencia del usuario
    const userId = await User.findById(user)
    if(!userId) {
        return res.status(404).json({ message:`El usuario con ID ${user} no existe` });
    }

    //Creacuib de objeto POST
    const post = new Post ({
        title,
        description,
        user: userId
    })


  try {
   
    await post.save();
    res.status(200).json({message: 'Post fue creado exitosamente'});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};