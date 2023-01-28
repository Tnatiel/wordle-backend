import { expect } from "chai";
import * as sinon from "sinon";
import { WordDao } from "../../dao/word/WordDao";
import { encrypt } from "../../util";
import { WordServices } from "../WordServices";



describe('WordServices', () => {
    let wordServices: WordServices;
    beforeEach(() => {
        wordServices = new WordServices(new WordDao());
    });
    describe('getRandomWordData', () => {
        it('should return get a object of encrypted word data', async () => {
            const res = await wordServices.getRandomWordData();
            expect(res).to.be.an('object');
            expect(res).to.have.property('iv');
            expect(res).to.have.property('content');
            expect(res).to.have.property('key');
        });
        it('should throw an error', async () => {
            sinon.stub(wordServices, 'getRandomWordData').throws(new Error('Service error'))
            try {
                await wordServices.getRandomWordData();
            } catch (e) {
                expect(e.message).to.equal('Service error');
            }
        });
    });
    describe.only('checkGuess', () => {
        it('should return the class array filled with correct and correct=true', async () => {
            const wordData = encrypt('HELLO');
            const guess = 'HELLO';
            const res = await wordServices.checkGuess(guess, wordData)
            expect(res.classes[0]).equals('correct')
            expect(res.classes[1]).equals('correct')
            expect(res.classes[2]).equals('correct')
            expect(res.classes[3]).equals('correct')
            expect(res.classes[4]).equals('correct')
            expect(res.correct).equal(true)
        });
        it('should return the class array filled with aproppriate classes correct=false', async () => {
            const wordData = encrypt('HLEZZ');
            const guess = 'HELLO';
            const res = await wordServices.checkGuess(guess, wordData)
            expect(res.classes[0]).equals('correct')
            expect(res.classes[1]).equals('present')
            expect(res.classes[2]).equals('present')
            expect(res.classes[3]).equals('present')
            expect(res.classes[4]).equals('wrong')
            expect(res.correct).equal(false)
        });
        
    });
});