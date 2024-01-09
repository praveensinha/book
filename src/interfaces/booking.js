module.exports = {
  index: function () {
    return (`
    <h3 class="h3 lh-1 border-start border-primary border-5 border-opacity-50 py-0 ps-1 my-4 text-dark-emphasis ">Customer</h3>
    

    





    
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

      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#dModal" _size="modal-xl" >dModal</button>
      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#dModal" _size="modal-lg" >dModal</button>
      <button type="button" _i=class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#dOffcanvas" aria-controls="offcanvasExample">
  Button with data-bs-target
</button>
    </div>
  </form>


    <div class="mt-3  shadow-lg border " >


    <table id="example" class="table" style="width:100%">
    <thead class="sticky-top" >
    <tr>
    <th>Name</th>
    <th>Position</th>
    <th>Office</th>
    <th>Extn.</th>
    <th>Start date</th>
    <th>Salary</th>
</tr>
</thead>
    </thead>
    
    <tfoot class="sticky-bottom" >
        <tr>
            <th colspan=6 >
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
            </th>
        </tr>
    </tfoot>
</table>
    </div>    
   <Script>
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
</Script>

        `)
  },
  filter : function()
  {}
}