export class User {
    id: number;
    email: string;
    fname: string;
    lname: string;
    password: string;

    constructor(id = -1, email = '', fname = '', lname = '', password = '') {
        (this.id = id), (this.email = email), (this.fname = fname), (this.lname = lname), (this.password = password);
    }
}
