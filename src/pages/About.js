import { useTranslation } from 'react-i18next';
import Reveal from '../components/ui/Reveal';
import ContactForm from '../components/ui/ContactForm';
import { WHY_US } from '../data/about';
import './About.css';

function About() {
  const { t } = useTranslation();

  return (
    <>
      <section className="story dot-bg">
        <div className="section-inner story-inner">
          <Reveal>
            <span className="eyebrow">{t('pages.about.storyEyebrow')}</span>
            <h1>{t('pages.about.storyTitle')}</h1>
            <p>{t('pages.about.storyTextOne')}</p>
            <p>{t('pages.about.storyTextTwo')}</p>
          </Reveal>
        </div>
      </section>

      <section className="mission">
        <div className="section-inner mission-grid">
          <Reveal>
            <div className="mission-block">
              <span className="mission-icon" aria-hidden="true">
                🧩
              </span>
              <h2>{t('pages.about.problemTitle')}</h2>
              <p>{t('pages.about.problemText')}</p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="mission-block">
              <span className="mission-icon mission-icon--accent" aria-hidden="true">
                ✨
              </span>
              <h2>{t('pages.about.solutionTitle')}</h2>
              <p>{t('pages.about.solutionText')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="why dot-bg">
        <div className="section-inner">
          <Reveal>
            <span className="eyebrow">{t('pages.about.whyEyebrow')}</span>
            <h2>{t('pages.about.whyTitle')}</h2>
          </Reveal>
          <div className="why-grid">
            {WHY_US.map((item, i) => (
              <Reveal delay={i * 90} key={item.key}>
                <div className="why-card">
                  <span className="why-icon" style={{ background: item.color }}>
                    {item.icon}
                  </span>
                  <h3>{t(`pages.about.why.${item.key}.title`)}</h3>
                  <p>{t(`pages.about.why.${item.key}.desc`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="section-inner">
          <Reveal className="contact-heading">
            <span className="eyebrow">{t('pages.about.contactEyebrow')}</span>
            <h2>{t('pages.about.contactTitle')}</h2>
            <p>{t('pages.about.contactSubtitle')}</p>
          </Reveal>
          <div className="contact-panel">
            <Reveal className="contact-info">
              <h3>{t('pages.about.contactInfoTitle')}</h3>
              <p>{t('pages.about.contactInfoText')}</p>
              <a className="contact-info-email" href="mailto:info@dapet.app">
                info@dapet.app
              </a>
            </Reveal>
            <Reveal delay={90}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
