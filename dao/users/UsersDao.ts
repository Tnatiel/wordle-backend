import { Pool } from "pg";
import { createConnection } from "../config";
import { CrudDao } from "../DaoCrud";
import { User } from "./User";
import bcrypt from 'bcrypt';

export  const hashPassword = async (password: string, saltRounds: number): Promise<string> => {
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

    

    async add(t: User): Promise<boolean> {
        try {

            const hashedPassword = await hashPassword(t.password, 10)
            const query = {
                text: 'INSERT INTO public.users(email, fname, lname, userToken) VALUES ($1, $2, $3, $4)',
                values: [t.email, t.fname, t.lname, hashedPassword]
            }
            const res = await this.client.query(query)
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }

    }

    remove(t: User): boolean {
        throw new Error("Method not implemented.")
    }

    edit(t: User): Promise<User> {
        throw new Error("Method not implemented.")
    }

    find(t: User): Promise<User> {
        throw new Error("Method not implemented.")
    }
}