'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Building2, Loader2, Check, MapPin } from 'lucide-react';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const channels = [{ icon: Mail, label: 'Support', value: 'support@renderx.ai', desc: 'Réponse en moins de 2h ouvrées' }, { icon: Building2, label: 'Commercial', value: 'sales@renderx.ai', desc: 'Pour les équipes et enterprise' }, { icon: MessageSquare, label: 'Presse', value: 'press@renderx.ai', desc: 'Relations médias' }];

export function ContactContent() {
  const [sending, setSending] = useState(false);
  const send = async (e: React.FormEvent) => { e.preventDefault(); setSending(true); await new Promise((r) => setTimeout(r, 900)); setSending(false); toast.success('Message envoyé. Nous vous répondrons rapidement.'); (e.target as HTMLFormElement).reset(); };
  return (
    <Section>
      <div className="max-w-5xl mx-auto">
        <div className="text-center"><h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Parlons de votre projet</h1><p className="mt-4 text-muted-foreground max-w-xl mx-auto">Une question, un projet enterprise, un partenariat ? Notre équipe vous répond avec attention.</p></div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {channels.map((c, i) => (<motion.div key={c.label} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card/40 p-5"><div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/60 border border-border/60 text-brand-blue"><c.icon className="h-5 w-5" /></div><div><div className="text-sm font-medium">{c.label}</div><a href={`mailto:${c.value}`} className="text-sm text-brand-blue hover:underline">{c.value}</a><div className="text-xs text-muted-foreground">{c.desc}</div></div></motion.div>))}
            <div className="rounded-2xl border border-border/60 bg-card/40 p-5"><div className="flex items-center gap-2 text-sm font-medium"><MapPin className="h-4 w-4 text-brand-purple" />Bureau</div><p className="mt-2 text-sm text-muted-foreground">RenderX SAS<br />Plateau, Abidjan<br />Côte d'Ivoire</p></div>
          </div>
          <motion.form onSubmit={send} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-border/60 bg-card/40 p-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="name">Nom</Label><Input id="name" required placeholder="Votre nom" /></div><div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" required placeholder="vous@entreprise.com" /></div></div>
            <div className="space-y-2"><Label htmlFor="company">Entreprise (optionnel)</Label><Input id="company" placeholder="Nom de votre entreprise" /></div>
            <div className="space-y-2"><Label htmlFor="message">Message</Label><textarea id="message" required rows={5} placeholder="Comment pouvons-nous vous aider ?" className="w-full resize-none rounded-xl border border-border/60 bg-background/60 p-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" /></div>
            <Button type="submit" className="w-full" disabled={sending}>{sending ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Envoi…</>) : (<><Check className="mr-2 h-4 w-4" />Envoyer le message</>)}</Button>
          </motion.form>
        </div>
      </div>
    </Section>
  );
}
