import { CalendarCheck, Scissors } from 'lucide-react';
import { GENERAL_BOOKING_MESSAGE, STUDIO, buildWhatsAppUrl } from '@/lib/studio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 text-secondary-50"
    >
      <img
        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1800&q=80"
        alt="Hair Box – The Men's Salon barber chair and grooming studio"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/15"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left">
          <div
            className="inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-accent-300/40 bg-black/40 px-4 py-1.5 font-sans text-xs font-medium uppercase tracking-[0.2em] text-accent-300 backdrop-blur-sm"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-300" aria-hidden="true" />
            <span>Tirur &amp; Kottakkal</span>
          </div>

          <h1
            className="mt-6 animate-fade-up font-serif text-5xl font-medium leading-[1.06] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.2s' }}
          >
            Sharp Cuts &amp; Clean Fades for <span className="font-normal italic text-accent-300">Modern Men</span>
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up font-sans text-base font-normal leading-[1.7] text-white/90 sm:text-lg"
            style={{ animationDelay: '0.3s' }}
          >
            Welcome to {STUDIO.name}. Precision haircuts, razor-sharp beard grooming, skin &amp; scalp treatments, and
            event styling across our Ring Road, Tirur and Thazhe Kottakkal branches.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center justify-start gap-4 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href={buildWhatsAppUrl(GENERAL_BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book on WhatsApp
            </a>
            <a href="#services" className="btn-outline-gold !text-white hover:!bg-white/10">
              <Scissors className="h-4 w-4" aria-hidden="true" />
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}