import { Menu, X, Globe, ChevronDown, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';



export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navigationItems = [
    { name: t.home, href: '#hero', active: true },
    { 
      name: t.services, 
      href: '#plattform',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Plattform Features', href: '#plattform' },
        { name: 'Für Lernende', href: '#persona' },
        { name: 'Dashboard', href: '#agenda' },
        { name: 'Transparenz', href: '#transparenz' }
      ]
    },
    { name: t.news, href: '#news' },
    { name: t.data, href: '#agenda' },
    { name: t.info, href: '#testimonials' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-sm border-b' 
          : 'bg-background/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold">LehrCoach.ch</h1>
          </div>



          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={item.href} 
                  className={`flex items-center gap-2 px-6 py-4 text-lg rounded-lg transition-colors ${
                    item.active 
                      ? 'text-primary bg-primary/10' 
                      : 'text-foreground hover:text-primary hover:bg-secondary/50'
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-card rounded-lg shadow-lg border z-50"
                      >
                        <div className="py-2">
                          {item.dropdownItems?.map((subItem) => (
                            <a 
                              key={subItem.name}
                              href={subItem.href} 
                              className="block px-4 py-3 text-base hover:bg-secondary/50 transition-colors"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-12 h-12 p-0"
              onClick={toggleTheme}
            >
              {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="w-12 h-12 p-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>



        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden pb-6"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white dark:bg-card rounded-lg p-6 mt-4 border shadow-sm">

                
                {/* Mobile Nav */}
                <nav className="space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <a 
                        href={item.href} 
                        className={`flex items-center justify-between py-4 px-4 rounded-lg text-lg transition-colors ${
                          item.active 
                            ? 'text-primary bg-primary/10' 
                            : 'text-foreground hover:bg-secondary/50'
                        }`}
                      >
                        <span>{item.name}</span>
                        {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                      </a>
                      
                      {item.hasDropdown && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdownItems?.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-2 px-3 rounded text-base text-muted-foreground hover:text-foreground"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                
                {/* Mobile Actions */}
                <div className="flex items-center justify-center pt-6 mt-6 border-t">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-base px-4 py-2"
                    onClick={toggleTheme}
                  >
                    {theme === 'light' ? <Moon className="w-5 h-5 mr-2" /> : <Sun className="w-5 h-5 mr-2" />}
                    {theme === 'light' ? t.dark : t.light}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}