'use client';
import { Section, SectionHeading, FadeIn } from '@/components/section';
import { Wand2, Film, Layers, Globe, Gauge, ShieldCheck, Palette, Code2 } from 'lucide-react';

const features = [
  { icon: Wand2, title: 'Texte vers vidéo', description: "Décrivez une scène en langage naturel. HyperFrames interprète le contexte, le style et le cadrage pour produire un montage cohérent.", accent: 'from-brand-blue to-brand-cyan' },
  { icon: Film, title: 'Rendu 4K & 1080p', description: "Exportez en MP4 jusqu'en 4K 60fps, avec gestion du codec H.264 et H.265 pour une compatibilité maximale.", accent: 'from-brand-purple to-brand-blue' },
  { icon: Layers, title: 'Templates éditables', description: "Démarrez depuis plus de 120 templates : publicités, intros, reels, présentations produit. Personnalisez couleurs, logo et texte.", accent: 'from-brand-cyan to-brand-purple' },
  { icon: Globe, title: 'Multilingue', description: "Générez dans 32 langues avec voix off naturelles, sous-titres synchronisés et adaptation culturelle automatique.", accent: 'from-brand-blue to-brand-purple' },
  { icon: Gauge, title: 'Vitesse extrême', description: "Une vidéo de 30 secondes en moins de 60 secondes grâce au pipeline parallélisé d'HyperFrames v3.", accent: 'from-brand-cyan to-brand-blue' },
  { icon: ShieldCheck, title: 'Sécurité enterprise', description: "Chiffrement AES-256 au repos et TLS 1.3 en transit. Vos prompts et vidéos ne sont jamais utilisés pour l'entraînement.", accent: 'from-brand-purple to-brand-cyan' },
  { icon: Palette, title: 'Direction artistique', description: "Contrôlez la palette, la lumière, le grain, le ratio et le style cinématographique avec des réglages fins.", accent: 'from-brand-blue to-brand-purple' },
  { icon: Code2, title: 'API & Webhooks', description: "Intégrez la génération vidéo dans vos produits via une API REST documentée, avec webhooks et SDK officiels.", accent: 'from-brand-cyan to-brand-blue' },
];

export function FeaturesSection() {
  return (
    <Section id="produit">
      <SectionHeading eyebrow="Fonctionnalités" title="Tout ce qu'il faut pour créer des vidéos professionnelles" description="Une plateforme complète, du prompt à l'export, pensée pour la production à grande échelle." />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <FadeIn key={f.title} delay={i * 0.05}>
            <div className="group relative h-full rounded-2xl border border-border/60 bg-card/40 p-5 hover:border-brand-blue/40 transition-colors overflow-hidden">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} text-white shadow-lg`}><f.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
