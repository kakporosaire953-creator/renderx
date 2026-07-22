'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type LogoProps = { className?: string; withWordmark?: boolean; size?: 'sm' | 'md' | 'lg' | 'xl'; animated?: boolean };

const sizeMap = {
  sm: { mark: 28, text: 'text-lg' },
  md: { mark: 36, text: 'text-xl' },
  lg: { mark: 48, text: 'text-2xl' },
  xl: { mark: 64, text: 'text-3xl' },
};

export function Logo({ className, withWordmark = true, size = 'md', animated = false }: LogoProps) {
  const s = sizeMap[size];
  const Mark = (
    <svg width={s.mark} height={s.mark} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="rx-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" /><stop offset="0.5" stopColor="#22D3EE" /><stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#050505" />
      <path d="M18 16h16c7.732 0 14 6.268 14 14 0 4.2-1.853 7.97-4.79 10.52L48 48H38l-9-9h-5v9h-6V16zm6 6v11h10c3.04 0 5.5-2.46 5.5-5.5S37.04 22 34 22H24z" fill="url(#rx-grad)" />
    </svg>
  );
  const content = (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      {animated ? (
        <motion.span initial={{ opacity: 0, scale: 0.85, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="inline-flex">{Mark}</motion.span>
      ) : Mark}
      {withWordmark && <span className={cn('font-display font-semibold tracking-tight text-foreground', s.text)}>Render<span className="rx-gradient-text">X</span></span>}
    </span>
  );
  return content;
}
