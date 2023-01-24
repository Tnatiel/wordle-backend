import { Pool } from 'pg';
import { createConnection } from '../config';
import { CrudDao } from '../DaoCrud';
import { hashData } from '../users/UsersDao';
import { Word } from './Word';

export class WordDao extends CrudDao<Word> {
  client: Pool;
  constructor() {
    super();
    this.client = createConnection();
  }

  async add(t: Word): Promise<boolean> {
    try {
      const hashedPassword = await hashData(t.word, 10);
      const query = {
        text: 'INSERT INTO public.users(word, word_token) VALUES ($1, $2)',
        values: [t.word, hashedPassword],
      };
      const res = await this.client.query(query);
      return true;
    } catch (e) {
      return false;
    }
  }

  remove(t: Word): boolean {
    throw new Error('Method not implemented.');
  }

  edit(t: Word): Promise<Word> {
    throw new Error('Method not implemented.');
  }

  async find(wordId: number): Promise<Word> {
    const query = {
      text: 'SELECT * FROM public.users WHERE user_id = $1',
      values: [wordId],
    };

    try {
      const res = await this.client.query(query);
      console.log('trying', res);
      return res.rows[0];
    } catch (e) {
      console.log(e);
    }
  }
}
