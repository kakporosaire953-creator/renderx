'use client';
import { useState } from 'react';
import { User, Mail, Globe, Bell, Shield, Loader2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';

export default function ProfilePage() {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const save = async (e: React.FormEvent) => { e.preventDefault(); setSaving(true); await new Promise((r) => setTimeout(r, 800)); setSaving(false); setSaved(true); toast.success('Profil mis à jour.'); setTimeout(() => setSaved(false), 2000); };
  return (
    <div className="space-y-8 max-w-3xl">
      <div><h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">Profil</h1><p className="mt-1 text-sm text-muted-foreground">Gérez vos informations personnelles et préférences.</p></div>
      <div className="flex items-center gap-5"><div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple text-2xl font-semibold text-white">JD</div><div><Button variant="outline" size="sm">Changer la photo</Button><p className="mt-2 text-xs text-muted-foreground">JPG, PNG ou GIF. Max 2 Mo.</p></div></div>
      <form onSubmit={save} className="rounded-2xl border border-border/60 bg-card/40 p-6 space-y-5">
        <div className="flex items-center gap-2 text-sm font-medium"><User className="h-4 w-4 text-brand-blue" />Informations personnelles</div>
        <div className="grid gap-4 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="name">Nom complet</Label><Input id="name" defaultValue="Jean Dupont" /></div><div className="space-y-2"><Label htmlFor="email">Email</Label><div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input id="email" type="email" defaultValue="jean@renderx.ai" className="pl-9" /></div></div><div className="space-y-2"><Label htmlFor="company">Entreprise</Label><Input id="company" defaultValue="RenderX Studio" /></div><div className="space-y-2"><Label htmlFor="country">Pays</Label><div className="relative"><Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input id="country" defaultValue="France" className="pl-9" /></div></div></div>
        <div className="flex justify-end"><Button type="submit" disabled={saving}>{saving ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Enregistrement…</>) : saved ? (<><Check className="mr-2 h-4 w-4" />Enregistré</>) : 'Enregistrer'}</Button></div>
      </form>
      <div className="rounded-2xl border border-border/60 bg-card/40 p-6 space-y-4">
        <div className="flex items-center gap-2 text-sm font-medium"><Bell className="h-4 w-4 text-brand-blue" />Notifications</div>
        {[{ label: 'Génération terminée', desc: 'Recevez un email quand une vidéo est prête.' }, { label: 'Crédits faibles', desc: 'Alerte quand le solde passe sous 50 crédits.' }, { label: 'Newsletter produit', desc: 'Nouveautés et mises à jour de RenderX.' }].map((n, i) => (<div key={n.label} className="flex items-center justify-between gap-4 py-2"><div><div className="text-sm font-medium">{n.label}</div><div className="text-xs text-muted-foreground">{n.desc}</div></div><Switch defaultChecked={i < 2} /></div>))}
      </div>
      <div className="rounded-2xl border border-border/60 bg-card/40 p-6 space-y-4">
        <div className="flex items-center gap-2 text-sm font-medium"><Shield className="h-4 w-4 text-brand-cyan" />Sécurité</div>
        <div className="space-y-2"><Label htmlFor="current">Mot de passe actuel</Label><Input id="current" type="password" placeholder="••••••••" /></div>
        <div className="grid gap-4 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="new">Nouveau mot de passe</Label><Input id="new" type="password" placeholder="••••••••" /></div><div className="space-y-2"><Label htmlFor="confirm">Confirmer</Label><Input id="confirm" type="password" placeholder="••••••••" /></div></div>
        <div className="flex justify-end"><Button variant="outline">Mettre à jour le mot de passe</Button></div>
      </div>
    </div>
  );
}
