export class Word {
  wordId: number;
  used: boolean;
  wordEncrypted: boolean;
  word: string;
  wordToken: string;
  constructor(wordId = -1, used = false, wordEncrypted = false, word = '', wordToken = '') {
    (this.wordId = wordId), (this.used = used), (this.wordEncrypted = wordEncrypted), (this.word = word), (this.wordToken = wordToken);
  }
}
