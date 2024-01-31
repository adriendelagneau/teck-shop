"use client"

import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeToggleProviser = ({ children }) => {
    
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return <>{children}</>
  return (
      <ThemeProvider attribute="class">{ children }</ThemeProvider>
  )
}

export default ThemeToggleProviser