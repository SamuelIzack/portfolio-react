import { useLang } from '../i18n'
import { profile, requestLog } from '../data'
import { GithubIcon, LinkedinIcon } from './Icons'

function RequestLog({ title }) {
  return (
    <div className="log" aria-hidden="true">
      <div className="log__head">
        <span className="log__dots"><i /><i /><i /></span>
        <span className="log__title">{title}</span>
        <span className="log__live"><b /> live</span>
      </div>
      <ul className="log__rows">
        {requestLog.map((r, i) => (
          <li key={r.path} style={{ '--i': i }}>
            <span className={`log__method log__method--${r.method.toLowerCase()}`}>{r.method}</span>
            <span className="log__path">{r.path}</span>
            <span className="log__status">{r.status}</span>
            <span className="log__ms">{r.ms}ms</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="top" className="hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="badge"><span className="badge__dot" />{t.hero.status}</p>
          <h1 className="hero__name">
            Samuel<br />Izack
          </h1>
          <p className="hero__role">{t.hero.role}</p>
          <p className="hero__bio">{t.hero.bio}</p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--solid">{t.hero.projects}</a>
            <a href="#contact" className="btn btn--outline">{t.hero.cv}</a>
            <span className="hero__social">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
            </span>
          </div>
        </div>
        <RequestLog title={t.hero.logTitle} />
      </div>
    </section>
  )
}
