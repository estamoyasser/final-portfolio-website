import { useState } from 'react'
import axios from 'axios'
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

const initialState = { name: '', email: '', subject: '', message: '' }
const API_URL = import.meta.env.VITE_API_URL

export default function Contact() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const { data } = await axios.post(`${API_URL}/api/contact`, form)
      setStatus(data.message || 'Message sent successfully.')
      setForm(initialState)
    } catch (error) {
      setStatus(error.response?.data?.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 mx-auto max-w-360 px-6 py-15 sm:py-17.5 lg:py-20 xl:px-16"
    >
      <div className="themed-panel relative overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-8 top-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 grid gap-8 lg:grid-cols-[0.82fr_1.08fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-label">Contact</p>

            <h2 className="mt-3 display-font text-3xl font-semibold text-(--text-main) sm:text-4xl lg:text-[2.9rem]">
              LET&apos;S BUILD
              <span className="block">SOMETHING TOGETHER.</span>
            </h2>

            <p className="body-copy mt-4 max-w-md">
              I&apos;m open to junior full stack developer opportunities, freelance work,
              and collaborations.
            </p>

            <div className="mt-7 flex items-center gap-5 text-(--text-muted)">
              <a
                href="https://www.linkedin.com/in/yasser-estamo-572bbb225/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:scale-110 hover:text-(--text-main)"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl sm:text-2xl" />
              </a>

              <a
                href="https://www.facebook.com/omatse777/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:scale-110 hover:text-(--text-main)"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl sm:text-2xl" />
              </a>

              <a
                href="https://github.com/estamoyasser"
                target="_blank"
                rel="noreferrer"
                className="transition hover:scale-110 hover:text-(--text-main)"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl sm:text-2xl" />
              </a>

              <a
                href="https://www.instagram.com/estamoyasser_/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:scale-110 hover:text-(--text-main)"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl sm:text-2xl" />
              </a>
            </div>

            <div className="mt-8 space-y-3 text-(--text-soft)">
              <div>
                <p className="section-label text-[0.66rem]!">Address</p>
                <p className="body-copy mt-1! text-base! leading-7! text-(--text-main)!">
                  Gen. Trias, Cavite, Philippines
                </p>
              </div>

              <div>
                <p className="section-label text-[0.66rem]!">Email</p>
                <p className="body-copy mt-1! text-base! leading-7! text-(--text-main)!">
                  estamoyasser@gmail.com
                </p>
              </div>

              <div>
                <p className="section-label text-[0.66rem]!">Phone</p>
                <p className="body-copy mt-1! text-base! leading-7! text-(--text-main)!">
                  +63 956 784 9484
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="border border-(--line) bg-(--surface-soft) p-6 shadow-(--panel-shadow) backdrop-blur-sm sm:p-8 lg:p-9"
          >
            <p className="display-font text-2xl font-semibold uppercase tracking-[-0.03em] text-(--text-main) sm:text-3xl">
              CONTACT
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              {[
                ['name', 'Your name', 'text'],
                ['email', 'Your email', 'email'],
                ['subject', 'Subject', 'text'],
              ].map(([name, placeholder, type]) => (
                <input
                  key={name}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  type={type}
                  placeholder={placeholder}
                  required
                  className="border-b border-(--line) bg-transparent px-0 py-3 text-sm text-(--text-main) outline-none transition placeholder:text-(--text-soft) focus:border-(--line-strong) sm:text-base"
                />
              ))}

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                required
                rows="5"
                className="border-b border-(--line) bg-transparent px-0 py-3 text-sm text-(--text-main) outline-none transition placeholder:text-(--text-soft) focus:border-(--line-strong) sm:text-base"
              />

              <button
                disabled={loading}
                className="button-text mt-4 inline-flex items-center justify-center border border-(--line) bg-(--button-solid-bg) px-6 py-3.5 text-(--button-solid-text) transition hover:-translate-y-0.5 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {status && <p className="mt-2 text-sm text-(--text-muted)">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}