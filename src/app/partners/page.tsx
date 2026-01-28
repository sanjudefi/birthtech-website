import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Stethoscope,
  Globe,
  Users,
  Handshake,
  CheckCircle2,
  Heart,
  BarChart3,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with BirthTech — hospitals, government health programs, NGOs, and technology organizations collaborating to improve maternal and neonatal care worldwide.",
};

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pattern-overlay text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-teal-light uppercase tracking-widest mb-4">
              Partners
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Safer maternal care
              <br />
              <span className="text-teal-light">requires collaboration</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              No single organization can solve the maternal healthcare crisis
              alone. BirthTech partners with hospitals, governments, NGOs, and
              health organizations to deploy integrated maternal care technology
              where it is needed most.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              Collaboration
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              How we work with partners
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              We engage with a range of organizations to deploy, validate, and
              scale maternal care technology across diverse healthcare settings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hospitals */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center">
                  <Stethoscope className="w-7 h-7 text-teal-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">
                    Hospitals & Health Systems
                  </h3>
                  <p className="text-sm text-slate-500">Clinical deployment</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                We work with hospitals and maternity wards to deploy BirthPro
                and the BirthTech platform — integrating smart monitoring into
                existing clinical workflows and improving delivery outcomes.
              </p>
              <ul className="space-y-2">
                {[
                  "Device installation and integration",
                  "Staff training and onboarding",
                  "Platform deployment and configuration",
                  "Ongoing clinical support and optimization",
                  "Outcome measurement and reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Government */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-teal-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">
                    Government & Public Health
                  </h3>
                  <p className="text-sm text-slate-500">National programs</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                We partner with government health departments and national
                maternal health programs to deploy BirthTech solutions across
                public health facilities — supporting national goals for maternal
                and neonatal mortality reduction.
              </p>
              <ul className="space-y-2">
                {[
                  "Large-scale facility deployment",
                  "Integration with national health programs",
                  "Population-level data and analytics",
                  "Rural and district-level implementation",
                  "Policy support and outcome reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* NGOs */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center">
                  <Globe className="w-7 h-7 text-teal-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">
                    NGOs & Foundations
                  </h3>
                  <p className="text-sm text-slate-500">Global health impact</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                We collaborate with non-governmental organizations and global
                health foundations to bring maternal care technology to
                underserved communities — particularly in rural and
                resource-limited settings.
              </p>
              <ul className="space-y-2">
                {[
                  "Community health worker programs",
                  "BirthMithra deployment in field settings",
                  "Remote monitoring for underserved areas",
                  "Impact measurement and evidence generation",
                  "Co-development of deployment models",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology & Industry */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center">
                  <Handshake className="w-7 h-7 text-teal-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">
                    Technology & Industry
                  </h3>
                  <p className="text-sm text-slate-500">
                    Integration partners
                  </p>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                We partner with technology companies, research institutions, and
                manufacturing organizations to advance our devices, expand our
                platform capabilities, and accelerate deployment.
              </p>
              <ul className="space-y-2">
                {[
                  "Sensor and hardware partnerships",
                  "AI and clinical algorithm development",
                  "Manufacturing and supply chain",
                  "Research and clinical validation",
                  "Distribution and channel partnerships",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Vision */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              Partnerships built on shared commitment to outcomes
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              We don&apos;t just sell devices. We work alongside our partners to
              ensure successful deployment, adoption, and impact. Every
              partnership is structured around measurable maternal and neonatal
              health outcomes.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Whether deploying in a single hospital or across a national health
              system, we provide the technology, training, and ongoing support
              needed to make a real difference in maternal care.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-navy rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden pattern-overlay">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Become a BirthTech partner
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                We are actively seeking partners who share our commitment to
                improving maternal and neonatal healthcare. Let&apos;s discuss
                how we can work together.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal text-white font-semibold rounded-lg hover:bg-teal-dark transition-colors"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
