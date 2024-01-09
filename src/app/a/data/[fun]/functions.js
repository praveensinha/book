import _MongoClientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb';
import { encryptData, verifyJwtToken } from '@/lib/auth/jwt';


export async function init(req) {

    var _d = []
    await _MongoClientPromise.then(async (client) => {
        const dbRes = await client.db('book').collection('interface').find({ type: 'menu' }).toArray();
        if (dbRes) {
            dbRes.forEach(async (ele) => {
               
                _d.push({ name: ele.disp_name, e: await encryptData({ org: '12312313', a: ele._id.toString(), m: 'html' }) })
                console.log(_d)
            })
        }
        
    })
    return _d
}
