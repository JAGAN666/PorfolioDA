"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Award, Briefcase, ChevronRight } from "lucide-react"

const experiences = [
  {
    title: "Associate Data Engineer",
    company: "Digitalsoft AI Solutions India Pvt Ltd",
    location: "Bangalore, India",
    period: "September 2022 - July 2024",
    achievements: [
      "Optimized database performance by leading the migration from NoSQL to SQL, revamping schemas, and reducing operational costs by 30%.",
      "Developed a Kanban/Swimlane dashboard to enhance user experience, implementing intuitive UI components and backend logic for seamless document management.",
      "Implemented a role-based authentication system in AngularJS, improving data security and access control for diverse user roles.",
      "Collaborated with engineers and project managers to analyze user data logs to identify trends in feature usage, leveraging insights to prioritize high-impact features, boosting customer satisfaction and revenue.",
      "Improved query performance by 25% through database optimizations, ensuring faster data retrieval and a smooth user experience.",
      "Leveraged data visualization techniques in Tableau to present actionable insights on feature adoption, customer engagement, and system performance.",
    ],
  },
  {
    title: "Information Technology Engineer",
    company: "Bio Environment Services Technology LLC",
    location: "Dubai, United Arab Emirates",
    period: "April 2022 - June 2022",
    achievements: [
      "Revamped website architecture by leading website development and debugging efforts, resulting in a 20% increase in online sales within the first month.",
      "Independently designed and implemented an automation process that streamlined customer service operations, reducing manual workload by 60%.",
      "Diagnosed and resolved critical technical issues, ensuring a seamless workflow and uninterrupted business operations.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-spacing relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute inset-0 bg-noise" />

        <motion.div
          className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl"
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 5,
          }}
        />
      </div>

      <div className="container-width relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 mb-4">
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Professional Journey</span>
            </div>
            <h2 className="heading-1 mb-4">Work Experience</h2>
            <p className="subtitle-1 text-slate-600 dark:text-slate-400">
              My professional career and key accomplishments
            </p>
          </motion.div>
        </div>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[9.5rem] top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ experience, index }: { experience: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-[9.5rem] top-0 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-4 border-indigo-500 shadow-medium z-10 transform -translate-x-1/2 md:translate-x-0"></div>

      <div className="md:grid md:grid-cols-12 gap-8">
        <div className="md:col-span-3 mb-4 md:mb-0 md:text-right">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2"
          >
            {/* Enhanced date display */}
            <div className="inline-flex items-center px-4 py-3 rounded-lg bg-indigo-600 text-white text-base font-bold shadow-medium">
              <Calendar className="h-5 w-5 mr-2" />
              {experience.period}
            </div>

            <div className="flex items-center justify-end gap-1 text-slate-600 dark:text-slate-400 text-sm mt-3">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">{experience.location}</span>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-9">
          <div className="card-professional p-6 hover-lift bg-white dark:bg-slate-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 gradient-text-primary">
                  {experience.title}
                </h3>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-300">{experience.company}</p>
              </div>

              <div className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium">
                <Briefcase className="h-4 w-4 mr-2" />
                {/* {index === 0 ? "Current" : "Previous"} */}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">Key Achievements</h4>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {experience.achievements.map((achievement: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-2 bg-slate-50 dark:bg-slate-700 p-3 rounded-lg"
                  >
                    <ChevronRight className="h-5 w-5 text-indigo-500 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

