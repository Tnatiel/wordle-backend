import { expect } from 'chai';
import { checkPosition, decrypt, encrypt, hashData } from './util';

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
});
