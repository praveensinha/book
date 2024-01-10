"use client"
import parse from 'html-react-parser';
import Script from 'next/script'
import { useState, useEffect } from 'react'

import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())


//import styles from './page.module.css'

export default function A() {
  const { data, error, isLoading } = useSWR(`/a/fun/dashboard`, fetcher)

  return (
    <>
      {isLoading ? (<h1>Loading your Dashboard</h1>) : (parse(data ?? ''))}
    </>)
}
