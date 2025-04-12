
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { 
  Cpu, 
  HardDrive, 
  Wifi, 
  Server, 
  Code, 
  Database,
  Network,
  Users,
  Monitor,
  Shield,
  Laptop,
  BarChart
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Programs = () => {
  const skills = [
    { icon: <HardDrive className="h-8 w-8" />, title: "Hardware Komputer" },
    { icon: <Laptop className="h-8 w-8" />, title: "Software Komputer" },
    { icon: <Wifi className="h-8 w-8" />, title: "Jaringan Nirkabel" },
    { icon: <Server className="h-8 w-8" />, title: "Infrastruktur Server" },
    { icon: <Code className="h-8 w-8" />, title: "Pemrograman Dasar" },
    { icon: <Database className="h-8 w-8" />, title: "Manajemen Database" },
    { icon: <Network className="h-8 w-8" />, title: "Konfigurasi Jaringan" },
    { icon: <Shield className="h-8 w-8" />, title: "Keamanan Jaringan" },
    { icon: <Monitor className="h-8 w-8" />, title: "Desain Web Dasar" },
    { icon: <BarChart className="h-8 w-8" />, title: "IT Support" },
  ];

  return (
    <MainLayout>
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-secondary/30 dark:from-background dark:to-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold">Program Keahlian</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Mencetak lulusan dengan keterampilan yang relevan dengan kebutuhan industri
            </p>
          </div>
          
          <Card className="mb-12 card-with-glow">
            <div className="md:grid md:grid-cols-3 gap-6">
              <div className="col-span-1 border-b md:border-b-0 md:border-r p-6 flex flex-col justify-center items-center text-center">
                <div className="p-4 rounded-full bg-primary/10">
                  <Cpu className="h-16 w-16 text-school-blue dark:text-school-blue-light" />
                </div>
                <h2 className="mt-6 text-2xl font-bold">Teknik Komputer dan Jaringan</h2>
                <p className="mt-2 text-muted-foreground">TKJ</p>
              </div>
              
              <div className="col-span-2 p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Kurikulum</h3>
                    <p>SMK 2013 Revisi</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Jumlah Rombel</h3>
                    <p>6</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Jumlah Siswa</h3>
                    <p>224 (103 laki-laki, 121 perempuan)</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Durasi Studi</h3>
                    <p>3 Tahun</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Deskripsi</h3>
                  <p className="text-sm">
                    Program Keahlian Teknik Komputer dan Jaringan (TKJ) membekali siswa dengan pengetahuan dan 
                    keterampilan di bidang teknologi informasi dan komunikasi, khususnya yang berkaitan dengan 
                    perangkat keras komputer, perangkat lunak, dan jaringan. Lulusan TKJ dipersiapkan untuk dapat 
                    bekerja sebagai teknisi komputer, teknisi jaringan, atau melanjutkan pendidikan ke jenjang yang lebih tinggi.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Prospek Karir</h3>
                  <p className="text-sm">
                    IT Support, Network Administrator, Computer Technician, Technical Support Specialist, 
                    Junior Web Developer, Junior Network Engineer, Hardware & Software Installer
                  </p>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Kompetensi yang Dikembangkan</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="card-with-glow">
                  <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
                    <div className="p-2 rounded-full bg-primary/5 text-school-blue dark:text-school-blue-light">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium">{skill.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold text-center">Mata Pelajaran Utama</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-with-glow">
                <CardHeader>
                  <CardTitle>Mata Pelajaran Dasar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Pemrograman Dasar</p>
                  <p>• Komputer dan Jaringan Dasar</p>
                  <p>• Sistem Operasi</p>
                  <p>• Perakitan Komputer</p>
                  <p>• Jaringan Komputer Dasar</p>
                  <p>• Pemodelan Perangkat Lunak</p>
                  <p>• Basis Data</p>
                </CardContent>
              </Card>
              
              <Card className="card-with-glow">
                <CardHeader>
                  <CardTitle>Mata Pelajaran Keahlian</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Administrasi Infrastruktur Jaringan</p>
                  <p>• Administrasi Sistem Jaringan</p>
                  <p>• Teknologi Layanan Jaringan</p>
                  <p>• Troubleshooting Jaringan</p>
                  <p>• Keamanan Jaringan</p>
                  <p>• Desain Jaringan</p>
                  <p>• Praktikum Komputer dan Jaringan</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-12 bg-blue-50 dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-school-blue dark:text-school-blue-light" />
              <div>
                <h3 className="text-lg font-semibold">Statistik Siswa</h3>
                <p className="text-sm text-muted-foreground">Total 224 siswa aktif dalam program TKJ</p>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-school-blue dark:text-school-blue-light">103</p>
                <p className="text-sm text-muted-foreground">Laki-laki</p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-school-blue dark:text-school-blue-light">121</p>
                <p className="text-sm text-muted-foreground">Perempuan</p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-school-blue dark:text-school-blue-light">6</p>
                <p className="text-sm text-muted-foreground">Rombel</p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-school-blue dark:text-school-blue-light">37</p>
                <p className="text-sm text-muted-foreground">Rata-rata per Kelas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Programs;
