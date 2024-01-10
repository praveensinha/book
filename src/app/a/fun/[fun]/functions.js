import _MongoClientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb';
import { encryptData, verifyJwtToken } from '@/lib/auth/jwt';


export async function init(req) {

    let _d = []
    await _MongoClientPromise.then(async (client) => {
        const dbRes = await client.db('book').collection('interface').find({ type: 'menu' }).toArray();
        for (let i = 0; i < dbRes.length; i++) {
            const ele = dbRes[i]
            const _e = await encryptData({ org: '12312313', a: ele._id.toString(), m: 'html' });
            _d.push({ name: ele.disp_name, e: _e })
        }
    })
    return _d
}

export async function dashboard(req) {
    console.log('Dashboard loaded')

    return `<h1>This is your dashboard</h1>
    <Script>
        alert(1)
    </Script>
    `
}