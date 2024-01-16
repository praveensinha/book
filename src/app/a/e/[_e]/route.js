export const dynamic = 'force-dynamic' // defaults to auto
import _MongoClientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb';
import { encryptData, verifyJwtToken } from '@/lib/auth/jwt';

export async function GET(req, { params }) {
  const _e = await verifyJwtToken(params?.['_e'])
  let action = await loadAction(_e['a']);
  let _d
  if (action) {

    //var program = require(`@/interfaces/${action['prog_path']}`);
    var program = await import(`@/interfaces/${action['prog_path']}`);
    var _method = _e['m'] ?? 'index'
    _d = await program[_method](req, _e);
  } else {
    _d = { msg: 'no action defined' }
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

export async function POST(req, { params }) {
  //console.log(await req.json())
  const _e = await verifyJwtToken(params?.['_e'])
  let action = await loadAction(_e['a']);
  let _d
  if (action) {

    //var program = require(`@/interfaces/${action['prog_path']}`);
    var program = await import(`@/interfaces/${action['prog_path']}`);
    var _method = _e['m'] ?? 'index'
    _d = await program[_method](req, _e);
  } else {
    _d = { msg: 'no action defined' }
  }

  return Response.json(_d);
}


async function loadAction(act) {

  try {
    let r = {}
    await _MongoClientPromise.then(async (client) => {
      const _actionID = new ObjectId(act.toString())
      r = await client.db('book').collection("interface").findOne({ _id: _actionID })
    });
    return r;
  }
  catch (e) {
    console.log('ssdddcvevf', e)
    return {}
  }
}

async function _e(req, params) {
  return await verifyJwtToken(params?.['b']?.[0])
}