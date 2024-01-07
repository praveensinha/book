export const dynamic = 'force-dynamic' // defaults to auto
import _MongoClientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb';

export async function GET(request, { params }) {
  const _ionterface_id = params['a']?.[1];
console.log(params)
let _interface;
  try {
    await _MongoClientPromise.then(async (client) => {
      const _interfaceObjectId = new ObjectId(_ionterface_id);
      _interface = await client.db('book').collection("interface").findOne({ _id: _interfaceObjectId })
      console.log(_interfaceObjectId, _interface);

    });
  }
  catch (e) {
    console.log('ssdddcvevf', e)
  }

  let _html
  if (_interface) {
    console.log(params);
    var program = require(`./pages/${_interface['prog_path']}`);
    var action = 'index'
    _html = await program[action]();
  } else {
    _html = `<div class='p-5 m-5'>
  Dashboard, please select route
      </div>`
  }
  return Response.json({ html: Date.now()+_html})
  return new Response(JSON.stringify({ p: params, d: Date.now() }))
}
export async function POST(request, { params }) {

}