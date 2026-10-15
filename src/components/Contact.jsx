import { useState } from 'react'
import { useLang } from '../i18n'
import { profile } from '../data'
import { GithubIcon, LinkedinIcon, MailIcon, CopyIcon } from './Icons'

export default function Contact() {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="cta">
          <div className="cta__copy">
            <h2 className="section__title">{t.contact.title}</h2>
            <p className="cta__text">{t.contact.text}</p>
          </div>
          <div className="cta__actions">
            <div className="email">
              <a href={`mailto:${profile.email}`} className="email__link"><MailIcon /> {profile.email.toLowerCase()}</a>
              <button className="email__copy" onClick={copyEmail} aria-live="polite"><CopyIcon /> {copied ? t.contact.copied : t.contact.copy}</button>
            </div>
            <div className="cta__social">
              <a className="btn btn--outline" href={profile.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
              <a className="btn btn--outline" href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{t.footer}</span>
      </footer>
    </section>
  )
}
