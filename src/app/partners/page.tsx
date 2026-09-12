import type { Metadata } from "next";
import { Hero, PartnerNetwork, ContactCTA } from "@/components/SiteSections";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Meet the organizations featured in BirthTech’s partner network and connect with our team.",
};

export default function PartnersPage() {
  return (
    <>
      <Hero
        label="Partners"
        title="Working together for better maternal care"
        description="Our vision is to become a trusted partner for hospitals, institutions, and individual practitioners, supporting mothers and children throughout the birthing journey."
      />
      <PartnerNetwork />
      <ContactCTA />
    </>
  );
}
