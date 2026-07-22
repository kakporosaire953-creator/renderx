'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wand2, Film, Clock, TrendingUp, ArrowUpRight, Play, Plus } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const chartData = [{ name: 'Lun', videos: 12 }, { name: 'Mar', videos: 19 }, { name: 'Mer', videos: 15 }, { name: 'Jeu', videos: 27 }, { name: 'Ven', videos: 31 }, { name: 'Sam', videos: 22 }, { name: 'Dim', videos: 18 }];
const recent = [{ title: 'Survol aérien — Côte tropicale', duration: '0:32', status: 'Terminé', date: 'Il y a 2h' }, { title: 'Produit cosmétique — Macro', duration: '0:15', status: 'Terminé', date: 'Il y a 5h' }, { title: 'Intro logo — Métal brossé', duration: '0:08', status: 'Terminé', date: 'Hier' }, { title: 'Présentation corporate Q3', duration: '1:24', status: 'En cours', date: 'Il y a 1min' }];
const stats = [{ label: 'Vidéos ce mois', value: '144', change: '+23%', icon: Film }, { label: 'Crédits utilisés', value: '1 158', change: '+12%', icon: TrendingUp }, { label: 'Temps économisé', value: '47h', change: '+8%', icon: Clock }, { label: 'Téléchargements', value: '89', change: '+34%', icon: ArrowUpRight }];

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div><h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">Bonjour, Jean</h1><p className="mt-1 text-sm text-muted-foreground">Voici un aperçu de votre activité ce mois-ci.</p></div>
        <Link href="/dashboard/generate" className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity"><Plus className="h-4 w-4" />Nouvelle vidéo</Link>
      </motion.div>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (<motion.div key={s.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.06 }} className="rounded-2xl border border-border/60 bg-card/40 p-5"><div className="flex items-center justify-between"><div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/60 border border-border/60 text-brand-blue"><s.icon className="h-4 w-4" /></div><span className="text-xs text-emerald-400">{s.change}</span></div><div className="mt-4 font-display text-2xl font-semibold">{s.value}</div><div className="text-xs text-muted-foreground">{s.label}</div></motion.div>))}
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-border/60 bg-card/40 p-5">
          <div className="flex items-center justify-between"><div><h2 className="font-display text-base font-semibold">Vidéos générées</h2><p className="text-xs text-muted-foreground">7 derniers jours</p></div><span className="text-xs text-muted-foreground">144 au total</span></div>
          <div className="mt-6 h-56"><ResponsiveContainer width="100%" height="100%"><AreaChart data={chartData} margin={{ left: -20, right: 8, top: 8 }}><defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3B82F6" stopOpacity={0.4} /><stop offset="100%" stopColor="#3B82F6" stopOpacity={0} /></linearGradient></defs><CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} /><XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} /><YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} /><Tooltip contentStyle={{ background: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', borderRadius: 12, fontSize: 12 }} /><Area type="monotone" dataKey="videos" stroke="#3B82F6" strokeWidth={2} fill="url(#chartFill)" /></AreaChart></ResponsiveContainer></div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 p-5">
          <div className="flex items-center gap-2"><Wand2 className="h-4 w-4 text-brand-blue" /><h2 className="font-display text-base font-semibold">Génération rapide</h2></div>
          <p className="mt-1 text-xs text-muted-foreground">Décrivez votre vidéo et lancez la génération.</p>
          <textarea rows={4} placeholder="Un plan large d'une ville futuriste au lever du soleil…" className="mt-4 w-full resize-none rounded-xl border border-border/60 bg-background/60 p-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          <Link href="/dashboard/generate" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity"><Wand2 className="h-4 w-4" />Générer</Link>
        </div>
      </div>
      <div className="rounded-2xl border border-border/60 bg-card/40">
        <div className="flex items-center justify-between p-5"><h2 className="font-display text-base font-semibold">Vidéos récentes</h2><Link href="/dashboard/library" className="text-xs text-brand-blue hover:underline">Voir tout</Link></div>
        <div className="divide-y divide-border/60">
          {recent.map((r, i) => (<motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="flex items-center gap-4 p-4 hover:bg-secondary/30 transition-colors"><div className="relative h-12 w-20 shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-brand-blue/40 to-brand-purple/40 flex items-center justify-center"><Play className="h-4 w-4 text-white fill-white" /></div><div className="min-w-0 flex-1"><div className="truncate text-sm font-medium">{r.title}</div><div className="text-xs text-muted-foreground">{r.duration} · {r.date}</div></div><span className={r.status === 'Terminé' ? 'inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs text-emerald-400' : 'inline-flex items-center gap-1.5 rounded-full bg-brand-blue/15 px-2.5 py-1 text-xs text-brand-blue'}><span className="h-1.5 w-1.5 rounded-full bg-current animate-rx-pulse-glow" />{r.status}</span></motion.div>))}
        </div>
      </div>
    </div>
  );
}
