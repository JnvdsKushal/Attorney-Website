import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import {
  Scale,
  Briefcase,
  Building2,
  Users,
  Zap,
  Shield,
  Lock,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

/* ================= LOAD CLIENT LOGOS FROM PUBLIC ================= */
const clientLogos = [
  '/clients/cms.png',
  '/clients/hydrocentral.png',
  '/clients/cmc.jpg',
  '/clients/jamalook.png',
  '/clients/tribologie.jpg',
  '/clients/gam.jpg',
];

export default function Home() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/90" />

        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <Scale className="h-16 w-16 text-accent mx-auto mb-6" />

            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {t('hero.subtitle')}
            </p>

            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-xl"
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-24 bg-background">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-4xl font-bold mb-6 gold-accent">
              {t('about.title')}
            </h2>

            <blockquote className="text-lg italic text-muted-foreground mb-6 border-l-4 border-accent pl-4">
              "{t('about.quote')}"
              <footer className="text-sm mt-2 not-italic">
                — John C. Maxwell
              </footer>
            </blockquote>

            <div className="space-y-4 text-foreground/80">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/about-office.jpg"
              alt="Cabinet office"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-24 bg-background">
        <div className="container text-center mb-16">
          <h2 className="font-heading text-4xl font-bold gold-accent inline-block">
            {t('services.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            {
              image: '/services-business.jpg',
              icon: Briefcase,
              title: t('services.business.title'),
              desc: t('services.business.desc'),
            },
            {
              image: '/services-banking.jpg',
              icon: Building2,
              title: t('services.banking.title'),
              desc: t('services.banking.desc'),
            },
          ].map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition">
              <div className="h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>

                <h3 className="font-heading text-2xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground">
                  {service.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section id="clients" className="py-24 bg-background">
        <div className="container text-center mb-16">
          <h2 className="font-heading text-4xl font-bold gold-accent inline-block">
            {t('clients.title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 max-w-6xl mx-auto">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-lg border hover:shadow-md transition grayscale hover:grayscale-0 hover:scale-105"
            >
              <img src={logo} alt="Client logo" className="max-h-14 object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
<section
  id="contact"
  className="relative py-32 text-white overflow-hidden"
>
  {/* Background Image (FROM PUBLIC FOLDER) */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/contact_bg.png')" }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/95" />

  <div className="container relative z-10">

    {/* Section Title */}
    <div className="text-center mb-20">
      <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white">
        {t('contact.title')}
      </h2>
      <div className="w-16 h-[3px] bg-accent mx-auto mt-4 rounded-full"></div>
    </div>

    {/* Contact Cards */}
    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

      {/* Address */}
      <div className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <MapPin className="h-14 w-14 text-accent mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" />
        
        <h3 className="font-heading text-2xl mb-6 text-white">
          {t('contact.address')}
        </h3>

        <p className="text-white/80 leading-relaxed text-sm md:text-base">
          {t('contact.address.value')}
        </p>
      </div>

      {/* Phone */}
      <div className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <Phone className="h-14 w-14 text-accent mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" />
        
        <h3 className="font-heading text-2xl mb-6 text-white">
          {t('contact.phone')}
        </h3>

        <p className="text-white/80 leading-relaxed text-sm md:text-base">
          +212 5 20 53 44 80 <br />
          +212 6 89 81 15 98
        </p>
      </div>

      {/* Email */}
      <div className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <Mail className="h-14 w-14 text-accent mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" />
        
        <h3 className="font-heading text-2xl mb-6 text-white">
          {t('contact.email')}
        </h3>

        <p className="text-white/80 text-sm md:text-base break-words">
          maitremesraoui@gmail.com
        </p>
      </div>

    </div>
  </div>
</section>



      {/* ================= FOOTER ================= */}
      <footer className="bg-primary text-primary-foreground py-8 text-center">
        © 2026 Cabinet d'avocats Y. Mesraoui. Tous droits réservés.
      </footer>
    </div>
  );
}
