"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { sections } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [active, setActive] = useState<string>("home")
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id)
          })
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-3 z-40 mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2 transition-all duration-300 md:top-5",
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent",
      )}
    >
      <a
        href="#home"
        className="flex items-center gap-2 px-3 py-1.5 font-display text-sm font-semibold tracking-tight"
      >
        <span className="grid h-7 w-7 place-items-center rounded-md bg-primary/15 text-primary ring-1 ring-primary/30">
          CG
        </span>
        <span className="hidden sm:inline text-foreground/90">
          Chethan<span className="text-primary">.</span>
        </span>
      </a>

      <nav className="hidden md:flex items-center gap-1">
        {sections.map((s) => {
          const isActive = active === s.id
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                isActive
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-primary shadow-[0_0_24px_-4px_var(--primary)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {s.label}
            </a>
          )
        })}
      </nav>

      <a
        href="#contact"
        className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm font-medium text-foreground transition hover:border-primary/50 hover:text-primary"
      >
        Let&apos;s talk
        <span className="text-primary">→</span>
      </a>

      <button
        type="button"
        aria-label="Open menu"
        className="md:hidden rounded-full p-2 text-foreground"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass absolute left-2 right-2 top-full mt-2 rounded-2xl p-2 md:hidden"
        >
          <ul className="flex flex-col">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-2.5 text-sm",
                    active === s.id
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                  )}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
