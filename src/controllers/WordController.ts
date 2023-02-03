import express, { Request, Response } from 'express';
import { WordServices } from '../services/WordServices';
import { decrypt } from '../util';

export class WordController {
    wordServices: WordServices;
    server: express.Application;
    constructor(server: express.Application, wordServices: WordServices) {
        (this.wordServices = wordServices), (this.server = server), this.configureRoutes();
    }

    configureRoutes() {
        this.server.get('/word/random', async (req: Request, res: Response) => {
            try {
                const randomWordData = await this.wordServices.getRandomWordData();
                if (!randomWordData) res.status(404).json({ messege: 'random word data not found' });
                res.status(200).json(randomWordData);
            } catch (e) {
                console.log(e);
                res.status(500).json({ message: 'Internal server error' });
            }
        });

        this.server.post('/word/check', express.json(), async (req: Request, res: Response) => {
            const data = req.body;
            try {
                if (data['iv'] === undefined || data['content'] === undefined || data['key'] === undefined || data['guess'] === undefined) {
                    return res.status(400).send({ message: 'bad request' });
                }
                const { guess, iv, content, key } = req.body;
                const word = decrypt({ iv, content, key });
                console.log(word); // I'm leaving this log so it possible to know the word
                const result = await this.wordServices.checkGuess(guess, { iv, content, key });
                res.status(200).send(result);
            } catch (error) {
                console.error(error);
                res.status(404).json({ messege: 'word not found' });
            }
        });
    }
}
