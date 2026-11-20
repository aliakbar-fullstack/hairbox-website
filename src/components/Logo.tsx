import { Scissors } from 'lucide-react';
import { STUDIO } from '@/lib/studio';

interface LogoProps {
  tone?: 'light' | 'dark';
  compact?: boolean;
}

export default function Logo({ tone = 'light', compact = false }: LogoProps) {
  const isLight = tone === 'light';

  return (
    <div className="flex items-center gap-3" aria-label={STUDIO.name}>
      <span
        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${
          isLight
            ? 'border-accent-300/40 bg-primary-500 text-accent-300 shadow-gold'
            : 'border-primary-500/30 bg-secondary-900 text-accent-300'
        }`}
      >
        <span className="font-serif text-lg font-bold tracking-tighter">HB</span>
        <Scissors
          className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-secondary-900 p-0.5 text-accent-300"
          aria-hidden="true"
        />
      </span>

      {!compact && (
        <div className="flex flex-col leading-none">
          <span
            className={`select-none font-serif text-2xl font-bold uppercase tracking-[0.08em] ${
              isLight ? 'text-secondary-50' : 'text-secondary-900'
            }`}
          >
            Hair <span className="text-accent-300">Box</span>
          </span>
          <span
            className={`mt-1 select-none font-sans text-[0.62rem] font-semibold uppercase tracking-[0.26em] ${
              isLight ? 'text-secondary-200/80' : 'text-secondary-600'
            }`}
          >
            The Men&apos;s Salon
          </span>
        </div>
      )}
    </div>
  );
}