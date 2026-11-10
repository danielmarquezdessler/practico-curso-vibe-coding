import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Levels from '../components/Levels';
import Facilities from '../components/Facilities';
import NewsAndEvents from '../components/NewsAndEvents';
import Admissions from '../components/Admissions';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function LandingPage() {
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleSelectLevelForAdmission = (levelName) => {
    setSelectedLevel(levelName);
    const element = document.getElementById('inscripciones');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <Hero />
      <About />
      <Levels onSelectLevelForAdmission={handleSelectLevelForAdmission} />
      <Facilities />
      <NewsAndEvents />
      <Admissions
        selectedLevel={selectedLevel}
        onClearSelectedLevel={() => setSelectedLevel('')}
      />
      <FAQ />
      <Contact />
    </main>
  );
}

