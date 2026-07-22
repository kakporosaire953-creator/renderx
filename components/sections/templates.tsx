'use client';
import { motion } from 'framer-motion';
import { Section, SectionHeading } from '@/components/section';

const templates = [
  { name: 'Publicité produit', category: 'Marketing', gradient: 'from-brand-blue to-brand-cyan' },
  { name: 'Reel Instagram', category: 'Social', gradient: 'from-brand-purple to-brand-blue' },
  { name: 'Intro YouTube', category: 'Créateur', gradient: 'from-brand-cyan to-brand-purple' },
  { name: 'Présentation corporate', category: 'Entreprise', gradient: 'from-brand-blue to-brand-purple' },
  { name: 'Lancement startup', category: 'Marketing', gradient: 'from-brand-purple to-brand-cyan' },
  { name: 'Tutoriel animé', category: 'Éducation', gradient: 'from-brand-cyan to-brand-blue' },
  { name: 'Logo animé', category: 'Branding', gradient: 'from-brand-blue to-brand-cyan' },
  { name: 'Story TikTok', category: 'Social', gradient: 'from-brand-purple to-brand-blue' },
];

export function TemplatesSection() {
  return (
    <Section id="templates">
      <SectionHeading eyebrow="Templates" title="Démarrez plus vite avec 120+ templates" description="Des modèles professionnels pour chaque cas d'usage. Personnalisez, générez, exportez." />
      <div className="mt-14 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {templates.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: (i % 4) * 0.06 }} whileHover={{ y: -4 }} className="group cursor-pointer">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border/60">
              <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-70 group-hover:opacity-90 transition-opacity`} />
              <div className="absolute inset-0 rx-shimmer opacity-40" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-3 left-3"><span className="rounded-full bg-black/40 backdrop-blur px-2.5 py-1 text-[10px] text-white/90 font-medium">{t.category}</span></div>
              <div className="absolute bottom-3 left-3 right-3"><div className="text-sm font-medium text-white drop-shadow">{t.name}</div><div className="mt-1 text-[10px] text-white/70 font-mono">16:9 · 1080p</div></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><div className="rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2 text-xs text-white font-medium">Utiliser ce template</div></div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
