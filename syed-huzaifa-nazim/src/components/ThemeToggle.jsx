// src/components/ThemeToggle.jsx
import { useTheme } from '../context/ThemeContext'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 
        hover:bg-gray-100 dark:hover:bg-gray-800
        focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-300"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <SunIcon className="w-6 h-6 text-yellow-300 animate-spin-slow" /> 
      ) : (
        <MoonIcon className="w-6 h-6 text-blue-600" />
      )}
    </button>
  )
}

export default ThemeToggle