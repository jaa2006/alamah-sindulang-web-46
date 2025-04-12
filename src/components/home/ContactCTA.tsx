
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Hubungi Kami</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Tertarik untuk mendaftar atau punya pertanyaan? Jangan ragu untuk menghubungi kami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="card-with-glow">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10 text-school-blue dark:text-school-blue-light">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Alamat</h3>
              <p className="text-muted-foreground">
                Jl. Parakanmuncang-Sindulang, Desa Sindulang, 
                Kec. Cimanggung, Kab. Sumedang, 
                Jawa Barat, 45364
              </p>
            </CardContent>
          </Card>

          <Card className="card-with-glow">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10 text-school-blue dark:text-school-blue-light">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Telepon</h3>
              <p className="text-muted-foreground">
                08999097629
              </p>
              <p className="text-muted-foreground">
                Senin - Jumat: 08.00 - 15.00
              </p>
            </CardContent>
          </Card>

          <Card className="card-with-glow">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10 text-school-blue dark:text-school-blue-light">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-muted-foreground">
                smk.alamah_sindulang@yahoo.com
              </p>
              <p className="text-muted-foreground">
                Kami akan membalas pesan Anda segera.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="button-glow" asChild>
            <Link to="/contact">Lihat Informasi Kontak Lengkap</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
