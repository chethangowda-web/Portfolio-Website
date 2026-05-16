"use client"

import { motion } from "framer-motion"
import { BadgeCheck, Calendar } from "lucide-react"
import { certifications } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative scroll-mt-24 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified learning"
          description="Programs and simulations I've completed alongside coursework."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
              style={{ transformPerspective: 800 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/70 p-6 backdrop-blur"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" />
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/30">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {c.date}
                </div>
              </div>
              <h3 className="mt-4 font-display text-base font-semibold leading-snug text-foreground">
                {c.title}
              </h3>
              <div className="mt-1 text-sm text-primary">{c.issuer}</div>
              <div className="mt-4 truncate font-mono text-[10px] text-muted-foreground">
                ID: {c.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
