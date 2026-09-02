import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './PhoneMockup.css';

function PhoneMockup({ image, images, video, poster, label = 'App preview', size = 'lg' }) {
  const { t } = useTranslation();
  const frameRef = useRef(null);
  const [step, setStep] = useState(0);

  const screens = useMemo(() => {
    if (images && images.length) return images;
    if (video) return [{ src: video, poster, label, isVideo: true }];
    if (image) return [{ src: image, label }];
    return null;
  }, [images, video, poster, image, label]);

  useEffect(() => {
    if (!screens || screens.length < 2) return undefined;
    const id = setInterval(() => {
      setStep((s) => (s + 1) % screens.length);
    }, 2800);
    return () => clearInterval(id);
  }, [screens]);

  const handleMouseMove = (e) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--ry', `${x * 18}deg`);
    el.style.setProperty('--rx', `${y * -18}deg`);
  };

  const handleMouseLeave = () => {
    const el = frameRef.current;
    if (!el) return;
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--rx', '0deg');
  };

  const current = screens ? screens[step] : null;

  return (
    <div className="phone-mockup">
      <div
        className={`phone-stage ${size === 'sm' ? 'phone-stage--sm' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="phone-3d" ref={frameRef}>
          <div className="phone-frame">
            <div className="phone-frame-ring" aria-hidden="true" />
            <div className="phone-screen">
              {current ? (
                current.isVideo ? (
                  <video
                    key={current.src}
                    className="phone-screenshot"
                    src={current.src}
                    poster={current.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    key={current.src}
                    src={current.src}
                    alt={current.label || label}
                    className="phone-screenshot"
                  />
                )
              ) : (
                <span className="phone-screen-hint">{t('phoneMockup.placeholder')}</span>
              )}
            </div>
          </div>
          <span className="side-button btn-mute" aria-hidden="true" />
          <span className="side-button btn-vol-up" aria-hidden="true" />
          <span className="side-button btn-vol-down" aria-hidden="true" />
          <span className="side-button btn-power" aria-hidden="true" />
        </div>
      </div>
      {screens && (
        <div className="phone-caption">
          {screens.length > 1 && (
            <div className="phone-dots">
              {screens.map((_, i) => (
                <span key={i} className={`phone-dot ${i === step ? 'active' : ''}`} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PhoneMockup;
