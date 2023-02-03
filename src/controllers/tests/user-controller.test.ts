import { UserController } from '../UserController';
import express from 'express';
import request from 'supertest';
import { UserServices } from '../../services/UserServices';
import { UsersDao } from '../../dao/users/UsersDao';

describe('userController', () => {
    let userController: UserController;
    let server: express.Application;

    beforeEach(() => {
        server = express();
        userController = new UserController(server, new UserServices(new UsersDao()));
    });
    describe('POST /user/sign-in', () => {
        it('should return 200 and the user', async () => {
            const mockUser = {
                email: 'abc@hotmail.com',
                fname: 'aaaa',
                lname: 'aaaa',
                password: '21sdasdasd',
            };

            userController.userServices.validateUser = () => Promise.resolve(mockUser);
            request(userController.server).get('/user/sign-in').expect(200).expect(mockUser).expect('content-type', 'apllication/json');
        });

        it("should return false if password didn't match token", async () => {
            userController.userServices.validateUser = () => Promise.resolve(false);
            request(userController.server).get('/user/sign-in').expect(404).expect(false).expect('content-type', 'apllication/json');
        });

        it('should return a 500 if an error occurs', async () => {
            const error = new Error('some error');
            userController.userServices.validateUser = () => Promise.reject(error);

            request(userController.server)
                .get('/user/sign-in')
                .expect(500)
                .expect({ message: 'Internal server error' })
                .expect('content-type', 'apllication/json');
        });
    });
    describe.only('POST /user/sign-up', () => {
        it('should return the user with status code 201', async () => {
            const mockUser = {
                email: 'abc@hotmail.com',
                fname: 'aaaa',
                lname: 'aaaa',
                password: '21sdasdasd',
            };

            userController.userServices.createUser = () => Promise.resolve(mockUser);

            return request(userController.server)
                .post('/user/sign-up')
                .send({ mockUser })
                .expect(201)
                .expect({ ...mockUser })
                .expect('content-type', 'application/json; charset=utf-8');
        });
        it('should return  status code 404 false', async () => {
            userController.userServices.createUser = () => Promise.resolve(false);
            
            return request(userController.server)
                .post('/user/sign-up')
                .send(undefined)
                .expect(400)
                .expect({ userCreated: false })
                .expect('content-type', 'application/json; charset=utf-8');
        });
        it('should return  status code 500', async () => {
            const error = new Error('some error');
            userController.userServices.createUser = () => Promise.reject(error);

            return request(userController.server)
                .post('/user/sign-up')
                .send({})
                .expect(500)
                .expect({})
                .expect('content-type', 'application/json; charset=utf-8');
        });
    });
});
