import { Scissors } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { STUDIO } from '@/lib/studio';

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-secondary-900 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <div className="relative">
            <div
              className="absolute -inset-4 -z-10 rounded-[2.5rem] border border-secondary-600"
              aria-hidden="true"
            />
            <div className="overflow-hidden rounded-[2rem] border border-secondary-600 bg-secondary-800 shadow-lift">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80"
                alt="Inside Hair Box – The Men's Salon grooming station"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-5 flex items-center gap-4 rounded-2xl border border-secondary-600 bg-secondary-800/95 p-4 shadow-soft sm:absolute sm:-bottom-6 sm:right-6 sm:mt-0 sm:max-w-xs">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-500 text-accent-300 ring-1 ring-accent-300/30">
                <Scissors className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-serif text-base font-semibold text-secondary-50">Tirur &amp; Kottakkal</p>
                <p className="font-sans text-xs text-secondary-200/75">
                  Precision cuts, beard care &amp; groom styling
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-6">
          <div>
            <span className="section-eyebrow">About {STUDIO.name}</span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-secondary-50 sm:text-5xl">
              Crafted Grooming for the Modern Man
            </h2>
            <div className="gold-divider mt-6" aria-hidden="true" />
            <p className="mt-7 font-sans text-base leading-[1.7] text-secondary-200/85 sm:text-lg">
              {STUDIO.name} brings sharp fades, clean beard work, relaxing scalp and skin care, and sharp groom styling
              together under one roof in Tirur and Kottakkal. Every visit focuses on clean hygiene, unhurried care, and a
              look tailored to your features.
            </p>
            <p className="mt-4 font-sans text-base leading-[1.7] text-secondary-200/75">
              Whether you stop by Ring Road in Tirur or Thazhe Kottakkal for a quick weekly tidy-up or a full event
              makeover, our barbers keep things consistent, sharp, and comfortable.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}