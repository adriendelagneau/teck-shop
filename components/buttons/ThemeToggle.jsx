"use client"

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {

    const { theme, setTheme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)
    console.log(theme)

    
    useEffect(() => {
        setIsMounted(true)      
    }, [])
    
    if(!isMounted) return null
  
    return (
        <>
            {theme === "light" ? (
                <Moon onClick={() => setTheme("dark")}/>
            ) : (
                <Sun onClick={() => setTheme("light")}/>
            )}
        </>
  )
}

export default ThemeToggle