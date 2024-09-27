import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Marquee from './components/Marquee';
import About_Us from './components/About_Us';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <LandingPage />
      <Marquee />
      <About_Us />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App;