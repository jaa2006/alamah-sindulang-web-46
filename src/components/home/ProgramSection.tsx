
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Cpu, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ProgramSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Program Keahlian</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Kami menyediakan program keahlian yang dirancang untuk mempersiapkan siswa memasuki dunia kerja.
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="overflow-hidden border shadow-sm card-with-glow">
            <div className="md:grid md:grid-cols-2 gap-6">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400&q=80" 
                  alt="Teknik Komputer dan Jaringan" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex flex-col justify-center">
                <CardHeader className="px-0 pt-0">
                  <div className="flex items-center gap-2 text-school-blue dark:text-school-blue-light mb-2">
                    <Monitor className="h-5 w-5" />
                    <Cpu className="h-5 w-5" />
                    <Network className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Teknik Komputer dan Jaringan (TKJ)</CardTitle>
                </CardHeader>
                
                <CardContent className="px-0 py-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Penguasaan hardware dan software komputer</li>
                    <li>• Instalasi dan konfigurasi jaringan</li>
                    <li>• Pemrograman dasar</li>
                    <li>• Troubleshooting komputer dan jaringan</li>
                    <li>• Jumlah Rombel: 6</li>
                    <li>• Jumlah Siswa: 224 (103 laki-laki, 121 perempuan)</li>
                  </ul>
                </CardContent>
                
                <CardFooter className="px-0 pt-4 pb-0">
                  <Button asChild>
                    <Link to="/programs" className="group">
                      Pelajari Lebih Lanjut
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
