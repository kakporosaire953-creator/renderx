'use client';
import { motion } from 'framer-motion';
import { Section, SectionHeading } from '@/components/section';
import { Cpu, Layers, Clock, Sparkles } from 'lucide-react';

const specs = [{ icon: Cpu, label: 'Moteur propriétaire', value: 'HyperFrames v3' }, { icon: Layers, label: 'Résolution max', value: '3840×2160 (4K)' }, { icon: Clock, label: 'Latence moyenne', value: '< 60 secondes' }, { icon: Sparkles, label: 'Frames par seconde', value: "jusqu'à 60 fps" }];

export function HyperFramesSection() {
  return (
    <Section id="hyperframes">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <SectionHeading eyebrow="HyperFrames" align="left" title="Le moteur qui redéfinit la génération vidéo" description="HyperFrames est notre moteur IA propriétaire. Il combine un modèle de compréhension du langage, un générateur de frames cinématographiques et un assembleur temporel pour produire des vidéos cohérentes, fluides et professionnelles." />
          <div className="mt-8 grid grid-cols-2 gap-4">
            {specs.map((s, i) => (<motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="rounded-xl border border-border/60 bg-card/40 p-4"><s.icon className="h-5 w-5 text-brand-blue" /><div className="mt-3 text-xs text-muted-foreground">{s.label}</div><div className="mt-0.5 font-display text-base font-semibold">{s.value}</div></motion.div>))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-brand-blue/20 via-brand-purple/15 to-brand-cyan/20 blur-3xl rounded-full" />
          <div className="relative rx-gradient-border rounded-3xl">
            <div className="rx-glass rounded-3xl p-6">
              <div className="flex items-center justify-between"><div className="flex items-center gap-2"><div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center"><Cpu className="h-4 w-4 text-white" /></div><span className="font-display font-semibold">HyperFrames</span></div><span className="text-xs text-muted-foreground font-mono">v3.2.1</span></div>
              <div className="mt-6 space-y-3">
                {[{ label: 'Analyse du prompt', color: 'from-brand-blue to-brand-cyan', w: '100%' }, { label: 'Composition des plans', color: 'from-brand-cyan to-brand-purple', w: '85%' }, { label: 'Génération des frames', color: 'from-brand-purple to-brand-blue', w: '72%' }, { label: 'Assemblage temporel', color: 'from-brand-blue to-brand-cyan', w: '60%' }, { label: 'Export MP4', color: 'from-brand-cyan to-brand-purple', w: '45%' }].map((stage, i) => (<div key={stage.label}><div className="flex items-center justify-between text-xs"><span className="text-muted-foreground">{stage.label}</span><span className="font-mono text-foreground/70">{Math.round((i + 1) * 18)}ms</span></div><div className="mt-1.5 h-2 rounded-full bg-secondary overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: stage.w }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }} className={`h-full rounded-full bg-gradient-to-r ${stage.color}`} /></div></div>))}
              </div>
              <div className="mt-6 rounded-xl border border-border/60 bg-background/60 p-3 font-mono text-xs text-muted-foreground"><span className="text-brand-cyan">$</span> renderx generate<span className="text-foreground"> --prompt</span> scene.txt<span className="text-foreground"> --res</span> 4k<span className="text-foreground"> --fps</span> 60<br /><span className="text-emerald-400">✓</span> Vidéo générée en 47.2s</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
