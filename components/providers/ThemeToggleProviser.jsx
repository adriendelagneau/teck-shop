"use client"

import { ThemeProvider } from 'next-themes'

const ThemeToggleProviser = ({ children }) => {
    

  return (
      <ThemeProvider attribute="class" defaultTheme='system' enableSystem>{ children }</ThemeProvider>
  )
}

export default ThemeToggleProviser