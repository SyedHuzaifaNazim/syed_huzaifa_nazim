// src/components/Footer.jsx
import { motion } from 'framer-motion'
import { FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      href: 'https://github.com/SyedHuzaifaNazim',
      label: 'GitHub',
    },
    {
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/syed.huzaifa.nazim',
      label: 'Facebook',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/developer_154/',
      label: 'Instagram',
    },
    {
      icon: <FaLinkedinIn />,
      href: 'www.linkedin.com/in/syed-huzaifa-nazim-a861b727a',
      label: 'LinkedIn',
    },
  ]

  return (
    <motion.footer
      className="bg-header py-8 border-t border-card-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center mb-4 md:mb-0 text-gray-600 dark:text-gray-300">
            <p>&copy; {new Date().getFullYear()} Syed Huzaifa Nazim. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition text-xl"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
