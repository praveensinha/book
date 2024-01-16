import { encryptData } from '@/lib/auth/jwt';
import _MongoClientPromise from '@/lib/mongodb'

export async function create() {

  await new Promise(resolve => setTimeout(resolve, 300));

  var htmlStr = `
    <form class="row g-3" validate='y' action="${await encryptData({ org: 123, a: '63e252810add1e7c6d309ba1', m: 'createDo' })}" >
      <fieldset>
      <div class="row g-2">
  <div class="col-md">
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com">
      <label for="floatingInputGrid">Email address</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <label for="floatingSelectGrid">Works with selects</label>
    </div>
  </div>
</div>
      <div class="col-md-6 mb-3">
        <label class="form-label">Name</label>
        <input type="text" name="name" class="form-control" >
      </div>
      <div class="col-md-12 mb-3">
        <label class="form-label">Email</label>
        <input type="email" name="email" class="form-control" >
      </div>
      <div class="col-12 mb-3">
        <label class="form-label">Phone</label>
        <input type="number" name="phone" class="form-control" placeholder="1234 Main St">
      </div>
      
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Sign in</button>
      </div>
      </fieldset>
    </form>`
  return ({ htmlStr: htmlStr, hTitle: 'Add Contact' /*, jsStr: jsStr??null, jsInitObj: jsInitObj??null */ })

}

export async function createDo(req, _e) {
  const post = await req.json()

  try {
    await _MongoClientPromise.then(async (client) => {
      const contact = { info: { name: post.name, email: post.email, phone: post.phone }, registeredAt: new Date() }
      const result = await client.db('book').collection("contacts").insertOne(contact)
      return result.insertedId;
    });
  }
  catch (e) {
    console.log('ssdddcvevf', e)
    return e  
  }
  console.log(post)
  return post


}
