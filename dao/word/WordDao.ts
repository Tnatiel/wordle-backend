import { Pool } from 'pg';
import { createConnection } from '../config';

import { Word } from './Word';

export class WordDao {
  client: Pool;
  constructor() {
    this.client = createConnection();
  }

 async getRandomWordFromDb (): Promise<Word> {
  const query = {
    text: 'SELECT * FROM words ORDER BY RANDOM() LIMIT 1;',
    values: [],
  };
  
  try {
    const res = await this.client.query(query);
    
    return res.rows[0]
  } catch (e) {
    console.log('couldn\'t get random word', e);
  }
 }
 // TODO TRANSFER WORD LOGIC TO SERVICES
}
