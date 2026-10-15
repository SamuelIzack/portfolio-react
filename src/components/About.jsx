import { useLang } from '../i18n'
import { stack } from '../data'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="section section--tint">
      <div className="wrap about">
        <div className="about__main">
          <h2 className="section__title">{t.about.title}</h2>
          {t.about.text.map((p) => <p key={p} className="about__text">{p}</p>)}

          <h3 className="about__sub">{t.about.stackTitle}</h3>
          {Object.entries(t.about.areas).map(([area, label]) => (
            <div key={area} className="stack">
              <p className="stack__label">{label}</p>
              <ul className="stack__list">
                {stack.filter((s) => s.area === area).map((s) => (
                  <li key={s.name}>
                    <img src={s.icon} alt="" width="22" height="22" loading="lazy" className={s.lighten ? 'is-light' : undefined} />
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <aside className="timeline-card">
          <h3 className="about__sub about__sub--flush">{t.about.timelineTitle}</h3>
          <ol className="timeline">
            {t.about.timeline.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong>
                <span>{step.detail}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  )
}
