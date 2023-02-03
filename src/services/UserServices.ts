import { User } from '../dao/users/User';
import { UsersDao } from '../dao/users/UsersDao';
import { validateNewUser } from '../util';

export class UserServices {
    dao: UsersDao;
    constructor(dao: UsersDao) {
        this.dao = dao;
    }

    async createUser(resource: User) {
        try {
            const userIsValid = validateNewUser(resource);
            if (userIsValid) return await this.dao.add(userIsValid);
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async validateUser(email: string, password: string) {
        const user = await this.dao.find(email, password);

        return user;
    }
}
