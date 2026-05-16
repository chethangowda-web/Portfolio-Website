"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { experiences } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've contributed"
          description="Job simulations and projects that shaped my engineering instincts."
        />
        <div className="relative">
          {/* timeline line */}
          <div
            aria-hidden
            className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2"
          />
          <ul className="space-y-10">
            {experiences.map((e, i) => {
              const right = i % 2 === 1
              return (
                <motion.li
                  key={e.role}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="relative grid grid-cols-1 gap-4 md:grid-cols-2"
                >
                  {/* dot */}
                  <div
                    aria-hidden
                    className="absolute left-5 top-5 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-primary shadow-[0_0_20px_4px_var(--primary)] md:left-1/2"
                  />
                  <div
                    className={`pl-12 md:pl-0 ${
                      right ? "md:order-2 md:pl-10" : "md:pr-10 md:text-right"
                    }`}
                  >
                    <div className="glass inline-block rounded-2xl p-5 text-left">
                      <div className="flex items-center gap-2 text-primary">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
                          {e.period} · {e.location}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                        {e.role}
                      </h3>
                      <div className="text-sm text-accent">{e.company}</div>
                      <ul className="mt-3 space-y-1.5">
                        {e.points.map((p) => (
                          <li
                            key={p}
                            className="text-sm leading-relaxed text-muted-foreground"
                          >
                            <span className="mr-2 text-primary">▹</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div />
                </motion.li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
