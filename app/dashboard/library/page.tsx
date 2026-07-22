'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Download, MoreHorizontal, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const videos = [
  { title: 'Survol aérien — Côte tropicale', duration: '0:32', date: '12 juil.', res: '1080p', gradient: 'from-brand-blue to-brand-cyan' },
  { title: 'Produit cosmétique — Macro', duration: '0:15', date: '12 juil.', res: '4K', gradient: 'from-brand-purple to-brand-blue' },
  { title: 'Intro logo — Métal brossé', duration: '0:08', date: '11 juil.', res: '1080p', gradient: 'from-brand-cyan to-brand-purple' },
  { title: 'Présentation corporate Q3', duration: '1:24', date: '10 juil.', res: '1080p', gradient: 'from-brand-blue to-brand-purple' },
  { title: 'Reel Instagram — Mode', duration: '0:18', date: '9 juil.', res: '1080p', gradient: 'from-brand-purple to-brand-cyan' },
  { title: 'Tutoriel animé — Onboarding', duration: '0:45', date: '8 juil.', res: '720p', gradient: 'from-brand-cyan to-brand-blue' },
  { title: 'Lancement startup — Teaser', duration: '0:22', date: '7 juil.', res: '4K', gradient: 'from-brand-blue to-brand-purple' },
  { title: 'Story TikTok — Cuisine', duration: '0:12', date: '6 juil.', res: '1080p', gradient: 'from-brand-purple to-brand-blue' },
];

export default function LibraryPage() {
  const [query, setQuery] = useState('');
  const filtered = videos.filter((v) => v.title.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div><h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">Bibliothèque</h1><p className="mt-1 text-sm text-muted-foreground">Toutes vos vidéos générées, en un seul endroit.</p></div>
        <div className="flex items-center gap-2"><div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Rechercher…" className="pl-9 w-full sm:w-64" /></div><Button variant="outline" size="icon"><Filter className="h-4 w-4" /></Button></div>
      </div>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((v, i) => (<motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: (i % 4) * 0.05 }} whileHover={{ y: -4 }} className="group cursor-pointer rounded-2xl border border-border/60 bg-card/40 overflow-hidden"><div className="relative aspect-video overflow-hidden"><div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-70 group-hover:opacity-90 transition-opacity`} /><div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><div className="h-11 w-11 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center"><Play className="h-5 w-5 text-white fill-white" /></div></div><div className="absolute bottom-2 right-2 rounded bg-black/50 backdrop-blur px-1.5 py-0.5 text-[10px] text-white font-mono">{v.duration}</div><div className="absolute top-2 left-2 rounded bg-black/50 backdrop-blur px-1.5 py-0.5 text-[10px] text-white">{v.res}</div></div><div className="p-3"><div className="flex items-start justify-between gap-2"><div className="min-w-0"><div className="truncate text-sm font-medium">{v.title}</div><div className="text-xs text-muted-foreground">{v.date}</div></div><div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"><button className="text-muted-foreground hover:text-foreground" aria-label="Télécharger"><Download className="h-3.5 w-3.5" /></button><button className="text-muted-foreground hover:text-foreground" aria-label="Plus"><MoreHorizontal className="h-3.5 w-3.5" /></button></div></div></div></motion.div>))}
      </div>
      {filtered.length === 0 && <div className="text-center py-20 text-muted-foreground text-sm">Aucune vidéo ne correspond à votre recherche.</div>}
    </div>
  );
}
