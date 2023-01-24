import express from 'express';
import cors from 'cors';
import { UserController } from './controllers/UserController';
import { UserServices } from './services/UserServices';
import { UsersDao } from './dao/users/UsersDao';
import { WordController } from './controllers/WordController';
import { WordServices } from './services/WordServices';
import { WordDao } from './dao/word/WordDao';

export const app = express();

app.use(cors());
app.use(express.json());

const userController = new UserController(app, new UserServices(new UsersDao()));
const wordController = new WordController(app, new WordServices(new WordDao()));
