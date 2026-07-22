'use client';
import { motion } from 'framer-motion';
import { PenLine, Cpu, Download } from 'lucide-react';
import { Section, SectionHeading } from '@/components/section';

const steps = [
  { icon: PenLine, step: '01', title: 'Décrivez', description: "Rédigez votre idée en français ou en anglais. Ajoutez le style, la durée, le ratio et la résolution souhaités." },
  { icon: Cpu, step: '02', title: 'Générez', description: "HyperFrames analyse votre prompt, compose les plans, génère les frames et assemble la vidéo en quelques secondes." },
  { icon: Download, step: '03', title: 'Exportez', description: "Téléchargez le MP4, partagez par lien, ou publiez directement sur vos réseaux via les intégrations natives." },
];

export function HowItWorksSection() {
  return (
    <Section id="fonctionnement">
      <SectionHeading eyebrow="Fonctionnement" title="Une simplicité délibérée" description="Trois étapes. Aucune courbe d'apprentissage. Des résultats dignes d'un studio de production." />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div key={s.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="relative rounded-2xl border border-border/60 bg-card/40 p-6">
            <div className="flex items-center justify-between"><div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/60 border border-border/60 text-brand-blue"><s.icon className="h-5 w-5" /></div><span className="font-display text-3xl font-bold text-foreground/10">{s.step}</span></div>
            <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            {i < steps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-3 h-px w-6 bg-gradient-to-r from-brand-blue/60 to-transparent" />}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
