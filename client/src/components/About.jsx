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
      className="scroll-mt-28 mx-auto max-w-360 px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-12 lg:py-16 xl:px-16"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid gap-8 lg:grid-cols-[0.78fr_1.08fr] lg:gap-12"
      >
        <motion.div variants={left} className="max-w-lg">
          <p className="section-label">About</p>

          <h2 className="mt-3 display-font text-3xl font-semibold leading-tight text-(--text-main) sm:text-4xl lg:text-[2.7rem]">
            I build modern web applications with clean UX, secure backends, and practical business value.
          </h2>
        </motion.div>

        <motion.div
          variants={right}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="themed-panel relative overflow-hidden space-y-4 p-6 sm:p-7"
        >
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -right-16 top-0 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" />
          </div>

          <motion.p variants={paragraph} className="body-copy relative z-10">
            I'm Yasser P. Estamo, a Full Stack JavaScript Developer focused on building responsive,
            user-friendly web applications using React, Node.js, Express, and MongoDB.
          </motion.p>

          <motion.p variants={paragraph} className="body-copy relative z-10">
            I completed my Full Stack Web Development Bootcamp at Uplift Code Camp, where I built
            full-stack applications, worked with REST APIs, and strengthened my approach to clean UI,
            authentication, and backend logic.
          </motion.p>

          <motion.p variants={paragraph} className="body-copy relative z-10">
            Before transitioning into development, I built a strong foundation in technical support,
            troubleshooting, VOIP, and telecom operations — experience that now helps me create more
            reliable, user-centered software.
          </motion.p>

          <motion.div variants={paragraph} className="relative z-10 flex flex-wrap gap-2 pt-2">
            {['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Responsive UI'].map((item) => (
              <span
                key={item}
                className="tech-chip border border-(--line) bg-(--surface-soft) px-3 py-1.5 text-(--text-muted)"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}