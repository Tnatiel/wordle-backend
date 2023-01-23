import { UserServices } from "../services/UserServices";

import express, { Request, Response } from 'express';
import { UsersDao } from "../dao/users/UsersDao";



export class UserController {
    userServices: UserServices;
    server: express.Application;
    constructor(server: express.Application, userServices: UserServices, ) {
        this.userServices = userServices,
        this.server = server,
        this.configureRoutes()
    }

    configureRoutes () {
        this.server.post('/user', express.json(), async (req: Request, res: Response) => {
            console.log(req.body)
            const user = await this.userServices.createUser(req.body);
            res.status(201).send(user);
        });
    }


}