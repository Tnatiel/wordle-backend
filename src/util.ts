import crypto from 'crypto';
import bcrypt from 'bcrypt';

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
