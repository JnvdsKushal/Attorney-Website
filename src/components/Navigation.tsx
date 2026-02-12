import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, Phone, Mail } from 'lucide-react';

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const languageNames: Record<string, string> = {
    fr: 'Français',
    ar: 'العربية',
    en: 'English',
  };

  return (
    <>
      {/* ===== TOP BAR ===== */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="w-full px-8 lg:px-16 flex justify-between items-center text-sm">
          
          {/* LEFT: Contact Info */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+212520534480"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+212 5 20 53 44 80</span>
            </a>
            <a
              href="mailto:maitremesraoui@gmail.com"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>maitremesraoui@gmail.com</span>
            </a>
          </div>

          {/* RIGHT: Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:text-accent hover:bg-primary/90"
              >
                <Globe className="h-4 w-4 mr-2" />
                {languageNames[language]}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('ar')}>
                العربية
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('fr')}>
                Français
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* ===== MAIN NAVIGATION ===== */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-sm shadow-md'
            : 'bg-background'
        }`}
      >
        <div className="w-full px-8 lg:px-16">
          <div className="flex items-center justify-between h-20">

            {/* LEFT: Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
                <span className="text-accent font-heading text-xl font-bold">
                  YM
                </span>
              </div>
              <div className="text-left">
                <div className="font-heading text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {language === 'ar'
                    ? 'مكتب مسراوي'
                    : language === 'fr'
                    ? 'Cabinet Mesraoui'
                    : 'Mesraoui Law'}
                </div>
                <div className="text-xs text-muted-foreground">
                  {language === 'ar'
                    ? 'محامون'
                    : language === 'fr'
                    ? 'Avocats'
                    : 'Attorneys'}
                </div>
              </div>
            </button>

            {/* RIGHT: Nav Links + CTA */}
            <div className="hidden md:flex items-center gap-8">
              <Button variant="ghost" onClick={() => scrollToSection('home')} className="hover:text-accent">
                {t('nav.home')}
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('about')} className="hover:text-accent">
                {t('nav.about')}
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('services')} className="hover:text-accent">
                {t('nav.services')}
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('strengths')} className="hover:text-accent">
                {t('nav.strengths')}
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('clients')} className="hover:text-accent">
                {t('nav.clients')}
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('contact')} className="hover:text-accent">
                {t('nav.contact')}
              </Button>

              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-6 py-2 rounded-md shadow-md"
              >
                {t('hero.cta')}
              </Button>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}
