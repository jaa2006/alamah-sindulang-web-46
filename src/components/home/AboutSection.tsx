
import React from 'react';
import { BookOpen, Award, Users, Building } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-white" />,
      title: 'Kurikulum Terkini',
      name: 'SMK 2013 Revisi',
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: 'Akreditasi B',
      name: 'BAN-SM',
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: 'Pengajar Profesional',
      name: 'Tenaga Ahli',
    },
    {
      icon: <Building className="h-6 w-6 text-white" />,
      title: 'Fasilitas Memadai',
      name: 'Lingkungan Belajar',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="e-card playing mx-auto">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              
              <div className="infotop">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <br />
                {feature.title}
                <br />
                <div className="name">{feature.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
