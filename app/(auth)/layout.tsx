import Link from 'next/link';
import { Logo } from '@/components/logo';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="relative hidden lg:flex flex-col justify-between p-10 overflow-hidden border-r border-border/60">
        <div className="absolute inset-0 rx-grid-bg opacity-40" />
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-brand-blue/20 blur-[120px] animate-rx-pulse-glow" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-purple/20 blur-[120px] animate-rx-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <Link href="/" className="relative"><Logo size="lg" animated /></Link>
        <div className="relative"><h2 className="font-display text-3xl font-semibold tracking-tight max-w-md leading-tight">La génération vidéo IA,<span className="rx-gradient-text"> enfin à la portée de tous.</span></h2><p className="mt-4 max-w-md text-muted-foreground">Rejoignez des milliers de créateurs qui transforment leurs idées en vidéos professionnelles en quelques secondes.</p><div className="mt-10 grid grid-cols-3 gap-4 max-w-md">{[{ v: '2,4M+', l: 'Vidéos générées' }, { v: '47s', l: 'Temps moyen' }, { v: '180+', l: 'Pays' }].map((s) => (<div key={s.l}><div className="font-display text-2xl font-semibold rx-gradient-text">{s.v}</div><div className="text-xs text-muted-foreground">{s.l}</div></div>))}</div></div>
        <p className="relative text-xs text-muted-foreground">© {new Date().getFullYear()} RenderX · Propulsé par HyperFrames</p>
      </div>
      <div className="flex flex-col"><div className="lg:hidden p-6 border-b border-border/60"><Link href="/"><Logo size="md" animated /></Link></div><div className="flex flex-1 items-center justify-center p-6"><div className="w-full max-w-sm">{children}</div></div></div>
    </div>
  );
}
