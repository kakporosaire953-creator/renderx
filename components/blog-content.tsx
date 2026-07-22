'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Section } from '@/components/section';

const posts = [
  { title: 'HyperFrames v3 : un moteur 4x plus rapide', excerpt: 'Découvrez les améliorations architecturales qui réduisent le temps de génération moyen à 47 secondes.', category: 'Produit', date: '10 juil. 2024', read: '4 min', gradient: 'from-brand-blue to-brand-cyan' },
  { title: "5 prompts qui produisent des vidéos dignes d'un studio", excerpt: "La structure d'un bon prompt vidéo : scène, style, lumière, mouvement. Avec exemples concrets.", category: 'Guides', date: '5 juil. 2024', read: '7 min', gradient: 'from-brand-purple to-brand-blue' },
  { title: 'Comment une agence a divisé par 8 son temps de production', excerpt: 'Étude de cas : Atlas Media produit désormais 30 publicités par semaine avec une équipe de 2 personnes.', category: 'Études de cas', date: '28 juin 2024', read: '6 min', gradient: 'from-brand-cyan to-brand-purple' },
  { title: 'Intégrer la génération vidéo dans votre pipeline CI/CD', excerpt: "Utilisez l'API RenderX pour automatiser la création de vidéos produit dans vos workflows.", category: 'Développeurs', date: '20 juin 2024', read: '9 min', gradient: 'from-brand-blue to-brand-purple' },
  { title: 'Le guide des ratios vidéo pour chaque réseau social', excerpt: '16:9, 9:16, 1:1, 4:5 : quel format choisir pour YouTube, TikTok, Instagram et LinkedIn.', category: 'Guides', date: '14 juin 2024', read: '5 min', gradient: 'from-brand-purple to-brand-cyan' },
  { title: 'RenderX lève 20M€ pour devenir le leader de la vidéo IA', excerpt: "Tour de table mené par Index Ventures, avec la participation d'opérateurs africains.", category: 'Entreprise', date: '1 juin 2024', read: '3 min', gradient: 'from-brand-cyan to-brand-blue' },
];

export function BlogContent() {
  return (
    <Section>
      <div className="max-w-5xl mx-auto">
        <div className="text-center"><h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Le blog RenderX</h1><p className="mt-4 text-muted-foreground max-w-xl mx-auto">Actualités produit, guides pratiques et études de cas sur la génération vidéo par intelligence artificielle.</p></div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (<motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}><Link href="/blog" className="group block h-full rounded-2xl border border-border/60 bg-card/40 overflow-hidden hover:border-brand-blue/40 transition-colors"><div className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient} opacity-70`}><div className="absolute inset-0 rx-shimmer opacity-30" /><span className="absolute top-3 left-3 rounded-full bg-black/40 backdrop-blur px-2.5 py-1 text-[10px] text-white font-medium">{p.category}</span></div><div className="p-5"><h3 className="font-display text-base font-semibold leading-snug group-hover:text-brand-blue transition-colors">{p.title}</h3><p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{p.excerpt}</p><div className="mt-4 flex items-center justify-between text-xs text-muted-foreground"><span>{p.date}</span><span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{p.read}</span></div></div></Link></motion.div>))}
        </div>
      </div>
    </Section>
  );
}
