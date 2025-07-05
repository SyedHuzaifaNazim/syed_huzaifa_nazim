import image from '../assets/Screenshot 2023-11-30 195854.jpg';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto">
            <img 
              src={image}
              alt="Syed Huzaifa Nazim"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 dark:text-white">
          Hi, I'm{' '}
          <TypeAnimation
            sequence={[
              'Syed Huzaifa Nazim', // Text to type
              2000,                 // Wait 2 seconds
              '',                  // Clear text
              1000,                // Wait 1 second
              'a Full Stack Developer', // Another phrase (optional)
              2000,
              '', 
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-indigo-600"
          />
        </h1>

        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Full Stack Developer specializing in React, Node.js and Cloud Solutions
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg text-lg font-medium hover:bg-indigo-700 transition"
          >
            View Projects
          </a>
          <a 
            href="/assets/Syed-Huzaifa-Nazim.pdf" 
            download
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-lg font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
