import { Pool } from 'pg';
import { createConnection } from '../config';
import { CrudDao } from '../DaoCrud';
import { hashData } from '../users/UsersDao';
import { Word } from './Word';

export class WordDao {
  client: Pool;
  constructor() {
    // super();
    this.client = createConnection();
  }

  async add(t: Word): Promise<boolean> {
    try {
      const hashedPassword = await hashData(t.word, 10);
      const query = {
        text: 'INSERT INTO public.words(word, word_token) VALUES ($1, $2)',
        values: [t.word, hashedPassword],
      };
      await this.client.query(query);      
      return true;

    } catch (e) {
      return false;
    }
  }

  remove(t: Word): boolean {
    throw new Error('Method not implemented.');
  }

  async setWordAsUsed(word: string): Promise<boolean> {

    const query =  {
      text: 'UPDATE words SET used=TRUE WHERE word=$1 RETURNING *',
      values: [word]
  };
    try {
      const updated = await this.client.query(query);
      if (updated.rowCount > 0) return true; 
      
    } catch (e) {
      console.log('couldn\'t update word', e.message);
      return false;
    }
  }

  async find (wordId: number): Promise<Word> {
    const query = {
      text: 'SELECT * FROM public.words WHERE word = $1',
      values: [wordId],
    };

    try {
      const res = await this.client.query(query);
      return res.rows[0];
    } catch (e) {
      console.log(e);
    }
  }

  async getRandomWord () {
    const wordsLength = await this.getAllWordsLength();
    const randomWordId = Math.floor(Math.random() * wordsLength);
    const randomWord = await this.find(randomWordId);
    return randomWord; 
  }

 protected async getAllWordsLength () {
  const query = {
    text: 'SELECT * FROM public.words',
    // values: [],
  };

  try {
    const res = await this.client.query(query);
    return res.rows.length;
  } catch (e) {
    console.log('couldn\'t get words length', e);
  }
 }
}
