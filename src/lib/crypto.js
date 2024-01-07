import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const key = Buffer.from('FoCKvdLslUuB4y3EZlKate7XGottHski1LmyqJHvUhs=', 'base64');
const iv = crypto.randomBytes(16);


export async function encript(str) {
    console.log(algorithm, key, iv)

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(str, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return (encrypted)
}

export async function decript(encrypted) {
    try {
        const decipher = crypto.createDecipheriv(algorithm, key, iv);
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        console.log('decrypted>>>>>>', decrypted)
        return await JSON.parse(decrypted);
    } catch (e) {
        console.log(e)
        return {}
    }
}
