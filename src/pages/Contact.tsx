
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  User,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    toast({
      title: "Pesan Terkirim",
      description: "Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.",
      duration: 5000,
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <MainLayout>
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-secondary/30 dark:from-background dark:to-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold">Hubungi Kami</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui berbagai cara di bawah ini.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="card-with-glow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-school-blue dark:text-school-blue-light" />
                  Alamat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  Jl. Parakanmuncang-Sindulang, Desa Sindulang, Kec. Cimanggung, 
                  Kab. Sumedang, Jawa Barat, 45364
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Senin - Jumat: 08.00 - 15.00</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-with-glow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-school-blue dark:text-school-blue-light" />
                  Telepon
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  Silahkan hubungi kami melalui nomor telepon di bawah ini:
                </p>
                <p className="font-medium">08999097629</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Senin - Jumat: 08.00 - 15.00</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-with-glow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-school-blue dark:text-school-blue-light" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  Silahkan hubungi kami melalui email di bawah ini:
                </p>
                <p className="font-medium">smk.alamah_sindulang@yahoo.com</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <AlertCircle className="h-4 w-4" />
                  <span>Kami akan membalas dalam 1-2 hari kerja</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="order-2 md:order-1">
              <Card className="card-with-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-school-blue dark:text-school-blue-light" />
                    Kirim Pesan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input id="name" placeholder="Nama Anda" className="pl-9" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input id="email" type="email" placeholder="email@contoh.com" className="pl-9" required />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subjek</Label>
                      <Input id="subject" placeholder="Subjek pesan" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Pesan</Label>
                      <Textarea id="message" placeholder="Tulis pesan Anda di sini..." rows={5} required />
                    </div>
                    
                    <Button type="submit" className="w-full button-glow">
                      <Send className="h-4 w-4 mr-2" />
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="order-1 md:order-2">
              <Card className="card-with-glow overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-school-blue dark:text-school-blue-light" />
                    Lokasi Kami
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-square w-full">
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
                </CardContent>
              </Card>
              
              <div className="mt-6 rounded-lg border p-4 bg-blue-50 dark:bg-gray-800">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <h3 className="font-medium">Jam Kunjungan</h3>
                </div>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="flex justify-between">
                    <span>Senin - Kamis:</span>
                    <span>08.00 - 15.00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Jumat:</span>
                    <span>08.00 - 11.30</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sabtu - Minggu:</span>
                    <span>Tutup</span>
                  </p>
                </div>
                <div className="mt-3 text-sm text-muted-foreground">
                  <p>* Kunjungan di luar jam operasional harap melakukan perjanjian terlebih dahulu.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
