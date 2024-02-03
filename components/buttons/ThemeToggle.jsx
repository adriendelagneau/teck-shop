"use client"

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {

    const { theme, setTheme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)      
    }, [])
    
    if(!isMounted) return null
  
    return (
        <div className='cursor-pointer'>
            {theme === "light" ? (
                <Sun onClick={() => setTheme("dark")}/>
                ) : (
                <Moon onClick={() => setTheme("light")}  />
            )}
        </div>
  )
}

export default ThemeToggle