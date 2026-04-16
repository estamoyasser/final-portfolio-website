import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import heroImage from '../assets/yasser-hero.jpg'

const badgeItems = ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Responsive UI']

const proofItems = [
  'Full-stack JavaScript projects',
  'Responsive, user-focused interfaces',
  'Secure backend and API workflows',
]

const roles = [
  'Front End Developer',
  'Backend Developer',
  'Full Stack JS Developer',
]

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const roles = [
    'Front End Developer',
    'Backend Developer',
    'Full Stack JS Developer',
  ]

  const currentRole = roles[roleIndex]

  useEffect(() => {
    let timeout

    if (!isDeleting && displayedText.length < currentRole.length) {
      setIsComplete(false)

      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1))
      }, 55)
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      setIsComplete(true) 

      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 1300)
    } else if (isDeleting && displayedText.length > 0) {
      setIsComplete(false)

      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1))
      }, 28)
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRole])

  return (
    <div className="hero-type-inline">
      <span className="hero-inline-label">I&apos;M A</span>

      <span className={`hero-inline-role ${isComplete ? 'glow-active' : ''}`}>
        {displayedText}
        <span className="hero-caret" />
      </span>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-360 items-center px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-12 lg:py-16 xl:px-16 -mt-10"
    >
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_1.04fr] xl:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="order-1"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative mx-auto w-full max-w-90 sm:max-w-107.5 lg:mx-0 lg:max-w-117.5 xl:max-w-130"
          >
            <div className="absolute -inset-5 rounded-[1.8rem] bg-[radial-gradient(circle_at_center,rgba(25,133,161,0.20),transparent_65%)] blur-3xl opacity-90" />

            <div className="hero-frame group relative overflow-hidden border border-(--line) bg-(--hero-image-bg) shadow-(--panel-shadow) transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.32)]">
              <div className="hero-shine pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <img
                src={heroImage}
                alt="Portrait of Yasser Estamo"
                className="h-95 w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04] sm:h-115 lg:h-140 xl:h-155"
              />

              <div className="absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-black/85 via-black/25 to-transparent p-5 sm:p-7 lg:p-8">
                <p className="section-label text-white/55">Gen. Trias, Cavite, Philippines</p>
                <p className="mt-2 display-font text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
                  Open to Junior Full Stack Developer roles
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="order-2"
        >
          <TypingRole />

          <h1 className="hero-title hero-name mt-5 text-5xl sm:text-6xl md:text-7xl xl:text-[6rem]">
            <span className="hero-name-fill">YASSER</span>
            <span className="hero-name-fill block">ESTAMO</span>
          </h1>

          <p className="hero-kicker mt-4">React • Node.js • Express • MongoDB</p>

          <p className="hero-subtitle mt-6 max-w-2xl">
            I build responsive full-stack web applications with clean user interfaces,
            secure backend logic, and practical solutions for real-world use cases.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {proofItems.map((item) => (
              <span
                key={item}
                className="tech-chip border border-cyan-300/12 bg-cyan-300/6 px-3 py-1.5 text-(--text-muted) backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="button-text inline-flex items-center justify-center border border-(--line) bg-(--button-solid-bg) px-6 py-3.5 text-(--button-solid-text) transition hover:-translate-y-0.5 hover:opacity-95"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="button-text inline-flex items-center justify-center border border-(--line) bg-(--surface-soft) px-6 py-3.5 text-(--text-main) transition hover:-translate-y-0.5 hover:bg-(--surface-strong)"
            >
              Contact
            </a>

            <a
              href="/YasserEstamo_JS_FullStackDeveloper.pdf"
              download="YasserEstamo_JS_FullStackDeveloper.pdf"
              className="button-text inline-flex items-center justify-center border border-(--line) bg-transparent px-6 py-3.5 text-(--text-muted) transition hover:-translate-y-0.5 hover:bg-(--surface-soft) hover:text-(--text-main)"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {badgeItems.map((item) => (
              <span
                key={item}
                className="tech-chip border border-(--line) bg-(--surface) px-3 py-1.5 text-(--text-muted)"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}