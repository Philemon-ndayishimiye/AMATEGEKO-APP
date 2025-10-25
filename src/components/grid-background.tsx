"use client"

import { useEffect, useRef } from "react"

interface SnakeDot {
  x: number
  y: number
  direction: "horizontal" | "vertical"
  speed: number
  color: string
  opacity: number
  fadeDirection: number
}

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const gridSize = 60
    const dotRadius = 4

    const snakeDots: SnakeDot[] = []
    const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981"]

    for (let i = 0; i < 8; i++) {
      snakeDots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        direction: Math.random() > 0.5 ? "horizontal" : "vertical",
        speed: 0.5 + Math.random() * 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random(),
        fadeDirection: Math.random() > 0.5 ? 1 : -1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = "rgba(148, 163, 184, 0.1)"
      ctx.lineWidth = 1

      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      snakeDots.forEach((dot) => {
        // Move dot along grid lines
        if (dot.direction === "horizontal") {
          dot.x += dot.speed
          // Snap to nearest grid line
          dot.y = Math.round(dot.y / gridSize) * gridSize

          if (dot.x > canvas.width) {
            dot.x = 0
            dot.y = Math.random() * canvas.height
          }
        } else {
          dot.y += dot.speed
          // Snap to nearest grid line
          dot.x = Math.round(dot.x / gridSize) * gridSize

          if (dot.y > canvas.height) {
            dot.y = 0
            dot.x = Math.random() * canvas.width
          }
        }

        // Blinking effect
        dot.opacity += dot.fadeDirection * 0.02
        if (dot.opacity >= 1) {
          dot.opacity = 1
          dot.fadeDirection = -1
        } else if (dot.opacity <= 0.3) {
          dot.opacity = 0.3
          dot.fadeDirection = 1
        }

        // Draw glowing dot
        const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dotRadius * 3)
        gradient.addColorStop(
          0,
          `${dot.color}${Math.floor(dot.opacity * 255)
            .toString(16)
            .padStart(2, "0")}`,
        )
        gradient.addColorStop(
          0.5,
          `${dot.color}${Math.floor(dot.opacity * 128)
            .toString(16)
            .padStart(2, "0")}`,
        )
        gradient.addColorStop(1, "transparent")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dotRadius * 3, 0, Math.PI * 2)
        ctx.fill()

        // Draw solid center dot
        ctx.fillStyle = `${dot.color}${Math.floor(dot.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
