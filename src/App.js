import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import IntroSplash from './components/ui/IntroSplash';
import Home from './pages/Home';
import Application from './pages/Application';
import ServiceCentersPage from './pages/ServiceCentersPage';
import Pricing from './pages/Pricing';
import Coins from './pages/Coins';
import About from './pages/About';
import './styles/common.css';

function App() {
  return (
    <div className="site">
      <IntroSplash />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Application />} />
        <Route path="/service-centers" element={<ServiceCentersPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
