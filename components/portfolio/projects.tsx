"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Star } from "lucide-react"
import { projects } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"
import { SectionHeading } from "./section-heading"

const categories = ["All", "AI · Blockchain", "AI · Full-Stack", "AI/ML", "Web", "Backend"]

export function Projects() {
  const [filter, setFilter] = useState<string>("All")
  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  )

  return (
    <section id="projects" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've shipped"
          description="A bento of products built across hackathons, side projects, and coursework."
        />

        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => {
            const active = filter === c
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition",
                  active
                    ? "border-primary/60 bg-primary/15 text-primary"
                    : "border-border bg-secondary/40 text-muted-foreground hover:border-primary/30 hover:text-foreground",
                )}
              >
                {c}
              </button>
            )
          })}
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[220px]">
          {filtered.map((p, idx) => {
            const span =
              p.size === "lg"
                ? "lg:col-span-4 lg:row-span-2"
                : p.size === "md"
                  ? "lg:col-span-2 lg:row-span-2"
                  : "lg:col-span-2 lg:row-span-1"
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={cn(
                  "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/70 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-primary/40",
                  span,
                )}
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
                </div>

                <header className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                          {p.category}
                        </span>
                        {p.badge && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent ring-1 ring-accent/30">
                            <Star className="h-3 w-3" />
                            {p.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
                        {p.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </header>

                <footer className="relative mt-5 flex items-end justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub repo"
                        className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition hover:-translate-y-0.5"
                      >
                        Live
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </footer>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
