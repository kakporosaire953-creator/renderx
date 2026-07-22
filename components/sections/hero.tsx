'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';

const stats = [{ value: '2,4M+', label: 'Vidéos générées' }, { value: '47s', label: 'Temps moyen' }, { value: '99,98%', label: 'Disponibilité' }, { value: '180+', label: 'Pays' }];
const clients = ['OpenMind', 'Atlas', 'Nimbus', 'Vertex', 'Lumen', 'Orbit'];

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 rx-grid-bg rx-mask-fade-b opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-brand-blue/20 blur-[140px] animate-rx-pulse-glow" />
      <div className="pointer-events-none absolute top-20 -right-20 h-[400px] w-[400px] rounded-full bg-brand-purple/20 blur-[120px] animate-rx-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="pointer-events-none absolute top-40 -left-20 h-[400px] w-[400px] rounded-full bg-brand-cyan/15 blur-[120px] animate-rx-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex justify-center">
          <Link href="/#hyperframes" className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs sm:text-sm text-muted-foreground hover:border-brand-blue/60 transition-colors">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/15 px-2 py-0.5 text-foreground font-medium"><Sparkles className="h-3 w-3 text-brand-blue" />Nouveau</span>
            HyperFrames v3 — Rendu 4x plus rapide<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="mt-8 text-center font-display text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
          Décrivez. Regardez la magie<br /><span className="rx-gradient-text">transformer vos mots en vidéo.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="mt-6 mx-auto max-w-2xl text-center text-base sm:text-lg text-muted-foreground leading-relaxed">
          RenderX convertit une simple description textuelle en une vidéo MP4 professionnelle, propulsée par notre moteur IA propriétaire HyperFrames. Conçu pour les créateurs, agences et entreprises.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" className="group w-full sm:w-auto"><Link href="/signup">Générer ma première vidéo<ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Link></Button>
          <Button asChild size="lg" variant="outline" className="group w-full sm:w-auto"><Link href="/#demo"><Play className="mr-1.5 h-4 w-4" />Voir la démonstration</Link></Button>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.45 }} className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-brand-cyan" />Données chiffrées AES-256</span>
          <span className="inline-flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-brand-blue" />30 crédits offerts à l'inscription</span>
          <span className="inline-flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-brand-purple" />Sans carte bancaire</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40, rotateX: 8 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }} className="mt-16 relative mx-auto max-w-5xl" style={{ perspective: 1200 }}>
          <div className="absolute -inset-x-10 -bottom-10 h-40 bg-gradient-to-t from-brand-blue/20 to-transparent blur-3xl" />
          <HeroMockup />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40">
          {stats.map((s) => (<div key={s.label} className="bg-background/60 px-6 py-8 text-center"><div className="font-display text-3xl sm:text-4xl font-semibold rx-gradient-text">{s.value}</div><div className="mt-1.5 text-xs sm:text-sm text-muted-foreground">{s.label}</div></div>))}
        </motion.div>
        <div className="mt-16">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">Approuvé par les équipes créatives du monde entier</p>
          <div className="relative mt-6 overflow-hidden rx-mask-fade-edges"><div className="flex w-max animate-rx-marquee gap-12">{[...clients, ...clients, ...clients].map((c, i) => (<span key={i} className="font-display text-xl font-semibold text-muted-foreground/60 whitespace-nowrap">{c}</span>))}</div></div>
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="rx-gradient-border rounded-2xl">
      <div className="rx-glass rounded-2xl overflow-hidden border-0 shadow-2xl shadow-black/60">
        <div className="flex items-center gap-2 px-4 h-10 border-b border-border/60 bg-secondary/30">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" /><span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          <div className="mx-auto flex items-center gap-2 text-xs text-muted-foreground"><Logo size="sm" withWordmark={false} /><span>app.renderx.ai</span></div>
        </div>
        <div className="grid grid-cols-12 min-h-[360px] sm:min-h-[440px]">
          <div className="hidden sm:flex col-span-3 flex-col gap-1 p-3 border-r border-border/60 bg-secondary/20">
            {['Générer', 'Bibliothèque', 'Historique', 'Facturation', 'Profil'].map((item, i) => (<div key={item} className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${i === 0 ? 'bg-brand-blue/15 text-foreground' : 'text-muted-foreground'}`}><span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />{item}</div>))}
            <div className="mt-auto rounded-lg border border-border/60 p-3 text-xs"><div className="flex items-center justify-between"><span className="text-muted-foreground">Crédits</span><span className="font-medium">842</span></div><div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden"><div className="h-full w-3/4 bg-gradient-to-r from-brand-blue to-brand-purple" /></div></div>
          </div>
          <div className="col-span-12 sm:col-span-9 p-5">
            <div className="flex items-center justify-between"><div><div className="text-sm font-medium">Nouvelle génération</div><div className="text-xs text-muted-foreground">HyperFrames v3</div></div><div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs text-emerald-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-rx-pulse-glow" />En cours</div></div>
            <div className="mt-4 rounded-xl border border-border/60 bg-background/60 p-3"><div className="text-xs text-muted-foreground">Prompt</div><div className="mt-1 text-sm text-foreground/90">« Un plan large aérien d'une ville futuriste au lever du soleil, lumière dorée, drones survolant les immeubles, style cinématographique 4K »</div></div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (<div key={i} className="relative aspect-video rounded-lg overflow-hidden border border-border/60 bg-secondary/40"><div className="absolute inset-0 rx-shimmer" /><div className="absolute inset-0 opacity-40" style={{ backgroundImage: i === 0 ? 'linear-gradient(135deg, #3B82F6, #22D3EE)' : i === 1 ? 'linear-gradient(135deg, #7C3AED, #3B82F6)' : 'linear-gradient(135deg, #22D3EE, #7C3AED)' }} /><div className="absolute bottom-2 left-2 text-[10px] text-white/80 font-mono">frame_{(i + 1) * 24}.mp4</div></div>))}
            </div>
            <div className="mt-4"><div className="flex items-center justify-between text-xs"><span className="text-muted-foreground">Rendu des frames</span><span className="font-mono text-foreground">72%</span></div><div className="mt-1.5 h-1.5 rounded-full bg-secondary overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: '72%' }} transition={{ duration: 1.4, delay: 0.8, ease: 'easeOut' }} className="h-full bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple" /></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
