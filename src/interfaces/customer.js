module.exports = {
  index: function () {
    return (`
    <div class="d-flex my-4 " title="page header" >
      <div class="d-flex flex-row p-1">
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
        </div>
        <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
          <i class="fa fa-calender" ></i>This week
        </button>
      </div>
      <h3 class="h3 text-primary ms-auto">Customer</h3>
    </div>

    
    <div class="my-3 p-3 bg-white rounded shadow-sm border border-primary-subtle" >
            <table class="table table-sm">
            <caption>List of usersdhskdhfksdf skfl skfl sdhfkl flsd</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark66</td>
      <td>Otto</td>
      <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Full screen</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>    
   


`)
  },
  filter: async function(d){
    return d;
  }
}