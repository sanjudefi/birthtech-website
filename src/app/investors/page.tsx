import type { Metadata } from "next";
import {
  Hero,
  Section,
  Cards,
  Achievements,
  ContactCTA,
} from "@/components/SiteSections";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Connect with BirthTech to discuss its maternal care products, apps, development plans, and investment opportunities.",
};

export default function Page() {
  return (
    <>
      <Hero
        label="For Investors"
        title="Building on our mission in maternal care"
        description="BirthTech brings engineering, product development, regulatory affairs, and technology experience together to improve the birthing journey."
      />
      <Section title="Get to know BirthTech">
        <Cards
          items={[
            {
              title: "Our foundation",
              description:
                "BirthPro and BirthMithra reflect our focus on maternal monitoring, comfort, portability, and birthing support.",
            },
            {
              title: "Our expanding product range",
              description:
                "The updated product range introduces MomSense mother-and-baby wearables and BirthChair, with online order enquiries.",
            },
            {
              title: "Our apps",
              description:
                "The Mother Care App offers pregnancy care guidance. SkinPIN provides photo observations and progress tracking for everyday wellness.",
            },
            {
              title: "Discuss the opportunity",
              description:
                "Contact our team to discuss product development, current plans, and investment opportunities directly.",
            },
          ]}
        />
      </Section>
      <Achievements />
      <ContactCTA />
    </>
  );
}
