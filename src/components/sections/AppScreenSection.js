import { useTranslation } from 'react-i18next';
import Reveal from '../ui/Reveal';
import PhoneMockup from '../ui/PhoneMockup';
import './AppScreenSection.css';

function AppScreenSection({
  sectionKey,
  screenSrc,
  screenVideo,
  screenPoster,
  screenLabelKey,
  reversed,
}) {
  const { t } = useTranslation();
  const base = `pages.application.sections.${sectionKey}`;
  const points = t(`${base}.points`, { returnObjects: true });

  return (
    <section className={`app-screen ${reversed ? 'app-screen--reversed' : ''}`}>
      <div className="section-inner app-screen-inner">
        <Reveal className="app-screen-copy">
          <span className="eyebrow">{t(`${base}.eyebrow`)}</span>
          <h2>
            {t(`${base}.titlePlain`)} <span className="app-screen-accent">{t(`${base}.titleAccent`)}</span>
          </h2>
          <p>{t(`${base}.text`)}</p>
          <ul className="app-screen-points">
            {points.map((point) => (
              <li key={point}>
                <span className="app-screen-check" aria-hidden="true">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={150} className="app-screen-visual">
          <PhoneMockup
            image={screenVideo ? undefined : screenSrc}
            video={screenVideo}
            poster={screenPoster}
            label={t(screenLabelKey)}
          />
        </Reveal>
      </div>
    </section>
  );
}

export default AppScreenSection;
