'use client'

import { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  useEffect(() => {
    // Atur class awal saat load pertama kali
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md border bg-black text-white dark:bg-white dark:text-black transition-colors"
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  )
}

export default ThemeToggle
