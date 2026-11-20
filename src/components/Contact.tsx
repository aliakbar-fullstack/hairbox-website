import { useState } from 'react';
import { Clock, ExternalLink, MapPin, Navigation, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { STUDIO, buildWhatsAppUrl, GENERAL_BOOKING_MESSAGE } from '@/lib/studio';

function minutesNowInKerala(): number {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(new Date());
  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? 0);
  return hour * 60 + minute;
}

function formatMinutes(total: number): string {
  const hour24 = Math.floor(total / 60);
  const minute = total % 60;
  const suffix = hour24 >= 12 ? 'PM' : 'AM';
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${hour12}:${String(minute).padStart(2, '0')} ${suffix}`;
}

export default function Contact() {
  const [nowMinutes] = useState(minutesNowInKerala);
  const [selectedBranchIdx, setSelectedBranchIdx] = useState(0);
  const isOpen = nowMinutes >= STUDIO.opensMinutes && nowMinutes < STUDIO.closesMinutes;

  const activeBranch = STUDIO.branches[selectedBranchIdx] ?? STUDIO.branches[0];
  const mapQuery = encodeURIComponent(`Hair Box The Mens Salon ${activeBranch.name} ${activeBranch.address}`);
  const activeDirectionsUrl =
    selectedBranchIdx === 0
      ? STUDIO.mapsDirectionsUrl
      : `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const activeEmbedUrl =
    selectedBranchIdx === 0
      ? STUDIO.mapsEmbedUrl
      : `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <section id="contact" className="scroll-mt-20 bg-secondary-800/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Contact &amp; Location</span>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Visit Hair Box in Tirur &amp; Kottakkal</h2>
            <div className="gold-divider mx-auto mt-6" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="mt-10 flex justify-center gap-3" role="tablist" aria-label="Select salon branch">
          {STUDIO.branches.map((branch, idx) => {
            const active = selectedBranchIdx === idx;
            return (
              <button
                key={branch.name}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedBranchIdx(idx)}
                className={`rounded-full border px-5 py-2.5 font-sans text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 ${
                  active
                    ? 'border-accent-300 bg-accent-300 text-secondary-900 shadow-gold'
                    : 'border-secondary-600 bg-secondary-900 text-secondary-50 hover:border-accent-300/60 hover:bg-secondary-600/40'
                }`}
              >
                {branch.name}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              <div className="rounded-3xl border border-secondary-600 bg-secondary-900 p-7 shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-500/80 text-accent-300 ring-1 ring-accent-300/30">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
                      Address ({activeBranch.name})
                    </p>
                    <p className="mt-2 font-sans text-base leading-[1.5] text-secondary-50">
                      {STUDIO.name}
                      <br />
                      {activeBranch.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-secondary-600 bg-secondary-900 p-7 shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-500/80 text-accent-300 ring-1 ring-accent-300/30">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
                      Opening hours
                    </p>
                    <p className="mt-2 font-sans text-base text-secondary-50">{STUDIO.hoursDisplay}</p>
                    <span
                      className={`mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 font-sans text-xs font-semibold ${
                        isOpen
                          ? 'bg-primary-500/80 text-accent-200 ring-1 ring-accent-300/30'
                          : 'bg-error-50 text-error-700'
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${isOpen ? 'bg-accent-300' : 'bg-error-500'}`}
                        aria-hidden="true"
                      />
                      {isOpen ? 'Open now' : `Closed now, opens ${formatMinutes(STUDIO.opensMinutes)}`}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <a href={`tel:${activeBranch.phoneTel}`} className="btn-outline-gold w-full">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {activeBranch.phoneDisplay}
                </a>
                <a
                  href={buildWhatsAppUrl(
                    `Hello Hair Box – The Men's Salon (${activeBranch.name}), ${GENERAL_BOOKING_MESSAGE}`,
                    activeBranch.whatsappNumber,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full"
                >
                  WhatsApp Us
                </a>
                <a
                  href={activeDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold w-full"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3">
            <div className="relative h-full min-h-[24rem] overflow-hidden rounded-3xl border border-secondary-600 bg-secondary-900 shadow-lift">
              <iframe
                key={activeBranch.name}
                title={`Map showing ${STUDIO.name} - ${activeBranch.name}`}
                src={activeEmbedUrl}
                className="absolute inset-0 h-full w-full border-0 contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={activeDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-secondary-600 bg-secondary-900/95 px-4 py-2.5 font-sans text-sm font-semibold text-secondary-50 shadow-soft backdrop-blur-md transition hover:border-accent-300 hover:text-accent-300"
              >
                View {activeBranch.name} on Google Maps
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}