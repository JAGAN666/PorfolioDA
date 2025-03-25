"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Download, Briefcase, ArrowRight } from "lucide-react"
import Card3D from "@/components/ui/card-3d"
import RevealText from "@/components/ui/reveal-text"

export default function Contact() {
  // Fix the useInView hook usage
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="contact"
      className="section-spacing relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute inset-0 noise" />

        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 5,
          }}
        />
      </div>

      {/* Available for Opportunities - Prominent Banner */}
      <div className="container-width relative z-10 mb-16">
        <RevealText>
          <Card3D className="p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-center md:text-left">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium mb-2">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Career Opportunity
                </div>
                <h3 className="text-3xl font-bold text-white">Available for New Opportunities</h3>
                <p className="text-white/90 max-w-2xl">
                  I'm currently open to new data analytics and machine learning opportunities. Let's discuss how my
                  skills can benefit your organization and drive innovation through data-driven solutions.
                </p>
              </div>

              <div className="flex gap-4">
                <a href="/NikitaRaviResume.pdf" download>
                  <Button
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all"
                    size="lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </a>
                <a href="#contact-form">
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                    size="lg"
                  >
                    Contact Me
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </Card3D>
        </RevealText>
      </div>

      <div className="container-width relative z-10">
        <SectionHeading title="Get in Touch" subtitle="Let's connect and discuss opportunities" />

        <div ref={ref} className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-2xl font-bold mb-6 gradient-text-primary">Contact Information</h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:shadow-md transition-all"
                >
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200">Email</h4>
                    <a
                      href="mailto:nikitaravi1m@gmail.com"
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      nikitaravi1m@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:shadow-md transition-all"
                >
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200">Phone</h4>
                    <a
                      href="tel:+15712442352"
                      className="text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      +1 (571) 244-2352
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:shadow-md transition-all"
                >
                  <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200">Location</h4>
                    <p className="text-slate-600 dark:text-slate-400">Washington, DC</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-4">Connect with me</h4>
                <div className="flex gap-3">
                  <motion.a
                    href="https://linkedin.com/in/nikita-ravi-aa44b8321"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
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
                    className="p-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>

                  <motion.a
                    href="mailto:nikitaravi1m@gmail.com"
                    aria-label="Email"
                    className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-2xl font-bold mb-6 gradient-text-secondary">Send a Message</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject"
                    className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                    className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                    size="lg"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}