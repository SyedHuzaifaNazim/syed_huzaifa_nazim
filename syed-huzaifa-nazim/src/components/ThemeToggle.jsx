// src/components/ThemeToggle.jsx
import { useTheme } from '../context/ThemeContext'
import { HiSun, HiMoon } from 'react-icons/hi2'
import { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by waiting for client-side mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button 
        className="p-2.5 rounded-xl glass-panel opacity-50 cursor-wait"
        aria-label="Loading theme toggle"
        disabled
      >
        <div className="w-5 h-5" />
      </button>
    )
  }

  return (
    <button 
      onClick={toggleTheme}
      className="p-2.5 rounded-xl transition-all duration-300 
        glass-panel hover:bg-black/5 dark:hover:bg-white/5
        focus:outline-none focus:ring-2 focus:ring-indigo-500"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <HiSun className="w-5 h-5 text-amber-400" style={{ animation: 'rotate-slow 20s linear infinite' }} /> 
      ) : (
        <HiMoon className="w-5 h-5 text-indigo-600" />
      )}
    </button>
  )
}

export default ThemeToggle