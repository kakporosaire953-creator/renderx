'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/60">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-background to-brand-purple/20" />
          <div className="absolute inset-0 rx-grid-bg opacity-30" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-[600px] rounded-full bg-brand-blue/30 blur-[120px] animate-rx-pulse-glow" />
          <div className="relative px-6 py-16 sm:px-12 sm:py-20 text-center">
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"><Sparkles className="h-3 w-3 text-brand-blue" />30 crédits offerts, sans carte bancaire</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-6 font-display text-3xl sm:text-5xl font-semibold tracking-tight leading-tight max-w-2xl mx-auto">Votre prochaine vidéo n'est qu'à<span className="rx-gradient-text"> une phrase près.</span></motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-5 max-w-xl mx-auto text-muted-foreground">Rejoignez les milliers de créateurs, agences et entreprises qui produisent leurs vidéos avec RenderX.</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="group w-full sm:w-auto"><Link href="/signup">Démarrer gratuitement<ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto"><Link href="/#tarifs">Voir les tarifs</Link></Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
