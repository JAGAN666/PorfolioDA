"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Calendar, Tag, ExternalLink, Github, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "NYC Taxi Data Analytics",
    description:
      "Developed predictive models for trip duration, fare amount, tip percentage, and payment type using Random Forest and Gradient Boosting, achieving an R² of 76.7% for trip duration predictions. Identified congestion hotspots and peak demand hours through geospatial analytics, aiding urban traffic management.",
    date: "November 2024",
    image: "pro4.jpeg",
    tags: ["Python", "Machine Learning", "Geospatial Analytics", "Random Forest", "Gradient Boosting"],
    color: "from-indigo-500 to-blue-400",
    link: "https://github.com/nikita-ravi/NYC-Taxi-Analytics",
    github: "https://github.com/nikita-ravi/NYC-Taxi-Analytics",
    highlights: [
      "Processed and analyzed over 1 million taxi trip records",
      "Created interactive dashboards for real-time monitoring",
      "Implemented machine learning models with 76.7% accuracy",
      "Developed geospatial visualizations of traffic patterns",
    ],
  },
  {
    title: "Loan Performance Data Analysis – Fannie Mae",
    description:
      "Analyzed 10M+ loan records using PySpark and Dask, optimizing data processing efficiency for financial trend analysis. Developed a robust ETL pipeline to clean, merge, and transform loan performance data, reducing processing time by 50%. Visualized key trends in FICO scores, delinquency rates, and loan defaults using Seaborn and Matplotlib, aiding financial decision-making.",
    date: "December 2024",
    image: "pro2.jpeg",
    tags: ["PySpark", "Dask", "ETL", "Data Visualization", "Financial Analysis"],
    color: "from-blue-500 to-indigo-400",
    link: "https://github.com/nikita-ravi/Loan-Performance-Data-Analysis",
    github: "https://github.com/nikita-ravi/Loan-Performance-Data-Analysis",
    highlights: [
      "Processed over 10 million loan records efficiently",
      "Reduced data processing time by 50% through optimization",
      "Created comprehensive visualizations of financial trends",
      "Developed predictive models for loan default risk",
    ],
  },
  {
    title: "Predictive Capability of Classifiers for Heart Disease Detection",
    description:
      "Conducted machine learning research on heart disease detection classifiers, achieving an accuracy of 87%. Performed rigorous data cleaning, processing, and feature engineering to improve model performance.",
    date: "November 2020 - June 2021",
    image: "pro1.jpeg",
    tags: ["Machine Learning", "Healthcare", "Classification", "Feature Engineering"],
    color: "from-indigo-500 to-purple-400",
    link: "https://github.com/nikita-ravi/heart-disease-classifier",
    github: "https://github.com/nikita-ravi/heart-disease-classifier",
    highlights: [
      "Achieved 87% accuracy in heart disease prediction",
      "Implemented multiple classification algorithms for comparison",
      "Conducted feature importance analysis for medical insights",
      "Published research findings in academic journal",
    ],
  },
  {
    title: "Hotel Booking Website",
    description:
      "Developed a fully functional hotel booking system using HTML, JavaScript, MySQL, and PHP. Led database management efforts, ensuring seamless booking processes and transaction integrity.",
    date: "September 2022",
    image: "pro3.jpeg",
    tags: ["HTML", "JavaScript", "MySQL", "PHP", "Web Development"],
    color: "from-blue-500 to-indigo-400",
    link: "https://github.com/nikita-ravi/Hotel-Managementt",
    github: "https://github.com/nikita-ravi/Hotel-Managementt",
    highlights: [
      "Built responsive front-end interface with modern design",
      "Implemented secure payment processing system",
      "Created efficient database schema for booking management",
      "Developed admin dashboard for hotel management",
    ],
  },
]

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0)
  const [direction, setDirection] = useState(0)
  const projectRef = useRef<HTMLDivElement>(null)

  const nextProject = () => {
    setDirection(1)
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="section-spacing relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute inset-0 bg-noise" />

        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl"
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
          className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl"
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

      <div className="container-width relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 mb-4">
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Portfolio</span>
            </div>
            <h2 className="heading-1 mb-4">Featured Projects</h2>
            <p className="subtitle-1 text-slate-600 dark:text-slate-400">
              Showcasing my technical expertise and problem-solving abilities
            </p>
          </motion.div>
        </div>

        <div className="mb-8 flex justify-between items-center">
          <h3 className="heading-4 gradient-text-primary">Selected Work</h3>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="rounded-full hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="rounded-full hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div ref={projectRef} className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentProject}
              custom={direction}
              initial={{ opacity: 0, x: direction * 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -200 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="card-professional overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/20 z-10" />
                  <img
                    src={projects[currentProject].image || "pro1.jpg"}
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm">
                    <Calendar className="h-3.5 w-3.5" />
                    {projects[currentProject].date}
                  </div>

                  {/* Project number indicator */}
                  <div className="absolute bottom-4 right-4 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white font-bold text-lg">
                    {currentProject + 1}/{projects.length}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-col h-full">
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="heading-3 mb-3 gradient-text-primary"
                      >
                        {projects[currentProject].title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="body-1 text-slate-600 dark:text-slate-400 mb-6"
                      >
                        {projects[currentProject].description}
                      </motion.p>

                      <div className="space-y-4 mb-6">
                        <motion.h4
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="font-semibold text-slate-800 dark:text-slate-200"
                        >
                          Key Highlights
                        </motion.h4>
                        <div className="space-y-2">
                          {projects[currentProject].highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className="w-2 h-2 rounded-full bg-indigo-600" />
                              </div>
                              <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {projects[currentProject].tags.map((tag, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                            className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r ${projects[currentProject].color}`}
                          >
                            <Tag className="h-3 w-3" />
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button className="btn-professional btn-professional-primary" asChild>
                          <a href={projects[currentProject].link} target="_blank" rel="noopener noreferrer">
                            View Project
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="outline" className="btn-professional btn-professional-outline" asChild>
                          <a href={projects[currentProject].github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Source Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentProject ? 1 : -1)
                setCurrentProject(index)
              }}
              className={`mx-1 rounded-full transition-all duration-300 ${
                index === currentProject
                  ? "bg-indigo-600 w-8 h-2"
                  : "bg-slate-300 dark:bg-slate-700 hover:bg-indigo-400 dark:hover:bg-indigo-800 w-2 h-2"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="btn-professional btn-professional-outline group">
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

