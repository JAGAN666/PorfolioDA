"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

interface TiltCardProps {
  children: ReactNode
  className?: string
  glareEnabled?: boolean
  tiltMaxAngleX?: number
  tiltMaxAngleY?: number
  glareColor?: string
  perspective?: number
  scale?: number
}

export default function TiltCard({
  children,
  className = "",
  glareEnabled = true,
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  glareColor = "rgba(255, 255, 255, 0.4)",
  perspective = 1000,
  scale = 1.05,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Calculate mouse position relative to card center (in percentage)
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    // Calculate tilt angles
    const tiltX = -y * tiltMaxAngleY
    const tiltY = x * tiltMaxAngleX

    setTilt({ x: tiltX, y: tiltY })
    setGlarePosition({ x: x * 100 + 50, y: y * 100 + 50 })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
      }}
      animate={{
        transform: isHovered
          ? `perspective(${perspective}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${scale})`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}

      {glareEnabled && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor} 0%, rgba(255, 255, 255, 0) 80%)`,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  )
}

