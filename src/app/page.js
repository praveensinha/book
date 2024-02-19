"use client"

import { doAuth } from '@/lib/auth/server'
import Link from 'next/link'

export default function Auth() {

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary h-100">
      <main className="">
        <div className="container py-4">
          <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Helping Business to grow</h1>
              <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
              <Link className="btn btn-primary btn-lg" type="button" href="/auth" >Login</Link>
            </div>
          </div>
          <footer className="pt-3 mt-4 text-body-secondary border-top sticky-bottom">
            © 2023
          </footer>
        </div>
      </main>
    </div>
  )
}
