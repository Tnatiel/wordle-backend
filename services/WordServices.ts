import { WordDao } from '../dao/word/WordDao';

export class WordServices {
  dao: WordDao;
  constructor(dao: WordDao) {
    this.dao = dao;
  }

  async findWordById(WordId: number) {
    const word = await this.dao.find(WordId);
    if (!word) throw new Error("coundn't find word with that id");
  }
}
