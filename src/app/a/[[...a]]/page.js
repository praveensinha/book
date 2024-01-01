"use server"
import parse from 'html-react-parser';
import _MongoClientPromise from '@/lib/mongodb'

//import styles from './page.module.css'
import { ObjectId } from 'mongodb';

export default async function A({ params }) {

  const org = params['a']?.[0];
  const _ionterface_id = params['a']?.[1];

  let _interface
  try {
    await _MongoClientPromise.then(async (client) => {
      //console.log(db);
      const _interfaceObjectId = new ObjectId(_ionterface_id);
      _interface = await client.db('book').collection("interface").findOne({ _id: _interfaceObjectId })
      console.log(_interfaceObjectId, _interface);

    });
  }
  catch (e) {
    console.log('ssdddcvevf', e)
  }
  let aa
  if (_interface !== undefined) {
    console.log(params);
    var program = require(`./pages/${_interface['prog_path']}`);
    var action = 'index'
    aa = await program[action]();
  } else {
    aa = `<div class='p-5 m-5'>
Dashboard, please select route
    </div>`
  }

  return (

    <>

      {parse(aa)}
      {JSON.stringify(params)}
    </>
  )
}
