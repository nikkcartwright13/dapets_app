import Reveal from './Reveal';
import './PageHeader.css';

function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="page-header">
      <div className="section-inner">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </Reveal>
      </div>
    </header>
  );
}

export default PageHeader;
