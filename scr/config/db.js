import mongoose from "mongoose";
//Importacion de variables de entorno
import { mongoDomain, mongoPWD, mongoUser, mongoDb } from "../config/constants.js"

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://adrianaroman433:BtVjZunJ0fZf1W3U@roman.cfneyxj.mongodb.net/");
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

export default connectDB;