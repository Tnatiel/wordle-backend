import express from 'express'
import cors from 'cors'
import { wordRouter } from './routers/word-router';
import { UserController } from './controllers/UserController';
import { UserServices } from './services/UserServices';
import { UsersDao } from './dao/users/UsersDao';


export const app = express()

app.use(cors());
app.use('/word',wordRouter);

const userController = new UserController(app, new UserServices( new UsersDao()))