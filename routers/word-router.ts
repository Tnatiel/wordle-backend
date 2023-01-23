import express, { Router, Request, Response } from "express";

export const wordRouter = Router();


const word = 'MORAL';

wordRouter.get('/', (req: Request, res: Response) => {
    res.status(200).send(word)
})

wordRouter.post('/check', express.json() , (req: Request, res: Response) => {
    const currentWord = req.body();
    
    if (currentWord === word) {
        res.status(200).send(true)
    }
    if (currentWord !== word) {
        res.status(200).send(false)
    }

    res.status(400). send((e: Error) => console.log(e.message))

})