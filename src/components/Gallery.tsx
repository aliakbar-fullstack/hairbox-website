import { useMemo, useState } from 'react';
import { Eye } from 'lucide-react';
import Lightbox from '@/components/Lightbox';
import Reveal from '@/components/Reveal';
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  type GalleryCategory,
  type GalleryItem,
} from '@/data/gallery';

type FilterCategory = 'All' | GalleryCategory;

const FILTER_TABS: FilterCategory[] = ['All', ...GALLERY_CATEGORIES];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visibleItems = useMemo<GalleryItem[]>(() => {
    if (selectedCategory === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="gallery" className="scroll-mt-20 bg-secondary-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">The Lookbook</span>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-secondary-50 sm:text-5xl">
              Fresh Cuts &amp; Clean Finishes
            </h2>
            <div className="gold-divider mx-auto mt-6" aria-hidden="true" />
            <p className="mt-5 font-sans text-base text-secondary-200/80">
              Browse recent haircuts, beard sculpting, and groom styles crafted at Hair Box – The Men&apos;s Salon.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Filter gallery by category">
          {FILTER_TABS.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveIndex(null);
                }}
                className={`rounded-full border px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 ${
                  active
                    ? 'border-accent-300 bg-accent-300 text-secondary-900 shadow-gold'
                    : 'border-secondary-600 bg-secondary-800/80 text-secondary-200 hover:border-accent-300/60 hover:text-accent-300'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item, idx) => (
            <Reveal key={item.id} delay={(idx % 3) * 80}>
              <button
                type="button"
                onClick={() => setActiveIndex(idx)}
                className="group relative block w-full overflow-hidden rounded-3xl border border-secondary-600 bg-secondary-800 text-left shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-accent-300/60 hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300"
              >
                <div className={`${item.tall ? 'aspect-[3/4]' : 'aspect-[4/5]'} w-full overflow-hidden`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/35 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <span className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent-300">
                      {item.category}
                    </span>
                    <span className="mt-1 block font-serif text-lg font-semibold leading-snug text-secondary-50">
                      {item.alt}
                    </span>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-300/40 bg-secondary-900/85 text-accent-300 transition-colors duration-300 group-hover:bg-accent-300 group-hover:text-secondary-900">
                    <Eye className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null && visibleItems[activeIndex] && (
        <Lightbox
          items={visibleItems}
          index={activeIndex}
          onIndexChange={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
}