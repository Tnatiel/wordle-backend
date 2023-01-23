import { UserSevices } from "../services/UserServices";

import express, { Request, Response } from "express";



export class UserController {
    constructor(public userServices: UserSevices, public server: express.Application) {
        this.configureRoutes()
    }

    configureRoutes () {
        this.server.post('/user', express.json(), async (req: Request, res: Response) => {
            const user = await this.userServices.createUser(req.body);
            res.status(201).send(user);
        });
    }


}