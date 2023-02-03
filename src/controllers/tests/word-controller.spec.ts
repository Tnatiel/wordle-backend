import express from 'express';
import request from 'supertest';
import { WordController } from '../WordController';
import { WordServices } from '../../services/WordServices';
import { WordDao } from '../../dao/word/WordDao';
import { encrypt } from '../../util';

describe('WordController', () => {
    let wordController: WordController;
    let server: express.Application;

    beforeEach(() => {
        server = express();
        wordController = new WordController(server, new WordServices(new WordDao()));
    });
    // how to config prettier to keep this line as is
    describe('GET /word/random', () => {
        it('should return a random word', async () => {
            const encryptedWord = encrypt('test');
            const expectedWord = { word: 'test', ...encryptedWord };
            wordController.wordServices.getRandomWordData = jest.fn(() => Promise.resolve(expectedWord));
            request(wordController.server).get('/word/random').expect(200).expect(encryptedWord).expect('content-type', 'apllication/json');
        });

        it('should return a 404 if no word is found', async () => {
            wordController.wordServices.getRandomWordData = jest.fn(() => Promise.resolve(null));
            request(wordController.server)
                .get('/word/random')
                .expect(404)
                .expect({ messege: 'random word data not found' })
                .expect('content-type', 'apllication/json');
        });

        it('should return a 500 if an error occurs', async () => {
            const error = new Error('some error');
            wordController.wordServices.getRandomWordData = jest.fn(() => Promise.reject(error));

            request(wordController.server)
                .get('/word/random')
                .expect(500)
                .expect({ message: 'Internal server error' })
                .expect('content-type', 'apllication/json');
        });
    });
    describe('POST /word/check', () => {
        it('should return the check result with status code 200', async () => {
            const encryptedWord = encrypt('test');
            const expextedResult = {
                classes: ['correct', 'correct', 'correct', 'correct', 'correct'],
                correct: true,
            };
            wordController.wordServices.checkGuess = jest.fn(() => Promise.resolve(expextedResult));

            return request(wordController.server)
                .post('/word/check')
                .send({ guess: 'test', ...encryptedWord })
                .expect(200)
                .expect(expextedResult)
                .expect('content-type', 'application/json; charset=utf-8');
        });
        it('should return  status code 400 bad request', async () => {
            wordController.wordServices.checkGuess = jest.fn(() => Promise.resolve(undefined));

            return request(wordController.server)
                .post('/word/check')
                .send(undefined)
                .expect(400)
                .expect({ message: 'bad request' })
                .expect('content-type', 'application/json; charset=utf-8');
        });
        it('should return  status code 404 bad request', async () => {
            const encryptedWord = encrypt('test');
            const error = new Error('some error');
            wordController.wordServices.checkGuess = jest.fn(() => Promise.reject(error));

            return request(wordController.server)
                .post('/word/check')
                .send({ guess: 'test', ...encryptedWord })
                .expect(404)
                .expect({ messege: 'word not found' })
                .expect('content-type', 'application/json; charset=utf-8');
        });
    });
});
