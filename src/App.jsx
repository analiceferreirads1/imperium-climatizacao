import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Footer from './components/Footer'; 
import Contact from './components/Contact';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Contact />
      <FloatingContact />
      <Footer />


      
    </div>
  );
}

export default App;