import { ExternalLink } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";

type OfferCTAProps = {
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
};

export function OfferCTA({
  title,
  description,
  href,
  buttonLabel,
}: OfferCTAProps) {
  return (
    <section className="pb-20">
      <Container>
        <div className="rounded-3xl bg-zinc-950 px-6 py-14 text-center text-white sm:px-12">
          <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">{description}</p>
          <div className="mt-8">
            <ButtonLink href={href} target="_blank" size="lg">
              {buttonLabel} <ExternalLink size={18} />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
