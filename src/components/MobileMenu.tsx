import { CalendarCheck, Phone, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { NAV_LINKS } from '@/data/navigation';
import { GENERAL_BOOKING_MESSAGE, STUDIO, buildWhatsAppUrl } from '@/lib/studio';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-[60] lg:hidden ${open ? 'visible' : 'invisible pointer-events-none'}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-secondary-900/75 backdrop-blur-xs transition-opacity duration-500 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col border-l border-secondary-600 bg-secondary-900 text-secondary-50 shadow-lift transition-transform duration-500 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-secondary-600 px-6 py-5">
          <Logo tone="light" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-secondary-600 text-secondary-50 transition-colors hover:border-accent-300 hover:bg-secondary-600/40 hover:text-accent-300"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <ul className="flex flex-col px-4 py-6">
          {NAV_LINKS.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                style={{ transitionDelay: open ? `${index * 60}ms` : '0ms' }}
                className={`flex items-center justify-between rounded-2xl px-4 py-3.5 font-serif text-2xl font-medium text-secondary-50 transition-all duration-500 hover:bg-secondary-600/40 hover:text-accent-300 ${
                  open ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
              >
                {link.label}
                <span className="h-px w-6 bg-accent-300" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-3 border-t border-secondary-600 px-6 py-6">
          <a
            href={buildWhatsAppUrl(GENERAL_BOOKING_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Book Appointment
          </a>
          <a href={`tel:${STUDIO.phoneTel}`} className="btn-outline-gold w-full">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </a>
        </div>
      </aside>
    </div>
  );
}