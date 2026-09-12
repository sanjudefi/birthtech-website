import type { Metadata } from "next";
import {
  Hero,
  Section,
  Cards,
  ProductRange,
  DigitalApps,
  ContactCTA,
} from "@/components/SiteSections";

export const metadata: Metadata = {
  title: "Our Solutions",
  description:
    "BirthTech products support maternal care throughout the birthing cycle, complemented by Mother Care App, MomSense, and SkinPIN.",
};

export default function Page() {
  return (
    <>
      <Hero
        label="Our Solutions"
        title="The complete BIRTH cycle support innovation"
        description="At BirthTech, we develop solutions to support mothers throughout the birthing cycle. BirthPro and BirthMithra focus on safety and comfort from pregnancy to delivery."
      />
      <Section title="Support throughout the journey">
        <Cards
          items={[
            {
              title: "During Pregnancy",
              description:
                "BirthPro is designed around maternal vital monitoring, early risk prediction, and access to real-time data. The Mother Care App adds daily care plans, nutrition guidance, and wellness support.",
            },
            {
              title: "During Labor and Delivery",
              description:
                "BirthMithra combines portability, a convertible design, posture adjustment, and emergency readiness to support the birthing experience.",
            },
            {
              title: "Mother and Baby",
              description:
                "The upcoming MomSense system pairs a mother band with a baby band for wellness monitoring, sleep and activity insights, and notifications.",
            },
            {
              title: "Everyday Wellness",
              description:
                "SkinPIN provides a photo journal for visible skin changes, nail observations, food insights, and tracking progress over time.",
            },
          ]}
        />
      </Section>
      <ProductRange />
      <DigitalApps />
      <ContactCTA />
    </>
  );
}
