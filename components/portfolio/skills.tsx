"use client"

import { motion } from "framer-motion"
import {
  Boxes,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Wrench,
} from "lucide-react"
import { skillGroups } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

const icons = [Layers, Boxes, Code2, Sparkles, Cpu, Wrench]

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit"
          description="A categorized stack I reach for to ship full-stack products fast."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => {
            const Icon = icons[idx % icons.length]
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="group relative rounded-3xl border border-border bg-card/60 p-6 backdrop-blur transition hover:border-primary/40 hover:bg-card"
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {group.skills.map((s) => (
                    <li key={s.name}>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-foreground/90">{s.name}</span>
                        <span className="font-mono text-muted-foreground">
                          {s.level}%
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-secondary/60">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
