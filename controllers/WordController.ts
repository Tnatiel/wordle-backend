import { WordServices } from '../services/WordServices';
import express, { Request, Response } from 'express';

export class WordController {
  wordServices: WordServices;
  server: express.Application;
  constructor(server: express.Application, wordServices: WordServices) {
    (this.wordServices = wordServices), (this.server = server), this.configureRoutes();
  }

  configureRoutes() {
    this.server.get('/word/:id', async (req: Request, res: Response) => {
      const wordId = req.params.id;
      const word = await this.wordServices.findWordById(+wordId);
      res.status(200).send(word);
    });

    this.server.put('/word/set-used', async (req: Request, res: Response) => {
      const word = req.body.word;
      console.log('server worf' ,word)
      const updateResult = await this.wordServices.setUsed(word)
      if (!updateResult) res.status(404).send(`update result: ${updateResult}`)
      res.status(200).send(updateResult);
    });
  }
}
