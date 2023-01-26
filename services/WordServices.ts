
import { WordDao } from '../dao/word/WordDao';
import { checkPosition, decrypt, encrypt, WordHash } from '../functions';


export class WordServices {
  dao: WordDao;
  constructor(dao: WordDao) {
    this.dao = dao;
  }

  async getRandomWordData() {
    
    try {
      const randomWord = await this.dao.getRandomWordFromDb();
      if (randomWord) {
        const wordHash = encrypt(randomWord.word);
        return wordHash;
      }

    } catch (e) {
      console.log(e);
       throw new Error(e.message);
    }
  }

  async checkGuess (guess: string, wordData: WordHash){
    const gameWord = decrypt(wordData);
    const result = checkPosition(guess, gameWord.toUpperCase());
    return result
  }
  
}


