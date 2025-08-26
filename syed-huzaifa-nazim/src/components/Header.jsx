// src/components/Header.jsx
import { useEffect, useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import logo from '../assets/logo.svg'
import resume from '../assets/Syed-Huzaifa-Nazim.pdf'

const Header = () => {
  const headerRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        headerRef.current.classList.add(
          'bg-white',
          'dark:bg-gray-900',
          'shadow-sm',
          'dark:shadow-gray-800'
        )
        headerRef.current.classList.remove('bg-transparent')
      } else {
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

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 transition-colors duration-300 bg-transparent"
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO + NAME */}
          <div className="flex items-center space-x-2">
            <a href="#home" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-xl sm:text-2xl font-bold text-primary">
                Portfolio
              </span>
            </a>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* DESKTOPP ACTIONS */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition text-sm lg:text-base">
              <a href={resume} download="Syed-Huzaifa-Nazim-Resume.pdf">
                Download Resume
              </a>
            </button>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#about"
                className="hover:text-primary transition-colors py-2"
                onClick={handleLinkClick}
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-primary transition-colors py-2"
                onClick={handleLinkClick}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-primary transition-colors py-2"
                onClick={handleLinkClick}
              >
                Projects
              </a>
              <a
                href="#experience"
                className="hover:text-primary transition-colors py-2"
                onClick={handleLinkClick}
              >
                Experience
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors py-2"
                onClick={handleLinkClick}
              >
                Contact
              </a>
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition w-full mt-2">
                <a href={resume} download="Syed-Huzaifa-Nazim-Resume.pdf" onClick={handleLinkClick}>
                  Download Resume
                </a>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header