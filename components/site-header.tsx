'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/#produit', label: 'Produit' },
  { href: '/#hyperframes', label: 'HyperFrames' },
  { href: '/#templates', label: 'Templates' },
  { href: '/#tarifs', label: 'Tarifs' },
  { href: '/docs', label: 'Documentation' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-300', scrolled ? 'pt-3' : 'pt-5')}>
        <div className={cn('flex h-14 items-center justify-between rounded-2xl px-3 sm:px-4 transition-all duration-300', scrolled ? 'rx-glass border border-border/60 shadow-2xl shadow-black/40' : 'border border-transparent')}>
          <Link href="/" className="flex items-center" aria-label="RenderX accueil"><Logo size="md" animated /></Link>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (<Link key={l.href} href={l.href} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50">{l.label}</Link>))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost" size="sm"><Link href="/login">Connexion</Link></Button>
            <Button asChild size="sm" className="group"><Link href="/signup">Essai gratuit<span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span></Link></Button>
          </div>
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground" onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="md:hidden mt-2 rx-glass border border-border/60 rounded-2xl p-3 shadow-2xl shadow-black/40">
              <nav className="flex flex-col">
                {navLinks.map((l) => (<Link key={l.href} href={l.href} className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary/50">{l.label}</Link>))}
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" size="sm"><Link href="/login">Connexion</Link></Button>
                  <Button asChild size="sm"><Link href="/signup">Essai gratuit</Link></Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
