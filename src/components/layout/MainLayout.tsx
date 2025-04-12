
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme as 'light' | 'dark' || 'light';
  });
  
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { title: 'Beranda', path: '/' },
    { title: 'Profil', path: '/profile' },
    { title: 'Program Keahlian', path: '/programs' },
    { title: 'Fasilitas', path: '/facilities' },
    { title: 'Berita & Kegiatan', path: '/news' },
    { title: 'Kontak', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative flex items-center justify-center rounded-full p-1 bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm">
                <img 
                  src="/lovable-uploads/442faac4-7399-47f7-b005-c1564e05d735.png" 
                  alt="SMK Al Amah Sindulang Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <span className="font-semibold text-lg text-gray-800 dark:text-white hidden md:inline-block">
                SMK Al Amah Sindulang
              </span>
            </Link>
            
            {!isMobile && (
              <nav className="hidden md:flex items-center gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                ))}
                
                <Link
                  to="/contact"
                  className="ml-3 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  Hubungi Kami
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </nav>
            )}
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
              
              {isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {isMobile && mobileMenuOpen && (
          <div className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium py-2 px-4 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <Link
                to="/contact"
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hubungi Kami
                <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        )}
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
        <div className="container flex flex-col md:flex-row justify-between p-8 md:p-12 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/442faac4-7399-47f7-b005-c1564e05d735.png" 
                alt="SMK Al Amah Sindulang Logo" 
                className="h-10 w-auto"
              />
              <h3 className="text-lg font-semibold">SMK Al Amah Sindulang</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Sekolah Menengah Kejuruan yang berfokus pada pengembangan keterampilan dan karakter siswa.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Kontak</h3>
            <address className="text-sm text-muted-foreground not-italic">
              <p>Jl. Parakanmuncang-Sindulang, Desa Sindulang</p>
              <p>Kec. Cimanggung, Kab. Sumedang</p>
              <p>Jawa Barat, 45364</p>
              <p className="mt-2">Email: smk.alamah_sindulang@yahoo.com</p>
              <p>Telepon: 08999097629</p>
            </address>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Link Cepat</h3>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} SMK Al Amah Sindulang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
