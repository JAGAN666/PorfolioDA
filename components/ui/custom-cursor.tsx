"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      if (!isVisible) {
        setIsVisible(true)
      }
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isLink =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-hover")

      setIsHovering(isLink)
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousemove", handleElementHover)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousemove", handleElementHover)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  if (typeof window === "undefined") return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: position.x,
        y: position.y,
        opacity: isVisible ? 1 : 0,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
        mass: 0.5,
      }}
    >
      <div className={`rounded-full bg-white ${isHovering ? "w-8 h-8" : "w-4 h-4"} transition-all duration-200`} />
    </motion.div>
  )
}

