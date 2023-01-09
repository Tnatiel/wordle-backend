import { Router, Request, Response } from "express";

export const wordRouter = Router();


wordRouter.get('/', (req: Request, res: Response) => {
    res.status(200).send('MORAL')
})