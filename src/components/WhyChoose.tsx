import { Armchair, Award, Scissors, ShieldCheck, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';

interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
}

const VALUES: Value[] = [
  {
    title: 'Strict Hygiene & Care',
    description: 'Sanitised tools, fresh blades for every client, and premium grooming products chosen for healthy hair and skin.',
    icon: ShieldCheck,
  },
  {
    title: 'Master Barbers',
    description: 'Skilled stylists trained in modern skin fades, scissor work, beard sculpting, and groom makeovers.',
    icon: Award,
  },
  {
    title: 'Tailored Consultation',
    description: 'Every cut begins with a quick check on your face shape, hair texture, and lifestyle so the look fits you.',
    icon: Scissors,
  },
  {
    title: 'Modern Men’s Lounge',
    description: 'A sharp, air-conditioned space where you can relax, unwind, and walk out looking your best.',
    icon: Armchair,
  },
];

export default function WhyChoose() {
  return (
    <section aria-labelledby="why-heading" className="border-y border-secondary-600/70 bg-secondary-800/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Why Choose Hair Box</span>
            <h2 id="why-heading" className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
              Grooming built around precision
            </h2>
            <div className="gold-divider mx-auto mt-6" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={index * 100} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-3xl border border-secondary-600 bg-secondary-900 p-8 transition duration-500 hover:-translate-y-1 hover:border-accent-300/60 hover:bg-secondary-800 hover:shadow-lift">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/80 text-accent-300 shadow-soft ring-1 ring-accent-300/30 transition duration-500 group-hover:scale-110 group-hover:bg-accent-300 group-hover:text-secondary-900">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-7 font-serif text-2xl font-semibold text-secondary-50">{value.title}</h3>
                  <p className="mt-3 font-sans text-sm leading-[1.6] text-secondary-200/80">{value.description}</p>
                  <span
                    className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-accent-300 to-primary-300 transition-all duration-500 group-hover:w-full"
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}