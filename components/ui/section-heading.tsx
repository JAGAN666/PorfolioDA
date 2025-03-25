"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  // Fix the useInView hook usage
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="inline-block mb-3"
      >
        <div className="h-1 w-12 bg-gradient-primary mx-auto rounded-full mb-3" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight gradient-text-primary">{title}</h2>
        <div className="h-1 w-12 bg-gradient-primary mx-auto rounded-full mt-3" />
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-slate-600 dark:text-slate-400"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

