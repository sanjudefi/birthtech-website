import type { Metadata } from "next";
import {
  Hero,
  Section,
  Cards,
  BirthingFeatures,
  DigitalApps,
  ContactCTA,
} from "@/components/SiteSections";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "BirthTech\u2019s approach combines research into birthing positions with clinical needs, posture, ergonomics, and comfort.",
};

export default function Page() {
  return (
    <>
      <Hero
        label="Our Approach"
        title="Designed around mothers and the birthing experience"
        description="Understanding clinical needs and the way care is delivered guides our product design."
      />
      <Section title="Research and practical design">
        <Cards
          items={[
            {
              title: "Studying Ancient Birthing Processes and Procedures",
              description:
                "In designing our product, we have researched several ancient birthing positions practiced globally since the 19th century to conduct safe natural births. These historical practices provide valuable insights into effective birthing methods that promote natural deliveries.",
            },
            {
              title: "Effective Birthing Positions",
              description:
                "Understanding the clinical needs and integrating them with user workspace analysis during labor has been crucial in our design process. BirthMithra satisfies requirements like posture, ergonomics, comfort, stable structure, and ease of shifting to various modes and birthing positions, ensuring a safe and effective birthing process.",
            },
          ]}
        />
      </Section>
      <BirthingFeatures />
      <DigitalApps />
      <ContactCTA />
    </>
  );
}
