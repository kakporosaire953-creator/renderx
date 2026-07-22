'use client';
import { motion } from 'framer-motion';
import { Section, SectionHeading } from '@/components/section';
import { Star } from 'lucide-react';

const testimonials = [
  { quote: 'RenderX a divisé par 8 notre temps de production vidéo. Nous sortons désormais 30 publicités par semaine avec la même équipe.', name: 'Aïcha Diallo', role: 'Directrice créative, Atlas Media', initials: 'AD' },
  { quote: "Le moteur HyperFrames comprend vraiment le contexte. Les vidéos ont une cohérence visuelle qu'on ne trouve nulle part ailleurs.", name: 'Thomas Laurent', role: 'Founder, Nimbus Studio', initials: 'TL' },
  { quote: "Nous avons intégré l'API RenderX dans notre plateforme e-commerce. Chaque produit a désormais sa vidéo, automatiquement.", name: 'Sarah Benali', role: 'CTO, Vertex Commerce', initials: 'SB' },
  { quote: "La qualité du rendu 4K rivalise avec ce que nous faisions avec des outils de montage pro. Sauf que c'est 100 fois plus rapide.", name: 'Marc Dubois', role: 'Freelance, créateur de contenu', initials: 'MD' },
  { quote: "RenderX est devenu un outil indispensable pour notre équipe marketing. Le retour sur investissement est immédiat.", name: 'Léa Moreau', role: 'Head of Growth, Lumen', initials: 'LM' },
  { quote: "La meilleure plateforme de génération vidéo IA que nous ayons testée. Et nous en avons testé beaucoup.", name: 'Karim Haddad', role: 'CEO, Orbit Agency', initials: 'KH' },
];

export function TestimonialsSection() {
  return (
    <Section id="avis">
      <SectionHeading eyebrow="Avis utilisateurs" title="Adopté par les créateurs les plus exigeants" description="Des milliers de professionnels font confiance à RenderX pour leur production vidéo quotidienne." />
      <div className="mt-14 columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: (i % 3) * 0.08 }} className="mb-5 break-inside-avoid rounded-2xl border border-border/60 bg-card/40 p-5">
            <div className="flex items-center gap-0.5 text-brand-blue">{Array.from({ length: 5 }).map((_, k) => (<Star key={k} className="h-3.5 w-3.5 fill-current" />))}</div>
            <p className="mt-3 text-sm text-foreground/90 leading-relaxed">« {t.quote} »</p>
            <div className="mt-4 flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple text-xs font-semibold text-white">{t.initials}</div><div><div className="text-sm font-medium">{t.name}</div><div className="text-xs text-muted-foreground">{t.role}</div></div></div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
