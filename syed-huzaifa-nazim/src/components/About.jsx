import { motion } from 'framer-motion'
import { HiSparkles } from 'react-icons/hi'
import image from '../assets/WhatsApp Image 2024-09-08 at 01.06.06_421cc77c.jpg' // Your second image

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Main Bio Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 glass-card p-8 rounded-3xl"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden border border-white/10">
               <img src={image} alt="Profile" className="w-full h-full object-cover" />
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <HiSparkles className="text-indigo-400 w-6 h-6" />
                <h2 className="text-2xl font-bold">About Me</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate <span className="text-indigo-400 font-semibold">Web Developer</span> currently pursuing a Bachelor's degree in <span className="text-indigo-400 font-semibold">Artificial Intelligence</span> from DUET. With hands-on experience in technologies like React.js, Next.js, Node.js, and MongoDB, I enjoy building full-stack applications that solve real-world problems.
              </p>
              <p className="text-gray-400 text-sm">
                Beyond academics, I've explored modern frameworks like Remix.js and Shopify App development. I value clean code, user-focused design, and scalable architecture.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats/Info Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 rounded-3xl flex flex-col justify-center gap-4"
        >
          <div>
            <p className="text-gray-400 text-sm">Location</p>
            <p className="text-white font-semibold">Karachi, Pakistan</p>
          </div>
          <div className="h-[1px] bg-white/10" />
          <div>
            <p className="text-gray-400 text-sm">Experience</p>
            <p className="text-white font-semibold">3+ Years</p>
          </div>
          <div className="h-[1px] bg-white/10" />
          <div>
            <p className="text-gray-400 text-sm">Email</p>
            <p className="text-indigo-400 text-sm break-all">huzaifanazim154@gmail.com</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About