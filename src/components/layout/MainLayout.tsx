
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Switch } from '@/components/ui/switch';

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
      <header className="sticky top-0 z-50 w-full py-4">
        <div className="container px-4 md:px-6 mx-auto">
          {/* 3D Header Container with Glow Effect */}
          <div className="header-container transform perspective-1000 relative">
            
            {/* Header Content */}
            <div className="flex items-center justify-between h-16 px-6 relative z-10">
              {/* School Logo with Glow */}
              <Link to="/" className="flex items-center gap-2 relative group">
                <div className="flex items-center">
                  <img 
                    src="/lovable-uploads/442faac4-7399-47f7-b005-c1564e05d735.png" 
                    alt="SMK Al Amah Sindulang Logo" 
                    className="h-12 w-auto logo-glow"
                  />
                </div>
              </Link>
              
              {/* Desktop Menu */}
              {!isMobile && (
                <nav className="hidden md:flex items-center gap-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-sm font-medium transition-all px-4 py-2 nav-item-glow"
                    >
                      {link.title}
                    </Link>
                  ))}
                </nav>
              )}
              
              <div className="flex items-center gap-3">
                {/* 3D Toggle Button */}
                <div className="toggle-container">
                  <div className="toggle">
                    <input 
                      type="checkbox" 
                      checked={theme === 'dark'} 
                      onChange={toggleTheme}
                      aria-label="Toggle theme"
                    />
                    <span className="button"></span>
                    <span className="label">{theme === 'light' ? '☼' : '☽'}</span>
                  </div>
                </div>
                
                {/* Mobile Menu Button */}
                {isMobile && (
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden h-10 w-10 flex items-center justify-center theme-toggle-glow"
                    aria-label="Toggle menu"
                  >
                    <span className="relative z-10">
                      {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu with Glow Effect */}
        {isMobile && mobileMenuOpen && (
          <div className="md:hidden mt-4 px-4 md:px-6">
            <div className="header-container overflow-hidden">
              <nav className="flex flex-col p-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm font-medium py-2 px-4 nav-item-glow"
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
