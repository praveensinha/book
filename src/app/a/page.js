"use client"
import parse from 'html-react-parser';
import Script from 'next/script'
import { useState, useEffect } from 'react'

import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())


//import styles from './page.module.css'

export default function A({ params }) {

  const _org = params['a']?.[0];
  const _interface = params['a']?.[1];
  const { data, error, isLoading } = useSWR(`/b/${_org}/${_interface}`, {method:'OPTIONS'}, fetcher)

return <h1>home</h1>

  if (error) return <div>Failed to load{JSON.stringify(error)}</div>
  if (data) {

    return (
      <>
        /*{parse(data.html ?? '')}*/
        {JSON.stringify(params)}{Date.now()}
        <Script src="/js/a.js" onReady={() => { a() }} strategy="lazyOnload" ></Script>
      </>
    )
  }
}
