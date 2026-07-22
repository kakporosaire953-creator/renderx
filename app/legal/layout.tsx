import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
export const metadata = { title: 'Mentions légales', description: "Mentions légales et informations sur l'éditeur de la plateforme RenderX." };
export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (<><SiteHeader /><main className="pt-28 pb-12"><div className="mx-auto max-w-3xl px-4 sm:px-6"><div className="text-xs text-muted-foreground">Dernière mise à jour : 1 juillet 2024</div>{children}</div></main><SiteFooter /></>);
}
