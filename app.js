import express from 'express';
import connectDB from './scr/config/db.js';
import { port } from "./scr/config/constants.js"

connectDB();

const app = express();
// nos permite enviar json en peticiones
app.use(express.json());

// // Rutas
// import userRoutes from './routes/userRoutes.js';
// app.use('/api/users', userRoutes);

const PORT = port || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
