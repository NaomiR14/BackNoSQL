import User from "../model/Users.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { keyToken  } from '../config/constants.js';

const generateToken = (id) => {
  return jwt.sign({ id }, keyToken, { expiresIn: '30d' });
};

//Logica 1 Registrar un Usuario al sistema
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
    return;
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

//Logica 2 Nos logeamos a nuestra app

export const authenticateUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  console.log("Usuario: " + user)

  // console.log(`Contrasenia: ${password}   `)
  // console.log(`Contrasenia Cifrada guardada en DB: ${user.password} `)

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};
