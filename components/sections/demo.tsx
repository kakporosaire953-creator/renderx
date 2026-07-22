'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Wand2, Download, Check } from 'lucide-react';
import { Section, SectionHeading } from '@/components/section';
import { Button } from '@/components/ui/button';

const samples = [
  'Un produit cosmétique tournant sur un socle, fond noir, lumière studio, macro, 4K',
  "Survol aérien d'une côte tropicale au coucher du soleil, drone, cinématographique",
  'Logo animé en 3D, métal brossé, éclairage néon bleu et violet, fond sombre',
];

export function DemoSection() {
  const [prompt, setPrompt] = useState(samples[0]);
  const [status, setStatus] = useState<'idle' | 'generating' | 'done'>('idle');
  const [progress, setProgress] = useState(0);

  const generate = () => {
    setStatus('generating'); setProgress(0);
    const interval = setInterval(() => { setProgress((p) => { if (p >= 100) { clearInterval(interval); setStatus('done'); return 100; } return p + 4; }); }, 80);
  };

  return (
    <Section id="demo">
      <SectionHeading eyebrow="Démonstration" title="De la phrase à la vidéo en trois étapes" description="Écrivez une description, lancez la génération, et obtenez un MP4 prêt à diffuser. Aucune compétence technique requise." />
      <div className="mt-12 grid gap-6 lg:grid-cols-2 items-start">
        <div className="rx-glass rounded-2xl border border-border/60 p-5">
          <div className="flex items-center gap-2 text-sm font-medium"><Wand2 className="h-4 w-4 text-brand-blue" />Étape 1 — Décrivez votre vidéo</div>
          <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={4} className="mt-4 w-full resize-none rounded-xl border border-border/60 bg-background/60 p-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Décrivez la scène, le style, la lumière, le cadrage…" />
          <div className="mt-3 flex flex-wrap gap-2">{samples.map((s, i) => (<button key={i} onClick={() => setPrompt(s)} className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs text-muted-foreground hover:text-foreground hover:border-brand-blue/60 transition-colors text-left">{s.length > 48 ? s.slice(0, 48) + '…' : s}</button>))}</div>
          <Button className="mt-5 w-full group" size="lg" onClick={generate} disabled={status === 'generating'}>
            {status === 'generating' ? (<><motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="inline-block h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full" />Génération en cours…</>) : (<><Wand2 className="mr-1.5 h-4 w-4" />Générer la vidéo</>)}
          </Button>
        </div>
        <div className="rx-glass rounded-2xl border border-border/60 p-5">
          <div className="flex items-center gap-2 text-sm font-medium"><Play className="h-4 w-4 text-brand-purple" />Étape 2 — Aperçu de votre vidéo</div>
          <div className="relative mt-4 aspect-video rounded-xl overflow-hidden border border-border/60 bg-background/60">
            <AnimatePresence mode="wait">
              {status === 'idle' && (<motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">Lancez la génération pour voir l'aperçu</motion.div>)}
              {status === 'generating' && (<motion.div key="gen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0"><div className="absolute inset-0 bg-gradient-to-br from-brand-blue/30 via-brand-purple/20 to-brand-cyan/30" /><div className="absolute inset-0 rx-shimmer" /><div className="absolute bottom-0 inset-x-0 p-4"><div className="flex items-center justify-between text-xs text-white/80"><span>Rendu HyperFrames</span><span className="font-mono">{progress}%</span></div><div className="mt-1.5 h-1.5 rounded-full bg-black/40 overflow-hidden"><motion.div animate={{ width: `${progress}%` }} className="h-full bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple" /></div></div></motion.div>)}
              {status === 'done' && (<motion.div key="done" initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="absolute inset-0"><div className="absolute inset-0 bg-gradient-to-br from-brand-blue/40 via-brand-purple/30 to-brand-cyan/40" /><div className="absolute inset-0 flex items-center justify-center"><div className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"><Play className="h-6 w-6 text-white fill-white" /></div></div><div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 backdrop-blur px-2.5 py-1 text-xs text-emerald-300"><Check className="h-3 w-3" />Rendu terminé</div><div className="absolute bottom-3 right-3 text-[10px] text-white/70 font-mono">1920×1080 · 24fps · MP4</div></motion.div>)}
            </AnimatePresence>
          </div>
          <div className="mt-4 flex items-center justify-between"><div className="text-xs text-muted-foreground">{status === 'done' ? 'renderx_001.mp4 · 8.2 Mo' : 'En attente'}</div><Button variant="outline" size="sm" disabled={status !== 'done'} className="group"><Download className="mr-1.5 h-3.5 w-3.5" />Exporter MP4</Button></div>
        </div>
      </div>
    </Section>
  );
}
