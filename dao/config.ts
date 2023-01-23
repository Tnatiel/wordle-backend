import { Pool } from "pg"




export const createConnection = () => {
    const client = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'wordle',
        password: 'sudo',
        port: 5432
    });

    client.connect((e: Error) => {
        if (e) throw e; 
        console.log('Client Connected!');
    });
    return client;
}

