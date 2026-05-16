"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function Contact() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
    setSent(true)
    setTimeout(() => setSent(false), 3500)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 md:py-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
      />
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something."
          description="Open to internships, freelance work, hackathon teams, and collaborations. I usually reply within a day."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@email.com"
                required
              />
            </div>
            <div className="mt-4">
              <Field label="Subject" name="subject" placeholder="What's it about?" />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me about your idea, role, or project..."
                className="w-full resize-none rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/60 focus:bg-secondary/60"
              />
            </div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground">
                Or email me directly at{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="text-primary hover:underline"
                >
                  {profile.email}
                </a>
              </p>
              <button
                type="submit"
                disabled={submitting || sent}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_var(--primary)] transition hover:-translate-y-0.5 disabled:opacity-70"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" />
                    Sent
                  </>
                ) : submitting ? (
                  <>
                    <span className="h-3 w-3 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                    Sending
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </button>
            </div>
          </motion.form>

          {/* Side panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="flex flex-col gap-4"
          >
            <div className="glass rounded-3xl p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                Reach me
              </div>
              <div className="mt-4 space-y-3">
                <ContactLine
                  Icon={Mail}
                  label={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <ContactLine
                  Icon={Github}
                  label="github.com/chethangowda-web"
                  href={profile.github}
                />
                <ContactLine
                  Icon={Linkedin}
                  label="linkedin.com/in/chethan-gowda-s-n"
                  href={profile.linkedin}
                />
                <ContactLine Icon={MapPin} label={profile.location} />
              </div>
            </div>
            <div className="glass rounded-3xl p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Status
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Open to internships & hackathon teams
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Currently exploring full-stack and AI engineering roles. Quick
                to onboard, faster to ship.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/60 focus:bg-secondary/60"
      />
    </div>
  )
}

function ContactLine({
  Icon,
  label,
  href,
}: {
  Icon: React.ComponentType<{ className?: string }>
  label: string
  href?: string
}) {
  const content = (
    <div className="flex items-center gap-3 rounded-xl border border-transparent px-2 py-2 text-sm text-foreground/90 transition hover:border-primary/30 hover:bg-primary/5">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
        <Icon className="h-4 w-4" />
      </span>
      <span className="truncate">{label}</span>
    </div>
  )
  if (!href) return content
  return (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {content}
    </a>
  )
}
