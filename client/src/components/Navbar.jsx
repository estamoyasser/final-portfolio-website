import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const links = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
]

const sectionConfig = {
  home: { mode: 'top', extra: 0 },
  about: { mode: 'center', extra: -40 },
  skills: { mode: 'center', extra: -20 },
  projects: { mode: 'center', extra: -10 },
  contact: { mode: 'footer', extra: 40 },
}

export default function Navbar({ isLightMode, setIsLightMode }) {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = links.map((link) => document.getElementById(link.id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-18% 0px -35% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (!element) return

    const config = sectionConfig[id] || { mode: 'center', extra: 0 }
    const rect = element.getBoundingClientRect()
    const absoluteTop = window.scrollY + rect.top
    const sectionHeight = rect.height
    const viewportHeight = window.innerHeight

    let targetTop = absoluteTop

    if (config.mode === 'top') {
      targetTop = absoluteTop - 70
    }

    if (config.mode === 'center') {
      targetTop = absoluteTop + sectionHeight / 2 - viewportHeight / 2 + config.extra
    }

    if (config.mode === 'footer') {
      targetTop = absoluteTop + sectionHeight - viewportHeight + config.extra
    }

    const maxScroll = document.documentElement.scrollHeight - viewportHeight
    const clampedTop = Math.max(0, Math.min(targetTop, maxScroll))

    window.scrollTo({
      top: clampedTop,
      behavior: 'smooth',
    })

    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-(--line) bg-(--nav-bg) backdrop-blur-xl transition-colors duration-500">
      <nav className="flex w-full items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-12 2xl:px-20">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          onDoubleClick={() => setIsLightMode((prev) => !prev)}
          title="Double-click to toggle light mode"
          className="display-font cursor-pointer select-none text-base font-semibold tracking-[0.08em] text-(--text-main) sm:text-lg md:text-xl"
        >
          YE
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const isActive = activeSection === link.id

            return (
              <button
                key={link.name}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3 py-2 text-[10px] font-medium uppercase tracking-[0.22em] transition xl:px-4 xl:text-[11px] ${
                  isActive
                    ? 'text-(--text-main)'
                    : 'text-(--text-muted) hover:text-(--text-main)'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-3 h-px bg-(--text-main) transition-all duration-300 xl:left-4 ${
                    isActive ? 'w-[calc(100%-1.5rem)] xl:w-[calc(100%-2rem)] opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </button>
            )
          })}
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex rounded-full border border-(--line) bg-(--surface-soft) p-2 text-xl text-(--text-main) transition lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-(--line) bg-(--mobile-nav-bg) px-4 py-4 sm:px-6 md:px-8 lg:hidden">
          <div className="flex w-full flex-col gap-2">
            {links.map((link) => {
              const isActive = activeSection === link.id

              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={`border px-4 py-3 text-left text-sm font-medium transition ${
                    isActive
                      ? 'border-(--line-strong) bg-(--surface-soft) text-(--text-main)'
                      : 'border-(--line) bg-(--surface-soft) text-(--text-muted) hover:text-(--text-main)'
                  }`}
                >
                  {link.name}
                </button>
              )
            })}

            <button
              type="button"
              onClick={() => setIsLightMode((prev) => !prev)}
              className="mt-2 border border-(--line) bg-(--surface-soft) px-4 py-3 text-left text-sm font-medium text-(--text-main)"
            >
              Switch to {isLightMode ? 'dark' : 'light'} mode
            </button>
          </div>
        </div>
      )}
    </header>
  )
}