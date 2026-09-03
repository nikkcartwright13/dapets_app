import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader';
import Reveal from '../components/ui/Reveal';
import ContactForm from '../components/ui/ContactForm';
import { WHY_US } from '../data/about';
import './About.css';

function About() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader
        eyebrow={t('pages.about.eyebrow')}
        title={t('pages.about.title')}
        subtitle={t('pages.about.subtitle')}
      />

      <section className="story">
        <div className="section-inner story-inner">
          <Reveal>
            <span className="eyebrow">{t('pages.about.storyEyebrow')}</span>
            <h2>{t('pages.about.storyTitle')}</h2>
            <p>{t('pages.about.storyTextOne')}</p>
            <p>{t('pages.about.storyTextTwo')}</p>
          </Reveal>
        </div>
      </section>

      <section className="mission dot-bg">
        <div className="section-inner mission-grid">
          <Reveal>
            <div className="mission-block">
              <h2>{t('pages.about.problemTitle')}</h2>
              <p>{t('pages.about.problemText')}</p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="mission-block">
              <h2>{t('pages.about.solutionTitle')}</h2>
              <p>{t('pages.about.solutionText')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="why">
        <div className="section-inner">
          <Reveal>
            <span className="eyebrow">{t('pages.about.whyEyebrow')}</span>
            <h2>{t('pages.about.whyTitle')}</h2>
          </Reveal>
          <div className="why-grid">
            {WHY_US.map((item, i) => (
              <Reveal delay={i * 90} key={item.key}>
                <div className="why-card">
                  <div className="why-dot" style={{ background: item.color }} />
                  <h3>{t(`pages.about.why.${item.key}.title`)}</h3>
                  <p>{t(`pages.about.why.${item.key}.desc`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="contact dot-bg">
        <div className="section-inner">
          <Reveal className="contact-heading">
            <span className="eyebrow">{t('pages.about.contactEyebrow')}</span>
            <h2>{t('pages.about.contactTitle')}</h2>
            <p>{t('pages.about.contactSubtitle')}</p>
          </Reveal>
          <Reveal delay={90}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default About;
