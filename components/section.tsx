'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Section({ id, children, className }: { id?: string; children: React.ReactNode; className?: string }) {
  return (<section id={id} className={cn('relative py-20 sm:py-28', className)}><div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div></section>);
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: { eyebrow?: string; title: React.ReactNode; description?: React.ReactNode; align?: 'center' | 'left' }) {
  return (
    <div className={cn('max-w-2xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}>
      {eyebrow && (<motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />{eyebrow}</motion.span>)}
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.1]">{title}</motion.h2>
      {description && (<motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className={cn('mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed', align === 'center' ? 'mx-auto' : '')}>{description}</motion.p>)}
    </div>
  );
}

export function FadeIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>{children}</motion.div>);
}
