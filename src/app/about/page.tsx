import type { Metadata } from "next";
import {
  Hero,
  Section,
  MissionVision,
  Team,
  Achievements,
  ContactCTA,
} from "@/components/SiteSections";
import { company } from "@/content/site";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the BirthTech founding team and learn about our original mission, vision, and achievements.",
};

export default function Page() {
  return (
    <>
      <Hero
        label="About Us"
        title="Making every birth a safe and joyous occasion"
        description="A team of passionate engineers, united by a mission to improve the birthing process."
      />
      <Section title="Who We Are">
        <p className="text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto">
          {company.intro}
        </p>
      </Section>
      <MissionVision />
      <Team />
      <Achievements />
      <ContactCTA />
    </>
  );
}
