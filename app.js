import express from 'express';
import connectDB from './scr/config/db.js';
import { port, uri } from './scr/config/constants.js';
import healtCheckRoutes from './scr/routes/healtCheckRoutes.js';
import userRoutes from './scr/routes/userRoutes.js';
import authRoutes from './scr/routes/authRoutes.js';

connectDB();

const app = express();
// nos permite enviar json en peticiones
app.use(express.json());

app.use(uri,healtCheckRoutes);

//http://localhost:500/api/v0/users
app.use(`${uri}/users`, userRoutes);

//http://localhost:500/api/v0/auth
app.use(`${uri}/auth`, authRoutes);

// // Rutas
// import userRoutes from './routes/userRoutes.js';
//app.use('/api/users', userRoutes);

const PORT = port || 5000;
app.listen(PORT, console.log(`Server running on http://localhost:${PORT}${uri}`));


