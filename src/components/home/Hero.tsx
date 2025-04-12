
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const Hero = () => {
  const isMobile = useIsMobile();

  const schoolImages = [
    {
      src: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
      title: "Siswa SMK Al Amah Sindulang"
    },
    {
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
      title: "Fasilitas Pembelajaran"
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
      title: "Kegiatan Ekstrakurikuler"
    },
    {
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
      title: "Lingkungan Sekolah"
    }
  ];

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
        
        <div className="md:w-1/2 w-full overflow-hidden">
          <div className="glass-carousel-container">
            <Carousel className="w-full">
              <CarouselContent>
                {schoolImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-0 md:pl-4">
                    <div className="glass-card">
                      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="glass-card-title">{image.title}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
