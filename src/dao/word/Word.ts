export class Word {
    wordId: number;
    word: string;
    constructor(wordId = -1, word = '') {
        (this.wordId = wordId), (this.word = word);
    }
}
