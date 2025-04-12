
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { 
  Calendar, 
  Users, 
  Award, 
  Flag, 
  Clock,
  ChevronLeft, 
  ChevronRight,
  Image as ImageIcon,
  Search
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

const NewsPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const news = [
    {
      id: 1,
      title: "Upacara Peringatan Hari Pendidikan Nasional",
      date: "02 Mei 2025",
      excerpt: "SMK Al Amah Sindulang menyelenggarakan upacara peringatan Hari Pendidikan Nasional dengan tema \"Pendidikan Berkualitas untuk Semua\".",
      category: "Acara",
      image: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Workshop Keterampilan TKJ untuk Guru",
      date: "15 April 2025",
      excerpt: "Pelatihan untuk meningkatkan kompetensi guru dalam mengajar mata pelajaran teknik komputer dan jaringan sesuai perkembangan teknologi terkini.",
      category: "Pelatihan",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Kunjungan Industri ke PT Telkom Indonesia",
      date: "28 Maret 2025",
      excerpt: "Siswa kelas 11 mengikuti kunjungan industri ke PT Telkom Indonesia untuk mempelajari infrastruktur jaringan dan pusat data.",
      category: "Kunjungan",
      image: "https://images.unsplash.com/photo-1562675395-93382e71b4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Pelaksanaan Ujian Praktik Kejuruan",
      date: "10 Maret 2025",
      excerpt: "Siswa kelas 12 mengikuti Ujian Praktik Kejuruan bidang Teknik Komputer dan Jaringan sebagai bagian dari penilaian akhir.",
      category: "Akademik",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Penyerahan Bantuan Komputer dari CSR",
      date: "05 Februari 2025",
      excerpt: "Sekolah menerima bantuan 10 unit komputer dari program CSR perusahaan untuk mendukung pembelajaran praktik TKJ.",
      category: "Fasilitas",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Perayaan Hari Guru Nasional",
      date: "25 November 2024",
      excerpt: "Siswa SMK Al Amah Sindulang menyelenggarakan acara penghargaan untuk guru sebagai bentuk apresiasi pada Hari Guru Nasional.",
      category: "Acara",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const gallery = [
    {
      id: 1,
      title: "Upacara Bendera",
      image: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Praktikum TKJ",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Kunjungan Industri",
      image: "https://images.unsplash.com/photo-1562675395-93382e71b4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Workshop Guru",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Kegiatan Ekstrakurikuler",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Rapat Guru",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 7,
      title: "Kelas Online",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 8,
      title: "Perpisahan Kelas 12",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    }
  ];
  
  const featuredSlides = [
    {
      id: 1,
      title: "Penerimaan Siswa Baru Tahun Ajaran 2025/2026",
      description: "SMK Al Amah Sindulang membuka pendaftaran siswa baru untuk tahun ajaran 2025/2026. Segera daftarkan diri Anda untuk menjadi bagian dari keluarga besar SMK Al Amah Sindulang.",
      date: "1 April - 30 Juni 2025",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Ujian Akhir Semester Genap",
      description: "Persiapkan diri untuk menghadapi Ujian Akhir Semester Genap yang akan dilaksanakan mulai tanggal 1 Juni 2025.",
      date: "1 - 12 Juni 2025",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Workshop Keterampilan Digital",
      description: "Workshop keterampilan digital untuk siswa SMK Al Amah Sindulang dengan tema \"Mempersiapkan Generasi Digital yang Kompeten\".",
      date: "15 Mei 2025",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const filteredNews = news.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const prevSlide = () => {
    setActiveSlide(activeSlide === 0 ? featuredSlides.length - 1 : activeSlide - 1);
  };

  const nextSlide = () => {
    setActiveSlide(activeSlide === featuredSlides.length - 1 ? 0 : activeSlide + 1);
  };

  return (
    <MainLayout>
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-secondary/30 dark:from-background dark:to-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold">Berita & Kegiatan</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Temukan informasi terbaru seputar kegiatan dan pengumuman di SMK Al Amah Sindulang
            </p>
          </div>

          {/* Featured Slider */}
          <div className="relative mb-12 rounded-xl overflow-hidden border shadow-sm">
            <div className="aspect-[21/9] overflow-hidden">
              <div className="relative w-full h-full">
                {featuredSlides.map((slide, index) => (
                  <div 
                    key={slide.id} 
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                      <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-white/80 mb-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{slide.date}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{slide.title}</h2>
                        <p className="text-white/80 mb-4 max-w-2xl">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {featuredSlides.map((_, index) => (
                <button 
                  key={index} 
                  className={`w-2.5 h-2.5 rounded-full ${index === activeSlide ? 'bg-white' : 'bg-white/50'}`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="news" className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
              <TabsList>
                <TabsTrigger value="news">Berita</TabsTrigger>
                <TabsTrigger value="gallery">Galeri</TabsTrigger>
              </TabsList>
              
              <div className="w-full md:w-64 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Cari berita..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            
            <TabsContent value="news" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.length > 0 ? (
                  filteredNews.map((item) => (
                    <Card key={item.id} className="overflow-hidden card-with-glow h-full">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between mb-1">
                          <div className="inline-flex items-center text-xs px-2.5 py-0.5 bg-primary/10 text-primary rounded-full">
                            {item.category === "Acara" && <Flag className="h-3 w-3 mr-1" />}
                            {item.category === "Pelatihan" && <Users className="h-3 w-3 mr-1" />}
                            {item.category === "Akademik" && <Award className="h-3 w-3 mr-1" />}
                            {item.category === "Kunjungan" && <Users className="h-3 w-3 mr-1" />}
                            {item.category === "Fasilitas" && <ImageIcon className="h-3 w-3 mr-1" />}
                            {item.category}
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {item.date}
                          </div>
                        </div>
                        <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-3">{item.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="link" className="p-0 h-auto" asChild>
                          <a href="#" className="text-school-blue dark:text-school-blue-light">Baca selengkapnya</a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">Tidak ada berita yang ditemukan.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="gallery">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {gallery.map((item) => (
                  <div key={item.id} className="aspect-square overflow-hidden rounded-md border card-with-glow">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white font-medium">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </MainLayout>
  );
};

export default NewsPage;
