"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, MapPin, BookOpen, Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const education = [
  {
    degree: "Master of Science in Data Analytics",
    institution: "The George Washington University",
    location: "Washington, DC",
    period: "Expected May 2026",
    description:
      "Focusing on advanced data analytics techniques, machine learning algorithms, and business intelligence applications. Developing expertise in predictive modeling and data-driven decision making.",
    courses: ["Advanced Machine Learning", "Big Data Analytics", "Statistical Methods", "Data Visualization"],
    website: "https://www.gwu.edu",
  },
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Dayananda Sagar College of Engineering",
    location: "Bangalore, India",
    period: "August 2017 - August 2021",
    description:
      "Gained a strong foundation in computer science principles, software development, and data structures. Specialized in data analytics and machine learning applications.",
    courses: ["Database Management Systems", "Data Mining", "Artificial Intelligence", "Web Technologies"],
    website: "https://www.dsce.edu.in",
  },
]

export default function Education() {
  return (
    <section id="education" className="section-spacing relative overflow-hidden bg-white dark:bg-slate-900">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute inset-0 bg-noise" />

        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 3,
          }}
        />
      </div>

      <div className="container-width relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 mb-4">
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Academic Background</span>
            </div>
            <h2 className="heading-1 mb-4">Education & Qualifications</h2>
            <p className="subtitle-1 text-slate-600 dark:text-slate-400">
              My academic journey and educational achievements
            </p>
          </motion.div>
        </div>

        <div className="space-y-16">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationCard({ education, index }: { education: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="card-professional overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-4 bg-indigo-600 p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="p-3 rounded-full bg-white/20 w-14 h-14 flex items-center justify-center mb-6"
              >
                <GraduationCap className="h-7 w-7" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">{education.degree}</h3>
                <p className="text-xl font-medium text-white/90 mb-4">{education.institution}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-3 mt-6"
              >
                <div className="flex items-center gap-2 text-sm text-white">
                  <Calendar className="h-4 w-4" />
                  <span className="font-semibold">{education.period}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-white">
                  <MapPin className="h-4 w-4" />
                  <span>{education.location}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8"
              >
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  size="sm"
                  asChild
                >
                  <a href={education.website} target="_blank" rel="noopener noreferrer">
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-8 p-8 bg-white dark:bg-slate-800">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200">Program Overview</h4>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
                {education.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <h5 className="font-semibold text-slate-800 dark:text-slate-200">Key Courses</h5>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {education.courses.map((course: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-2 bg-slate-50 dark:bg-slate-700 p-2 rounded-lg"
                    >
                      <div className="w-2 h-2 rounded-full bg-indigo-500" />
                      <span className="text-slate-700 dark:text-slate-300">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {index === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-6 flex items-center gap-2 p-3 border border-indigo-100 dark:border-indigo-900 rounded-lg bg-indigo-50 dark:bg-indigo-900/20"
                >
                  <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <p className="text-sm text-indigo-700 dark:text-indigo-400">
                    Currently pursuing with a focus on advanced data analytics and machine learning applications.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

