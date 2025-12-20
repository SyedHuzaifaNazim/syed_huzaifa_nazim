import { FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/SyedHuzaifaNazim' },
    { icon: <FaFacebookF />, href: 'https://www.facebook.com/syed.huzaifa.nazim' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/developer_154/' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/syed-huzaifa-nazim-a861b727a' },
  ]

  return (
    <footer className="py-8 border-t border-white/5 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition text-xl bg-white/5 p-3 rounded-full hover:bg-white/10"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Syed Huzaifa Nazim. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer