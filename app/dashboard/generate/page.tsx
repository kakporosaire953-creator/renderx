'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, Play, Download, Check, Settings2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const ratios = ['16:9', '9:16', '1:1', '4:5'];
const resolutions = ['720p', '1080p', '4K'];
const durations = ['15s', '30s', '60s', '3min'];
const styles = ['Cinématographique', 'Animé', 'Réaliste', 'Aquarelle', '3D', 'Minimaliste'];
const samples = [
  "Survol aérien d'une côte tropicale au coucher du soleil, drone, cinématographique",
  'Produit cosmétique tournant sur un socle, lumière studio, macro, 4K',
  'Logo animé 3D, métal brossé, néon bleu et violet, fond sombre',
];

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('');
  const [ratio, setRatio] = useState('16:9');
  const [res, setRes] = useState('1080p');
  const [duration, setDuration] = useState('30s');
  const [style, setStyle] = useState('Cinématographique');
  const [status, setStatus] = useState<'idle' | 'generating' | 'done'>('idle');
  const [progress, setProgress] = useState(0);

  const durationNum = parseInt(duration) || 30;
  const cost = Math.max(5, Math.round(durationNum * (res === '4K' ? 2 : res === '1080p' ? 1 : 0.5)));

  const generate = () => {
    if (!prompt.trim()) {
      toast.error('Décrivez d\'abord votre vidéo.');
      return;
    }
    setStatus('generating');
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setStatus('done');
          toast.success('Vidéo générée avec succès !');
          return 100;
        }
        return p + 3;
      });
    }, 90);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">Générer une vidéo</h1>
        <p className="mt-1 text-sm text-muted-foreground">Décrivez votre idée, ajustez les paramètres, et laissez HyperFrames faire le reste.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-5">
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5 space-y-4">
            <div className="space-y-2">
              <Label>Description de la vidéo</Label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={5}
                placeholder="Décrivez la scène, le style, la lumière, le cadrage…"
                className="w-full resize-none rounded-xl border border-border/60 bg-background/60 p-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <div className="flex flex-wrap gap-2">
                {samples.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setPrompt(s)}
                    className="rounded-full border border-border/60 bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground hover:border-brand-blue/60 transition-colors"
                  >
                    Exemple {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/40 p-5 space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Settings2 className="h-4 w-4 text-brand-blue" />
              Paramètres
            </div>
            <div className="space-y-2">
              <Label>Ratio</Label>
              <div className="grid grid-cols-4 gap-2">
                {ratios.map((r) => (
                  <button
                    key={r}
                    onClick={() => setRatio(r)}
                    className={cn(
                      'rounded-lg border px-2 py-2 text-xs font-medium transition-colors',
                      ratio === r ? 'border-brand-blue/50 bg-brand-blue/10 text-foreground' : 'border-border/60 text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Résolution</Label>
              <div className="grid grid-cols-3 gap-2">
                {resolutions.map((r) => (
                  <button
                    key={r}
                    onClick={() => setRes(r)}
                    className={cn(
                      'rounded-lg border px-2 py-2 text-xs font-medium transition-colors',
                      res === r ? 'border-brand-blue/50 bg-brand-blue/10 text-foreground' : 'border-border/60 text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Durée</Label>
              <div className="grid grid-cols-4 gap-2">
                {durations.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={cn(
                      'rounded-lg border px-2 py-2 text-xs font-medium transition-colors',
                      duration === d ? 'border-brand-blue/50 bg-brand-blue/10 text-foreground' : 'border-border/60 text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Style</Label>
              <div className="flex flex-wrap gap-2">
                {styles.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStyle(s)}
                    className={cn(
                      'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
                      style === s ? 'border-brand-blue/50 bg-brand-blue/10 text-foreground' : 'border-border/60 text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Coût estimé</span>
              <span className="font-display text-lg font-semibold rx-gradient-text">{cost} crédits</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Solde actuel : 842 crédits</p>
            <Button
              className="mt-4 w-full group"
              size="lg"
              onClick={generate}
              disabled={status === 'generating'}
            >
              {status === 'generating' ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="inline-block h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                  />
                  Génération en cours…
                </>
              ) : (
                <>
                  <Wand2 className="mr-1.5 h-4 w-4" />
                  Générer la vidéo
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5 sticky top-24">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-base font-semibold">Aperçu</h2>
              {status === 'done' && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs text-emerald-400">
                  <Check className="h-3 w-3" />Prêt
                </span>
              )}
            </div>
            <div className="relative mt-4 aspect-video rounded-xl overflow-hidden border border-border/60 bg-background/60">
              <AnimatePresence mode="wait">
                {status === 'idle' && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                  >
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                      Votre aperçu apparaîtra ici une fois la génération lancée.
                    </p>
                  </motion.div>
                )}
                {status === 'generating' && (
                  <motion.div
                    key="gen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/30 via-brand-purple/20 to-brand-cyan/30" />
                    <div className="absolute inset-0 rx-shimmer" />
                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <div className="flex items-center justify-between text-xs text-white/80">
                        <span>Rendu HyperFrames</span>
                        <span className="font-mono">{progress}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 rounded-full bg-black/40 overflow-hidden">
                        <motion.div
                          animate={{ width: `${progress}%` }}
                          className="h-full bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                {status === 'done' && (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/40 via-brand-purple/30 to-brand-cyan/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 text-white fill-white" />
                      </button>
                    </div>
                    <div className="absolute bottom-3 right-3 text-[10px] text-white/70 font-mono">
                      {res} · {ratio} · {duration}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {status === 'done' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex gap-2"
              >
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="mr-1.5 h-3.5 w-3.5" />
                  Exporter MP4
                </Button>
                <Button variant="outline" size="sm" className="flex-1">Partager</Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
