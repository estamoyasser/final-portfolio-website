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
      className="scroll-mt-24 mx-auto max-w-360 px-4 py-30 sm:px-6 sm:py-32 md:px-8 lg:px-12 lg:py-36 xl:px-16"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-label"
      >
        Skills
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="mt-3 display-font text-3xl font-semibold text-(--text-main) sm:text-4xl lg:text-[2.7rem]"
      >
        Tech I use to build modern web apps
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.42, delay: 0.08 }}
        className="body-copy mt-4 max-w-3xl"
      >
        My stack focuses on responsive front-end development, API integration,
        backend systems, deployment workflows, and practical full-stack JavaScript
        application development.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-8 grid gap-4 sm:mt-9 md:grid-cols-2 xl:grid-cols-3"
      >
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="group themed-panel relative overflow-hidden p-5"
          >
            {/* wave background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute -left-[30%] top-[58%] h-28 w-[160%] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(25,133,161,0.18)_0%,rgba(25,133,161,0.08)_38%,transparent_72%)] blur-xl"
                animate={{
                  x: ['-8%', '8%', '-8%'],
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: groupIndex * 0.15,
                }}
              />
              <motion.div
                className="absolute -left-[20%] top-[66%] h-24 w-[150%] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(76,92,104,0.16)_0%,rgba(76,92,104,0.07)_38%,transparent_72%)] blur-lg"
                animate={{
                  x: ['8%', '-6%', '8%'],
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 7.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.25 + groupIndex * 0.12,
                }}
              />
            </div>

            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(25,133,161,0.10),transparent_45%)]" />
            </div>

            <div className="relative z-10">
              <h3 className="ui-label text-(--text-main)">
                {group.title}
              </h3>

              <motion.div
                variants={containerVariants}
                className="mt-4 flex flex-wrap gap-3"
              >
                {group.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="tech-chip group/item flex items-center gap-2 border border-(--line) bg-(--surface-soft) px-3 py-1.5 text-(--text-muted) transition hover:border-(--line-strong) hover:bg-(--surface-strong) hover:text-(--text-main)"
                  >
                    <motion.span
                      className="text-base"
                      animate={{
                        rotate: [0, 2, -2, 0],
                        y: [0, -1.5, 0],
                      }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: itemIndex * 0.14,
                      }}
                      whileHover={{ rotate: -8, scale: 1.18 }}
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