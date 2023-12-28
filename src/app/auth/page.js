"use client"

import Image from 'next/image'
import { useFormState } from 'react-dom'

//import styles from './page.module.css'
import {doAuth} from '@/lib/auth'
 const   _validate = async (prevState, formData) => {
 
     var r = await doAuth(prevState, formData);
     console.log(r);
  }
export default function Auth() {
  const [state, formAction] = useFormState(_validate, {email:'', password:'1'})
 

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary h-100">
      <main className="form-signin w-100 m-auto">

        <span className=" fa-regular fa-comments fa-fade fa-2xl text-primary" style={{}} ></span>
        <h1 className="h3 my-4 fw-normal">Please sign in</h1>

        <form action={formAction} >
          <div className="alert alert-warning py-2" role="alert">
            A simple primary alert—check it out!
          </div>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault"> Remember me </label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2023–2024</p>
        </form>

      </main>

    </div>
  )
}
