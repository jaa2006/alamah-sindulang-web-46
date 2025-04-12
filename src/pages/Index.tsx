
import React, { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import ProgramSection from '@/components/home/ProgramSection';
import StatsSection from '@/components/home/StatsSection';
import ContactCTA from '@/components/home/ContactCTA';

const Index = () => {
  useEffect(() => {
    // Dynamically load the Spline Viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <MainLayout>
      <Hero />
      <AboutSection />
      <ProgramSection />
      <StatsSection />
      <ContactCTA />
    </MainLayout>
  );
};

export default Index;
