"use client"

import React from 'react'

const Test = () => {
  return (
    <div className="relative">
    <input
      id="email"
        type="email"
        placeholder="email"
      className="relative p-2 bg-transparent border-2 rounded-lg outline-none placeholder:text-transparent peer border-light_primary dark:border-dark_primary focus:border-dark_secondary dark:focus:border-light_secondary autofill:shadow-[inset_0_0_0px_1000px_rgb(239,239,239)] dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(18,18,18)]"
      />
    <label
      htmlFor="email"
      className="absolute z-20 px-1 text-xs capitalize transition-all bg-light_primary dark:bg-dark_primary left-2 peer-placeholder-shown:top-3 peer-focus:-top-2 -top-2 peer-placeholder-shown:text-sm peer-focus:text-xs"
      >email</label>
      </div>
  )
}

export default Test