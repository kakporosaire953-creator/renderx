'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Section, SectionHeading } from '@/components/section';

const faqs = [
  { q: "Qu'est-ce que RenderX ?", a: "RenderX est une plateforme SaaS qui transforme une description textuelle en vidéo MP4 professionnelle grâce à notre moteur IA propriétaire, HyperFrames. Aucune compétence de montage n'est requise." },
  { q: "Combien de temps prend la génération d'une vidéo ?", a: "Une vidéo de 30 secondes en 1080p est généralement générée en moins de 60 secondes. La durée dépend de la résolution, de la longueur de la vidéo et de la charge du service." },
  { q: "Qu'est-ce qu'un crédit ?", a: "Un crédit correspond à une unité de génération. Une vidéo de 15 secondes en 720p consomme environ 5 crédits, tandis qu'une vidéo de 60 secondes en 4K peut en consommer 40. Le détail est visible avant chaque génération." },
  { q: "Mes données sont-elles utilisées pour entraîner l'IA ?", a: "Non. Vos prompts, vos vidéos et vos données personnelles ne sont jamais utilisés pour entraîner nos modèles. Vos données sont chiffrées au repos (AES-256) et en transit (TLS 1.3)." },
  { q: "Puis-je utiliser les vidéos commercialement ?", a: "Oui. À partir du plan Pro, vous disposez d'une licence commerciale complète sur toutes les vidéos générées, sans filigrane. Le plan Découverte inclut un filigrane RenderX et une licence personnelle." },
  { q: "Comment fonctionne GeniusPay ?", a: "GeniusPay est notre prestataire de paiement. Il sécurise vos transactions par carte bancaire (Visa, Mastercard) et par Mobile Money. Vos informations de paiement ne transitent jamais par nos serveurs." },
  { q: "Puis-je annuler mon abonnement à tout moment ?", a: "Oui, sans frais ni engagement. L'annulation prend effet à la fin de la période de facturation en cours. Vos crédits restent disponibles après l'annulation." },
  { q: "Proposez-vous une API ?", a: "Oui. Le plan Studio inclut l'accès à l'API REST RenderX avec webhooks et SDK officiels (JavaScript, Python). La documentation est disponible sur la page Documentation." },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <SectionHeading eyebrow="FAQ" title="Questions fréquentes" description="Tout ce que vous devez savoir avant de commencer." />
      <div className="mt-12 mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <div key={i} className="rounded-xl border border-border/60 bg-card/40 overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-4 text-left" aria-expanded={open === i}>
              <span className="font-medium text-foreground">{f.q}</span>
              <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 text-muted-foreground"><Plus className="h-4 w-4" /></motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}><p className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p></motion.div>)}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}
