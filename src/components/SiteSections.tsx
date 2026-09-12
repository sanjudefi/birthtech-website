import SectionIcon from "./SectionIcon";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  apps,
  birthingFeatures,
  company,
  products,
  team,
} from "@/content/site";

export function Hero({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-navy uppercase tracking-widest mb-4">
            <SectionIcon topic={label} inline />{label}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6 text-slate-900">
            {title}
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Section({
  title,
  eyebrow,
  children,
  tinted = false,
  id,
}: {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  tinted?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`section-padding ${tinted ? "bg-slate-50" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <SectionIcon topic={`${eyebrow ?? ""} ${title}`} />
          {eyebrow && (
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export function Cards({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((item) => (
        <article
          key={item.title}
          className="bg-white rounded-2xl p-8 border border-slate-200 card-hover"
        >
          <SectionIcon topic={item.title} />
          <h3 className="text-xl font-bold text-navy mb-4">{item.title}</h3>
          <p className="text-slate-500 leading-relaxed">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function MissionVision() {
  return (
    <Section
      title="The purpose behind BirthTech"
      eyebrow="Mission & Vision"
      tinted
    >
      <Cards
        items={[
          { title: "Our Mission", description: company.mission },
          { title: "Our Vision", description: company.vision },
        ]}
      />
    </Section>
  );
}

export function Team() {
  return (
    <Section id="team" title="Meet our team" eyebrow="Leadership">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <article key={member.name} className="text-center">
            <Image
              src={member.photo}
              alt={member.name}
              width={160}
              height={160}
              className="w-40 h-40 rounded-full mx-auto mb-5 object-cover border-4 border-sky"
            />
            <h3 className="font-bold text-navy text-lg mb-2">{member.name}</h3>
            <p className="text-teal text-sm font-semibold mb-3">
              {member.role}
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              {member.bio}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function BirthingFeatures() {
  return (
    <Section
      title="Designed around the birthing experience"
      eyebrow="BirthMithra Features"
      tinted
    >
      <Cards items={birthingFeatures} />
    </Section>
  );
}

export function Achievements() {
  return (
    <Section title="Our achievements" eyebrow="Recognition" tinted>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          "BRIC Tynor Award",
          "Nidhi Prayas Grant by Derbi Foundation",
          "BIG BIRAC Call 17",
        ].map((title) => (
          <div
            key={title}
            className="bg-white border border-slate-200 rounded-2xl p-8 text-center font-semibold text-navy"
          >
            {title}
          </div>
        ))}
      </div>
    </Section>
  );
}

type Offering = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  status?: string;
  features: string[];
  href: string;
  linkLabel: string;
  note?: string;
};
function OfferingCard({ item }: { item: Offering }) {
  return (
    <article
      id={item.id}
      className="scroll-mt-24 bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col"
    >
      {item.image && (
        <div className="relative h-64 bg-sky-light">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className={item.id === "birthpro" ? "object-cover object-right" : `object-contain p-6 ${["momsense", "birthchair"].includes(item.id) ? "mix-blend-multiply" : ""}`}
          />
        </div>
      )}
      <div className="p-8 flex flex-col flex-1">
        {item.status && (
          <p className="self-start px-3 py-1 bg-sky text-navy rounded-full text-xs font-semibold mb-4">
            {item.status}
          </p>
        )}
        <h3 className="text-2xl font-bold text-navy mb-2">{item.title}</h3>
        <p className="text-teal font-semibold text-sm mb-4">{item.subtitle}</p>
        <p className="text-slate-500 leading-relaxed mb-6">
          {item.description}
        </p>
        <ul className="space-y-3 mb-6">
          {item.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-slate-600"
            >
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-teal" />
              {feature}
            </li>
          ))}
        </ul>
        {item.note && (
          <p className="text-sm text-slate-500 mb-6">{item.note}</p>
        )}
        <Link
          href={`/products/${item.id}`}
          className="mt-auto inline-flex items-center gap-2 text-navy font-semibold hover:underline"
        >
          Explore {item.title}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}

export function ProductRange() {
  return (
    <Section
      title="Products for mothers and babies"
      eyebrow="Our Products"
      tinted
    >
      <div className="grid md:grid-cols-2 gap-8">
        {products.map((item) => (
          <OfferingCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
}

export function DigitalApps() {
  return (
    <Section title="Everyday support, wherever you are" eyebrow="Our Apps">
      <div className="grid md:grid-cols-2 gap-8">
        {apps.map((item) => (
          <OfferingCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
}

export function ContactCTA() {
  return (
    <Section title="Let’s build better care together" tinted>
      <div className="gradient-navy rounded-3xl p-10 md:p-16 text-center text-white">
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Connect with BirthTech to learn about our products, discuss a
          partnership, or explore how we can support your organization.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-navy font-semibold rounded-full"
        >
          Get in Touch
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}

export function PartnerNetwork() {
  const partners = [
    { name: "IKP", image: "/partners/33.png" },
    { name: "BIRAC", image: "/partners/22.png" },
    { name: "DERBI Foundation", image: "/partners/11-e1636310841197.png" },
    { name: "NIDHI PRAYAS", image: "/partners/44-e1636310892508.png" },
  ];
  return (
    <Section title="Our partners" eyebrow="Working Together">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="rounded-2xl border border-slate-200 p-6 bg-white"
          >
            <div className="relative h-28">
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
