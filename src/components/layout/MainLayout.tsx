
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
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl supports-[backdrop-filter]:bg-transparent py-2">
        <div className="container px-4 md:px-6 mx-auto">
          {/* 3D Header Container with Glow Effect */}
          <div className="relative rounded-xl overflow-hidden bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 shadow-lg transform perspective-1000 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400/10 before:via-transparent before:to-blue-400/10 before:animate-pulse">
            
            {/* Header Content */}
            <div className="flex items-center justify-between h-16 px-4 relative z-10">
              {/* School Logo/Name with Glow */}
              <Link to="/" className="flex items-center gap-2 relative group">
                <div className="absolute inset-0 bg-blue-400/20 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-xl font-bold text-school-blue dark:text-school-blue-light relative z-10 px-4 py-2 rounded-lg bg-white/5 dark:bg-gray-800/5 border border-white/10 dark:border-gray-700/10 shadow-sm">
                  SMK Al Amah Sindulang
                </span>
              </Link>
              
              {/* Desktop Menu */}
              {!isMobile && (
                <nav className="hidden md:flex items-center gap-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-sm font-medium transition-all px-3 py-2 rounded-lg bg-white/5 dark:bg-gray-800/5 border border-white/10 dark:border-gray-700/10 hover:bg-white/10 dark:hover:bg-blue-900/20 hover:shadow-md hover:shadow-blue-400/20 hover:scale-105 hover:text-school-blue dark:hover:text-school-blue-light"
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
                  className="rounded-full relative overflow-hidden"
                  aria-label="Toggle theme"
                >
                  <div className="absolute inset-0 bg-blue-400/20 blur-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">
                    {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                  </span>
                </Button>
                
                {/* Mobile Menu Button */}
                {isMobile && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden rounded-full relative overflow-hidden"
                    aria-label="Toggle menu"
                  >
                    <div className="absolute inset-0 bg-blue-400/20 blur-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">
                      {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu with 3D Effect */}
        {isMobile && mobileMenuOpen && (
          <div className="md:hidden mt-2 px-4 md:px-6">
            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 rounded-xl overflow-hidden shadow-lg">
              <nav className="flex flex-col p-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm font-medium py-2 px-3 rounded-lg transition-all border border-white/10 dark:border-gray-700/10 bg-white/5 dark:bg-gray-800/5 hover:bg-white/10 dark:hover:bg-blue-900/20 hover:shadow-md hover:shadow-blue-400/20 hover:text-school-blue dark:hover:text-school-blue-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
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
