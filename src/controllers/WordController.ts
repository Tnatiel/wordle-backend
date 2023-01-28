import express, { Request, Response } from 'express';
import { WordServices } from '../services/WordServices';

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
        if (!randomWordData) res.status(404).json({messege: 'random word data not found'})
        res.status(200).json(randomWordData)
        
      } catch(e) {
        console.log(e);
        res.status(500).send(e).json({ message: 'Internal server error' });
      }
    });
    this.server.post('/word/check', async (req: Request, res: Response) => {
      
      const { guess, iv, content, key} = req.body;
      console.log('request body: ', req.body)
      console.log('guess: ', guess);
      const result = await this.wordServices.checkGuess(guess, {iv, content, key})
      if (!result) res.status(503).json({messege: 'couldn\'t check word'})
      console.log('result: ', result)
      res.status(200).json(result)
      
    });
  
    
  }
}
