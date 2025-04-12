
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="hero-section py-16 md:py-24">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-6 md:gap-16">
        <div className="space-y-6 md:space-y-8 text-center md:text-left md:w-1/2 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Selamat Datang di{' '}
            <span className="text-glow font-bold">SMK Al Amah Sindulang</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
            Membangun generasi unggul dan berkarakter melalui pendidikan kejuruan berkualitas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="button-glow" size="lg" asChild>
              <Link to="/profile">Lihat Profil Sekolah</Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-school-blue to-school-blue-light opacity-75 blur animate-glow"></div>
            <div className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden border">
              <img
                src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Siswa SMK Al Amah Sindulang"
                className="aspect-video object-cover"
                width={isMobile ? 350 : 600}
                height={isMobile ? 200 : 400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
