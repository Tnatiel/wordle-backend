import { Pool } from 'pg';
import { createConnection } from '../config';
import { CrudDao } from '../DaoCrud';
import { User } from './User';
import bcrypt from 'bcrypt';

export const hashData = async (data: unknown, rounds: number) => {
  const saltRounds = rounds;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(data.toString(), salt);
  return hash;
};

export class UsersDao extends CrudDao<User> {
  client: Pool;
  constructor() {
    super();
    this.client = createConnection();
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
