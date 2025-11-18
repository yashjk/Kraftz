"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FadeInUp } from "@/lib/animations"

function ContactForm({
  isContactPage = false,
  formTitle = "Get In Touch",
}: {
  isContactPage?: boolean
  formTitle?: string
}) {
  const [focused, setFocused] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 1500)
  }

  return (
    <FadeInUp triggerOnce={true}>
      <div
        className={`w-full ${
          isContactPage ? "shadow-lg" : "md:w-5/12"
        } bg-white rounded-lg text-foreground p-12 text-center border border-border`}
      >
        <FadeInUp delay={0.1} triggerOnce={true}>
          <h4
            className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold text-[#0249A7] mb-8"
          >
            {formTitle}
          </h4>
        </FadeInUp>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <FadeInUp delay={0.2} triggerOnce={true} className="relative mb-4">
            <motion.input
              type="text"
              name="name"
              placeholder="Name"
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              className="bg-background rounded w-full p-3 border border-border text-foreground placeholder:text-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-300"
              whileFocus={{ scale: 1.02 }}
            />
            {focused === "name" && (
              <motion.div
                layoutId="inputFocus"
                className="absolute inset-0 border-2 border-brand rounded pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </FadeInUp>

          <FadeInUp delay={0.3} triggerOnce={true} className="relative mb-4">
            <motion.input
              type="email"
              name="email"
              placeholder="Email Address"
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              className="bg-background rounded w-full p-3 border border-border text-foreground placeholder:text-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-300"
              whileFocus={{ scale: 1.02 }}
            />
            {focused === "email" && (
              <motion.div
                layoutId="inputFocus"
                className="absolute inset-0 border-2 border-brand rounded pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </FadeInUp>

          <FadeInUp delay={0.4} triggerOnce={true} className="relative mb-4">
            <motion.input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onFocus={() => setFocused("phone")}
              onBlur={() => setFocused(null)}
              className="bg-background rounded w-full p-3 border border-border text-foreground placeholder:text-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-300"
              whileFocus={{ scale: 1.02 }}
            />
            {focused === "phone" && (
              <motion.div
                layoutId="inputFocus"
                className="absolute inset-0 border-2 border-brand rounded pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </FadeInUp>

          <FadeInUp delay={0.5} triggerOnce={true} className="relative mb-4">
            <motion.textarea
              name="message"
              placeholder="Message"
              rows={4}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              className="bg-background rounded w-full p-3 border border-border text-foreground placeholder:text-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-300 resize-none"
              whileFocus={{ scale: 1.02 }}
            />
            {focused === "message" && (
              <motion.div
                layoutId="inputFocus"
                className="absolute inset-0 border-2 border-brand rounded pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </FadeInUp>

          <FadeInUp delay={0.6} triggerOnce={true}>
            <motion.input
              type="submit"
              value={isSubmitting ? "Sending..." : isSubmitted ? "Sent!" : "Send"}
              disabled={isSubmitting || isSubmitted}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(var(--primary-rgb), 0.05)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center justify-center px-8 py-2.5 border-2 border-primary text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary/5 mt-4 cursor-pointer ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              } ${isSubmitted ? "border-green-500 text-green-500" : ""}`}
            />
          </FadeInUp>
        </form>
      </div>
    </FadeInUp>
  )
}

export default ContactForm
