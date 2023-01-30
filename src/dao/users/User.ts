export class User {
    
    email: string;
    fname: string;
    lname: string;
    password: string;
    user_token?: string;

    constructor( email = '', fname = '', lname = '', password = '') {
        this.email = email, 
        this.fname = fname, 
        this.lname = lname, 
        this.password = password;
    }
}
