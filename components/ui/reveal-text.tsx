"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface RevealTextProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  threshold?: number
}

export default function RevealText({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
  threshold = 0.1,
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, threshold })

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

