import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Projects from './components/pages/Projects/Projects';
import Graphic from './components/pages/graphic/Graphic';
import Video from './components/pages/video/Video.jsx';

import Header from './components/global/Header';
import Footer from './components/global/Footer'; // Add your footer component

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

// Animated Routes Component
function AnimatedRoutes() {
  const location = useLocation();

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
        <Route path="/projects/fable-fragrances" element={<ProjectDetail projectId="fable" />} />
        <Route path="/projects/vancouver-horror" element={<ProjectDetail projectId="vancouver" />} />
        <Route path="/projects/thrash-hair" element={<ProjectDetail projectId="thrash" />} />
        <Route path="/projects/apex-mountain" element={<ProjectDetail projectId="apex" />} />
        <Route path="/projects/true-horizons" element={<ProjectDetail projectId="horizons" />} />
        <Route path="/projects/mythbusters" element={<ProjectDetail projectId="mythbusters" />} />
        
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

// Placeholder components for routes you might not have yet
function Contact() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Contact Page - Coming Soon</h1>
    </div>
  );
}

function ProjectDetail({ projectId }) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h1>Project Detail: {projectId}</h1>
        <p>Individual project page for {projectId}</p>
      </div>
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
    <Router>
      <div className="App">
        {/* Header always visible on all pages */}
        <Header />
        
        {/* Main content area with page transitions */}
        <main className="main-content">
          <AnimatedRoutes />
        </main>
        
        {/* Footer always visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;