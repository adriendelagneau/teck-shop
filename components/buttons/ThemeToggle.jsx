"use client"

import { useTheme } from 'next-themes'
import React from 'react'

const ThemeToggle = () => {

    const {theme, setTheme} = useTheme()
    console.log(theme)
  return (
    <div>sun</div>
  )
}

export default ThemeToggle