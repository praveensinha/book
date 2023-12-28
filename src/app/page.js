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

        hOME pAGE

      </main>

    </div>
  )
}
