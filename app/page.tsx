import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Hero } from '@/components/sections/hero';
import { DemoSection } from '@/components/sections/demo';
import { FeaturesSection } from '@/components/sections/features';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { HyperFramesSection } from '@/components/sections/hyperframes';
import { TemplatesSection } from '@/components/sections/templates';
import { UseCasesSection } from '@/components/sections/use-cases';
import { PricingSection } from '@/components/sections/pricing';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { SecuritySection } from '@/components/sections/security';
import { FaqSection } from '@/components/sections/faq';
import { CtaSection } from '@/components/sections/cta';

export default function Home() {
  return (<><SiteHeader /><main className="relative"><Hero /><DemoSection /><FeaturesSection /><HowItWorksSection /><HyperFramesSection /><TemplatesSection /><UseCasesSection /><PricingSection /><SecuritySection /><TestimonialsSection /><FaqSection /><CtaSection /></main><SiteFooter /></>);
}
