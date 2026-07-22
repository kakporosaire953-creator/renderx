'use client';
import { motion } from 'framer-motion';
import { Section, SectionHeading } from '@/components/section';
import { Megaphone, Users, ShoppingBag, GraduationCap, Building2, Code } from 'lucide-react';

const cases = [
  { icon: Megaphone, title: 'Agences marketing', description: 'Produisez des dizaines de variantes publicitaires par jour, sans équipe de montage.' },
  { icon: Users, title: 'Créateurs de contenu', description: 'Gardez votre cadence de publication avec des vidéos de qualité studio, en minutes.' },
  { icon: ShoppingBag, title: 'E-commerce', description: 'Générez des vidéos produit à partir de vos fiches articles et boostez vos conversions.' },
  { icon: GraduationCap, title: 'Éducation', description: 'Transformez vos cours et supports textuels en vidéos pédagogiques engageantes.' },
  { icon: Building2, title: 'Entreprises', description: 'Communiquez en interne et en externe avec des vidéos corporate cohérentes.' },
  { icon: Code, title: 'Développeurs', description: "Intégrez la génération vidéo dans vos applications via l'API RenderX." },
];

export function UseCasesSection() {
  return (
    <Section id="cas-usage">
      <SectionHeading eyebrow="Cas d'usage" title="Conçu pour tous ceux qui créent" description="Des créateurs solos aux équipes enterprise, RenderX s'adapte à votre échelle." />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c, i) => (
          <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: (i % 3) * 0.08 }} className="group flex gap-4 rounded-2xl border border-border/60 bg-card/40 p-5 hover:border-brand-blue/40 transition-colors">
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/60 border border-border/60 text-brand-purple group-hover:text-brand-blue transition-colors"><c.icon className="h-5 w-5" /></div>
            <div><h3 className="font-display text-base font-semibold">{c.title}</h3><p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{c.description}</p></div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
