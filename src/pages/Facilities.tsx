
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { 
  Building, 
  BookOpen, 
  Lightbulb, 
  Droplets, 
  MapPin, 
  Map, 
  Home, 
  Wifi,
  AlertTriangle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Facilities = () => {
  const facilities = [
    {
      icon: <Building />,
      title: "Ruang Kelas",
      description: "8 ruang kelas dengan kapasitas 40 siswa per kelas",
      status: "Tersedia"
    },
    {
      icon: <Droplets />,
      title: "Sanitasi",
      description: "7 unit fasilitas sanitasi untuk siswa dan staf",
      status: "Tersedia"
    },
    {
      icon: <Lightbulb />,
      title: "Sumber Listrik",
      description: "PLN dengan daya 5.500 VA",
      status: "Tersedia"
    },
    {
      icon: <Map />,
      title: "Luas Tanah",
      description: "8.000 m²",
      status: "Tersedia"
    },
    {
      icon: <BookOpen />,
      title: "Perpustakaan",
      description: "Koleksi buku pelajaran dan referensi",
      status: "Belum Tersedia"
    },
    {
      icon: <Wifi />,
      title: "Internet",
      description: "Koneksi internet untuk kegiatan belajar",
      status: "Belum Tersedia"
    }
  ];

  return (
    <MainLayout>
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-secondary/30 dark:from-background dark:to-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold">Fasilitas Sekolah</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Mengenal sarana dan prasarana yang tersedia di SMK Al Amah Sindulang
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {facilities.map((facility, index) => (
              <Card key={index} className={`card-with-glow ${facility.status === "Belum Tersedia" ? "border-dashed" : ""}`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className={`p-2 rounded-full ${facility.status === "Tersedia" ? "bg-primary/10 text-school-blue dark:text-school-blue-light" : "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-200"}`}>
                      {facility.icon}
                    </span>
                    {facility.title}
                    {facility.status === "Belum Tersedia" && (
                      <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{facility.description}</p>
                  <div className={`mt-4 text-sm font-medium ${
                    facility.status === "Tersedia" ? "text-green-600 dark:text-green-400" : "text-amber-600 dark:text-amber-400"
                  }`}>
                    {facility.status}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-with-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-school-blue dark:text-school-blue-light" />
                  Lokasi Sekolah
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video w-full rounded-md overflow-hidden bg-muted border">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0!2d107.8!3d-6.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMDAuMCJTIDEwN8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1649385332270!5m2!1sen!2sid" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi SMK Al Amah Sindulang"
                  ></iframe>
                </div>
                <address className="not-italic space-y-1">
                  <p className="font-semibold">SMK Al Amah Sindulang</p>
                  <p className="text-muted-foreground">
                    Jl. Parakanmuncang-Sindulang, Desa Sindulang<br />
                    Kec. Cimanggung, Kab. Sumedang<br />
                    Jawa Barat, 45364
                  </p>
                </address>
              </CardContent>
            </Card>

            <Card className="card-with-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-school-blue dark:text-school-blue-light" />
                  Tentang Bangunan Sekolah
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Luas Tanah</p>
                    <p className="font-medium">8.000 m²</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Luas Bangunan</p>
                    <p className="font-medium">2.400 m²</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Jumlah Lantai</p>
                    <p className="font-medium">2 Lantai</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Tahun Pembangunan</p>
                    <p className="font-medium">2013</p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold">Fasilitas Saat Ini</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Building className="h-5 w-5 text-school-blue dark:text-school-blue-light mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">8 Ruang Kelas</p>
                      <p className="text-sm text-muted-foreground">Digunakan untuk kegiatan belajar mengajar</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Building className="h-5 w-5 text-school-blue dark:text-school-blue-light mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">1 Ruang Guru</p>
                      <p className="text-sm text-muted-foreground">Untuk aktivitas administrasi guru</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Building className="h-5 w-5 text-school-blue dark:text-school-blue-light mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">1 Ruang Kepala Sekolah</p>
                      <p className="text-sm text-muted-foreground">Untuk aktivitas administrasi kepala sekolah</p>
                    </div>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold">Rencana Pengembangan</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Building className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Laboratorium Komputer</p>
                      <p className="text-sm text-muted-foreground">Untuk praktikum TKJ</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Perpustakaan</p>
                      <p className="text-sm text-muted-foreground">Untuk mendukung literasi siswa</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-blue-50 dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <AlertTriangle className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              <div>
                <h3 className="text-lg font-semibold">Fasilitas dalam Pengembangan</h3>
                <p className="text-sm text-muted-foreground">Kami terus berupaya melengkapi fasilitas sekolah</p>
              </div>
            </div>
            
            <p className="text-muted-foreground">
              SMK Al Amah Sindulang saat ini masih dalam proses pengembangan fasilitas pendukung seperti laboratorium, 
              perpustakaan, dan koneksi internet. Kami berkomitmen untuk terus meningkatkan fasilitas demi terciptanya 
              lingkungan belajar yang optimal bagi seluruh siswa.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Facilities;
