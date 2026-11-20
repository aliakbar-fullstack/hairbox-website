import { useMemo, useState, type FormEvent } from 'react';
import { CalendarCheck, CheckCircle2, MapPin, MessageCircle } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { SERVICE_CATEGORIES } from '@/data/services';
import { STUDIO, buildWhatsAppUrl } from '@/lib/studio';

const TIME_SLOTS = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
  '06:30 PM',
  '07:30 PM',
];

export default function Booking() {
  const serviceOptions = useMemo(
    () => SERVICE_CATEGORIES.flatMap((category) => category.services.map((item) => item.name)),
    [],
  );

  const [branchIndex, setBranchIndex] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedService, setSelectedService] = useState(
    serviceOptions[0] ?? 'Signature Haircut & Wash',
  );
  const [preferredDate, setPreferredDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [preferredTime, setPreferredTime] = useState(TIME_SLOTS[0]);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const activeBranch = STUDIO.branches[branchIndex] ?? STUDIO.branches[0];
  const minDate = new Date().toISOString().split('T')[0];

  const bookingMessage = useMemo(() => {
    const lines = [
      `Hello ${STUDIO.name} (${activeBranch.name}), I would like to book an appointment:`,
      `• Name: ${customerName.trim() || 'Walk-in Guest'}`,
      phoneNumber.trim() ? `• Phone: ${phoneNumber.trim()}` : null,
      `• Service: ${selectedService}`,
      `• Date: ${preferredDate}`,
      `• Time: ${preferredTime}`,
      notes.trim() ? `• Notes: ${notes.trim()}` : null,
    ].filter(Boolean);
    return lines.join('\n');
  }, [activeBranch.name, customerName, notes, phoneNumber, preferredDate, preferredTime, selectedService]);

  const whatsappHref = buildWhatsAppUrl(bookingMessage, activeBranch.whatsappNumber);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.open(whatsappHref, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="booking" className="scroll-mt-20 bg-secondary-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Quick Appointment</span>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-secondary-50 sm:text-5xl">
              Reserve Your Chair on WhatsApp
            </h2>
            <div className="gold-divider mx-auto mt-6" aria-hidden="true" />
            <p className="mt-5 font-sans text-base text-secondary-200/80">
              Choose your preferred branch in Tirur or Kottakkal, pick a time slot, and send your booking request directly
              to our team.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-secondary-600 bg-secondary-800/75 p-6 shadow-lift sm:p-10">
          <div className="mb-8 flex flex-wrap gap-3" role="tablist" aria-label="Select booking branch">
            {STUDIO.branches.map((branch, idx) => {
              const active = branchIndex === idx;
              return (
                <button
                  key={branch.name}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setBranchIndex(idx);
                    setSubmitted(false);
                  }}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-sans text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 ${
                    active
                      ? 'border-accent-300 bg-accent-300 text-secondary-900 shadow-gold'
                      : 'border-secondary-600 bg-secondary-900 text-secondary-50 hover:border-accent-300/60 hover:bg-secondary-600/40'
                  }`}
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {branch.name}
                </button>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="booking-name" className="block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Your Name
              </label>
              <input
                id="booking-name"
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your name"
                className="mt-2.5 w-full rounded-2xl border border-secondary-600 bg-secondary-900 px-4 py-3.5 font-sans text-sm text-secondary-50 placeholder:text-secondary-200/40 focus:border-accent-300 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="booking-phone" className="block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Phone Number
              </label>
              <input
                id="booking-phone"
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+91 98765 43210"
                className="mt-2.5 w-full rounded-2xl border border-secondary-600 bg-secondary-900 px-4 py-3.5 font-sans text-sm text-secondary-50 placeholder:text-secondary-200/40 focus:border-accent-300 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="booking-service" className="block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Service
              </label>
              <select
                id="booking-service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="mt-2.5 w-full rounded-2xl border border-secondary-600 bg-secondary-900 px-4 py-3.5 font-sans text-sm text-secondary-50 focus:border-accent-300 focus:outline-none"
              >
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="booking-date" className="block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Preferred Date
              </label>
              <input
                id="booking-date"
                type="date"
                required
                min={minDate}
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="mt-2.5 w-full rounded-2xl border border-secondary-600 bg-secondary-900 px-4 py-3.5 font-sans text-sm text-secondary-50 focus:border-accent-300 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="booking-time" className="block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Preferred Time
              </label>
              <select
                id="booking-time"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="mt-2.5 w-full rounded-2xl border border-secondary-600 bg-secondary-900 px-4 py-3.5 font-sans text-sm text-secondary-50 focus:border-accent-300 focus:outline-none"
              >
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="booking-notes" className="block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Style Notes (Optional)
              </label>
              <textarea
                id="booking-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Skin fade, beard trim preference, groom package details..."
                className="mt-2.5 w-full rounded-2xl border border-secondary-600 bg-secondary-900 px-4 py-3.5 font-sans text-sm text-secondary-50 placeholder:text-secondary-200/40 focus:border-accent-300 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
              <p className="font-sans text-xs text-secondary-200/70">
                Sending to <span className="font-semibold text-accent-300">{activeBranch.name}</span> ({activeBranch.phoneDisplay})
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Open Chat
                </a>
                <button type="submit" className="btn-gold">
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  Book on WhatsApp
                </button>
              </div>
            </div>

            {submitted && (
              <div className="sm:col-span-2 flex items-center gap-3 rounded-2xl border border-accent-300/40 bg-primary-500/50 px-4 py-3 font-sans text-sm text-accent-200">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
                <span>
                  WhatsApp booking draft prepared for <strong>{activeBranch.name}</strong>. If a new tab didn&apos;t open,
                  click <strong>Open Chat</strong>.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}