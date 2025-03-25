"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { LineChart, BrainCircuit, Rocket, CheckCircle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Fix the useInView hook usage
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])

  return (
    <section
      id="about"
      ref={containerRef}
      className="section-spacing relative overflow-hidden bg-white dark:bg-slate-900"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute inset-0 bg-noise" />

        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl"
          style={{ y: y1 }}
        />

        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl"
          style={{ y: y2 }}
        />
      </div>

      <div className="container-width relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 mb-4">
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">About Me</span>
            </div>
            <h2 className="heading-1 mb-4">My Background & Expertise</h2>
            <p className="subtitle-1 text-slate-600 dark:text-slate-400">
              A passionate data professional with experience in transforming complex data into actionable insights
            </p>
          </motion.div>
        </div>

        <div ref={inViewRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg" />

              <div className="relative aspect-square rounded-lg overflow-hidden shadow-hard">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20 z-10" />
                <img
                  src="nikita.jpg"
                  alt="Nikita Ravi"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-professional p-6"
            >
              <h3 className="heading-4 mb-4 gradient-text-primary">Professional Summary</h3>
              <p className="body-1 text-slate-600 dark:text-slate-400">
                I am a data analytics professional with experience in database optimization, data visualization, and
                machine learning. My background spans from data engineering to predictive modeling, with a focus on
                delivering actionable insights and optimizing system performance.
              </p>

              <div className="mt-6 flex justify-end">
                <a href="/NikitaRaviResume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="group">
                    View Resume
                    <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="card-professional p-6 hover-lift h-full"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <BrainCircuit className="h-6 w-6 text-white" />
                </div>
                <h4 className="heading-4 mb-2">Technical Expertise</h4>
                <p className="body-1 text-slate-600 dark:text-slate-400">
                  Proficient in Python, SQL, and various data science tools, with a strong foundation in statistical
                  analysis and machine learning algorithms.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="card-professional p-6 hover-lift h-full"
              >
                <div className="w-12 h-12 rounded-lg gradient-secondary flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-white" />
                </div>
                <h4 className="heading-4 mb-2">Data Visualization</h4>
                <p className="body-1 text-slate-600 dark:text-slate-400">
                  Creating clear, insightful visualizations that transform complex data into actionable business
                  intelligence.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card-professional p-6"
            >
              <h3 className="heading-4 mb-4 gradient-text-secondary">My Approach</h3>
              <p className="body-1 text-slate-600 dark:text-slate-400 mb-6">
                I believe in the power of data to transform businesses and drive innovation. My approach combines
                technical expertise with a strong focus on business outcomes, ensuring that data solutions deliver real
                value.
              </p>

              <div className="space-y-4">
                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold">Data-Driven Decision Making</h5>
                    <p className="text-slate-600 dark:text-slate-400">
                      Empowering organizations to make informed decisions based on robust data analysis.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold">Continuous Learning</h5>
                    <p className="text-slate-600 dark:text-slate-400">
                      Staying at the forefront of data analytics technologies and methodologies.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold">Collaborative Problem Solving</h5>
                    <p className="text-slate-600 dark:text-slate-400">
                      Working closely with stakeholders to understand needs and deliver tailored solutions.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="card-professional p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg gradient-accent">
                  <Rocket className="h-5 w-5 text-white" />
                </div>
                <h4 className="heading-4">Future Focus</h4>
              </div>
              <p className="body-1 text-slate-600 dark:text-slate-400">
                I'm passionate about exploring the intersection of data science and emerging technologies like AI and
                machine learning to create innovative solutions for tomorrow's challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}