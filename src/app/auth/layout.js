import { Inter } from 'next/font/google'
//import './globals.css'
export const metadata = {
  title: 'App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}
