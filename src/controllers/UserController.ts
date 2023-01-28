
import express, { Request, Response } from 'express';
import { UserServices } from '../services/UserServices';

export class UserController {
  userServices: UserServices;
  server: express.Application;
  constructor(server: express.Application, userServices: UserServices) {
    (this.userServices = userServices), (this.server = server), this.configureRoutes();
  }

  configureRoutes() {
    this.server.get('/user', async (req: Request, res: Response) => {
      console.log(req.body);
      console.log(req.body.id);
      const user = await this.userServices.findUserById(+req.body.id);
      res.status(200).send(user);
    });

    this.server.post('/user', async (req: Request, res: Response) => {
      const user = await this.userServices.createUser(req.body);
      res.status(201).send(user);
    });
  }
}
