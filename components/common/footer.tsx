"use client"

import { contactInfo } from "@/lib/data"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <footer className="relative border-t border-border bg-background">
        <div className="px-8 md:px-16 lg:px-28 py-6 md:py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
              {/* Left: Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xs md:text-sm text-muted-foreground/70 italic text-center md:text-left"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Krafting Growth Intelligently
              </motion.div>

              {/* Center: Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xs md:text-sm text-muted-foreground text-center"
              >
                <p>© {new Date().getFullYear()} KRAFTz. All rights reserved.</p>
              </motion.div>

              {/* Right: Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col md:flex-row items-center md:items-end gap-3 md:gap-6 text-sm text-muted-foreground"
              >
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ color: "var(--primary)", x: 2 }}
                  className="transition-colors hover:text-primary"
                >
                  {contactInfo.email}
                </motion.a>
                <span className="hidden md:inline text-muted-foreground/30">•</span>
                <motion.a
                  href={`tel:${contactInfo.phone_uae}`}
                  whileHover={{ color: "var(--primary)", x: 2 }}
                  className="transition-colors hover:text-primary"
                >
                  {contactInfo.phone_uae}
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors border border-primary/20"
            aria-label="Scroll to top"
          >
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M18 15l-6-6-6 6" />
            </motion.svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default Footer
