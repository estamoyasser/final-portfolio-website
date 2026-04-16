import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EffectCoverflow, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import spendsmartImg from '../assets/spendsmart.png'
import todoImg from '../assets/todo-app.png'
import guessFlagImg from '../assets/guess-the-flag.png'
import linkedinSweeperImg from '../assets/linkedin-sweeper.png'
import firstWebPortfolioImg from '../assets/first-webportfolio.png'

import 'swiper/css'
import 'swiper/css/effect-coverflow'

const projects = [
  {
    title: 'SPENDSMART',
    stack: 'ReactJS • Tailwind CSS • Recharts • Node.js • Express • MongoDB',
    description:
      'An expense tracking and budgeting web application with analytics dashboards, savings progress, and transaction management.',
    link: 'https://spend-smart-gr5u.onrender.com/',
    image: spendsmartImg,
    imageFit: 'contain',
  },
  {
    title: 'SECURE TO DO LIST',
    stack: 'React • Node.js • Express • MongoDB • JWT Authentication',
    description:
      'A task management system with authentication, prioritization, recovery functionality, and secure user access.',
    link: 'https://to-do-list-app-l5c9.onrender.com/',
    image: todoImg,
    imageFit: 'contain',
  },
  {
    title: 'GUESS THE FLAG',
    stack: 'HTML • CSS • JavaScript • REST API',
    description:
      'An interactive geography quiz game using real country data from an external API with score tracking, lives, and timed gameplay.',
    link: 'https://projects-hauo.onrender.com/p3-js-api-app',
    image: guessFlagImg,
    imageFit: 'cover',
  },
  {
    title: 'LINKEDIN SWEEPER',
    stack: 'MERN STACK • DASHBOARDS • ROLE-BASED ACCESS',
    description:
      'A full-stack application for tracking graduate LinkedIn profiles. Admins manage graduates, run sweeps, and collect consent while instructors have read-only access.',
    link: 'https://linkedin-sweeper.onrender.com/',
    image: linkedinSweeperImg,
    imageFit: 'cover',
  },
  {
    title: 'FIRST WEB PORTFOLIO',
    stack: 'HTML • CSS',
    description:
      'My first personal web portfolio built with HTML and CSS. It introduced my profile, showcased my early layout and styling work, and became the starting point of my front-end development journey.',
    link: 'https://web-portfolio-ye.onrender.com/#top',
    image: firstWebPortfolioImg,
    imageFit: 'contain',
  },
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  const activeProject = projects[activeIndex]

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index)
    }
  }

  return (
    <section
      id="projects"
      className="scroll-mt-[18vh] mx-auto max-w-360 px-6 py-[60px] sm:py-[70px] lg:py-[80px] xl:px-16"
    >
      <div className="mb-12 sm:mb-14">
        <p className="text-[11px] uppercase tracking-[0.38em] text-white/38 sm:text-xs">
          Projects
        </p>
        <h2 className="display-font mt-0.5 text-3xl font-semibold text-white sm:text-4xl lg:text-[2.9rem]">
          PERSONAL WORK
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_45%)]" />

        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1.08}
          speed={800}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: -6,
            depth: 180,
            modifier: 1.2,
            scale: 0.9,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.18,
              coverflowEffect: {
                rotate: 0,
                stretch: -10,
                depth: 210,
                modifier: 1.3,
                scale: 0.88,
                slideShadows: false,
              },
            },
            768: {
              slidesPerView: 1.28,
              coverflowEffect: {
                rotate: 0,
                stretch: -18,
                depth: 230,
                modifier: 1.4,
                scale: 0.86,
                slideShadows: false,
              },
            },
            1024: {
              slidesPerView: 1.38,
              coverflowEffect: {
                rotate: 0,
                stretch: -28,
                depth: 250,
                modifier: 1.45,
                scale: 0.84,
                slideShadows: false,
              },
            },
            1280: {
              slidesPerView: 1.46,
              coverflowEffect: {
                rotate: 0,
                stretch: -36,
                depth: 270,
                modifier: 1.5,
                scale: 0.82,
                slideShadows: false,
              },
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
            setActiveIndex(swiper.realIndex)
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex)
          }}
          className="projects-swiper overflow-visible!"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <div className="project-slide mx-auto w-full max-w-295">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`block w-full ${
                    project.imageFit === 'contain'
                      ? 'max-h-120 object-contain object-center mx-auto'
                      : 'max-h-105 object-contain object-center mx-auto'
                  }`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="mx-auto mt-12 max-w-190 text-center sm:mt-14"
          >
            <h3 className="display-font text-3xl font-semibold uppercase tracking-[0.08em] text-white sm:text-5xl lg:text-6xl">
              {activeProject.title}
            </h3>

            <p className="mx-auto mt-1 max-w-175 text-sm leading-7 text-white/60 sm:text-base">
              {activeProject.description}
            </p>

            <p className="mx-auto mt-1 max-w-180 text-[11px] uppercase tracking-[0.28em] text-white/34 sm:text-xs">
              {activeProject.stack}
            </p>

            <a
              href={activeProject.link}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center border border-white/10 bg-white/5 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.26em] text-white transition hover:bg-white hover:text-[#101114] sm:text-sm"
            >
              View Project
            </a>

            <div className="mt-2 flex justify-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 w-2.5 transition ${
                    index === activeIndex ? 'bg-white' : 'bg-white/20'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}