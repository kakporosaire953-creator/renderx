import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { DocsContent } from '@/components/docs-content';
export const metadata = { title: 'Documentation API', description: "Intégrez la génération vidéo IA de RenderX dans vos applications via l'API REST HyperFrames." };
export default function DocsPage() { return (<><SiteHeader /><main className="pt-28"><DocsContent /></main><SiteFooter /></>); }
