import { expect } from "chai"
import { User } from "../users/User"



describe('user class', () => {

    it('should have default user properties', () => {
        const u = new User()
        expect(u.email).equals('')
        expect(u.fname).equals('')
        expect(u.lname).equals('')
        expect(u.password).equals('')
        expect(u.id).equals(-1)
    });
    it('should have argument properties', () => {
        const u = new User(1, 'aa@aa', 'aa', 'bb', '123')
        expect(u.email).equals('aa@aa')
        expect(u.fname).equals('aa')
        expect(u.lname).equals('bb')
        expect(u.password).equals('123')
        expect(u.id).equals(1)
    });
});