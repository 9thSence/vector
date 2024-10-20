import React, { useState, useEffect } from 'react';
import { AnimatePresence , motion} from 'framer-motion';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Marquee from './components/Marquee';
import About_Us from './components/About_Us';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import { logPageView } from './analytics';
import Contact from "./pages/Contact";
import CustomCursor from './components/CustomCursor';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='scroll-container w-full min-h-screen cursor-none '>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1}}
          >
            <Preloader />
          </motion.div>
      ) : (
        <>
          {/* Add Custom Cursor here */}
          <CustomCursor />
          
          <Router>
            <Navbar />
            <Routes>
              {/* Home Route */}
              <Route 
                path="/" 
                element={
                  <>
                    <LandingPage />
                    <Marquee />
                    <About_Us />
                    <Eyes />
                    <Featured />
                    <Cards />
                    <Footer />
                  </>
                } 
              />
              {/* Contact Route */}
              <Route path="/contact" element={<Contact />} />
              {/* Not Found Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </>
      )}
      </AnimatePresence>
    </div>
  );
}

export default App;
