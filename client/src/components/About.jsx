import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const left = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const right = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const paragraph = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-360 px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-12 lg:py-16 xl:px-16"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid gap-8 lg:grid-cols-[0.78fr_1.08fr] lg:gap-12"
      >
        {/* LEFT */}
        <motion.div variants={left} className="max-w-lg">
          <p className="text-[11px] uppercase tracking-[0.38em] text-(--text-soft) sm:text-xs">
            About
          </p>

          <h2 className="display-font mt-3 text-3xl font-semibold leading-tight text-(--text-main) sm:text-4xl lg:text-[2.7rem]">
            I design and build user-focused interfaces and secure web apps.
          </h2>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          variants={right}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="themed-panel space-y-4 p-6 text-base leading-7 text-(--text-muted) sm:p-7 sm:text-[1.02rem] sm:leading-8"
        >
          <motion.p variants={paragraph}>
            I&apos;m Yasser P. Estamo, a Full Stack JavaScript Developer passionate about building
            modern web applications and solving real-world problems.
          </motion.p>

          <motion.p variants={paragraph}>
            I completed my Full Stack Web Development Bootcamp at Uplift Code Camp, where I built
            applications using React, Node.js, Express, and MongoDB.
          </motion.p>

          <motion.p variants={paragraph}>
            Before transitioning deeper into development, I built strong technical support and
            troubleshooting experience through roles in service desk, frontline support, VOIP,
            and telecom support.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}