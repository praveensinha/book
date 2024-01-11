import { encryptData, verifyJwtToken } from '@/lib/auth/jwt';
import _MongoClientPromise from '@/lib/mongodb'


export async function index() { }

export async function html() {

  //preaparation of a htmlStr
  var htmlStr = `<h3 class="h3 lh-1 border-start border-primary border-5 border-opacity-50 py-0 ps-1 my-4 text-dark-emphasis ">Customer</h3>
    <div class="d-none row p-1" title="page filter" >
        <div class="col-auto" >
            <div class="input-group mb-0" style="">
                <label class="form-label">Email address</label>
                <input type="text" class="form-control form-control-sm form-control form-control-sm-sm" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
            </div>
        </div>
        <div class="col-auto btn-toolbar mb-2 mb-md-0" >
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
        </div>
        <button type="button" class="col-auto  btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
          <i class="fa fa-calender" ></i>This week
        </button>
    </div>
    
    <form class="row gy-2 gx-3 mb-3 align-items-center">
    <div class="col-auto">
      <label class="fw-light" for="autoSizingInput">Name</label>
      <input type="text" class="form-control form-control-sm datepicker" id="autoSizingInput" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
        <label class="fw-light" for="autoSizingInput">Dates</label>
        <div class="input-group input-group-sm input-daterange">
            <input type="text" class="form-control form-controle-sm" value="2012-04-05">
            <div class="input-group-addon">to</div>
            <input type="text" class="form-control form-controle-sm" value="2012-04-19">
        </div>
    </div>
    <div class="col-auto">
      <label class="fw-light" for="autoSizingInputGroup">Username</label>
      <input type="text" class="form-control form-control-sm" id="autoSizingInputGroup" placeholder="Username">
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
        <br>
      <button type="submit" class="btn btn-sm btn-primary">Submit</button>

      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#dModal" _size="modal-xl" >modal-xl</button>
      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#dModal" _size="modal-lg" >modal-lg</button>
      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#dModal" _size="modal-fullscreen" >modal-fullscreen</button>
      <button type="button" _i=class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#dOffcanvas" aria-controls="offcanvasExample">
  Button with data-bs-target
</button>
    </div>
  </form>


    <div class="mt-3  shadow-lg border " >


    <table id="contact_dt" class="table" style="width:100%">
    <thead class="" >
    <tr>
    <th>Name</th>
    <th>phone</th>
    <th>email</th>
    <th>Salary</th>
</tr>
</thead>
    </thead>
</table>
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
    
    <div id="script" > </div>
   <Script>
   function a(){
    console.log('assssssssssssssssssssssssssssss')
   }
   alert(1)
   new DataTable('#example')
   new DataTable('#xxxexample', {
    ajax: {
        url: 'scripts/server_processing.php',
        data: function (d) {
            d.myKey = 'myValue';
            // d.custom = $('#myInput').val();
            // etc
        }
    },
    processing: true,
    serverSide: true
});
</Script>`;
  var jsInitObj = {
    dt: [{ ele: '#contact_dt', e: await encryptData({ org: '6767676', a: '637085413e3056d8da8130fa', m: 'filter' }) }]
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

  let sendData = {}
  sendData.data = [];
  await _MongoClientPromise.then(async (client) => {


    sendData.recordsTotal = sendData.recordsFiltered = await client.db('book').collection('contacts').countDocuments({ });

    const dbRes = await client.db('book').collection('contacts').find({ }).limit(10).skip(post.start).toArray();
    for (let i = 0; i < dbRes.length; i++) {
      const row = dbRes[i]
      const e = await encryptData({ org: '12312313', a: row._id.toString(), m: 'someaction' });
      //_d.push({ name: row.info.name, e: _e })
      (sendData.data).push([row.info.name, row.info.name, row.info.email, `<button className="btn" e=${e}>info</button>`])
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
