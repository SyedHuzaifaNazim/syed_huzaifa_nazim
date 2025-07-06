// src/components/Header.jsx
import { useEffect, useRef } from 'react'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        // Add solid background and shadow when scrolled
        headerRef.current.classList.add(
          'bg-white',
          'dark:bg-gray-900',
          'shadow-sm',
          'dark:shadow-gray-800'
        )
        headerRef.current.classList.remove('bg-transparent')
      } else {
        // Revert to transparent background on top of page
        headerRef.current.classList.remove(
          'bg-white',
          'dark:bg-gray-900',
          'shadow-sm',
          'dark:shadow-gray-800'
        )
        headerRef.current.classList.add('bg-transparent')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 transition-colors duration-300 bg-transparent"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Syed Huzaifa Nazim
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition">
              Download Resume
            </button>
          </div>

          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
