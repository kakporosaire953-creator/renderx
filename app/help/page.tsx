import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { HelpContent } from '@/components/help-content';
export const metadata = { title: "Centre d'aide", description: "Trouvez les réponses à vos questions sur RenderX, HyperFrames, la facturation et l'intégration API." };
export default function HelpPage() { return (<><SiteHeader /><main className="pt-28"><HelpContent /></main><SiteFooter /></>); }
