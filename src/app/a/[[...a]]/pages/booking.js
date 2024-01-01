module.exports = {
  index: function () {
    return (`
    <h3 class="h3 lh-1 border-start border-primary border-5 border-opacity-50 py-0 ps-1 my-4 text-dark-emphasis ">Customer</h3>
    <div class="d-flex flex-row p-1" title="page filter" >
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
      <td>@mdo</td>
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
  }
}