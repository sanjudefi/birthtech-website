import type { Metadata } from "next";
import {
  Hero,
  Section,
  Cards,
  Achievements,
  ContactCTA,
} from "@/components/SiteSections";

export const metadata: Metadata = {
  title: "Our Impact Goals",
  description:
    "BirthTech\u2019s mission is to save lives during birth through better comfort, monitoring, care, and support.",
};

export default function Page() {
  return (
    <>
      <Hero
        label="Our Purpose"
        title="Working toward a better birthing experience"
        description="Our mission is to save lives during birth and help make every birth a safe and joyous occasion."
      />
      <Section title="What we are working toward">
        <Cards
          items={[
            {
              title: "Comfort and posture support",
              description:
                "Designing around ergonomics and different birthing positions to support mothers during labor.",
            },
            {
              title: "Accessible birthing equipment",
              description:
                "Developing lightweight, portable, and foldable equipment that is easier to transport and store.",
            },
            {
              title: "Better monitoring",
              description:
                "Building maternal monitoring and early risk prediction into our birthing technology.",
            },
            {
              title: "Support beyond the delivery room",
              description:
                "Providing daily pregnancy care guidance and developing connected wearables for mothers and babies.",
            },
          ]}
        />
      </Section>
      <Achievements />
      <ContactCTA />
    </>
  );
}
