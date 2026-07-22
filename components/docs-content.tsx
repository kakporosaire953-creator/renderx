'use client';
import { useState } from 'react';
import { Terminal, Copy, Check, Book } from 'lucide-react';
import { Section } from '@/components/section';

const endpoints = [
  { method: 'POST', path: '/v1/videos', desc: 'Lancer une génération vidéo' },
  { method: 'GET', path: '/v1/videos/:id', desc: "Récupérer le statut d'une vidéo" },
  { method: 'GET', path: '/v1/videos', desc: 'Lister toutes les vidéos' },
  { method: 'DELETE', path: '/v1/videos/:id', desc: 'Supprimer une vidéo' },
  { method: 'GET', path: '/v1/credits', desc: 'Consulter le solde de crédits' },
  { method: 'POST', path: '/v1/webhooks', desc: 'Enregistrer un webhook' },
];

const codeExample = `curl -X POST https://api.renderx.ai/v1/videos \\
  -H "Authorization: Bearer rx_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Survol aérien d'une côte tropicale au coucher du soleil",
    "resolution": "1080p",
    "ratio": "16:9",
    "duration": 30,
    "style": "cinematic"
  }'`;

const responseExample = `{
  "id": "vid_8x2k9m",
  "status": "processing",
  "estimated_time": 47,
  "credits_used": 12,
  "created_at": "2024-07-12T14:32:00Z"
}`;

export function DocsContent() {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(codeExample); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"><Book className="h-3 w-3 text-brand-blue" />Documentation</div>
        <h1 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">API RenderX</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">L'API REST RenderX vous permet d'intégrer la génération vidéo IA directement dans vos applications. Authentification par clé API, réponses JSON, webhooks pour les événements asynchrones.</p>
        <div className="mt-12"><h2 className="font-display text-xl font-semibold">Authentification</h2><p className="mt-2 text-sm text-muted-foreground">Toutes les requêtes doivent inclure votre clé API dans l'en-tête <code className="mx-1 rounded bg-secondary px-1.5 py-0.5 text-xs font-mono">Authorization</code>. Générez vos clés depuis le tableau de bord.</p></div>
        <div className="mt-8"><h2 className="font-display text-xl font-semibold">Endpoints</h2><div className="mt-4 rounded-2xl border border-border/60 bg-card/40 overflow-hidden">{endpoints.map((e, i) => (<div key={e.path} className={`flex items-center gap-4 p-4 ${i !== endpoints.length - 1 ? 'border-b border-border/60' : ''}`}><span className={`inline-flex w-16 justify-center rounded px-2 py-0.5 text-xs font-mono font-medium ${e.method === 'GET' ? 'bg-brand-blue/15 text-brand-blue' : e.method === 'POST' ? 'bg-emerald-500/15 text-emerald-400' : e.method === 'DELETE' ? 'bg-destructive/15 text-destructive' : 'bg-secondary text-muted-foreground'}`}>{e.method}</span><code className="flex-1 font-mono text-sm">{e.path}</code><span className="hidden sm:block text-xs text-muted-foreground">{e.desc}</span></div>))}</div></div>
        <div className="mt-8"><h2 className="font-display text-xl font-semibold">Créer une vidéo</h2>
          <div className="mt-4 rounded-2xl border border-border/60 bg-background/60 overflow-hidden"><div className="flex items-center justify-between border-b border-border/60 px-4 py-2.5"><div className="flex items-center gap-2 text-xs text-muted-foreground"><Terminal className="h-3.5 w-3.5" />cURL</div><button onClick={copy} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground">{copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}{copied ? 'Copié' : 'Copier'}</button></div><pre className="overflow-x-auto p-4 text-xs font-mono leading-relaxed text-foreground/90"><code>{codeExample}</code></pre></div>
          <div className="mt-4 rounded-2xl border border-border/60 bg-background/60 overflow-hidden"><div className="border-b border-border/60 px-4 py-2.5 text-xs text-muted-foreground">Réponse 201 Created</div><pre className="overflow-x-auto p-4 text-xs font-mono leading-relaxed text-foreground/90"><code>{responseExample}</code></pre></div>
        </div>
        <div className="mt-8"><h2 className="font-display text-xl font-semibold">SDK officiels</h2><div className="mt-4 grid gap-4 sm:grid-cols-2">{[{ name: 'JavaScript', install: 'npm install @renderx/sdk', lang: 'TypeScript / Node.js' }, { name: 'Python', install: 'pip install renderx', lang: 'Python 3.8+' }].map((sdk) => (<div key={sdk.name} className="rounded-2xl border border-border/60 bg-card/40 p-5"><div className="font-display font-semibold">{sdk.name}</div><div className="text-xs text-muted-foreground">{sdk.lang}</div><code className="mt-3 block rounded-lg bg-background/60 px-3 py-2 text-xs font-mono">{sdk.install}</code></div>))}</div></div>
      </div>
    </Section>
  );
}
