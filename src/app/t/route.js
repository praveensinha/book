export const dynamic = 'force-dynamic' // defaults to auto
import _MongoClientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb';
import { faker } from '@faker-js/faker';
import { encryptData, verifyJwtToken } from '@/lib/auth/jwt';

export async function GET(request, { params }) {
    const { searchParams } = new URL(request.url)
    const _i = searchParams.get('_i')
    if (_i) {
        var en = _i
        var de = await verifyJwtToken(_i)
    } else {
        const data = { Org: 2345678910, interface: Date.now() }

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