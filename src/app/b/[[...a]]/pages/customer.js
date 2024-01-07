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
   

<!-- Modal -->
<div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-xl">
    <div class="modal-content">
      <!--
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      -->
      <div class="modal-body px-0 py-3">

        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-5">
              <div class="card">
                <div class="card-body">
                    <p class="text-muted mb-2 font-13"><strong>Full Name :</strong> <span class="ms-2">Geneva D. McKnight</span></p>
                    <p class="text-muted mb-2 font-13"><strong>Mobile :</strong><span class="ms-2">(123) 123 1234</span></p>
                    <p class="text-muted mb-2 font-13"><strong>Email :</strong> <span class="ms-2">user@email.domain</span></p>
                    <p class="text-muted mb-1 font-13"><strong>Location :</strong> <span class="ms-2">USA</span></p>
                </div>
              </div>
            </div>

            <div class="col-lg-7">
              <div class="card mb-3">
                <div class="card-header pb-0">
                  <nav>
                    <div class="nav nav-underline" id="nav-tab" role="tablist">
                      <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Activity</button>
                      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Email</button>
                      <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Action1</button>
                      <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Link2</button>
                    </div>
                  </nav>
                </div>

                <div class="card-body">
                  <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">...</div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
                    <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <div>
                    <h4 class="card-title mb-4">Work Experince</h4>
                    <ul class="list-unstyled work-activity mb-0">
                      <li class="work-item" data-date="2020-21">
                        <h6 class="lh-base mb-0">ABCD Company</h6>
                        <p class="font-size-13 mb-2">Web Designer</p>
                        <p>To achieve this, it would be necessary to have uniform grammar, and more common words.</p>
                      </li>
                      <li class="work-item" data-date="2019-20">
                        <h6 class="lh-base mb-0">XYZ Company</h6>
                        <p class="font-size-13 mb-2">Graphic Designer</p>
                        <p class="mb-0">It will be as simple as occidental in fact, it will be Occidental person, it will seem like simplified.</p>
                      </li>

                      <li class="work-item" data-date="2019-20">
                        <h6 class="lh-base mb-0">XYZ Company</h6>
                        <p class="font-size-13 mb-2">Graphic Designer</p>
                        <p class="mb-0">It will be as simple as occidental in fact, it will be Occidental person, it will seem like simplified.</p>
                      </li>

                      <li class="work-item" data-date="2019-20">
                        <h6 class="lh-base mb-0">XYZ Company</h6>
                        <p class="font-size-13 mb-2">Graphic Designer</p>
                        <p class="mb-0">It will be as simple as occidental in fact, it will be Occidental person, it will seem like simplified.</p>
                      </li>
                      <li class="work-item" data-date="2019-20">
                        <h6 class="lh-base mb-0">XYZ Company</h6>
                        <p class="font-size-13 mb-2">Graphic Designer</p>
                        <p class="mb-0">It will be as simple as occidental in fact, it will be Occidental person, it will seem like simplified.</p>
                      </li>
                      <li class="work-item" data-date="2019-20">
                        <h6 class="lh-base mb-0">XYZ Company</h6>
                        <p class="font-size-13 mb-2">Graphic Designer</p>
                        <p class="mb-0">It will be as simple as occidental in fact, it will be Occidental person, it will seem like simplified.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
    

        `)
  }
}