import { User } from "../dao/users/User";
import { UsersDao } from "../dao/users/UsersDao"
import validator from "validator";


export const validateUser = (payload: unknown): User => {
    if  (!payload) {
        throw new Error('empty value is not a user');
    }
    const {email, lname, fname, password} = payload as User;

    if (!validator.isEmail(email)) {
        throw new Error('email not valid');
    }

    if (!validator.isAlpha(lname) && !validator.isAlpha(fname)) {
        throw new Error('last name and first name should be string');
    }
    if (!validator.isLength(lname, {min: 3, max: 30})) {
        throw new Error('last name must be 3 to 30 chars length');
    }
    if (!validator.isLength(fname, {min: 3, max: 30})) {
        throw new Error('first name must be 3 to 30 chars length');
    }
    if (!validator.isLength(password, {min: 6, max: 30})) {
        throw new Error('password must be 6 to 30 chars length');
    }
    return payload as User;
}

export class UserSevices {
    dao: UsersDao;
    constructor() {
        this.dao = new UsersDao()
    }

    async createUser (resource: User) {
        const userIsValid = validateUser(resource)
        if (userIsValid) await this.dao.add(userIsValid);
        
    }

}