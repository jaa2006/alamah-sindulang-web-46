
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { 
  Award, 
  Landmark, 
  User, 
  Calendar, 
  FileText, 
  Target, 
  Lightbulb,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Profile = () => {
  return (
    <MainLayout>
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-secondary/30 dark:from-background dark:to-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold">Profil Sekolah</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Mengenal lebih dekat dengan SMK Al Amah Sindulang
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Target className="h-6 w-6 text-school-blue dark:text-school-blue-light" />
                Visi
              </h2>
              <Card className="card-with-glow">
                <CardContent className="p-6">
                  <p>
                    "Menjadi lembaga pendidikan yang unggul dalam menghasilkan lulusan yang kompeten, berakhlak mulia, dan mampu bersaing di dunia kerja."
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-school-blue dark:text-school-blue-light" />
                Misi
              </h2>
              <Card className="card-with-glow">
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-school-blue dark:text-school-blue-light mt-0.5 flex-shrink-0" />
                      <span>Menyelenggarakan pendidikan kejuruan yang berkualitas untuk menghasilkan lulusan yang kompeten dan siap kerja.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-school-blue dark:text-school-blue-light mt-0.5 flex-shrink-0" />
                      <span>Membentuk karakter siswa yang berakhlak mulia, disiplin, dan bertanggung jawab.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-school-blue dark:text-school-blue-light mt-0.5 flex-shrink-0" />
                      <span>Mengembangkan potensi siswa melalui kegiatan akademik dan non-akademik yang inovatif.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-school-blue dark:text-school-blue-light mt-0.5 flex-shrink-0" />
                      <span>Membangun kerjasama dengan dunia usaha dan industri untuk menghasilkan lulusan yang relevan dengan kebutuhan pasar kerja.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <FileText className="h-6 w-6 text-school-blue dark:text-school-blue-light" />
                Informasi Sekolah
              </h2>
              <Card className="card-with-glow h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">NPSN</p>
                      <p className="font-medium">69954809</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Status</p>
                      <p className="font-medium">Swasta</p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Kepala Sekolah</p>
                    <p className="font-medium">Eman</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Operator Sekolah</p>
                    <p className="font-medium">Gilang Sopiani</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Akreditasi</p>
                    <p className="font-medium">B (SK No. 053/BAN-SM/SK/2019, 21 Januari 2019)</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">SK Pendirian</p>
                    <p className="font-medium">421/015/YA/2013 (1 Mei 2013)</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">SK Operasional</p>
                    <p className="font-medium">642.2/4235.Kep./Dikbud/2016 (21 November 2016)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-with-glow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Award className="h-5 w-5 text-school-blue dark:text-school-blue-light" />
                  Akreditasi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  SMK Al Amah Sindulang terakreditasi B oleh Badan Akreditasi Nasional Sekolah/Madrasah (BAN-SM) dengan 
                  SK No. 053/BAN-SM/SK/2019 tanggal 21 Januari 2019.
                </p>
              </CardContent>
            </Card>

            <Card className="card-with-glow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-school-blue dark:text-school-blue-light" />
                  Sejarah
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Didirikan pada 1 Mei 2013 dengan SK Pendirian 421/015/YA/2013, kemudian memperoleh 
                  SK Operasional 642.2/4235.Kep./Dikbud/2016 pada 21 November 2016.
                </p>
              </CardContent>
            </Card>

            <Card className="card-with-glow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-school-blue dark:text-school-blue-light" />
                  Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  SMK Al Amah Sindulang adalah sekolah kejuruan swasta yang berfokus pada pendidikan 
                  bidang teknologi informasi dengan NPSN 69954809.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Profile;
