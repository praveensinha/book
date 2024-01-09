export const dynamic = 'force-dynamic' // defaults to auto
import _MongoClientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb';
import { encryptData, verifyJwtToken } from '@/lib/auth/jwt';

export async function GET(req, { params }) {

  const _e = await verifyJwtToken(params?.['b']?.[0])
  let action = await loadAction(_e['a']);

  let _d
  if (action) {
    console.log(params);
    var program = require(`@/interfaces/${action['prog_path']}`);
    var _method = _e['m']
    _d = await program[_method](_e);
  } else {
    _d = `<div class='p-5 m-5'>
  Dashboard, please select route
      </div>`
  }

  return Response.json(_d);
  const _ionterface_id = params['b']?.[1];
  console.log('params=====', params);
  const { searchParams } = new URL(req.url)
  const _i = searchParams.get('_i')



  let _html
  if (_interface) {
    console.log(params);
    var program = require(`@/interfaces/${_interface['prog_path']}`);
    var _action = 'index'
    _html = await program[_action]();
  } else {
    _html = `<div class='p-5 m-5'>
  Dashboard, please select route
      </div>`
  }
  return Response.json({ html: Date.now() + _html })
  return new Response(JSON.stringify({ p: params, d: Date.now() }))
}
export async function OPTIONS(request, { params }) {
  return `lll`;
}

async function loadAction(act) {
  try {
    await _MongoClientPromise.then(async (client) => {
      const _actionID = new ObjectId(act.toString())
      return await client.db('book').collection("interface").findOne({ _id: _actionID })
    });
  }
  catch (e) {
    console.log('ssdddcvevf', e)
    return e
  }
}
async function _e(req, params) {
  return await verifyJwtToken(params?.['b']?.[0])
}