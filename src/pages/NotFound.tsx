
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layout/MainLayout';

const NotFound = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <div className="space-y-4">
          <div className="relative">
            <div className="text-9xl font-bold opacity-10 dark:opacity-5">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-glow">Halaman Tidak Ditemukan</h1>
            </div>
          </div>
          
          <p className="text-muted-foreground max-w-md mx-auto mt-4">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Halaman mungkin telah dipindahkan, dihapus atau URL yang Anda masukkan salah.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild>
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Kembali ke Beranda
              </Link>
            </Button>
            
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Halaman Sebelumnya
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
