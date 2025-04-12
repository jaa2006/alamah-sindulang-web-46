
import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
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
      <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-school-blue dark:text-school-blue-light">
              SMK Al Amah Sindulang
            </span>
          </Link>
          
          {/* Desktop Menu */}
          {!isMobile && (
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium transition-colors hover:text-school-blue dark:hover:text-school-blue-light"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          )}
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            
            {/* Mobile Menu Button */}
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden rounded-full"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            )}
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="md:hidden bg-background border-b">
            <nav className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium py-2 transition-colors hover:text-school-blue dark:hover:text-school-blue-light"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col md:flex-row justify-between p-8 md:p-12 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">SMK Al Amah Sindulang</h3>
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
                  className="text-sm text-muted-foreground hover:text-school-blue dark:hover:text-school-blue-light"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="border-t py-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SMK Al Amah Sindulang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
