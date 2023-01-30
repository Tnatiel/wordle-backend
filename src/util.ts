import crypto from 'crypto';
import bcrypt from 'bcrypt';
import validator from 'validator';
import { User } from './dao/users/User';

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';

export const encrypt = (text: string) => {
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex'),
        key: secretKey,
    };
};

export const decrypt = (hash: WordHash) => {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};

export interface WordHash {
    content: string;
    key: string;
    iv: string;
}

export const checkPosition = (guess: string, word: string) => {
    const classes: string[] = [];
    let correct = false;
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === word[i]) {
            classes.push('correct');
            continue;
        }

        if (word.includes(guess[i])) {
            classes.push('present');
            continue;
        }
        if (!word.includes(guess[i])) {
            classes.push('wrong');
            continue;
        }
        console.log('cclasses', classes);
    }

    if (!classes.includes('wrong') && !classes.includes('present')) correct = true;

    return { classes, correct };
};

export const hashData = async (data: unknown, rounds: number) => {
    const saltRounds = rounds;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(data.toString(), salt);
    return hash;
};

export const localClient = {
    user: 'postgres',
    host: 'localhost',
    database: 'wordle',
    password: 'sudo',
    port: 5432,
};

export const validateNewUser = (payload: unknown): User => {
    if (!payload) {
        throw new Error('empty value is not a user');
    }
    const { email, fname, lname, password } = payload as User;

    if (!validator.isEmail(email)) {
        throw new Error('email not valid');
    }

    if (!validator.isAlpha(lname) && !validator.isAlpha(fname)) {
        throw new Error('last name and first name should be string');
    }
    if (!validator.isLength(lname, { min: 3, max: 30 })) {
        throw new Error('last name must be 3 to 30 chars length');
    }
    if (!validator.isLength(fname, { min: 3, max: 30 })) {
        throw new Error('first name must be 3 to 30 chars length');
    }
    if (!validator.isLength(password, { min: 6, max: 30 })) {
        throw new Error('password must be 6 to 30 chars length');
    }
    return payload as User;
};
