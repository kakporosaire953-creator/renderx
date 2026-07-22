'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ChevronRight } from 'lucide-react';
import { Section } from '@/components/section';
import { Input } from '@/components/ui/input';

const categories = [
  { title: 'Démarrage', articles: ['Créer mon premier compte', 'Comprendre les crédits', 'Choisir un template', 'Exporter une vidéo'] },
  { title: 'Génération vidéo', articles: ['Rédiger un bon prompt', 'Choisir la résolution', 'Utiliser les styles', 'Gérer le ratio'] },
  { title: 'Facturation', articles: ['Mettre à niveau mon abonnement', 'Acheter des crédits', 'Télécharger une facture', 'Annuler mon abonnement'] },
  { title: 'API & Intégration', articles: ['Obtenir une clé API', 'Configurer un webhook', 'Limites de débit', 'Gestion des erreurs'] },
];

export function HelpContent() {
  const [query, setQuery] = useState('');
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <div className="text-center"><h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Comment pouvons-nous vous aider ?</h1><p className="mt-4 text-muted-foreground">Recherchez dans notre base de connaissances ou parcourez les catégories.</p></div>
        <div className="relative mt-8 max-w-xl mx-auto"><Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" /><Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Recherchez : crédits, export, API…" className="h-12 pl-12 text-base" /></div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {categories.map((cat, i) => (<motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="rounded-2xl border border-border/60 bg-card/40 p-6"><h2 className="font-display text-lg font-semibold">{cat.title}</h2><ul className="mt-4 space-y-1">{cat.articles.map((a) => (<li key={a}><Link href="/help" className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors">{a}<ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>))}</ul></motion.div>))}
        </div>
        <div className="mt-12 rounded-2xl border border-border/60 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 p-8 text-center"><h3 className="font-display text-lg font-semibold">Vous ne trouvez pas la réponse ?</h3><p className="mt-2 text-sm text-muted-foreground">Notre équipe support répond en moins de 2 heures ouvrées.</p><Link href="/contact" className="mt-4 inline-flex items-center justify-center rounded-xl bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity">Contacter le support</Link></div>
      </div>
    </Section>
  );
}
