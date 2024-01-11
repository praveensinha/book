"use client"
import parse from 'html-react-parser';
import Script from 'next/script'
import { useState, useEffect } from 'react'

import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())


//import styles from './page.module.css'

export default function A({ params }) {
  
  const _e = params['UI']?.[0];
  const { data, error, isLoading } = useSWR(`/a/e/${_e}`, fetcher)

  if (error) return <div>Failed to load{JSON.stringify(error)}</div>
  if (data) {
    return (
      <>
        {parse(data.htmlStr ?? '')}
        {JSON.stringify(params)}{Date.now()}
        <script id='asassa'>
          {data.jsStr}
        </script>
        <Script src="/js/a.js" onReady={() => { initJs(data?.jsInitObj) }} strategy="lazyOnload" ></Script>
      </>
    )
  }
}


function a1(){
  console.log(Date.now())
}