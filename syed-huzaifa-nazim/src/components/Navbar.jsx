import { motion } from 'framer-motion'
import { HiHome, HiUser, HiCode, HiMail, HiAcademicCap } from 'react-icons/hi'

const navItems = [
  { id: 'home', icon: HiHome, label: 'Home' },
  { id: 'about', icon: HiUser, label: 'About' },
  { id: 'experience', icon: HiAcademicCap, label: 'Exp' }, // Using Cap for Exp/Edu combo
  { id: 'projects', icon: HiCode, label: 'Work' },
  { id: 'contact', icon: HiMail, label: 'Contact' },
]

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex gap-2 px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="p-3 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all relative group"
          >
            <item.icon className="w-5 h-5" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </button>
        ))}
      </motion.div>
    </div>
  )
}

export default Navbar