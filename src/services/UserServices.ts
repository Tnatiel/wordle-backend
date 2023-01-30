import { User } from '../dao/users/User';
import { UsersDao } from '../dao/users/UsersDao';
import { validateUser } from '../util';


export class UserServices {
    dao: UsersDao;
    constructor(dao: UsersDao) {
        this.dao = dao;
    }

    async createUser(resource: User) {
        const userIsValid = validateUser(resource);
        if (userIsValid) return await this.dao.add(userIsValid);
    }

    async validateUser(email: string, password: string) {
        const user = await this.dao.find(email, password);
        
        return user;
    }
}
