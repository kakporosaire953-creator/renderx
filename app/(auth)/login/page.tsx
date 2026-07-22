'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = async (e: React.FormEvent) => { e.preventDefault(); setLoading(true); await new Promise((r) => setTimeout(r, 900)); setLoading(false); toast.success('Connexion réussie. Redirection…'); router.push('/dashboard'); };
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
      <h1 className="font-display text-2xl font-semibold tracking-tight">Bon retour parmi nous</h1>
      <p className="mt-2 text-sm text-muted-foreground">Connectez-vous pour accéder à votre studio RenderX.</p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div className="space-y-2"><Label htmlFor="email">Email</Label><div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="vous@entreprise.com" className="pl-9" /></div></div>
        <div className="space-y-2"><div className="flex items-center justify-between"><Label htmlFor="password">Mot de passe</Label><Link href="#" className="text-xs text-brand-blue hover:underline">Mot de passe oublié ?</Link></div><div className="relative"><Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="pl-9" /></div></div>
        <Button type="submit" className="w-full group" disabled={loading}>{loading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Connexion…</>) : (<>Se connecter<ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>)}</Button>
      </form>
      <div className="relative my-6"><div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border/60" /></div><div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">ou</span></div></div>
      <Button variant="outline" className="w-full" type="button">Continuer avec Google</Button>
      <p className="mt-6 text-center text-sm text-muted-foreground">Pas encore de compte ? <Link href="/signup" className="text-brand-blue hover:underline font-medium">Créer un compte</Link></p>
    </motion.div>
  );
}
