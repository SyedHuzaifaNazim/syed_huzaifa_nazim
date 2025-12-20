import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

const Contact = () => {
  const form = useRef()
  const [status, setStatus] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('loading')

    // RESTORED YOUR EXACT CREDENTIALS
    emailjs
      .sendForm('service_xqjn4nm', 'template_alhau15', form.current, 'TwRHoYR8j3DLYPmNy')
      .then(() => {
        setStatus('success')
        form.current.reset()
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <section id="contact" className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
          
          <div className="space-y-6">
            <a href="mailto:huzaifanazim154@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <HiMail className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p>huzaifanazim154@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+923350554871" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <HiPhone className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p>+92 335 0554871</p>
              </div>
            </a>

            <div className="flex items-center gap-4 text-gray-300">
               <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <HiLocationMarker className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p>Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        <motion.form 
          ref={form} 
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl space-y-4"
        >
          <div>
            <label className="block text-sm text-gray-400 mb-2">Name</label>
            <input name="user_name" required type="text" className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input name="user_email" required type="email" className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Your Email" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Subject</label>
            <input name="subject" required type="text" className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Subject" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea name="message" required rows="4" className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Your Message..."></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-indigo-500/20 disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && <p className="text-green-400 text-center text-sm">Message sent successfully!</p>}
          {status === 'error' && <p className="text-red-400 text-center text-sm">Failed to send. Please try again.</p>}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact