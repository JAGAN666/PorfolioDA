"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowRight, Linkedin, Github, Mail } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scrollToNext = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute inset-0 bg-noise" />

        <div className="absolute top-0 right-0 w-1/3 h-screen bg-indigo-50 dark:bg-indigo-950/20" />

        <svg
          className="absolute bottom-0 left-0 w-full h-auto"
          viewBox="0 0 1440 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z"
            fill="url(#paint0_linear)"
            fillOpacity="0.1"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="720" y1="0" x2="720" y2="116" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4F46E5" />
              <stop offset="1" stopColor="#4F46E5" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container-width relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
                <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2 animate-pulse-slow"></span>
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  Data Analytics Professional
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="display-1 text-balance">
                Hello, I'm <span className="gradient-text-primary">Nikita Ravi</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {isMounted && (
                <TypeAnimation
                  sequence={[
                    "Machine Learning Engineer",
                    2000,
                    "Data Visualization Expert",
                    2000,
                    "Database Optimization Specialist",
                    2000,
                  ]}
                  wrapper="h2"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                  className="heading-3 text-slate-600 dark:text-slate-400"
                />
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="subtitle-1 text-slate-600 dark:text-slate-400 max-w-xl">
                Specializing in data engineering, visualization, and machine learning with a focus on delivering
                actionable insights and optimizing system performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button onClick={scrollToNext} className="btn-professional btn-professional-primary" size="lg">
                Explore My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="flex items-center gap-3">
                <motion.a
                  href="https://linkedin.com/in/nikita-ravi-aa44b8321"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-soft hover:shadow-medium transition-all hover-lift"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5 text-indigo-600" />
                </motion.a>

                <motion.a
                  href="mailto:nikitaravi1m@gmail.com"
                  aria-label="Email"
                  className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-soft hover:shadow-medium transition-all hover-lift"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5 text-indigo-600" />
                </motion.a>

                <motion.a
                  href="https://github.com/nikita-ravi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-soft hover:shadow-medium transition-all hover-lift"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-5 w-5 text-indigo-600" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-indigo-200 dark:border-indigo-800 rounded-full opacity-50" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-2 border-indigo-200 dark:border-indigo-800 rounded-full opacity-50" />

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-indigo-100 dark:bg-indigo-900/30 blur-3xl opacity-30" />

              {/* Profile image container */}
              <div className="relative z-10 w-[400px] h-[400px] mx-auto overflow-hidden rounded-2xl shadow-hard border-4 border-white dark:border-slate-800">
                <img
                  src="nikitapoerfolio2.JPG"
                  alt="Nikita Ravi"
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent" />
              </div>

              {/* Floating skill bubbles */}
              <motion.div
                className="absolute top-5 right-0 px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-medium text-sm font-medium"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                Python
              </motion.div>

              <motion.div
                className="absolute bottom-10 right-0 px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-medium text-sm font-medium"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1,
                }}
              >
                Machine Learning
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-0 px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-medium text-sm font-medium"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                SQL
              </motion.div>

              <motion.div
                className="absolute top-20 left-0 px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-medium text-sm font-medium"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1.5,
                }}
              >
                Data Visualization
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div ref={scrollRef} className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          onClick={scrollToNext}
        >
          <ArrowDown className="h-6 w-6 text-indigo-600 dark:text-indigo-400 cursor-pointer" />
        </motion.div>
      </div>
    </section>
  )
}

