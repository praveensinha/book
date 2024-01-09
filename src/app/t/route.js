export const dynamic = 'force-dynamic' // defaults to auto
import _MongoClientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb';
import { faker } from '@faker-js/faker';
import { encryptData, verifyJwtToken } from '@/lib/auth/jwt';

import crypto from 'crypto';

const iv = crypto.randomBytes(16);

// Encryption function
function encrypt(jsonData, secretKey) {
    const cipher = crypto.createCipher('aes-256-cbc', secretKey);
    let encryptedData = cipher.update(JSON.stringify(jsonData), 'utf-8', 'hex');
    encryptedData += cipher.final('hex');
    return encryptedData;
}

// Decryption function
function decrypt(encryptedData, secretKey) {
    const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
    let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');
    decryptedData += decipher.final('utf-8');
    return JSON.parse(decryptedData);
}




export async function GET(request, { params }) {
    // Your JSON object
    const jsonData = {
        key1: new ObjectId("659969f04b6b449e3f533b73"),
        key2: 'value2',
        key3: 'value3'
    };
    const secretKey = 'praveenkumarsinhagfchgfhgfhfhfjhjhvgbgjgcfggf78687687687hgfhg7686';

    // Encrypt the JSON data
    const encryptedData = encrypt(jsonData, secretKey);
    console.log('Encrypted Data:', encryptedData);

    // Decrypt the encrypted data
    const decryptedData = decrypt(encryptedData, secretKey);
    console.log('Decrypted Data:', decryptedData);

    return Response.json({})


    const { searchParams } = new URL(request.url)
    const _ = searchParams.get('_')
    if (_) {
        var en = _
        var de = await verifyJwtToken(_)
    } else {
        const data = { Org: 2345678910, a: '63d8b7ffc1a965a0b213e94f', m: 'filter' }

        var en = await encryptData(data)
        var de = await verifyJwtToken(en)
    }

    return Response.json({ en: en, de: de })



    const dummyData = [];
    for (let i = 0; i < 0; i++) {
        const contact = {
            _id: null, //new UUID().toBinary(), //faker.string.uuid(),
            info: {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                phone: faker.phone.number(),
            },
            //avatar: faker.image.avatar(),
            //password: faker.internet.password(),
            //birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
        };
        dummyData.push(contact);
    }

    //insertMany
    await _MongoClientPromise.then(async (client) => {
        await client.db('book').collection('contacts').insertMany(dummyData);
    })

    return Response.json(dummyData)
}

