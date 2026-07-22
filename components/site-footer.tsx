import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Twitter, Github, Linkedin, Youtube } from 'lucide-react';

const columns = [
  { title: 'Produit', links: [{ href: '/#produit', label: 'Fonctionnalités' }, { href: '/#hyperframes', label: 'HyperFrames' }, { href: '/#templates', label: 'Templates' }, { href: '/#tarifs', label: 'Tarifs' }, { href: '/dashboard', label: 'Tableau de bord' }] },
  { title: 'Ressources', links: [{ href: '/docs', label: 'Documentation API' }, { href: '/help', label: "Centre d'aide" }, { href: '/blog', label: 'Blog' }, { href: '/contact', label: 'Contact' }] },
  { title: 'Entreprise', links: [{ href: '/legal/privacy', label: 'Confidentialité' }, { href: '/legal/terms', label: "Conditions d'utilisation" }, { href: '/legal/security', label: 'Sécurité' }] },
];

const socials = [{ href: 'https://twitter.com', icon: Twitter, label: 'Twitter' }, { href: 'https://github.com', icon: Github, label: 'GitHub' }, { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' }, { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' }];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/60 mt-24">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo size="lg" animated />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">La plateforme de génération vidéo par IA. Transformez une simple description en vidéo MP4 professionnelle en quelques secondes, propulsée par le moteur HyperFrames.</p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (<Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:border-brand-blue/60 transition-colors"><s.icon className="h-4 w-4" /></Link>))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground">{col.title}</h4>
              <ul className="mt-4 space-y-3">{col.links.map((l) => (<li key={l.href}><Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</Link></li>))}</ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-border/60">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} RenderX. Tous droits réservés. Propulsé par HyperFrames.</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-rx-pulse-glow" />Tous les systèmes opérationnels</div>
        </div>
      </div>
    </footer>
  );
}
