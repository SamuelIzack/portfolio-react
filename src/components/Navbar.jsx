import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import { profile } from '../data'

const sections = ['projects', 'about', 'contact']

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="wrap nav__inner">
        <a href="#top" className="nav__brand">
          <span className="nav__mark" aria-hidden="true">SI</span>
          <span className="nav__name">{profile.name}</span>
        </a>
        <nav className="nav__links" aria-label="Principal">
          {sections.map((id) => (
            <a key={id} href={`#${id}`}>{t.nav[id]}</a>
          ))}
        </nav>
        <div className="lang" role="group" aria-label="Idioma / Language">
          {['pt', 'en'].map((l) => (
            <button key={l} className={lang === l ? 'is-on' : ''} aria-pressed={lang === l} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
