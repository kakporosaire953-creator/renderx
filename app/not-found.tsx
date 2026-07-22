'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 rx-grid-bg opacity-40" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-brand-blue/15 blur-[140px]" />
      <div className="relative text-center px-6">
        <Link href="/" className="inline-block"><Logo size="xl" animated /></Link>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-10 font-display text-7xl sm:text-9xl font-bold tracking-tight rx-gradient-text">404</motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 text-lg text-muted-foreground max-w-md mx-auto">Cette page n'existe pas, ou n'a pas encore été générée par HyperFrames.</motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" className="group"><Link href="/"><Home className="mr-1.5 h-4 w-4" />Retour à l'accueil</Link></Button>
          <Button asChild size="lg" variant="outline"><Link href="/docs"><ArrowLeft className="mr-1.5 h-4 w-4" />Documentation</Link></Button>
        </motion.div>
      </div>
    </main>
  );
}
