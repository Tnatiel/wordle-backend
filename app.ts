import express from 'express'
import cors from 'cors'
import { wordRouter } from './routers/word-router';


export const app = express()

app.use(cors());
app.use('/word',wordRouter)