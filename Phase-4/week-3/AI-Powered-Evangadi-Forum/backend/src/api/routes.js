import express from 'express';
import authRoutes from './routes/auth.routes.js'
// import authRoutes from "./auth/routes/auth.routes.js";

export const mainRouter = express.Router();

// Authentication routes
//  /api/auth
mainRouter.use('/auth', authRoutes);
