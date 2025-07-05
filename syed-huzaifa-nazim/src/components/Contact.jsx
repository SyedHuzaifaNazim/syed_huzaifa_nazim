// src/components/Contact.jsx
const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <form className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">Send me a message</h3>
            </div>
            
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-card-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-card"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-card-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-card"
                placeholder="Your email"
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="subject" className="block mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-2 border border-card-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-card"
                placeholder="Subject"
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full px-4 py-2 border border-card-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-card"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <button 
                type="submit" 
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition"
              >
                Send Message
              </button>
            </div>
          </form>
          
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card border border-card-border rounded-lg text-center">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Email</h4>
              <p className="text-gray-600 dark:text-gray-300">your.email@example.com</p>
            </div>
            
            <div className="p-6 bg-card border border-card-border rounded-lg text-center">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <p className="text-gray-600 dark:text-gray-300">+1 (123) 456-7890</p>
            </div>
            
            <div className="p-6 bg-card border border-card-border rounded-lg text-center">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Location</h4>
              <p className="text-gray-600 dark:text-gray-300">Your City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact