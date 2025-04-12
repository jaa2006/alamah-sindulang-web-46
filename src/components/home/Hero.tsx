
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
        
        <div className="md:w-1/2 w-full overflow-hidden h-[400px] md:h-[500px] rounded-lg border shadow-md">
          <iframe 
            src='https://my.spline.design/3dforestscene-XIuIH1q1trPNDKVVEHUYw3q0/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            title="3D Forest Scene"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;
