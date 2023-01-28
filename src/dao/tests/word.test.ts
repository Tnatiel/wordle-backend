import { expect } from 'chai';
import { Word } from '../word/Word';

describe('user class', () => {
    it('should have default word properties', () => {
        const w = new Word();
        expect(w.word).equals('');
        expect(w.wordId).equals(-1);
    });
    it('should have argument properties', () => {
        const w = new Word(1, 'aaa');
        expect(w.word).equals('aaa');
        expect(w.wordId).equals(1);
    });
});
