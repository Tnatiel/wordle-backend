import { Pool } from 'pg';
import { hashData, localClient } from '../../util';
import { createConnection } from '../config';
import { User } from './User';
import bcrypt from 'bcrypt';


export class UsersDao {
    client: Pool;
    constructor() {
        this.client = createConnection(localClient);
    }

    async add(t: User): Promise<boolean | User> {
        try {
            const hashedPassword = await hashData(t.password, 10);
            const query = {
                text: 'INSERT INTO public.users(email, fname, lname, user_token) VALUES ($1, $2, $3, $4) RETURNING *',
                values: [t.email, t.fname, t.lname, hashedPassword],
            };
            const res = await this.client.query(query);
            const newUser: User = res.rows[0]
            console.log(res.rows[0])

            return new User(newUser.email, newUser.fname, newUser.lname, newUser.user_token);
        } catch (e) {
            return false;
        }
    }

    compare(t: User): boolean {
        throw new Error('Method not implemented.');
    }

    edit(t: User): Promise<User> {
        throw new Error('Method not implemented.');
    }

    async find(email: string, password: string): Promise<User | false> {
        console.log('in dao');
        const query = {
            text: 'SELECT * FROM public.users WHERE email = $1',
            values: [email],
        };

        try {
            const res = await this.client.query(query);
            const isValid = await bcrypt.compare(password ,res.rows[0].user_token);
            if (isValid) return res.rows[0];
            return false;
        } catch (e) {
            console.log(e);
        }
    }
}
