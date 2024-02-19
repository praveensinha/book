import { encryptData, verifyJwtToken } from '@/lib/auth/jwt';
import _MongoClientPromise from '@/lib/mongodb'


export async function index() { }

export async function html() {

  //preaparation of a htmlStr
  var htmlStr = `
  <h3 class="h3 lh-1 border-start border-primary border-5 border-opacity-50 py-0 ps-1 my-4 text-dark-emphasis ">Customer</h3>
  
    <form class="row gy-2 gx-3 mb-3 align-items-center" id="contact_filter" >
      <div class="col-auto">
        <label class="fw-light">Name</label>
        <input type="text" name="name" class="form-control form-control-sm datepicker" placeholder="Jane Doe">
      </div>
      <div class="col-auto">
        <label class="fw-light">Email</label>
        <input type="text" name="email" class="form-control form-control-sm datepicker" placeholder="Jane Doe">
      </div>
      <div class="col-auto">
        <label class="fw-light">Phone</label>
        <input type="text" name="phone" class="form-control form-control-sm datepicker" placeholder="Jane Doe">
      </div>
      <div class="col-auto">
        <label class="fw-light" >Stage</label>
        <select class="form-select form-select-sm" >
          <option value="0">Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-auto">
        <label class="fw-light">Dates</label>
        <input type="text" name="dates" class="form-control form-control-sm daterange" placeholder="Jane Doe">
      </div>
      <div class="col-auto">
        <br>
      <button type="button" class="btn btn-sm btn-primary" id="kk" >Submit</button>

      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#dModal" _size="modal-xl" >modal-xl</button>
      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#dModal" _size="modal-lg" >modal-lg</button>
      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#dModal" _size="modal-fullscreen" >modal-fullscreen</button>
      <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="offcanvas" data-bs-target="#dOffcanvas" aria-controls="dOffcanvas" _e=${await encryptData({ org: 123123, a: '63e252810add1e7c6d309ba1', m: 'create' })} >
          <i class="fa-solid fa-user-plus"></i>
        </button>

        <button type="button" className='openRelations btn btn-sm  btn-warning'> <i className='fa fa-search'></i></button>

    </div>
  </form>


    <div class="mt-3  shadow-lg border " >
      <table id="contact_dt" class="table " style="width:100%"><thead class="table-light">
    
    </thead></table>
      <nav class="" aria-label="Page navigation example">
        <ul class="pagination pagination-sm m-0">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  `;
  var jsInitObj = {
    dt: [{
      ele: '#contact_dt',
      col: [{ title: 'Name' }, { title: 'Name' }, { title: 'Name' }, { title: 'Name' }],
      e: await encryptData({ org: '6767676', a: '637085413e3056d8da8130fa', m: 'filter' })
    }],
    dr: [
      {
        ele: '.daterange'
      }
    ]
  }
  var jsStr = `
function _initPageJs(){
  alert(Date.now())
}
alert(1)
`;

  return ({ htmlStr: htmlStr, jsStr: jsStr, jsInitObj: jsInitObj })
}

export async function filter(req, _e) {

  const post = await req.json()
  console.log(post)
  let sendData = {}
  sendData.data = [];
  await _MongoClientPromise.then(async (client) => {

    var qry = { 'info.email': { $regex: /ABC/i } }
    sendData.recordsTotal = sendData.recordsFiltered = await client.db('book').collection('contacts').countDocuments({});

    const dbRes = await client.db('book').collection('contacts').find({}).limit(post.length).skip(post.start).toArray();
    for (let i = 0; i < dbRes.length; i++) {
      const row = dbRes[i]
      const e = await encryptData({ org: '12312313', a: row._id.toString(), m: 'someaction' });
      //_d.push({ name: row.info.name, e: _e })
      (sendData.data).push([
        row.info.name,
        row.info.name,
        row.info.email,
        `
        <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#profileModal" _size="modal-xl" e=${e}><i class="fa-solid fa-eye"></i></button>
        <button type="button" class="btn btn-warning btn-sm openRelations" e=${e} ><i class="fa-solid fa-diagram-project"></i></button>
        <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="offcanvas" data-bs-target="#dOffcanvas" aria-controls="dOffcanvas" _e=${await encryptData({ org: 123123, a: '63e252810add1e7c6d309ba1', m: 'create' })} >
          <i class="fa-solid fa-user-plus"></i>
        </button>
        `])
    }

  })


  return sendData

  return ({
    "data": [
      [
        "Tiger Nixon",
        "System Architect",
        "Edinburgh",
        "5421",
        "2011/04/25",
        "$320,800"
      ]
    ]
  })
}
