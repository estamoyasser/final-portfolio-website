import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
  SiRender,
} from 'react-icons/si'

const skillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
    ],
  },
  {
    title: 'Deployment',
    items: [
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Render', icon: <SiRender /> },
    ],
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: 'easeOut',
    },
  },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-360 px-4 py-40 sm:py-45 lg:py-40 xl:px-16"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-[11px] uppercase tracking-[0.38em] text-(--text-soft) sm:text-xs"
      >
        Skills
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="display-font mt-3 text-3xl font-semibold text-(--text-main) sm:text-4xl lg:text-[2.7rem]"
      >
        Tech I use
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-8 grid gap-4 sm:mt-9 md:grid-cols-2 xl:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="group themed-panel relative overflow-hidden p-5"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--surface-strong),transparent_45%)]" />
            </div>

            <div className="relative z-10">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-(--text-main)">
                {group.title}
              </h3>

              <motion.div
                variants={containerVariants}
                className="mt-4 flex flex-wrap gap-3"
              >
                {group.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="group/item flex items-center gap-2 border border-(--line) bg-(--surface-soft) px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-(--text-muted) transition hover:bg-(--surface-strong)"
                  >
                    <motion.span
                      className="text-base"
                      whileHover={{ rotate: -6, scale: 1.18 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.icon}
                    </motion.span>
                    {item.name}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}