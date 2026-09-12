import type { Metadata } from "next";
import {
  Hero,
  DigitalApps,
  Section,
  Cards,
  ContactCTA,
} from "@/components/SiteSections";

export const metadata: Metadata = {
  title: "Our Apps",
  description:
    "Discover BirthTech\u2019s Mother Care App for pregnancy support and SkinPIN for skin, nail, and food observations.",
};

export default function Page() {
  return (
    <>
      <Hero
        label="Digital Apps"
        title="Practical support for your everyday care"
        description="Explore pregnancy care with the Mother Care App and keep a personal skin and food journal with SkinPIN."
      />
      <DigitalApps />
      <Section title="The Mother Care App">
        <Cards
          items={[
            {
              title: "Personalized care plans",
              description:
                "Daily meal recommendations reflect your pregnancy stage and dietary preferences. Weekly calendars help organize care activities and track progress.",
            },
            {
              title: "Wellness and daily routines",
              description:
                "Explore exercise guidance, hydration reminders, sleep tips, grocery lists, and supplement tracking through the app.",
            },
          ]}
        />
      </Section>
      <ContactCTA />
    </>
  );
}
