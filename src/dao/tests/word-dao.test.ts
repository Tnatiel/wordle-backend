import { expect } from 'chai';
import { WordDao } from '../word/WordDao';
import * as sinon from 'sinon';

describe('WordDao', () => {
    let wordDao: WordDao;
    beforeEach(() => {
        wordDao = new WordDao();
    });

    it('should get random');
    describe('getRandomWordFromDb', () => {
        it('should return a random word', async () => {
            const word = await wordDao.getRandomWordFromDb();
            expect(word).to.be.an('object');
            expect(word).to.have.property('word_id');
            expect(word).to.have.property('word');
        });

        it('should throw an error if there is a problem with the query', async () => {
            
            sinon.stub(wordDao.client, 'query').throws(new Error('Query error'));
            try {
                await wordDao.getRandomWordFromDb();
            } catch (e) {
                expect(e.message).to.equal("couldn't get random word");
            }
        });
    });
});
