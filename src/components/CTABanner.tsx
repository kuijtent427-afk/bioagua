import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  to?: string;
}

const CTABanner = ({
  title = "Agenda una evaluación técnica gratuita sin compromiso",
  subtitle = "Detectamos pérdidas, riesgos y oportunidades de ahorro en tus sistemas de agua.",
  buttonText = "Agenda evaluación gratuita",
  to = "/contacto",
}: CTABannerProps) => (
  <section className="bg-secondary py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
        {title}
      </h2>
      <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">{subtitle}</p>
      <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta/90 font-semibold text-base px-8">
        <Link to={to}>
          {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </section>
);

export default CTABanner;
