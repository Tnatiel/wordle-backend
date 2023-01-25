import { Word } from '../dao/word/Word';
import { WordDao } from '../dao/word/WordDao';

export class WordServices {
  dao: WordDao;
  constructor(dao: WordDao) {
    this.dao = dao;
  }

  async findWordById (WordId: number) {
    try {
      const word = await this.dao.find(WordId);
      return word;
    } catch (e) {
      console.log(e);
       throw new Error(e.message);
    }
  }

  async setUsed (word: string) {
    try {
      const updateWord = await this.dao.setWordAsUsed(word);
      return updateWord;
    } catch (e) {
      console.log (e);
       throw new Error(e.message);
    }
  }

  async getRandomWordFromDb() {
    try {
      
      const randomWord = await this.dao.getRandomWord();
      return randomWord;
    } catch (e) {
      console.log(e);
       throw new Error(e.message);
    }
  }
  
}
