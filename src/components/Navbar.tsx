import { useEffect, useState } from 'react';
import { CalendarCheck, Menu } from 'lucide-react';
import MobileMenu from '@/components/MobileMenu';
import { NAV_LINKS } from '@/data/navigation';
import { useScrolled } from '@/hooks/useScrolled';
import { GENERAL_BOOKING_MESSAGE, buildWhatsAppUrl } from '@/lib/studio';

const LOGO_SRC = `${import.meta.env.BASE_URL}assets/images/hair-box-logo.png`;

export default function Navbar() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? 'border-b border-secondary-600 bg-secondary-900/95 py-3 shadow-lg backdrop-blur-md'
            : 'border-b border-transparent bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main">
          <a
            href="#home"
            className="flex shrink-0 items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300"
            aria-label="Hair Box – The Men's Salon home"
          >
            <img
              src={LOGO_SRC}
              alt="Hair Box HB mark"
              className="h-11 w-11 shrink-0 rounded-xl object-contain sm:h-12 sm:w-12"
            />
            <span className="flex flex-col leading-none">
              <span className="font-sans text-xl font-semibold uppercase tracking-[0.14em] text-secondary-50 sm:text-2xl">
                HAIR <span className="text-accent-300">BOX</span>
              </span>
              <span className="mt-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-secondary-200/80">
                THE MEN&apos;S SALON
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative font-sans text-sm font-medium tracking-wide text-secondary-50 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent-300 after:transition-all after:duration-300 after:content-[''] hover:text-accent-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppUrl(GENERAL_BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden !px-5 !py-3 lg:inline-flex"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
                solid
                  ? 'border-secondary-600 bg-secondary-800/90 text-secondary-50 hover:border-accent-300/60 hover:text-accent-300'
                  : 'border-secondary-600/80 bg-secondary-900/80 text-secondary-50 hover:border-accent-300/60 hover:text-accent-300'
              }`}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}