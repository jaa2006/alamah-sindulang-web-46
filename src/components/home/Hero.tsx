
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="hero-section relative min-h-[80vh] flex items-center py-16 md:py-24 overflow-hidden">
      {/* Spline 3D background - absolute positioned to fill the background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <spline-viewer 
          url="https://prod.spline.design/f7P17oeb6T7poWmM/scene.splinecode"
          className="w-full h-full"
        ></spline-viewer>
      </div>
      
      {/* Content overlay */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="bg-background/80 backdrop-blur-sm p-6 md:p-8 rounded-lg max-w-2xl animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 md:mb-8">
            Selamat Datang di{' '}
            <span className="text-glow font-bold">SMK Al Amah Sindulang</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-[600px] mb-6 md:mb-8">
            Membangun generasi unggul dan berkarakter melalui pendidikan kejuruan berkualitas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="button-glow" size="lg" asChild>
              <Link to="/profile">Lihat Profil Sekolah</Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
