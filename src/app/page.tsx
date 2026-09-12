import type { Metadata } from "next";
import {
  Section,
  MissionVision,
  BirthingFeatures,
  ProductRange,
  DigitalApps,
  Team,
  Achievements,
  PartnerNetwork,
  ContactCTA,
} from "@/components/SiteSections";
import HeroSlider from "@/components/HeroSlider";
import { company } from "@/content/site";
export const metadata: Metadata = {
  title: "BirthTech Innovations | Because BIRTH matters",
  description:
    "Making the birthing process easy, comfortable, and safe. Meet BirthTech\u2019s team, birthing devices, MomSense wearables, Mother Care App, and SkinPIN.",
};

export default function Page() {
  return (
    <>
      <HeroSlider />
      <Section title="About BirthTech" eyebrow="Who We Are">
        <p className="text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto text-center">
          {company.intro}
        </p>
      </Section>
      <MissionVision />
      <BirthingFeatures />
      <ProductRange />
      <DigitalApps />
      <Team />
      <Achievements />
      <PartnerNetwork />
      <ContactCTA />
    </>
  );
}
