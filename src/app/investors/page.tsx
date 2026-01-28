import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Globe,
  Layers,
  Shield,
  Heart,
  BarChart3,
  Users,
  CheckCircle2,
  DollarSign,
  Target,
  Cpu,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Invest in BirthTech — a scalable maternal healthcare ecosystem addressing a $50B+ global market with integrated medical devices and digital platform technology.",
};

export default function InvestorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-navy uppercase tracking-widest mb-4">
              For Investors
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6 text-slate-900">
              The infrastructure play in
              <br />
              <span className="gradient-text">maternal healthcare</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
              BirthTech is building the integrated ecosystem for maternal and
              neonatal care — devices, platform, and data — positioned to become
              the standard of care in the world&apos;s largest and fastest-growing
              healthcare markets.
            </p>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              The Opportunity
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              A massive, underserved, and growing market
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              The global maternal and neonatal healthcare market represents over
              $50 billion in annual spending. Yet it remains one of the least
              digitized and most fragmented segments of healthcare — creating a
              significant opportunity for an integrated, technology-driven
              approach.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "$50B+",
                label: "Global maternal health market",
                icon: DollarSign,
              },
              {
                number: "140M+",
                label: "Births per year globally",
                icon: Heart,
              },
              {
                number: "94%",
                label: "Maternal deaths in LMICs",
                icon: Globe,
              },
              {
                number: "<5%",
                label: "Digitization in target markets",
                icon: BarChart3,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center"
              >
                <stat.icon className="w-6 h-6 text-teal mx-auto mb-3" />
                <p className="text-3xl font-bold text-navy mb-1">
                  {stat.number}
                </p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BirthTech */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              Investment Thesis
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why BirthTech
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: "Integrated Ecosystem",
                desc: "We don't build point solutions. BirthTech is the only company offering an integrated hardware + software ecosystem for the full maternal care continuum — creating deep product moats and switching costs.",
              },
              {
                icon: Globe,
                title: "Massive Addressable Market",
                desc: "Over 140 million births per year. Over $50B in annual healthcare spending. The markets with the highest need — India, South Asia, Sub-Saharan Africa — are also the fastest growing.",
              },
              {
                icon: TrendingUp,
                title: "Scalable Business Model",
                desc: "Hardware sales create an install base. Platform subscriptions generate recurring revenue. Data and analytics open enterprise and government revenue streams.",
              },
              {
                icon: Cpu,
                title: "Technology Differentiation",
                desc: "Purpose-built devices with integrated sensing, real-time data processing, clinical decision support, and a unified platform — not retrofitted consumer tech or standalone software.",
              },
              {
                icon: Building2,
                title: "Government Alignment",
                desc: "National maternal health programs across India, Africa, and Southeast Asia are actively seeking technology partners. BirthTech is built for public health scale.",
              },
              {
                icon: Shield,
                title: "Mission-Driven Market",
                desc: "Impact investing and ESG mandates are directing capital toward healthcare solutions with measurable social outcomes. BirthTech sits squarely in this high-growth category.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-slate-200"
              >
                <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
                Business Model
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Multiple revenue streams. Built-in scale.
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                The BirthTech model combines hardware sales, platform
                subscriptions, and data services — creating a diversified
                revenue base with significant recurring components.
              </p>
              <div className="space-y-5">
                {[
                  {
                    title: "Device Sales",
                    desc: "BirthPro, BirthMithra, and MomSense devices sold to hospitals, government programs, and healthcare organizations.",
                  },
                  {
                    title: "Platform Subscriptions",
                    desc: "Annual SaaS subscriptions for the BirthTech digital platform — monitoring, alerts, records, and analytics.",
                  },
                  {
                    title: "Enterprise & Government Contracts",
                    desc: "Large-scale deployment contracts with government health departments and multi-facility health systems.",
                  },
                  {
                    title: "Data & Analytics Services",
                    desc: "Population-level analytics, outcome reporting, and health system intelligence for administrators and policymakers.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-2 bg-teal rounded-full shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy text-sm">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Key Metrics</h3>
              <div className="space-y-6">
                {[
                  {
                    label: "Target Market",
                    value: "India (Phase 1), South Asia & Africa (Phase 2)",
                  },
                  {
                    label: "Products",
                    value: "3 devices + 1 digital platform",
                  },
                  {
                    label: "Revenue Model",
                    value: "Device sales + SaaS subscriptions + Enterprise contracts",
                  },
                  {
                    label: "Go-to-Market",
                    value: "Hospital sales, government programs, NGO partnerships",
                  },
                  {
                    label: "Competitive Moat",
                    value: "Integrated ecosystem, clinical validation, platform lock-in",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-teal-light text-xs font-semibold uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="text-slate-200 text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-navy rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden pattern-overlay">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Interested in investing?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                We are raising capital to accelerate product development, expand
                clinical deployments, and scale across our target markets.
                Let&apos;s talk.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal text-white font-semibold rounded-lg hover:bg-teal-dark transition-colors"
              >
                Contact Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
