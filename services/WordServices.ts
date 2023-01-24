import { Word } from '../dao/word/Word';
import { WordDao } from '../dao/word/WordDao';

export class WordServices {
  dao: WordDao;
  constructor(dao: WordDao) {
    this.dao = dao;
  }

  async findWordById (WordId: number) {
    const word = await this.dao.find(WordId);
    return word;
  }

  async setUsed (word: string) {
    const updateWord = await this.dao.setWordAsUsed(word);
    console.log('services word status:', updateWord)
    // if (!updateWord) 
    return updateWord;
  }
}
