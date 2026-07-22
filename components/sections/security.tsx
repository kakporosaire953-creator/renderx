'use client';
import { motion } from 'framer-motion';
import { Section, SectionHeading } from '@/components/section';
import { Lock, FileCheck2, ServerCog, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Lock, title: 'Chiffrement de bout en bout', description: "AES-256 au repos, TLS 1.3 en transit. Vos vidéos et prompts sont protégés à chaque étape." },
  { icon: FileCheck2, title: 'Conformité RGPD', description: "Vos données ne sont jamais vendues ni utilisées pour l'entraînement. Droit à l'oubli garanti." },
  { icon: ServerCog, title: 'Infrastructure redondée', description: "Stockage multi-région, sauvegardes automatiques, 99,98% de disponibilité garantie." },
  { icon: ShieldCheck, title: 'Audit & traçabilité', description: "Logs complets, accès SSO/SCIM, et audit de sécurité annuel par des tiers indépendants." },
];

export function SecuritySection() {
  return (
    <Section id="securite">
      <SectionHeading eyebrow="Sécurité" title="La sécurité n'est pas une option" description="Vos données, vos vidéos et votre propriété intellectuelle sont protégées selon les standards les plus exigeants." />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (<motion.div key={it.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: i * 0.08 }} className="rounded-2xl border border-border/60 bg-card/40 p-5"><div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/60 border border-border/60 text-brand-cyan"><it.icon className="h-5 w-5" /></div><h3 className="mt-4 font-display text-base font-semibold">{it.title}</h3><p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.description}</p></motion.div>))}
      </div>
    </Section>
  );
}
