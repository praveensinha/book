"use client"

import Link from 'next/link'
import { logOut } from '@/lib/auth_server'
import { usePathname } from 'next/navigation'


export default function RootLayout({ children }) {

  const pathname = usePathname().trim().split("/");
  const org = pathname[2];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg border-bottom py-1" aria-label="Offcanvas navbar ">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">Airlink</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href={`/a/${org}/659112e03d55e893562b8c31`} >Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href={`/a/${org}/637085413e3056d8da8130fa`}>chat</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href={`/a/${org}/63d8b7ffc1a965a0b213e94f`} >Customer</Link>
                </li>

              </ul>

            </div>
          </div>
          <div className="ms-auto d-flex gap-1" >
            <form className="" role="search">
              <div className="input-group">
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                <span className="input-group-text" id="inputGroup-sizing-sm"><i className='fa fa-search'></i></span>
              </div>
            </form>
            <div className="nav-item dropdown">
              <button className=" dropdown-toggle btn btn-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="fa fa-user"></span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item" href="#">Profile</Link></li>
                <li><Link className="dropdown-item" href="#">Another action</Link></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><form action={logOut} ><button type="submit" className="dropdown-item" >Logout</button></form></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className='container-fluid'>
          {children}
        </div>
      </main>

    </>
  )
}
