import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    alert(`Thank you ${formData.name}! Message received.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = {
    github: 'https://github.com/yourprofile',
    linkedin: 'https://linkedin.com/in/yourprofile',
    twitter: 'https://twitter.com/yourprofile',
  };

  const socialIcons = {
    github: <FaGithub className="w-6 h-6" />,
    linkedin: <FaLinkedin className="w-6 h-6" />,
    twitter: <FaTwitter className="w-6 h-6" />,
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Have a project in mind? Let's work together!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 dark:text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Contact Info</h3>
              <p className="dark:text-gray-300 mb-2">
                <span className="font-medium">Email:</span> huzaifanazim154@gmail.com
              </p>
              <p className="dark:text-gray-300 mb-2">
                <span className="font-medium">Location:</span> Karachi, Pakistan
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Connect</h3>
              <div className="flex space-x-4">
                {Object.keys(socialIcons).map((platform) => (
                  <a
                    key={platform}
                    href={socialLinks[platform]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-gray-700 rounded-full shadow hover:shadow-md transition text-gray-700 dark:text-white"
                  >
                    {socialIcons[platform]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
