'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/section';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const plans = [
  { name: 'Découverte', price: { monthly: 0, yearly: 0 }, description: 'Pour tester la magie de RenderX.', credits: '30 crédits', features: ["30 crédits offerts à l'inscription", 'Résolution 720p', 'Vidéos jusqu\'à 15 secondes', 'Filigrane RenderX', 'Accès à 20 templates'], cta: 'Commencer gratuitement', href: '/signup', highlighted: false },
  { name: 'Pro', price: { monthly: 29, yearly: 24 }, description: 'Pour les créateurs réguliers.', credits: '1 000 crédits / mois', features: ['1 000 crédits par mois', 'Résolution 1080p', 'Vidéos jusqu\'à 60 secondes', 'Aucun filigrane', 'Tous les templates (120+)', 'Voix off multilingues', 'Priorité de génération'], cta: 'Choisir Pro', href: '/signup?plan=pro', highlighted: true },
  { name: 'Studio', price: { monthly: 99, yearly: 84 }, description: 'Pour les équipes et agences.', credits: '5 000 crédits / mois', features: ['5 000 crédits par mois', 'Résolution 4K', 'Vidéos jusqu\'à 3 minutes', '5 sièges équipe inclus', 'API & Webhooks', 'Marque blanche', 'Support prioritaire 24/7'], cta: 'Choisir Studio', href: '/signup?plan=studio', highlighted: false },
];

const creditPacks = [{ credits: '100', price: '9 €', perCredit: '0,09 €' }, { credits: '500', price: '39 €', perCredit: '0,078 €', popular: true }, { credits: '2 000', price: '129 €', perCredit: '0,064 €' }];

export function PricingSection() {
  const [cycle, setCycle] = useState<'monthly' | 'yearly'>('monthly');
  return (
    <Section id="tarifs">
      <SectionHeading eyebrow="Tarifs" title="Des prix transparents, sans surprise" description="Choisissez un abonnement ou achetez des crédits à l'unité. Paiements sécurisés par GeniusPay." />
      <div className="mt-8 flex items-center justify-center">
        <div className="inline-flex items-center rounded-full border border-border/60 bg-secondary/40 p-1">
          {(['monthly', 'yearly'] as const).map((c) => (<button key={c} onClick={() => setCycle(c)} className={cn('relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors', cycle === c ? 'text-foreground' : 'text-muted-foreground')}>{cycle === c && <motion.div layoutId="cycle-pill" className="absolute inset-0 rounded-full bg-brand-blue/20 border border-brand-blue/40" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}<span className="relative">{c === 'monthly' ? 'Mensuel' : 'Annuel'}{c === 'yearly' && <span className="ml-1.5 text-xs text-brand-cyan">-17%</span>}</span></button>))}
        </div>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className={cn('relative rounded-2xl border p-6 flex flex-col', p.highlighted ? 'rx-gradient-border bg-card/60 shadow-2xl shadow-brand-blue/10' : 'border-border/60 bg-card/40')}>
            {p.highlighted && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-3 py-1 text-xs font-medium text-white shadow-lg"><Sparkles className="h-3 w-3" />Le plus populaire</span></div>}
            <h3 className="font-display text-lg font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
            <div className="mt-5 flex items-baseline gap-1"><span className="font-display text-4xl font-bold">{p.price[cycle] === 0 ? '0 €' : `${p.price[cycle]} €`}</span><span className="text-sm text-muted-foreground">/mois{cycle === 'yearly' && p.price.yearly > 0 ? ', facturé annuellement' : ''}</span></div>
            <div className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-blue/10 px-2.5 py-1 text-xs text-brand-cyan">{p.credits}</div>
            <ul className="mt-6 space-y-3 flex-1">{p.features.map((f) => (<li key={f} className="flex items-start gap-2.5 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" /><span className="text-muted-foreground">{f}</span></li>))}</ul>
            <Button asChild className="mt-6 group" variant={p.highlighted ? 'default' : 'outline'}><Link href={p.href}>{p.cta}<ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Link></Button>
          </motion.div>
        ))}
      </div>
      <div className="mt-16">
        <div className="text-center"><h3 className="font-display text-2xl font-semibold">Ou achetez des crédits à l'unité</h3><p className="mt-2 text-sm text-muted-foreground">Sans engagement. Les crédits n'expirent jamais.</p></div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
          {creditPacks.map((pack, i) => (<motion.div key={pack.credits} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className={cn('relative rounded-2xl border p-5 text-center', pack.popular ? 'border-brand-blue/50 bg-brand-blue/5' : 'border-border/60 bg-card/40')}>{pack.popular && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-blue px-2.5 py-0.5 text-[10px] font-medium text-white">Meilleure valeur</span>}<div className="font-display text-3xl font-bold">{pack.credits}</div><div className="text-xs text-muted-foreground">crédits</div><div className="mt-3 font-display text-xl font-semibold">{pack.price}</div><div className="text-xs text-muted-foreground">{pack.perCredit} / crédit</div><Button asChild size="sm" variant="outline" className="mt-4 w-full"><Link href="/dashboard/billing">Acheter</Link></Button></motion.div>))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">Paiements sécurisés via <span className="text-foreground font-medium">GeniusPay</span> · Visa · Mastercard · Mobile Money</p>
      </div>
    </Section>
  );
}
