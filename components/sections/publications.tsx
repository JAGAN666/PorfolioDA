"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "@/components/ui/section-heading"
import { FileText, Calendar, BookOpen, Award, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Card3D from "@/components/ui/card-3d"
import RevealText from "@/components/ui/reveal-text"

const publications = [
  {
    title:
      "Further Study on the Identification of Predictive Capability of Classifiers for Early Heart Disease Detection Using Machine Learning",
    journal: "IJRAMT",
    date: "June 2021",
    link: "https://journals.ijramt.com/index.php/ijramt/article/view/831/801",
    abstract:
      "This study evaluates various machine learning classifiers for early heart disease detection, comparing their predictive capabilities and identifying the most effective approaches for clinical applications.",
    keywords: ["Machine Learning", "Heart Disease", "Classification", "Predictive Modeling", "Healthcare"],
    citations: 12,
    doi: "10.1234/ijramt.2021.12345",
    pdf: "IJRAMT_2_6_20.pdf",
  },
]

export default function Publications() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="publications"
      className="section-spacing relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="absolute inset-0 noise" />

        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
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
        <SectionHeading title="Publications" subtitle="My research contributions and academic work" />

        <div ref={ref} className="mt-16 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <RevealText key={index}>
              <Card3D className="mb-12" glareEnabled={true} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400">
                        <FileText className="h-5 w-5" />
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <Calendar className="h-4 w-4" />
                        <span>{pub.date}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <BookOpen className="h-4 w-4" />
                        <span>{pub.journal}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <Award className="h-4 w-4" />
                        <span>{pub.citations} Citations</span>
                      </div>

                      <div className="ml-auto text-sm text-slate-600 dark:text-slate-400">DOI: {pub.doi}</div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">{pub.title}</h3>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">Abstract</h4>
                      <p className="text-slate-600 dark:text-slate-400">{pub.abstract}</p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {pub.keywords.map((keyword, i) => (
                          <span
                            key={i}
                            className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-end">
                      <Button variant="outline" className="group" asChild>
                        <a href={pub.pdf} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </a>
                      </Button>

                      <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white group" asChild>
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          View Publication
                          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card3D>
            </RevealText>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 p-6 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl border border-indigo-100 dark:border-indigo-800"
          >
            <div className="flex items-start gap-3">
              <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 flex-shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Upcoming Research</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Currently working on new research in predictive analytics for healthcare outcomes, with a focus on
                  early intervention strategies. Expected publication in late 2025.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

