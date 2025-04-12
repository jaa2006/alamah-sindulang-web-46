
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import ProgramSection from '@/components/home/ProgramSection';
import StatsSection from '@/components/home/StatsSection';
import ContactCTA from '@/components/home/ContactCTA';

const Index = () => {
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
