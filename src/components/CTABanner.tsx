import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonText2?: string;
  to?: string;
}

const CTABanner = ({
  title = "CONTÁCTANOS",
  subtitle = "Llámanos ahora para una inspección gratuita.",
  buttonText = "Agendar Una Reunión",
  buttonText2 = "Solicita Más Información",
  to = "/contacto",
}: CTABannerProps) => (
  <section className="bg-secondary py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-6 tracking-wide">
        {title}
      </h2>
      <p className="text-secondary-foreground/70 mb-8 max-w-xl mx-auto">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild variant="outline" className="border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground/10 font-semibold px-8">
          <Link to={to}>{buttonText}</Link>
        </Button>
        <Button asChild variant="outline" className="border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground/10 font-semibold px-8">
          <Link to={to}>{buttonText2}</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default CTABanner;
