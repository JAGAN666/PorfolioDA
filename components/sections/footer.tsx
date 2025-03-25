"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="container-width relative z-10">
        <div className="py-12 border-b border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 space-y-4">
              <Link href="/" className="inline-block">
                <h3 className="text-2xl font-bold text-gradient">Nikita Ravi</h3>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 max-w-md">
                Data analytics professional specializing in database optimization, data visualization, and machine
                learning, with a focus on delivering actionable insights.
              </p>
              <div className="flex gap-3 pt-2">
                <motion.a
                  href="https://linkedin.com/in/nikita-ravi-aa44b8321"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>

                <motion.a
                  href="https://github.com/nikita-ravi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>

                <motion.a
                  href="mailto:nikitaravi1m@gmail.com"
                  aria-label="Email"
                  className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Navigation</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="#about"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#experience"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Experience
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#projects"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#skills"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Skills
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Resources</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Resume
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#publications"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Publications
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Certifications
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Contact</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="#contact"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Get in Touch
                      </Link>
                    </li>
                    <li>
                      <a
                        href="mailto:nikitaravi1m@gmail.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Email Me
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+15712442352"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Call Me
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">© {currentYear} Nikita Ravi. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">Built with Next.js and Tailwind CSS</p>

            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

