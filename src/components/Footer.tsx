import { Clock, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS } from '@/data/navigation';
import { STUDIO } from '@/lib/studio';

const LOGO_SRC = `${import.meta.env.BASE_URL}assets/images/hair-box-logo.png`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-secondary-600/80 bg-secondary-900 text-secondary-50">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-300/60 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div className="lg:col-span-1">
          <a
            href="#home"
            className="inline-flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300"
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
          <p className="mt-6 max-w-xs font-sans text-sm leading-[1.6] text-secondary-200/75">
            A dedicated men&apos;s grooming studio in Tirur and Kottakkal, delivering sharp cuts, beard sculpting, hair
            treatments, and groom styling.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-accent-300">Quick Links</h3>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-secondary-200/80 transition-colors duration-300 hover:text-accent-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-accent-300">Contact</h3>
          <ul className="mt-6 space-y-4 font-sans text-sm text-secondary-200/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
              <span className="leading-[1.5]">
                <strong className="font-semibold text-secondary-50">Tirur:</strong> {STUDIO.address}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
              <div className="space-y-1">
                <div>
                  <a href={`tel:${STUDIO.phoneTel}`} className="transition-colors hover:text-accent-300">
                    {STUDIO.phoneDisplay}
                  </a>{' '}
                  <span className="text-xs text-secondary-200/60">(Tirur)</span>
                </div>
                <div>
                  <a href={`tel:${STUDIO.secondaryPhoneTel}`} className="transition-colors hover:text-accent-300">
                    {STUDIO.secondaryPhoneDisplay}
                  </a>{' '}
                  <span className="text-xs text-secondary-200/60">(Kottakkal)</span>
                </div>
              </div>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
              <span>{STUDIO.hoursDisplay}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-accent-300">Visit Us</h3>
          <p className="mt-6 font-sans text-sm leading-[1.6] text-secondary-200/80">
            Find our main branch on Ring Road near Axis Bank in Tirur, and our Kottakkal branch at Thazhe Kottakkal
            opposite Taza Mandhi.
          </p>
          <a
            href={STUDIO.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent-300 transition-colors hover:text-accent-200"
          >
            Get directions
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      <div className="border-t border-secondary-600/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 font-sans text-xs text-secondary-200/60 sm:flex-row sm:px-8">
          <p>
            &copy; {year} {STUDIO.name}. All rights reserved.
          </p>
          <p>Tirur &amp; Kottakkal, Kerala</p>
        </div>
      </div>
    </footer>
  );
}