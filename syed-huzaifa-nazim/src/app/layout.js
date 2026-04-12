import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// Ensure this matches the default export from Step 1
import {ThemeContextProvider} from '../context/ThemeContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Syed Huzaifa Nazim | Portfolio',
  description: 'Full Stack Developer',
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }


 


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate-900 transition-colors duration-300">
        <ThemeContextProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}