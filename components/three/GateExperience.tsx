"use client"

import React, { useRef, useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { ChevronDown, ArrowRight, Sparkles, ArrowDown } from "lucide-react"

// Dynamically import WalkCanvas to avoid SSR issues with WebGL/Three.js
const WalkCanvas = dynamic(
  () => import("./WalkCanvas").then((mod) => mod.WalkCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-[#06080e] text-white">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4" />
        <p className="text-sm text-muted-foreground animate-pulse font-mono">
          Loading 3D Experience...
        </p>
      </div>
    ),
  }
)

const SKIP_KEY = "skip-3d-intro"

// Phones and reduced-motion users get the portfolio directly (no 3MB model download)
const LITE_QUERY = "(max-width: 767px), (prefers-reduced-motion: reduce)"

function readSkipped() {
  try {
    return window.localStorage.getItem(SKIP_KEY) === "1"
  } catch {
    return false
  }
}

interface GateExperienceProps {
  onComplete?: () => void
}

export function GateExperience({ onComplete }: GateExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [hasEntered, setHasEntered] = useState(false)
  const [enabled, setEnabled] = useState<boolean | null>(null)

  useEffect(() => {
    const forced = new URLSearchParams(window.location.search).has("intro")
    setEnabled(forced || (!window.matchMedia(LITE_QUERY).matches && !readSkipped()))
  }, [])

  useEffect(() => {
    if (!enabled) return
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight
      if (totalScrollable <= 0) return

      const currentScroll = -rect.top
      const p = Math.min(Math.max(currentScroll / totalScrollable, 0), 1)
      setProgress(p)

      // Auto-advance seamlessly into portfolio when walking through the portal
      if (p >= 0.94 && !hasEntered) {
        setHasEntered(true)
        onComplete?.()
        const target = containerRef.current.offsetTop + containerRef.current.offsetHeight
        window.scrollTo({ top: target, behavior: "smooth" })
      }
    }

    // Keyboard navigation (ArrowDown / ArrowUp / W / S)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) return

      if (["ArrowDown", "KeyS"].includes(e.code)) {
        e.preventDefault()
        window.scrollBy({ top: 120, behavior: "smooth" })
      } else if (["ArrowUp", "KeyW"].includes(e.code)) {
        e.preventDefault()
        window.scrollBy({ top: -120, behavior: "smooth" })
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("keydown", handleKeyDown)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [enabled, hasEntered, onComplete])

  const handleSkip = () => {
    try {
      window.localStorage.setItem(SKIP_KEY, "1")
    } catch {}
    if (!containerRef.current) return
    const target = containerRef.current.offsetTop + containerRef.current.offsetHeight
    window.scrollTo({ top: target, behavior: "smooth" })
  }

  if (enabled === false) return null

  return (
    <section
      ref={containerRef}
      className={`relative h-[200vh] w-full bg-[#06080e] ${enabled ? "block" : "hidden md:block motion-reduce:hidden"}`}
    >
      {/* Sticky Fullscreen 3D Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {enabled && <WalkCanvas progress={progress} />}

        {/* Floating Skip to Portfolio button (Bottom-Right) */}
        <div className="absolute bottom-8 right-8 z-30 pointer-events-auto">
          <button
            onClick={handleSkip}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-medium backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            <span>Skip 3D Intro</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>

        {/* Initial Cinematic Hero Overlay (0% - 25% scroll) */}
        {progress < 0.25 && (
          <div className="absolute inset-x-0 bottom-12 flex flex-col items-center justify-center z-20 text-center pointer-events-none transition-opacity duration-500">
            <p className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-2 drop-shadow-lg">
              Sufyan Kamil
            </p>
            <p className="text-sm md:text-base text-white/60 mb-6 max-w-md px-4">
              Scroll down or use <span className="font-mono text-cyan-300">↓ / S</span> keys to step forward
            </p>
            <div className="flex flex-col items-center gap-2 text-white/50 text-xs font-mono animate-bounce">
              <ChevronDown className="w-5 h-5 text-white/80" />
              <span>Scroll to walk</span>
            </div>
          </div>
        )}

        {/* Progress indicator along the right side */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-2 z-20 pointer-events-none">
          <div className="w-1 h-32 bg-white/10 rounded-full overflow-hidden relative">
            <div
              className="w-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full transition-all duration-75"
              style={{ height: `${progress * 100}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-white/50">
            {Math.round(progress * 100)}%
          </span>
        </div>

        {/* Approaching the Gateway Hint (55% - 82% scroll) */}
        {progress >= 0.55 && progress < 0.82 && (
          <div className="absolute inset-x-0 bottom-16 flex flex-col items-center justify-center z-20 pointer-events-none text-center animate-fade-in">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-1">
              Gateway Detected
            </span>
            <p className="text-sm text-white/80 font-medium">
              Keep scrolling to enter
            </p>
          </div>
        )}

        {/* Engaging Portal Entry Screen (84% - 100% scroll) */}
        {progress >= 0.82 && (
          <div
            className="absolute inset-0 bg-[#06080e]/95 backdrop-blur-md flex flex-col items-center justify-center z-30 pointer-events-none text-center px-6 transition-opacity duration-300"
            style={{ opacity: Math.min((progress - 0.82) / 0.1, 1) }}
          >
            {/* Pulsing Portal Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-5 shadow-lg shadow-cyan-500/10 animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>GATEWAY UNLOCKED</span>
            </div>

            {/* Cinematic Headline */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3 drop-shadow-md">
              Welcome to My Digital Space
            </h2>

            {/* Role & Location Subtitle */}
            <p className="text-sm md:text-lg text-white/70 max-w-lg mx-auto mb-8 font-medium">
              Software Engineer • Mobile Architect • Dubai
            </p>

            {/* Stepping into portfolio indicator */}
            <div className="flex flex-col items-center gap-2 text-cyan-300 text-xs font-mono">
              <div className="w-40 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full transition-all duration-100"
                  style={{ width: `${Math.min(((progress - 0.82) / 0.12) * 100, 100)}%` }}
                />
              </div>
              <span className="flex items-center gap-1.5 text-white/60">
                <ArrowDown className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
                Stepping into portfolio...
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
