import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Projects from './components/pages/projects/Projects';
import Graphic from './components/pages/graphic/Graphic';
import Video from './components/pages/video/Video.jsx';

import Header from './components/global/Header';
import Hamburger from './components/global/Hamburger';
import Footer from './components/global/Footer'; // Add your footer component

// Individual project imports
import ApexMountainBikes from './components/pages/project-detail/ApexMoutainBikes';
import FableFragrances from './components/pages/project-detail/FableFragrances';
import VancouverHorrorShow from './components/pages/project-detail/VancouverHorrorShow';
import ThrashHair from './components/pages/project-detail/ThrashHair';
import TrueHorizons from './components/pages/project-detail/TrueHorizons';
import Mythbusters from './components/pages/project-detail/Mythbusters';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

// Animated Routes Component
function AnimatedRoutes() {
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/video" element={<Video />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Individual Project Routes */}
        <Route path="/projects/fable-fragrances" element={<FableFragrances />} />
        <Route path="/projects/vancouver-horror-show" element={<VancouverHorrorShow />} />
        <Route path="/projects/thrash-hair" element={<ThrashHair />} />
        <Route path="/projects/apex-mountain-bikes" element={<ApexMountainBikes />} />
        <Route path="/projects/true-horizons" element={<TrueHorizons />} />
        <Route path="/projects/mythbusters" element={<Mythbusters />} />
        
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function Contact() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Contact Page - Coming Soon</h1>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          {/* Hamburger Header with responsive design */}
          <Hamburger />
          
          {/* Main content area with page transitions */}
          <main className="main-content">
            <AnimatedRoutes />
          </main>
          
          {/* Footer always visible on all pages */}
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;