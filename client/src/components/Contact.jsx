import { useState } from 'react'
import axios from 'axios'
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

const initialState = { name: '', email: '', subject: '', message: '' }

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
      const { data } = await axios.post('http://localhost:5000/api/contact', form)
      setStatus(data.message)
      setForm(initialState)
    } catch (error) {
      setStatus(error.response?.data?.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-[18vh] mx-auto max-w-360 px-6 py-15 sm:py-17.5 lg:py-20 xl:px-16"
    >
      <div className="themed-panel p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.08fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-[11px] uppercase tracking-[0.38em] text-(--text-soft) sm:text-xs">Contact</p>
            <h2 className="display-font mt-3 text-3xl font-semibold text-(--text-main) sm:text-4xl lg:text-[2.9rem]">
              LET&apos;S BUILD
              <span className="block">SOMETHING TOGETHER.</span>
            </h2>

            <p className="mt-4 max-w-md text-base leading-7 text-(--text-muted) sm:text-lg sm:leading-8">
              I&apos;m open to junior full stack developer opportunities, freelance work,
              and collaborations.
            </p>

            <div className="mt-7 flex items-center gap-5 text-(--text-muted)">
              <a href="https://www.linkedin.com/in/yasser-estamo-572bbb225/" target="_blank" rel="noreferrer" className="transition hover:text-(--text-main)" aria-label="LinkedIn"><FaLinkedin className="text-xl sm:text-2xl" /></a>
              <a href="https://www.facebook.com/omatse777/" target="_blank" rel="noreferrer" className="transition hover:text-(--text-main)" aria-label="Facebook"><FaFacebook className="text-xl sm:text-2xl" /></a>
              <a href="https://github.com/estamoyasser" target="_blank" rel="noreferrer" className="transition hover:text-(--text-main)" aria-label="GitHub"><FaGithub className="text-xl sm:text-2xl" /></a>
              <a href="https://www.instagram.com/estamoyasser_/" target="_blank" rel="noreferrer" className="transition hover:text-(--text-main)" aria-label="Instagram"><FaInstagram className="text-xl sm:text-2xl" /></a>
            </div>

            <div className="mt-8 space-y-3 text-sm leading-7 text-[(--text-soft) sm:text-base">
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-(--text-soft)">Address</p>
                <p>Gen. Trias, Cavite, Philippines</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-(--text-soft)">Email</p>
                <p>estamoyasser@gmail.com</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-(--text-soft)">Phone</p>
                <p>+63 956 784 9484</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="border border-(--line) bg-(--surface-soft) p-6 shadow-(--panel-shadow) sm:p-8 lg:p-9"
          >
            <p className="display-font text-2xl font-semibold uppercase tracking-[0.08em] text-(--text-main) sm:text-3xl">
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
                className="mt-4 inline-flex items-center justify-center border border-(--line) bg-(--button-solid-bg) px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-(--button-solid-text) transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {status && <p className="text-sm text-(--text-muted)">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}