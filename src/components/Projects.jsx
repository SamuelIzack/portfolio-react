import { useLang } from '../i18n'
import { projects } from '../data'
import { TerminalArt, MapArt } from './Illustrations'
import { GithubIcon, ArrowIcon } from './Icons'

const arts = { terminal: TerminalArt, map: MapArt }

export default function Projects() {
  const { t } = useLang()

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <header className="section__head">
          <h2 className="section__title">{t.projects.title}</h2>
          <p className="section__intro">{t.projects.intro}</p>
        </header>

        <div className="projects">
          {projects.map((p, i) => {
            const item = t.projects.items[p.id]
            const Art = arts[p.illustration]
            return (
              <article key={p.id} className={`project ${i % 2 ? 'project--flip' : ''}`}>
                <div className="project__media">
                  {p.image ? <img src={p.image} alt={item.title} loading="lazy" /> : <Art />}
                </div>

                <div className="project__body">
                  <p className="project__kind">{item.kind}</p>
                  <h3 className="project__title">{item.title}</h3>
                  {item.subtitle && <p className="project__subtitle">{item.subtitle}</p>}
                  <p className="project__text">{item.text}</p>
                  <p className="project__highlight">{item.highlight}</p>

                  <ol className="steps" aria-label={t.projects.flow}>
                    {item.steps.map((s) => <li key={s}>{s}</li>)}
                  </ol>

                  <ul className="tags">
                    {p.tech.map((tech) => <li key={tech}>{tech}</li>)}
                  </ul>

                  {(p.github || p.demo) && (
                    <div className="project__links">
                      {p.github && <a className="btn btn--outline btn--sm" href={p.github} target="_blank" rel="noreferrer"><GithubIcon /> {t.projects.code}</a>}
                      {p.demo && <a className="btn btn--solid btn--sm" href={p.demo} target="_blank" rel="noreferrer">{t.projects.demo} <ArrowIcon /></a>}
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
