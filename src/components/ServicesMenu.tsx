import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { SERVICE_CATEGORIES, type ServiceCategory } from '@/data/services';
import { formatRupees } from '@/lib/format';
import { buildWhatsAppUrl } from '@/lib/studio';

function bookingMessage(categoryName: string, serviceName: string, price: number): string {
  return `Hello Hair Box – The Men's Salon, I would like to book ${serviceName} (${categoryName}) starting from ${formatRupees(price)}. Please share the available time slots.`;
}

interface ServiceCardProps {
  category: ServiceCategory;
  index: number;
  open: boolean;
  onToggle: () => void;
}

function ServiceCard({ category, index, open, onToggle }: ServiceCardProps) {
  const Icon = category.icon;
  const panelId = `service-panel-${category.id}`;
  const buttonId = `service-button-${category.id}`;

  return (
    <div
      className={`overflow-hidden rounded-3xl border bg-secondary-800/90 transition-all duration-500 ${
        open
          ? 'border-accent-300 shadow-lift'
          : 'border-secondary-600 shadow-soft hover:border-accent-300/60 hover:shadow-lift'
      }`}
    >
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="group flex w-full items-center gap-5 px-5 py-5 text-left transition-colors hover:bg-secondary-600/20 sm:px-7 sm:py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-300"
      >
        <span
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-1 transition-all duration-500 ${
            open
              ? 'bg-accent-300 text-secondary-900 ring-accent-300'
              : 'bg-primary-500/80 text-accent-300 ring-accent-300/30 group-hover:bg-primary-500'
          }`}
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent-300">
            Category {String(index + 1).padStart(2, '0')}
          </span>
          <span className="mt-1 block font-serif text-2xl font-semibold leading-tight text-secondary-50 sm:text-[1.7rem]">
            {category.name}
          </span>
          <span className="mt-1 block font-sans text-sm text-secondary-200/75">{category.tagline}</span>
        </span>

        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
            open
              ? 'rotate-180 border-accent-300 bg-accent-300/15 text-accent-300'
              : 'border-secondary-600 text-secondary-200'
          }`}
          aria-hidden="true"
        >
          <ChevronDown className="h-5 w-5" />
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-3 border-t border-secondary-600 bg-secondary-900/70 px-5 py-6 sm:px-7">
            {category.services.map((service) => (
              <li
                key={service.name}
                className="flex flex-col gap-4 rounded-2xl border border-secondary-600/80 bg-secondary-800 p-4 transition duration-300 hover:border-accent-300/60 sm:flex-row sm:items-center sm:justify-between sm:p-5"
              >
                <div>
                  <p className="font-sans text-base font-semibold text-secondary-50">{service.name}</p>
                  <p className="mt-1 font-serif text-2xl font-semibold text-accent-300">
                    {formatRupees(service.price)}
                  </p>
                </div>
                <a
                  href={buildWhatsAppUrl(bookingMessage(category.name, service.name, service.price))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold !px-5 !py-3 text-xs sm:shrink-0"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Book This Service
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ServicesMenu() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) =>
    setOpenIds((current) => (current.includes(id) ? current.filter((x) => x !== id) : [...current, id]));

  return (
    <section id="services" className="scroll-mt-20 bg-secondary-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Services &amp; Pricing</span>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Our Grooming Menu</h2>
            <p className="mt-5 font-sans text-base text-secondary-200/80 sm:text-lg">
              Select a category to explore haircuts, beard grooming, hair treatments, and starting rates—then book directly on WhatsApp.
            </p>
            <div className="gold-divider mx-auto mt-6" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4">
          {SERVICE_CATEGORIES.map((category, index) => (
            <Reveal key={category.id} delay={index * 60}>
              <ServiceCard
                category={category}
                index={index}
                open={openIds.includes(category.id)}
                onToggle={() => toggle(category.id)}
              />
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center font-sans text-sm text-secondary-200/70">
          Prices shown are starting rates. Final quotes are confirmed in the chair based on hair length and treatment selection.
        </p>
      </div>
    </section>
  );
}