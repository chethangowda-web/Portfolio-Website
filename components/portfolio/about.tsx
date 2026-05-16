"use client"

import { motion } from "framer-motion"
import { Award, GraduationCap, Rocket, Trophy } from "lucide-react"
import { achievements, education, stats } from "@/lib/portfolio-data"
import { Counter } from "./counter"
import { SectionHeading } from "./section-heading"

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="About"
          title="Engineer first. Hacker by night."
          description="Computer Science student building production-grade products at hackathon speed. I care about clean UX, fast iteration, and code that ships."
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <div className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 text-primary">
              <Rocket className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-[0.25em]">
                Profile
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
              Full-stack developer building at the edge of AI & web3.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I&apos;m a 2nd year B.E. (Computer Science) student with a track
              record of shipping real products under pressure — 2× hackathon
              winner across 7+ competitions. I combine AI/ML, blockchain, and
              modern web frameworks to build user-centric tools, and I&apos;m
              recognized for leadership as Best Class Representative at
              Presidency University.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["React", "Next.js", "Node", "Groq AI", "Polygon", "Java", "Python"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          {/* Education + achievements */}
          <div className="grid grid-cols-1 gap-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-2 text-accent">
                <GraduationCap className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-[0.25em]">
                  Education
                </span>
              </div>
              {education.map((e) => (
                <div key={e.school} className="mt-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="font-display text-lg font-semibold text-foreground">
                      {e.degree}
                    </h4>
                    <span className="font-mono text-xs text-muted-foreground">
                      {e.period}
                    </span>
                  </div>
                  <div className="text-sm text-primary">{e.school}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {e.detail}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-3xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-2 text-primary">
                <Trophy className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-[0.25em]">
                  Achievements
                </span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {achievements.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 text-sm text-foreground/90"
                  >
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
