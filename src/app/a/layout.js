"use client"

import Link from 'next/link'
import { logOut } from '@/lib/auth/server'
import { usePathname } from 'next/navigation'

import { Modal, Offcanvas, Profile, Relation } from './components'

import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())


export default function RootLayout({ children }) {

  const { data, error, isLoading } = useSWR(`/a/fun/init`, fetcher)
  //const pathname = usePathname().trim().split("/");
  const pathname = usePathname()

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark shadow-lg border-bottom py-0" aria-label="Offcanvas navbar" style={{ 'backgroundImage': 'linear-gradient(to right, rgb(156, 3, 3) , rgb(1, 1, 121))' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">AirLink <i className="fa-solid fa-snowman fa-fade d-none"></i></Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
            <span className="fa fa-list"></span>
          </button>
          <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto flex-grow-1 pe-3">

                {data?.map((menu, index) => (
                  <li className="nav-item">
                    <Link className={pathname.endsWith(menu.e) ? `nav-link active border-bottom border-3` : `nav-link`} aria-current="page" href={`/a/${menu.e}`} >{menu.name}</Link>
                  </li>
                ))}
              </ul>

            </div>
          </div>
          <div className="ms-auto d-flex gap-1" >
            <form className="" role="search">
              <div className="input-group">
                <input type="text" className="form-control form-control-sm" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                <span className="input-group-text" id="inputGroup-sizing-sm"><i className='fa fa-search'></i></span>
              </div>
            </form>
            <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="offcanvas" data-bs-target="#dOffcanvas" aria-controls="dOffcanvas" >
              <i class="fa-solid fa-user-plus"></i>
            </button>
            <button  className='openRelations btn btn-sm  btn-warning'> <i className='fa fa-search'></i></button>
            <div className="nav-item dropdown">
              <button className=" dropdown-toggle btn btn-sm btn-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="fa fa-user"></span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item" href="#">Profile</Link></li>
                <li><Link className="dropdown-item" href="#">Another action</Link></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <form action={logOut} ><button type="submit" className="dropdown-item" >Logout</button></form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main className='pt-5'>
        <div className='container-fluid'>
          {children}
        </div>
      </main>
      <Modal />
      <Offcanvas />
      <Profile />
      <Relation />
    </>
  )
}
