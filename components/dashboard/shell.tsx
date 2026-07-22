'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Wand2, Film, History, CreditCard, User, Settings, Bell, Menu, LogOut, ChevronRight } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const nav = [
  { href: '/dashboard', label: "Vue d'ensemble", icon: LayoutDashboard },
  { href: '/dashboard/generate', label: 'Générer', icon: Wand2 },
  { href: '/dashboard/library', label: 'Bibliothèque', icon: Film },
  { href: '/dashboard/history', label: 'Historique', icon: History },
  { href: '/dashboard/billing', label: 'Facturation', icon: CreditCard },
  { href: '/dashboard/profile', label: 'Profil', icon: User },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const Sidebar = (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center px-5 border-b border-border/60"><Link href="/"><Logo size="md" /></Link></div>
      <nav className="flex-1 space-y-1 p-3">
        {nav.map((item) => { const active = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href)); return (<Link key={item.href} href={item.href} className={cn('group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors', active ? 'bg-brand-blue/10 text-foreground border border-brand-blue/30' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent')}><item.icon className={cn('h-4 w-4', active ? 'text-brand-blue' : 'text-muted-foreground group-hover:text-foreground')} />{item.label}{active && <ChevronRight className="ml-auto h-3.5 w-3.5 text-brand-blue" />}</Link>); })}
      </nav>
      <div className="m-3 rounded-xl border border-border/60 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 p-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground"><span>Crédits restants</span><Settings className="h-3.5 w-3.5" /></div>
        <div className="mt-1.5 font-display text-2xl font-semibold">842</div>
        <div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden"><div className="h-full w-[84%] bg-gradient-to-r from-brand-blue to-brand-purple" /></div>
        <Button asChild size="sm" variant="outline" className="mt-3 w-full"><Link href="/dashboard/billing">Recharger</Link></Button>
      </div>
      <div className="border-t border-border/60 p-3"><div className="flex items-center gap-3 rounded-lg p-2"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple text-xs font-semibold text-white">JD</div><div className="min-w-0 flex-1"><div className="truncate text-sm font-medium">Jean Dupont</div><div className="truncate text-xs text-muted-foreground">jean@renderx.ai</div></div><Link href="/login" className="text-muted-foreground hover:text-foreground" aria-label="Déconnexion"><LogOut className="h-4 w-4" /></Link></div></div>
    </div>
  );
  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-border/60 bg-card/40 lg:block">{Sidebar}</aside>
      <AnimatePresence>
        {mobileOpen && (<><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden" /><motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} transition={{ type: 'spring', stiffness: 400, damping: 40 }} className="fixed inset-y-0 left-0 z-50 w-64 border-r border-border/60 bg-background lg:hidden">{Sidebar}</motion.aside></>)}
      </AnimatePresence>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border/60 bg-background/80 px-4 backdrop-blur-xl sm:px-6">
          <button onClick={() => setMobileOpen(true)} className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60" aria-label="Ouvrir le menu"><Menu className="h-4 w-4" /></button>
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground"><span>Studio</span><ChevronRight className="h-3.5 w-3.5" /><span className="text-foreground">{currentLabel(pathname)}</span></div>
          <div className="ml-auto flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex"><Link href="/dashboard/generate"><Wand2 className="mr-1.5 h-3.5 w-3.5" />Nouvelle vidéo</Link></Button>
            <button className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-foreground" aria-label="Notifications"><Bell className="h-4 w-4" /><span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-brand-blue" /></button>
          </div>
        </header>
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

function currentLabel(pathname: string) { const found = nav.find((n) => n.href === pathname || (n.href !== '/dashboard' && pathname.startsWith(n.href))); return found?.label ?? "Vue d'ensemble"; }
