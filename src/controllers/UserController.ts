import express, { Request, Response } from 'express';
import { UserServices } from '../services/UserServices';

export class UserController {
    userServices: UserServices;
    server: express.Application;
    constructor(server: express.Application, userServices: UserServices) {
        (this.userServices = userServices), (this.server = server), this.configureRoutes();
    }

    configureRoutes() {
        this.server.post('/user/sign-in',  async (req: Request, res: Response) => {
            try {
                const userExist = await this.userServices.findUserById(req.body.email, req.body.password)
                if (userExist) {
                    res.status(200).json(userExist);
                }
            } catch (e) {
                console.log(e)
            }
        });

        this.server.post('/user/sign-up', express.json(),async (req: Request, res: Response) => {
            try {
                const user = await this.userServices.createUser(req.body);
                res.status(201).send(user);

            } catch (e) {
                console.log(e);
                return res.status(404).json({message: e})
            }
        });
    }
}
