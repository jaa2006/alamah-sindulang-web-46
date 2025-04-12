
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Cpu, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

        <div className="skewed-card-container">
          <div className="skewed-card">
            <div className="align">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>
            
            <h3 className="card-title">Teknik Komputer dan Jaringan</h3>
            
            <div className="card-content">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400&q=80" 
                    alt="Teknik Komputer dan Jaringan" 
                    className="w-full h-auto rounded-md"
                  />
                </div>
                
                <div className="md:w-2/3">
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Monitor className="h-5 w-5" />
                    <Cpu className="h-5 w-5" />
                    <Network className="h-5 w-5" />
                  </div>
                  
                  <ul className="space-y-1 text-sm text-gray-200 mb-4">
                    <li>• Penguasaan hardware dan software komputer</li>
                    <li>• Instalasi dan konfigurasi jaringan</li>
                    <li>• Pemrograman dasar</li>
                    <li>• Troubleshooting komputer dan jaringan</li>
                    <li>• Jumlah Rombel: 6</li>
                    <li>• Jumlah Siswa: 224 (103 laki-laki, 121 perempuan)</li>
                  </ul>
                  
                  <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
                    <Link to="/programs" className="group">
                      Pelajari Lebih Lanjut
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
