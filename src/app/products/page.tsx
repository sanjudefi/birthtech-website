import type { Metadata } from "next";
import {
  Hero,
  ProductRange,
  BirthingFeatures,
  DigitalApps,
  ContactCTA,
} from "@/components/SiteSections";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore BirthPro, BirthMithra, and the updated BirthChair and MomSense product range, plus BirthTech apps.",
};

export default function Page() {
  return (
    <>
      <Hero
        label="Our Products"
        title="Supporting mothers and babies through every step"
        description="Our birthing devices focus on comfort, monitoring, and support. Discover our original products alongside the updated wearable and birthing-chair range."
      />
      <ProductRange />
      <BirthingFeatures />
      <DigitalApps />
      <ContactCTA />
    </>
  );
}
