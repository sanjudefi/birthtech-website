import SectionIcon from "./SectionIcon";
import Image from "next/image";
import { Activity, Sparkles, HeartHandshake } from "lucide-react";

const technology: Record<
  string,
  {
    eyebrow: string;
    title: string;
    image: string;
    alt: string;
    points: { title: string; description: string }[];
  }
> = {
  birthchair: {
    eyebrow: "AI & connected technology · Product design",
    title: "Smart support. With a human touch.",
    image: "/slides/birthchair-care.webp",
    alt: "Illustrative BirthChair consultation in Canada with a pregnant white woman and a Black clinician",
    points: [
      {
        title: "Non-invasive sensing",
        description:
          "The product design brings maternal vital monitoring into a chair built around comfort and positioning.",
      },
      {
        title: "AI-assisted insights",
        description:
          "Planned predictive analysis and guidance are intended to help care providers interpret changes alongside clinical assessment.",
      },
      {
        title: "Connected information",
        description:
          "Integration with the BirthTech platform is part of the product’s published design. Clinical decisions remain with qualified professionals.",
      },
    ],
  },
  momsense: {
    eyebrow: "Connected wearables · Product design",
    title: "A shared picture of everyday wellbeing.",
    image: "/slides/momsense-hero-reference.webp",
    alt: "White mother holding a newborn with connected wearable bands",
    points: [
      {
        title: "Two connected bands",
        description:
          "The mother and baby bands are designed to synchronize with a companion app, bringing their information into one view.",
      },
      {
        title: "Patterns, thoughtfully presented",
        description:
          "The planned AI features explore sleep, activity, and wellness patterns to offer understandable insights.",
      },
      {
        title: "Timely notifications",
        description:
          "The product is designed to surface changes for attention, with an emphasis on gentle, everyday family support.",
      },
    ],
  },
  birthmithra: {
    eyebrow: "Human-centered engineering",
    title: "Designed for the way mothers move.",
    image: "/slides/birthmithra-hero-v2.webp",
    alt: "Pregnant Black woman with an Indian maternity nurse",
    points: [
      {
        title: "Ergonomics & posture",
        description:
          "The design considers clinical needs, birthing positions, comfort, and the practical workspace of care teams.",
      },
      {
        title: "Compact mechanical design",
        description:
          "Folding and portability support easier movement and storage in space-constrained environments.",
      },
      {
        title: "A stable foundation for care",
        description:
          "BirthMithra’s technology story focuses on physical support, posture adjustment, and emergency readiness.",
      },
    ],
  },
  birthpro: {
    eyebrow: "Monitoring & early risk prediction · Product design",
    title: "Information to support timely care.",
    image: "/slides/birthpro-care.webp",
    alt: "BirthPro concept maternal monitoring consultation",
    points: [
      {
        title: "Continuous monitoring",
        description:
          "Maternal vital monitoring sits at the center of BirthPro’s original product design.",
      },
      {
        title: "Early risk insights",
        description:
          "The aim is to help care teams recognize potential concerns with timely, relevant information.",
      },
      {
        title: "A shared care picture",
        description:
          "Real-time data access is intended to support mothers, partners, and healthcare providers throughout care.",
      },
    ],
  },
  mothercare: {
    eyebrow: "Personalized AI guidance",
    title: "Daily support that starts with you.",
    image: "/slides/momsense-hero-reference.webp",
    alt: "Mother and newborn in a calm home setting",
    points: [
      {
        title: "Your stage & preferences",
        description:
          "Daily care ideas reflect your pregnancy stage, dietary preferences, and personal goals.",
      },
      {
        title: "Practical planning",
        description:
          "Meal guidance, grocery lists, and a weekly calendar help translate information into daily routines.",
      },
      {
        title: "A companion for your journey",
        description:
          "AI guidance offers everyday support alongside the care you receive from healthcare professionals.",
      },
    ],
  },
};

export default function ProductTechnology({ slug }: { slug: string }) {
  const item = technology[slug];
  if (!item) return null;
  return (
    <section className="technology-section">
      <div className="product-section technology-layout">
        <div className="technology-image">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div>
          <div className="product-section-heading"><SectionIcon topic="technology" />
            <p>{item.eyebrow}</p>
            <h2>{item.title}</h2>
          </div>
          <div className="technology-points">
            {item.points.map((point, index) => {
              const Icon = [Activity, Sparkles, HeartHandshake][index];
              return (
              <div key={point.title}>
                <h3><Icon size={20} strokeWidth={1.6} />{point.title}</h3>
                <details className="technology-detail"><summary>Learn more</summary><p>{point.description}</p></details>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
