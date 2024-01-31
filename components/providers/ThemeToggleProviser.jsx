"use client"

import { ThemeProvider } from 'next-themes'
import React from 'react'

const ThemeToggleProviser = ({children}) => {
  return (
      <ThemeProvider>{ children }</ThemeProvider>
  )
}

export default ThemeToggleProviser