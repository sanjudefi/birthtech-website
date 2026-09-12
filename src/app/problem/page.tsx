import type { Metadata } from "next";
import {
  Hero,
  Section,
  Cards,
  BirthingFeatures,
  ContactCTA,
} from "@/components/SiteSections";

export const metadata: Metadata = {
  title: "The Problem",
  description:
    "BirthTech focuses on better monitoring, care, and support to reduce preventable complications during childbirth.",
};

export default function Page() {
  return (
    <>
      <Hero
        label="The Problem"
        title="Pregnancy is not a disease"
        description="Preventable complications during pregnancy and childbirth remain at the heart of the problem BirthTech was founded to address."
      />
      <Section title="The opportunity for better care">
        <Cards
          items={[
            {
              title: "Monitoring throughout the birthing period",
              description:
                "We have a tremendous opportunity to reduce the Maternal Mortality Rate (MMR) and monitor mothers throughout the birthing period to minimize preventable complications at the time of birth.",
            },
            {
              title: "Care and support during childbirth",
              description:
                "Our innovative solutions aim to address these critical issues by ensuring better monitoring, care, and support during childbirth.",
            },
          ]}
        />
      </Section>
      <BirthingFeatures />
      <ContactCTA />
    </>
  );
}
