import { Pool } from 'pg';
import bcrypt from 'bcrypt';

let encryptWordsOnStartup = true;

export const createConnection = () => {
  const client = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'wordle',
    password: 'sudo',
    port: 5432,
  });

  client.connect((e: Error) => {
    if (e) throw e;
    console.log('Client Connected!');
  });

  if (encryptWordsOnStartup) {
    console.log('encrypting!!');
    try {
      encryptWords(client);
    } catch (error) {
      console.error('Error encrypting words: ', error);
    }
  } else {
    console.log('no encyption needed!');
  }
  return client;
};

const encryptWords = async (client: Pool) => {
  // Fetch all unencrypted words from the words table
  const wordsQuery = { text: 'SELECT word_id, word FROM words WHERE word_encrypted = false' };
  const wordsRes = await client.query(wordsQuery);

  const updateQueries = await Promise.all(
    wordsRes.rows.map(async (row) => {
      const encryptedWord = await bcrypt.hash(row.word, 10);
      return {
        text: 'UPDATE words SET word_token = $1, word_encrypted = true WHERE word_id = $2',
        values: [encryptedWord, row.word_id],
      };
    })
  );
  await client.query('BEGIN');
  try {
    for (const query of updateQueries) {
      client.query(query);
    }
    await client.query('COMMIT');
    encryptWordsOnStartup = false;
    console.log('Done encrypting');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  }
};
