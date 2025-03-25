"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface AnimatedBackgroundProps {
  variant?: "gradient" | "particles" | "waves"
  intensity?: "light" | "medium" | "strong"
  className?: string
}

export default function AnimatedBackground({
  variant = "gradient",
  intensity = "medium",
  className = "",
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  // Particles animation
  useEffect(() => {
    if (variant !== "particles") return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    // Particle settings based on intensity
    const particleCount = intensity === "light" ? 30 : intensity === "medium" ? 60 : 100
    const particleSize = intensity === "light" ? 2 : intensity === "medium" ? 3 : 4
    const particleSpeed = intensity === "light" ? 0.5 : intensity === "medium" ? 1 : 1.5
    const particleOpacity = intensity === "light" ? 0.3 : intensity === "medium" ? 0.5 : 0.7

    // Particle array
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
    }[] = []

    // Initialize particles
    const initParticles = () => {
      particles.length = 0

      const colors = [
        "rgba(139, 92, 246, OPACITY)", // Purple
        "rgba(59, 130, 246, OPACITY)", // Blue
        "rgba(236, 72, 153, OPACITY)", // Pink
        "rgba(16, 185, 129, OPACITY)", // Green
        "rgba(245, 158, 11, OPACITY)", // Yellow
      ]

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * particleSize + 1,
          speedX: (Math.random() - 0.5) * particleSpeed,
          speedY: (Math.random() - 0.5) * particleSpeed,
          color: colors[Math.floor(Math.random() * colors.length)].replace("OPACITY", particleOpacity.toString()),
          opacity: Math.random() * 0.5 + 0.3,
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      // Draw connections between particles
      if (intensity !== "light") {
        ctx.strokeStyle = `rgba(255, 255, 255, ${intensity === "medium" ? 0.03 : 0.05})`
        ctx.lineWidth = 0.5

        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            const maxDistance = intensity === "medium" ? 150 : 200

            if (distance < maxDistance) {
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.stroke()
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize and start animation
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [variant, intensity])

  // Gradient or waves variant
  if (variant === "gradient" || variant === "waves") {
    const opacityValue = intensity === "light" ? 0.1 : intensity === "medium" ? 0.15 : 0.2

    return (
      <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
        {variant === "gradient" ? (
          <>
            <motion.div
              className="absolute -top-[40%] -left-[20%] h-[140%] w-[140%] rounded-full bg-purple-500/20 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, 0],
                opacity: [opacityValue, opacityValue * 1.2, opacityValue],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -bottom-[40%] -right-[20%] h-[140%] w-[140%] rounded-full bg-blue-500/20 blur-3xl"
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, -10, 0],
                opacity: [opacityValue, opacityValue * 1.2, opacityValue],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 5,
              }}
            />
            <motion.div
              className="absolute top-[30%] right-[30%] h-[50%] w-[50%] rounded-full bg-pink-500/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
                opacity: [opacityValue, opacityValue * 1.1, opacityValue],
              }}
              transition={{
                duration: 18,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 2,
              }}
            />
          </>
        ) : (
          <div className="absolute inset-0">
            <svg
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
              viewBox="0 0 1200 800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M 0 300 Q 300 250 600 300 Q 900 350 1200 300 L 1200 800 L 0 800 Z"
                fill="rgba(139, 92, 246, 0.1)"
                animate={{
                  d: [
                    "M 0 300 Q 300 250 600 300 Q 900 350 1200 300 L 1200 800 L 0 800 Z",
                    "M 0 350 Q 300 300 600 350 Q 900 400 1200 350 L 1200 800 L 0 800 Z",
                    "M 0 300 Q 300 250 600 300 Q 900 350 1200 300 L 1200 800 L 0 800 Z",
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.path
                d="M 0 400 Q 300 350 600 400 Q 900 450 1200 400 L 1200 800 L 0 800 Z"
                fill="rgba(59, 130, 246, 0.1)"
                animate={{
                  d: [
                    "M 0 400 Q 300 350 600 400 Q 900 450 1200 400 L 1200 800 L 0 800 Z",
                    "M 0 450 Q 300 400 600 450 Q 900 500 1200 450 L 1200 800 L 0 800 Z",
                    "M 0 400 Q 300 350 600 400 Q 900 450 1200 400 L 1200 800 L 0 800 Z",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />
              <motion.path
                d="M 0 500 Q 300 450 600 500 Q 900 550 1200 500 L 1200 800 L 0 800 Z"
                fill="rgba(236, 72, 153, 0.1)"
                animate={{
                  d: [
                    "M 0 500 Q 300 450 600 500 Q 900 550 1200 500 L 1200 800 L 0 800 Z",
                    "M 0 550 Q 300 500 600 550 Q 900 600 1200 550 L 1200 800 L 0 800 Z",
                    "M 0 500 Q 300 450 600 500 Q 900 550 1200 500 L 1200 800 L 0 800 Z",
                  ],
                }}
                transition={{
                  duration: 12,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 2,
                }}
              />
            </svg>
          </div>
        )}
      </div>
    )
  }

  // Particles variant
  return <canvas ref={canvasRef} className={`absolute inset-0 -z-10 ${className}`} />
}

