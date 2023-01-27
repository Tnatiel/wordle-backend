import { Pool } from 'pg';





export const createConnection = ({user, host, database, password}) => {
const client = new Pool({user, host, database, password});

  client.connect((e: Error) => {
    if (e) throw e;
    console.log('Client Connected!');
  });

  return client;
};
