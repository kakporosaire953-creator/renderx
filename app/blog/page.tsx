import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { BlogContent } from '@/components/blog-content';
export const metadata = { title: 'Blog', description: 'Actualités, guides et bonnes pratiques sur la génération vidéo par IA avec RenderX.' };
export default function BlogPage() { return (<><SiteHeader /><main className="pt-28"><BlogContent /></main><SiteFooter /></>); }
