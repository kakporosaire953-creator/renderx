import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ContactContent } from '@/components/contact-content';
export const metadata = { title: 'Contact', description: "Contactez l'équipe RenderX pour toute question commerciale, technique ou de support." };
export default function ContactPage() { return (<><SiteHeader /><main className="pt-28"><ContactContent /></main><SiteFooter /></>); }
