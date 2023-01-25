import { WordServices } from '../services/WordServices';
import express, { Request, Response } from 'express';

export class WordController {
  wordServices: WordServices;
  server: express.Application;
  constructor(server: express.Application, wordServices: WordServices) {
    (this.wordServices = wordServices), (this.server = server), this.configureRoutes();
  }

  configureRoutes() {
    this.server.get('/word/random-word', async (req: Request, res: Response) => {
      try {
        const randomWord = await this.wordServices.getRandomWordFromDb();
        if (!randomWord) res.status(404).json({messege: 'random word not found'})
        console.log(randomWord)
        res.status(200).json({word_token: randomWord.word_token});
      } catch(e) {
        console.log(e);
        res.status(500).send(e).json({ message: 'Internal server error' });
      }
    });
    this.server.get('/word/:id', async (req: Request, res: Response) => {
      try {
        const wordId = req.params.id;
        const word = await this.wordServices.findWordById(+wordId);
        if (!word) res.status(404).json({messege: 'word with this id not found'})
       res.status(200).send(word);
      } catch (e) {
        console.log(e)
        res.status(500).send(e).json({ message: 'Internal server error' })
      }
    });

    this.server.put('/word/set-used', async (req: Request, res: Response) => {
      const word = req.body.word;
      const updateResult = await this.wordServices.setUsed(word)
      if (!updateResult) res.status(404).send(`update result: ${updateResult}`)
      res.status(200).send(updateResult);
    });

    
  }
}
