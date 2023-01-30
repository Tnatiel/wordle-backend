import { expect } from 'chai';
import { User } from './dao/users/User';
import { checkPosition, decrypt, encrypt, hashData, validateUser } from './util';

describe('util', () => {
    describe('encrypt', () => {
        it('should return encrypted word data', () => {
            const res = encrypt('test');
            expect(res).to.be.an('object');
            expect(res.content).to.be.a('string');
            expect(res.iv).to.be.a('string');
            expect(res.key).to.be.a('string');
        });
    });
    describe('decrypt', () => {
        it('should return decrypted word', () => {
            const encryptedWord = encrypt('test');
            const res = decrypt(encryptedWord);
            expect(res).to.be.an('string');
            expect(res).equals('test');
        });
    });
    describe('checkPosition', () => {
        it('should return  the class array filled with correct and correct=true', () => {
            const guess = 'HELLO';
            const res = checkPosition(guess, guess);
            expect(res.classes[0]).equals('correct');
            expect(res.classes[1]).equals('correct');
            expect(res.classes[2]).equals('correct');
            expect(res.classes[3]).equals('correct');
            expect(res.classes[4]).equals('correct');
            expect(res.correct).equal(true);
        });
        it('should return the class array filled with appropriate classes and correct=false', () => {
            const guess = 'HELLO';
            const res = checkPosition(guess, 'HZZZZ');
            expect(res.classes[0]).equals('correct');
            expect(res.classes[1]).equals('wrong');
            expect(res.classes[2]).equals('wrong');
            expect(res.classes[3]).equals('wrong');
            expect(res.classes[4]).equals('wrong');
            expect(res.correct).equal(false);
        });
        it('should return the class with length eaqul to guess length ', () => {
            const guess = 'HELLO';
            const res = checkPosition(guess, 'HZZZZ');
            expect(res.classes.length).equals(guess.length);
        });
    });

    describe('hashData', () => {
        it('should return a string different from inserted data', async () => {
            const data = 'test';
            const res = await hashData(data, 10);
            expect(res).to.be.an('string');
            expect(res).not.equals(data);
        });
    });


    describe('validateUser', () => {
        
        it(' should throw error, no payload', () => {
            try {
                validateUser(undefined)
            }
            catch (e) {
                expect(e.message).to.equal('empty value is not a user')

            }
        });
        it(' should throw error, invalid email', () => {

            const mockUser = {
                email: 'abc',
                fname: 'aa',
                lname: 'aa',
                password: '123'
            }
            try {
                validateUser(mockUser)
            }
            catch (e) {
                expect(e.message).to.equal('email not valid')

            }
        });
        it(' should throw error, last name and first name should be string', () => {

            const mockUser = {
                email: 'abc@hotmail.com',
                fname: '1',
                lname: '1',
                password: '123'
            }
            try {
                validateUser(mockUser)
            }
            catch (e) {
                expect(e.message).to.equal('last name and first name should be string')

            }
        });
        it(' should throw error, first name <3', () => {

            const mockUser = {
                email: 'abc@hotmail.com',
                fname: 'a',
                lname: 'aaaa',
                password: '123'
            }
            try {
                validateUser(mockUser)
            }
            catch (e) {
                expect(e.message).to.equal('first name must be 3 to 30 chars length')

            }
        });
        it(' should throw error, first name > 30', () => {

            const mockUser = {
                email: 'abc@hotmail.com',
                fname: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                lname: 'aaaa',
                password: '123'
            }
            try {
                validateUser(mockUser)
            }
            catch (e) {
                expect(e.message).to.equal('first name must be 3 to 30 chars length')

            }
        });
        it(' should throw error, last name <3', () => {

            const mockUser = {
                email: 'abc@hotmail.com',
                fname: 'aaaa',
                lname: 'a',
                password: '123'
            }
            try {
                validateUser(mockUser)
            }
            catch (e) {
                expect(e.message).to.equal('last name must be 3 to 30 chars length')

            }
        });
        it(' should throw error, last name > 30', () => {

            const mockUser = {
                email: 'abc@hotmail.com',
                fname: 'aaaa',
                lname: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                password: '123'
            }
            try {
                validateUser(mockUser)
            }
            catch (e) {
                expect(e.message).to.equal('last name must be 3 to 30 chars length')

            }
        });
        it(' should throw error, password <3', () => {

            const mockUser = {
                email: 'abc@hotmail.com',
                fname: 'aaaa',
                lname: 'aaaa',
                password: '21'
            }
            try {
                validateUser(mockUser)
            }
            catch (e) {
                expect(e.message).to.equal('password must be 6 to 30 chars length')

            }
        });
        it(' should throw error, password > 30', () => {

            const mockUser = {
                email: 'abc@hotmail.com',
                fname: 'aaaa',
                lname: 'aaaaa',
                password: '1234567890123456789012345678901265'
                }
            try {
                validateUser(mockUser)
            }
            catch (e) {
                expect(e.message).to.equal('password must be 6 to 30 chars length')

            }
        });
    });
});
