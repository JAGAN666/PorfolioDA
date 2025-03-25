"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "@/components/ui/section-heading"
import { Code, Database, BarChart, Cpu, CheckCircle } from "lucide-react"
import Card3D from "@/components/ui/card-3d"

const skillCategories = [
  {
    id: "programming",
    name: "Programming Languages",
    icon: <Code className="h-5 w-5" />,
    description: "Proficient in multiple programming languages for data analysis, web development, and automation.",
    skills: [
      { name: "Python", description: "Data analysis, machine learning, automation" },
      { name: "SQL", description: "Database querying, optimization, stored procedures" },
      { name: "R", description: "Statistical analysis, data visualization" },
      { name: "JavaScript", description: "Web development, interactive dashboards" },
      { name: "HTML/CSS", description: "Frontend development, responsive design" },
      { name: "C", description: "System programming, algorithm implementation" },
    ],
  },
  {
    id: "datascience",
    name: "Data Science & Analytics",
    icon: <BarChart className="h-5 w-5" />,
    description: "Expertise in transforming raw data into actionable insights through various analytical techniques.",
    skills: [
      { name: "Data Visualization", description: "Creating insightful visual representations of complex data" },
      { name: "Machine Learning", description: "Developing predictive models and algorithms" },
      { name: "Statistical Analysis", description: "Hypothesis testing, regression analysis, ANOVA" },
      { name: "Predictive Modeling", description: "Forecasting trends and outcomes based on historical data" },
      { name: "Feature Engineering", description: "Creating meaningful features from raw data" },
      { name: "Time Series Analysis", description: "Analyzing time-dependent data patterns" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Technologies",
    icon: <Cpu className="h-5 w-5" />,
    description: "Proficient with industry-standard tools and frameworks for data processing and analysis.",
    skills: [
      { name: "Pandas/NumPy", description: "Data manipulation and numerical computing" },
      { name: "Scikit-learn", description: "Machine learning model implementation" },
      { name: "Tableau", description: "Business intelligence and data visualization" },
      { name: "PySpark", description: "Large-scale data processing" },
      { name: "Dask", description: "Parallel computing and big data processing" },
      { name: "TensorFlow", description: "Deep learning model development" },
    ],
  },
  {
    id: "databases",
    name: "Databases & Infrastructure",
    icon: <Database className="h-5 w-5" />,
    description: "Experience with various database systems and data infrastructure technologies.",
    skills: [
      { name: "MySQL", description: "Relational database design and optimization" },
      { name: "NoSQL", description: "Document-based and key-value databases" },
      { name: "ETL Pipelines", description: "Data extraction, transformation, and loading processes" },
      { name: "Data Warehousing", description: "Designing and implementing data warehouses" },
      { name: "Cloud Platforms", description: "AWS, Azure, and GCP services" },
      { name: "Version Control", description: "Git, GitHub, and collaborative development" },
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("programming")

  // Fix the useInView hook usage
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="skills"
      className="section-spacing relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
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

      <div className="container-width relative z-10">
        <SectionHeading title="Skills & Expertise" subtitle="My technical proficiencies and competencies" />

        <div ref={inViewRef} className="mt-16">
          <Card3D className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Sidebar */}
              <div className="md:col-span-4 lg:col-span-3 bg-slate-50 dark:bg-slate-900/50 p-6">
                <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">Skill Categories</h3>

                <div className="space-y-2">
                  {skillCategories.map((category, index) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                        activeCategory === category.id
                          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                          : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          activeCategory === category.id
                            ? "bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-blue-400"
                            : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-400"
                        }`}
                      >
                        {category.icon}
                      </div>
                      <span className="font-medium">{category.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-8 lg:col-span-9 p-6">
                <AnimatePresence mode="wait">
                  {skillCategories.map((category) => {
                    if (category.id !== activeCategory) return null

                    return (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                            {category.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">{category.name}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{category.description}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {category.skills.map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 * index }}
                              className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700"
                            >
                              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">{skill.name}</h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400">{skill.description}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>
            </div>
          </Card3D>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200">Additional Competencies</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Project Management</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Technical Documentation</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Data Storytelling</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Agile Methodologies</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Problem-Solving</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Cross-functional Collaboration</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

