import { motion } from 'framer-motion'
import heroImage from '../assets/yasser-hero.jpg'
import heroImageBW from '../assets/yasser-hero-bw.jpg'

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-10 mx-auto flex min-h-screen max-w-360 items-center px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-12 lg:py-16 xl:px-16"
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
            <div className="absolute -inset-5 rounded-[1.8rem] bg-[radial-gradient(circle_at_center,var(--surface-strong),transparent_65%)] blur-3xl opacity-90" />

            <div className="hero-frame group relative overflow-hidden border border-(--line) bg-(--hero-image-bg) shadow-(--panel-shadow) transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.32)]">
              <div className="hero-shine pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <img
                src={heroImageBW}
                alt="Portrait of Yasser Estamo"
                className="absolute inset-0 h-95 w-full object-cover object-center transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-0 sm:h-115 lg:h-140 xl:h-155"
              />

              <img
                src={heroImage}
                alt="Portrait of Yasser Estamo"
                className="h-95 w-full object-cover object-center opacity-0 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100 sm:h-115 lg:h-140 xl:h-155"
              />

              <div className="absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-black/80 via-black/20 to-transparent p-5 sm:p-7 lg:p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-white/55 sm:text-sm">
                  Gen. Trias, Cavite, Philippines
                </p>
                <p className="display-font mt-2 text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
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
          <p className="text-[11px] uppercase tracking-[0.38em] text-(--text-soft) sm:text-xs">
            Full Stack JavaScript Developer
          </p>

          <h1 className="display-font mt-5 text-5xl font-semibold leading-[0.92] text-(--text-main) sm:text-6xl md:text-7xl xl:text-[6rem]">
            YASSER
            <span className="block text-(--text-main)">ESTAMO</span>
          </h1>

          <p className="mt-4 text-[11px] uppercase tracking-[0.34em] text-(--text-soft) sm:text-xs">
            Building secure and modern web applications
          </p>

          <p className="mt-6 max-w-2xl text-base leading-7 text-(--text-muted) sm:text-lg sm:leading-8 lg:text-[1.08rem]">
            Full stack developer focused on clean interfaces, scalable backend systems,
            and practical solutions using React, Node.js, Express, and MongoDB.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center justify-center border border-(--line) bg-(--button-solid-bg) px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.24em] text-(--button-solid-text) transition hover:opacity-90 sm:text-sm"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-(--line) bg-(--surface-soft) px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.24em] text-(--text-main) transition hover:bg-(--surface-strong) sm:text-sm"
            >
              Contact
            </a>

            <a
              href="/YasserEstamo_JS_FullStackDeveloper.pdf"
              download="YasserEstamo_JS_FullStackDeveloper.pdf"
              className="inline-flex items-center justify-center border border-(--line) bg-transparent px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.24em] text-(--text-muted) transition hover:bg-(--surface-soft) hover:text-(--text-main) sm:text-sm"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {['React', 'Node.js', 'Express', 'MongoDB'].map((item) => (
              <span
                key={item}
                className="border border-(--line) bg-(--surface) px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-(--text-muted) sm:text-xs"
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