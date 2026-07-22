'use client';
import { motion } from 'framer-motion';
import { Check, Clock, Loader2, X } from 'lucide-react';

const items = [
  { title: 'Survol aérien — Côte tropicale', status: 'done', credits: 12, duration: '0:32', date: '12 juil. 2024, 14:32', time: '47s' },
  { title: 'Produit cosmétique — Macro', status: 'done', credits: 8, duration: '0:15', date: '12 juil. 2024, 11:08', time: '29s' },
  { title: 'Présentation corporate Q3', status: 'processing', credits: 40, duration: '1:24', date: '12 juil. 2024, 10:55', time: '—' },
  { title: 'Intro logo — Métal brossé', status: 'done', credits: 5, duration: '0:08', date: '11 juil. 2024, 18:14', time: '12s' },
  { title: 'Reel Instagram — Mode', status: 'failed', credits: 0, duration: '0:18', date: '11 juil. 2024, 16:02', time: '—' },
  { title: 'Tutoriel animé — Onboarding', status: 'done', credits: 18, duration: '0:45', date: '10 juil. 2024, 09:21', time: '58s' },
];

const statusConfig = {
  done: { icon: Check, label: 'Terminé', className: 'bg-emerald-500/15 text-emerald-400' },
  processing: { icon: Loader2, label: 'En cours', className: 'bg-brand-blue/15 text-brand-blue' },
  failed: { icon: X, label: 'Échoué', className: 'bg-destructive/15 text-destructive' },
};

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">Historique</h1><p className="mt-1 text-sm text-muted-foreground">Suivez l'état de toutes vos générations.</p></div>
      <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/40">
        <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-border/60 text-left text-xs text-muted-foreground"><th className="font-medium px-5 py-3">Vidéo</th><th className="font-medium px-5 py-3 hidden sm:table-cell">Durée</th><th className="font-medium px-5 py-3 hidden md:table-cell">Date</th><th className="font-medium px-5 py-3 hidden lg:table-cell">Temps de rendu</th><th className="font-medium px-5 py-3">Crédits</th><th className="font-medium px-5 py-3">Statut</th></tr></thead><tbody className="divide-y divide-border/60">{items.map((it, i) => { const cfg = statusConfig[it.status as keyof typeof statusConfig]; return (<motion.tr key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: i * 0.04 }} className="hover:bg-secondary/30 transition-colors"><td className="px-5 py-4 font-medium">{it.title}</td><td className="px-5 py-4 hidden sm:table-cell text-muted-foreground font-mono">{it.duration}</td><td className="px-5 py-4 hidden md:table-cell text-muted-foreground">{it.date}</td><td className="px-5 py-4 hidden lg:table-cell text-muted-foreground font-mono">{it.time}</td><td className="px-5 py-4 text-muted-foreground">{it.credits}</td><td className="px-5 py-4"><span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs ${cfg.className}`}><cfg.icon className={`h-3 w-3 ${it.status === 'processing' ? 'animate-spin' : ''}`} />{cfg.label}</span></td></motion.tr>); })}</tbody></table></div>
      </div>
    </div>
  );
}
