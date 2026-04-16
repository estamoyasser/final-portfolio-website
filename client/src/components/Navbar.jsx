import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const links = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
]

export default function Navbar({ isLightMode, setIsLightMode }) {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        rootMargin: '-22% 0px -48% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (!element) return

    const rect = element.getBoundingClientRect()
    const absoluteTop = window.scrollY + rect.top
    const sectionHeight = rect.height
    const viewportHeight = window.innerHeight

    let targetTop = absoluteTop + sectionHeight / 2 - viewportHeight / 2

    if (id === 'home') {
      targetTop = absoluteTop - 80
    }

    if (id === 'contact') {
      targetTop = absoluteTop + sectionHeight - viewportHeight + 40
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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-999 w-full border-b transition-all duration-300 ${
          scrolled
            ? 'border-(--line) bg-(--nav-bg)/92 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl'
            : 'border-transparent bg-(--nav-bg)/76 backdrop-blur-xl'
        }`}
      >
        <nav className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
          <div className="flex w-full items-center justify-between py-4">
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              onDoubleClick={() => setIsLightMode((prev) => !prev)}
              title="Double-click to toggle light mode"
              className="display-font cursor-pointer select-none text-base font-semibold tracking-[-0.04em] text-(--text-main) sm:text-lg md:text-xl"
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
                    className={`nav-link-text relative px-3 py-2 transition xl:px-4 ${
                      isActive
                        ? 'text-(--text-main)'
                        : 'text-(--text-muted) hover:text-(--text-main)'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-3 h-px bg-(--accent) transition-all duration-300 xl:left-4 ${
                        isActive
                          ? 'w-[calc(100%-1.5rem)] opacity-100 xl:w-[calc(100%-2rem)]'
                          : 'w-0 opacity-0'
                      }`}
                    />
                  </button>
                )
              })}
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--line) bg-(--surface-soft) text-xl text-(--text-main) transition hover:bg-(--surface-strong)"
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                {open ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-998 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed inset-x-0 top-19.5 z-999 mx-4 origin-top rounded-2xl border border-(--line) bg-(--mobile-nav-bg)/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none -translate-y-3 scale-[0.98] opacity-0'
        }`}
      >
        <div className="flex flex-col gap-2">
          {links.map((link) => {
            const isActive = activeSection === link.id

            return (
              <button
                key={link.name}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                  isActive
                    ? 'border-(--line-strong) bg-(--surface-strong) text-(--text-main)'
                    : 'border-(--line) bg-(--surface-soft) text-(--text-muted) hover:bg-(--surface-strong) hover:text-(--text-main)'
                }`}
              >
                {link.name}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}