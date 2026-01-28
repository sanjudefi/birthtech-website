import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Activity,
  Globe,
  TrendingDown,
  Users,
  MapPin,
  DollarSign,
  BarChart3,
  CheckCircle2,
  Shield,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "The BirthTech impact — reducing maternal mortality, improving neonatal outcomes, expanding rural access, and lowering healthcare costs through integrated technology.",
};

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-navy uppercase tracking-widest mb-4">
              Impact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6 text-slate-900">
              Technology that
              <br />
              <span className="gradient-text">saves lives at scale</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
              Every component of the BirthTech ecosystem is designed to drive
              measurable improvement in maternal and neonatal outcomes — from
              individual patient safety to system-wide healthcare
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              Areas of Impact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Where BirthTech makes a difference
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Lives Saved */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-teal flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy">Lives Saved</h3>
              </div>
              <p className="text-slate-500 leading-relaxed mb-6">
                By enabling continuous monitoring during labor, automated risk
                alerts, and faster clinical response, BirthTech directly reduces
                the risk of maternal and neonatal death from preventable causes.
              </p>
              <ul className="space-y-3">
                {[
                  "Early detection of hemorrhage, pre-eclampsia, and fetal distress",
                  "Reduced time from complication onset to clinical intervention",
                  "Continuous monitoring replaces periodic manual checks",
                  "Postnatal tracking catches delayed complications",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* System Improvement */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-teal-light" />
                </div>
                <h3 className="text-xl font-bold text-navy">
                  System Improvement
                </h3>
              </div>
              <p className="text-slate-500 leading-relaxed mb-6">
                Beyond individual patient care, BirthTech generates the data
                that health systems need to identify patterns, improve
                protocols, and allocate resources more effectively.
              </p>
              <ul className="space-y-3">
                {[
                  "Population-level outcome tracking and trend analysis",
                  "Facility performance benchmarking",
                  "Evidence base for protocol and policy improvement",
                  "Resource allocation based on real utilization data",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Rural Access */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-teal-dark flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy">
                  Rural & Underserved Access
                </h3>
              </div>
              <p className="text-slate-500 leading-relaxed mb-6">
                BirthMithra&apos;s portable design and MomSense&apos;s remote
                monitoring capability bring quality maternal care to locations
                where it has never been available — closing the urban-rural
                divide.
              </p>
              <ul className="space-y-3">
                {[
                  "Portable delivery infrastructure for any location",
                  "Remote monitoring reduces need for facility visits",
                  "Specialist consultation via platform, even in remote areas",
                  "Government and NGO deployment at scale",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cost Reduction */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-navy-light flex items-center justify-center">
                  <DollarSign className="w-7 h-7 text-teal-light" />
                </div>
                <h3 className="text-xl font-bold text-navy">Cost Reduction</h3>
              </div>
              <p className="text-slate-500 leading-relaxed mb-6">
                Prevention is more cost-effective than emergency intervention.
                BirthTech reduces healthcare costs by catching complications
                early, reducing emergency C-sections, and shortening hospital
                stays.
              </p>
              <ul className="space-y-3">
                {[
                  "Early intervention reduces emergency procedures",
                  "Shorter hospital stays through better monitoring",
                  "Reduced readmission rates with postnatal tracking",
                  "Lower long-term costs from fewer adverse outcomes",
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

      {/* Impact Numbers */}
      <section className="section-padding gradient-dark pattern-overlay text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The opportunity for impact
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              These numbers define the scale of the problem — and the potential
              of the solution.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "295K", label: "Preventable maternal deaths per year" },
              { number: "2.4M", label: "Neonatal deaths annually" },
              { number: "140M+", label: "Births per year globally" },
              { number: "80%+", label: "Deaths preventable with timely care" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-teal-light mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theory of Change */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              Theory of Change
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              How technology creates impact
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  icon: Activity,
                  title: "Better Monitoring",
                  desc: "Continuous, automated monitoring during pregnancy and labor replaces periodic manual checks — catching complications earlier.",
                },
                {
                  icon: Clock,
                  title: "Faster Response",
                  desc: "Real-time alerts reduce the time between complication onset and clinical intervention — the single most important factor in maternal survival.",
                },
                {
                  icon: Shield,
                  title: "Informed Decisions",
                  desc: "Clinicians have complete patient data and clinical decision support at the point of care — leading to better treatment decisions.",
                },
                {
                  icon: Globe,
                  title: "Wider Reach",
                  desc: "Portable devices and remote monitoring extend quality care to rural and underserved areas — where the need is greatest.",
                },
                {
                  icon: TrendingDown,
                  title: "System Learning",
                  desc: "Aggregate data enables health systems to identify patterns, improve protocols, and allocate resources based on evidence.",
                },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-teal" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  {i < 4 && (
                    <div className="hidden md:block text-slate-300 self-center">
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
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
                Partner with us to drive impact
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                Hospitals, governments, NGOs, and investors — together we can
                make maternal care safer for millions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal text-white font-semibold rounded-lg hover:bg-teal-dark transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
