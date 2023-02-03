import { expect } from 'chai';
import * as sinon from 'sinon';
import { UsersDao } from '../users/UsersDao';
import bcrypt from 'bcrypt';

describe('UsersDao', () => {
    let usersDao: UsersDao;
    beforeEach(() => {
        usersDao = new UsersDao();
    });

    describe('add', () => {
        it('should add new user and return user with properites', async () => {
            const mockUser = {
                email: 'abc@hotmail.com',
                fname: 'aaaa',
                lname: 'aaaa',
                password: '21',
            };
            const user = await usersDao.add(mockUser);
            expect(user).to.be.an('object');
            expect(user).to.have.property('email');
            expect(user).to.have.property('fname');
            expect(user).to.have.property('lname');
            expect(user).to.have.property('user_token');
        });

        it('should throw a query error', async () => {
            const mockUser = {
                email: '',
                fname: '',
                lname: '',
                password: '',
            };
            sinon.stub(usersDao.client, 'query').throws(new Error('Query error'));
            try {
                await usersDao.add(mockUser);
            } catch (e) {
                expect(e.message).to.equal("couldn't get random word");
            }
        });
        it('should return false', async () => {
            const mockUser = {
                email: '',
                fname: '',
                lname: '',
                password: '',
            };
            sinon.stub(usersDao.client, 'query').returnValues = [];
            try {
                const u = await usersDao.add(mockUser);
                expect(u).equals(false);
            } catch (e) {
                console.log(e);
            }
        });
    });
    describe('find', () => {
        it('should return user with properties', async () => {
            const email = 'rick11@sssssss.com';
            const password = '111111';

            const user = await usersDao.find(email, password);
            expect(user).to.be.an('object');
            expect(user).to.have.property('email');
            expect(user).to.have.property('fname');
            expect(user).to.have.property('lname');
            expect(user).to.have.property('user_token');
        });

        it('should throw a query error', async () => {
            const email = 'rick11@sssssrrrrss.com';
            const password = '22';
            sinon.stub(usersDao.client, 'query').throws(new Error('Query error'));
            try {
                await usersDao.find(email, password);
            } catch (e) {
                expect(e.message).to.equal('Query error');
            }
        });
        it('should return undefined, user dont exist', async () => {
            const email = 'rick11@sssssrrrrss.com';
            const password = '22';

            try {
                const res = await usersDao.find(email, password);
                expect(res).equals(undefined);
            } catch (e) {
                expect(e.message).to.equal('Query error');
            }
        });
        it('should return false, invalid user', async () => {
            const email = 'rick11@sssssss.com';
            const password = '22';

            const compare = (...args: any[]) => { // eslint-disable-line
                return false;
            };

            sinon.stub(bcrypt, 'compare').callsFake(compare);
            try {
                const res = await usersDao.find(email, password);
                expect(res).equals(false);
            } catch (e) {
                expect(e.message).to.equal('Query error');
            }
        });
    });
});
