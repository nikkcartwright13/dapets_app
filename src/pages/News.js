import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader';
import Reveal from '../components/ui/Reveal';
import Faq from '../components/sections/Faq';
import './News.css';

function News() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader
        eyebrow={t('pages.news.eyebrow')}
        title={t('pages.news.title')}
        subtitle={t('pages.news.subtitle')}
      />
      <section className="news-section">
        <div className="section-inner news-grid">
          {[1, 2, 3].map((i, idx) => (
            <Reveal delay={idx * 90} key={i}>
              <div className="news-card-placeholder">
                <div className="news-card-icon" aria-hidden="true">
                  📰
                </div>
                <p>{t('pages.news.cardPlaceholder')}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Faq />
    </>
  );
}

export default News;
