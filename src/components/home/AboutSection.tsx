
import React from 'react';
import { BookOpen, Award, Users, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-12 w-12 text-school-blue dark:text-school-blue-light" />,
      title: 'Kurikulum Terkini',
      description: 'Menerapkan Kurikulum SMK 2013 Revisi yang adaptif dengan kebutuhan dunia kerja',
    },
    {
      icon: <Award className="h-12 w-12 text-school-blue dark:text-school-blue-light" />,
      title: 'Akreditasi B',
      description: 'Terakreditasi B dari BAN-SM dengan komitmen peningkatan mutu berkelanjutan',
    },
    {
      icon: <Users className="h-12 w-12 text-school-blue dark:text-school-blue-light" />,
      title: 'Pengajar Profesional',
      description: 'Didukung oleh tenaga pengajar yang berkompeten di bidangnya',
    },
    {
      icon: <Building className="h-12 w-12 text-school-blue dark:text-school-blue-light" />,
      title: 'Fasilitas Memadai',
      description: 'Berbagai fasilitas untuk mendukung proses belajar mengajar',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30 dark:from-background dark:to-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Tentang Sekolah Kami</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            SMK Al Amah Sindulang adalah sekolah kejuruan swasta yang berkomitmen pada pengembangan keterampilan
            dan pembentukan karakter siswa melalui pendidikan berkualitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-with-glow border shadow-sm h-full">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
