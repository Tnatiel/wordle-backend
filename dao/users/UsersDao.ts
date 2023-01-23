import { Pool } from "pg";
import { createConnection } from "../config";
import { CrudDao } from "../DaoCrud";
import { User } from "./User";
import bcrypt from 'bcrypt';

const saltRounds = 10
export  const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}



export  class UsersDao extends CrudDao<User> {

    client: Pool;
    constructor() {
        super();
        this.client = createConnection();
    }

    

    async add (t: User): Promise<boolean> {
        try {
            const hashedPassword = await hashPassword(t.password)
            const query = {
                text: 'INSERT INTO public.users(email, fname, lname, user_token) VALUES ($1, $2, $3, $4)',
                values: [t.email, t.fname, t.lname, hashedPassword]
            }
            const res = await this.client.query(query)
            return true;
        } catch (e) {
            return false;
        }

    }


    remove (t: User): boolean {
        throw new Error("Method not implemented.")
    }

    edit (t: User): Promise<User> {
        throw new Error("Method not implemented.")
    }

    async find (userId: number): Promise<User> {
        console.log('in dao')
        const query = {
            text: 'SELECT * FROM public.users WHERE user_id = $1',
            values: [userId]
        }

        try {
            const res = await this.client.query(query)
            console.log('trying', res)
            return res.rows[0];
        } catch (e) {
            console.log(e);
        }

    }
}