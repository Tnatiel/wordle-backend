import { Pool } from 'pg';
import { hashData, localClient } from '../../util';
import { createConnection } from '../config';
import { User } from './User';

export class UsersDao {
    client: Pool;
    constructor() {
        this.client = createConnection(localClient);
    }

    async add(t: User): Promise<boolean> {
        try {
            const hashedPassword = await hashData(t.password, 10);
            const query = {
                text: 'INSERT INTO public.users(email, fname, lname, user_token) VALUES ($1, $2, $3, $4)',
                values: [t.email, t.fname, t.lname, hashedPassword],
            };
            const res = await this.client.query(query);
            return true;
        } catch (e) {
            return false;
        }
    }

    remove(t: User): boolean {
        throw new Error('Method not implemented.');
    }

    edit(t: User): Promise<User> {
        throw new Error('Method not implemented.');
    }

    async find(userId: number): Promise<User> {
        console.log('in dao');
        const query = {
            text: 'SELECT * FROM public.users WHERE user_id = $1',
            values: [userId],
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
