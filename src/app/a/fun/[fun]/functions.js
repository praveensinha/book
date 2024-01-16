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
    _d.createContact
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

export async function objdata(req) {
    const { searchParams } = new URL(req.url)
    const _objId = searchParams.get('objId')
    var _d = {}
    await _MongoClientPromise.then(async (client) => {
        _d.obj = await client.db('book').collection('contacts').findOne({ _id: new ObjectId(_objId) }, { projection: { info: 1 }, });

    })

    _d.operation = [
        { name: '+Log', e: await encryptData({ org: '12312313', a: '', m: '' }) },
        { name: 'Email', e: 'hgjgjhgj' },
        { name: 'Action1', e: 'hgjgjhgj' },
        { name: Date.now(), e: 'hgjgjhgj' },
        { name: 'Others', e: 'hgjgjhgj' },
    ]

    return _d
}