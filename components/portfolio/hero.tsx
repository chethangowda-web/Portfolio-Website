"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react"
import { profile } from "@/lib/portfolio-data"

function useTypewriter(words: string[], typingSpeed = 80, pause = 1400) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    const speed = deleting ? typingSpeed / 2 : typingSpeed
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) {
          setTimeout(() => setDeleting(true), pause)
        }
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === "") {
          setDeleting(false)
          setWordIndex((i) => (i + 1) % words.length)
        }
      }
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, wordIndex, words, typingSpeed, pause])

  return text
}

export function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* grid background */}
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-60" />
      {/* gradient blobs */}
      <div
        aria-hidden
        className="absolute -top-32 -left-24 -z-10 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 right-0 -z-10 h-[360px] w-[360px] rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-[1fr_auto] md:items-center md:px-6">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for opportunities · {profile.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl"
          >
            <span className="block text-foreground/90">Hi, I&apos;m</span>
            <span className="block bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent animate-gradient">
              Chethan Gowda.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <span className="text-foreground">I&apos;m a </span>
            <span className="cursor-blink font-medium text-primary">
              {typed}
            </span>
            <span className="block mt-3">{profile.tagline}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_var(--primary)] transition-transform hover:-translate-y-0.5"
            >
              <Sparkles className="h-4 w-4" />
              View Projects
              <span className="absolute inset-0 -translate-x-full animate-shine" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/50 hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Contact me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center gap-1"
          >
            {[
              { Icon: Github, href: profile.github, label: "GitHub" },
              { Icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
              {
                Icon: Mail,
                href: `mailto:${profile.email}`,
                label: "Email",
              },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group grid h-10 w-10 place-items-center rounded-full border border-transparent text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <span className="ml-3 hidden text-xs text-muted-foreground sm:inline">
              <MapPin className="mr-1 inline h-3 w-3" />
              {profile.location}
            </span>
          </motion.div>
        </div>

        {/* Avatar / orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto hidden h-[340px] w-[340px] md:block"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-foreground/10 to-accent opacity-70 blur-2xl animate-gradient" />
          <div className="absolute inset-2 rounded-full border border-primary/30" />
          <div className="absolute inset-6 rounded-full border border-accent/30" />
          <div className="absolute inset-10 rounded-full border border-border" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_20px_4px_var(--primary)]" />
            <div className="absolute bottom-2 right-6 h-2 w-2 rounded-full bg-accent shadow-[0_0_20px_4px_var(--accent)]" />
          </motion.div>
          <div className="absolute inset-14 overflow-hidden rounded-full border border-primary/30 shadow-[0_0_60px_-10px_var(--primary)]">
            <img
              src="/chethan.jpeg"
              alt="Chethan Gowda portrait"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground backdrop-blur">
            CG · v.2026
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  )
}
