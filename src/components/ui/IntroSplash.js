import { useEffect, useState } from 'react';
import logo from '../../assets/logo/logo.png';
import './IntroSplash.css';

function IntroSplash() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('dapet-intro-seen')) {
      setVisible(false);
      return undefined;
    }

    document.body.style.overflow = 'hidden';
    const raf = requestAnimationFrame(() => setMounted(true));
    const leaveTimer = setTimeout(() => setLeaving(true), 1400);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = '';
      sessionStorage.setItem('dapet-intro-seen', '1');
    }, 1400);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(leaveTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`intro-splash ${mounted ? 'is-mounted' : ''} ${leaving ? 'is-leaving' : ''}`}>
      <img src={logo} alt="Dapet" className="intro-splash-logo" />
    </div>
  );
}

export default IntroSplash;
