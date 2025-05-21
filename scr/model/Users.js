import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlenght: 50

    },
    email: {
    type: String,
    required: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password:{
      type: String,
      required: true,
    }
});

//Funcion para hasear (transformar la contraseña a un texto ilegible)
//antes de guardar el valor real de la contraseña en MongoDB

UserSchema.pre('save', async function (next) {

  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 15);
  next();
  
})

const User = mongoose.model('User', UserSchema);
export default User;

