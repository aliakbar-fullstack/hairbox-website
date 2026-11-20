import { ArrowUpRight, Quote, Star } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { REVIEWS } from '@/data/reviews';
import { STUDIO } from '@/lib/studio';

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 border-y border-secondary-600/70 bg-secondary-800/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Client Reviews</span>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Words from our regulars</h2>
            <div className="gold-divider mx-auto mt-6" aria-hidden="true" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-secondary-600 bg-secondary-900 px-8 py-8 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-5">
              <span className="font-serif text-6xl font-semibold leading-none text-secondary-50">{STUDIO.googleRating}</span>
              <div>
                <div className="flex items-center gap-1 text-accent-300" aria-label={`${STUDIO.googleRating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-1 font-sans text-sm text-secondary-200/80">out of 5.0 on Google Maps</p>
              </div>
            </div>
            <a
              href={STUDIO.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold group"
            >
              Read More Reviews
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <Reveal key={review.id} delay={index * 120} className="h-full">
              <figure className="group flex h-full flex-col rounded-3xl border border-secondary-600 bg-secondary-900 p-8 shadow-soft transition duration-500 hover:-translate-y-1 hover:border-accent-300/60 hover:shadow-lift">
                <Quote className="h-8 w-8 text-accent-300" aria-hidden="true" />
                <blockquote className="mt-5 flex-1 font-serif text-xl leading-[1.35] text-secondary-50">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-between border-t border-secondary-600 pt-5">
                  <div>
                    <p className="font-sans text-sm font-semibold text-secondary-50">{review.name}</p>
                    <p className="font-sans text-xs text-secondary-200/75">{review.service}</p>
                  </div>
                  <div className="flex gap-0.5 text-accent-300" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}