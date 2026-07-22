'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Loader2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const benefits = ["30 crédits offerts à l'inscription", 'Aucune carte bancaire requise', 'Accès à tous les templates', 'Annulez à tout moment'];

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const onSubmit = async (e: React.FormEvent) => { e.preventDefault(); setLoading(true); await new Promise((r) => setTimeout(r, 1000)); setLoading(false); toast.success('Compte créé ! 30 crédits ajoutés à votre solde.'); router.push('/dashboard'); };
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
      <h1 className="font-display text-2xl font-semibold tracking-tight">Créez votre studio RenderX</h1>
      <p className="mt-2 text-sm text-muted-foreground">Commencez gratuitement. 30 crédits offerts, sans carte bancaire.</p>
      <ul className="mt-5 grid grid-cols-2 gap-2">{benefits.map((b) => (<li key={b} className="flex items-center gap-1.5 text-xs text-muted-foreground"><Check className="h-3.5 w-3.5 text-brand-blue shrink-0" />{b}</li>))}</ul>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div className="space-y-2"><Label htmlFor="name">Nom complet</Label><div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jean Dupont" className="pl-9" /></div></div>
        <div className="space-y-2"><Label htmlFor="email">Email</Label><div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="vous@entreprise.com" className="pl-9" /></div></div>
        <div className="space-y-2"><Label htmlFor="password">Mot de passe</Label><div className="relative"><Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input id="password" type="password" required minLength={8} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Au moins 8 caractères" className="pl-9" /></div></div>
        <Button type="submit" className="w-full group" disabled={loading}>{loading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Création du compte…</>) : (<>Créer mon compte<ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>)}</Button>
      </form>
      <p className="mt-6 text-center text-xs text-muted-foreground">En vous inscrivant, vous acceptez nos <Link href="/legal/terms" className="text-brand-blue hover:underline">Conditions d'utilisation</Link> et notre <Link href="/legal/privacy" className="text-brand-blue hover:underline">Politique de confidentialité</Link>.</p>
      <p className="mt-4 text-center text-sm text-muted-foreground">Déjà un compte ? <Link href="/login" className="text-brand-blue hover:underline font-medium">Se connecter</Link></p>
    </motion.div>
  );
}
