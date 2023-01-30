import { expect } from "chai";
import { UsersDao } from "../../dao/users/UsersDao";
import { UserServices } from "../UserServices";
import * as sinon from 'sinon';
import { validateNewUser } from "../../util";










describe.only('UserServices', () => {
    let userServices: UserServices;
    let worddao: any
    beforeEach(() => {
        worddao = {}
        userServices = new UserServices(new UsersDao());
    });
    describe('createUser', () => {
        it('should return a new user', async () => {
            const mockUser = {
                email: 'abc@hotmail.com',
                fname: 'aaaa',
                lname: 'aaaa',
                password: '21sdasdasd'
            }
            worddao.add = () => Promise.resolve({rows: [{mockUser}]})


            const res = await userServices.createUser(mockUser)
            expect(res).to.be.an('object');
            expect(res).to.have.property('email');
            expect(res).to.have.property('fname');
            expect(res).to.have.property('lname');
            expect(res).to.have.property('user_token');
        });
        it('should return false, invalid user', async () => {
            
            const mockUser = {
                email: '',
                fname: 'aaaaaa',
                lname: 'aaaa',
                password: '21sdasdasd'
            }

            
            try {
                const res = await userServices.createUser(mockUser);
                expect(res).equals(false)
            } catch (e) {
                expect(e.message).to.equal('invalid email');
            }
        });
    });
    describe.only('checkUserExist', () => {
        it('should return the user', async () => {

            const mockUser = {
                email: 'abc@hotmail.com',
                fname: 'aaaa',
                lname: 'aaaa',
                user_token: '21sdasdasd'
            }
            worddao.find = () => Promise.resolve({mockUser})

            const email = 'rick11@sssssss.com';
            const password = '111111';
            const u = await userServices.validateUser(email, password)
            expect(u).to.be.an('object');
            expect(u).to.have.property('email');
            expect(u).to.have.property('fname');
            expect(u).to.have.property('lname');
            expect(u).to.have.property('user_token');
        });
        it('should return false, user is not valid', async () => {

            // const mockUser = {
            //     email: 'abc@hotmail.com',
            //     fname: 'aaaa',
            //     lname: 'aaaa',
            //     user_token: '21sdasdasd'
            // }
            worddao.find = () => Promise.resolve(false)

            const email = 'rick11@sssssss.com';
            const password = '22wqeqw12121';
            const u = await userServices.validateUser(email, password)
            expect(u).equals(false);
            
        });

    });
});