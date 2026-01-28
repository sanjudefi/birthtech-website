import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Stethoscope,
  Baby,
  Activity,
  Shield,
  Cpu,
  Wifi,
  Bell,
  BarChart3,
  Database,
  Monitor,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Solution",
  description:
    "The BirthTech ecosystem — integrated medical devices and a digital platform delivering continuous, connected maternal and neonatal care from pregnancy through postnatal.",
};

export default function SolutionPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pattern-overlay text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-teal-light uppercase tracking-widest mb-4">
              Our Solution
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              One integrated ecosystem for
              <br />
              <span className="text-teal-light">the entire maternal care journey</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              BirthTech connects purpose-built medical devices with an
              intelligent digital platform — delivering continuous monitoring,
              real-time alerts, and data-driven care from pregnancy through
              postnatal recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              The Ecosystem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Devices + Platform. Connected by design.
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Unlike standalone products, every component of the BirthTech
              ecosystem is designed to work together — sharing data,
              coordinating alerts, and building a complete clinical picture.
            </p>
          </div>

          {/* Two pillars */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-teal-light" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Medical Devices
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Purpose-built hardware for maternal and neonatal care — designed
                for clinical environments, field use, and continuous home
                monitoring.
              </p>
              <ul className="space-y-3">
                {[
                  "BirthPro — Smart birthing chair with integrated monitoring",
                  "BirthMithra — Portable, foldable delivery bed for rural deployment",
                  "MomSense — Wearable for continuous maternal and fetal tracking",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:text-teal-dark transition-colors"
                >
                  View Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 text-teal-light" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Digital Platform
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                An intelligent software layer that connects all devices,
                aggregates data, generates alerts, and provides clinical
                dashboards for real-time decision-making.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time monitoring dashboards for clinicians",
                  "Automated risk alerts and early warning systems",
                  "Electronic health records across the care continuum",
                  "Population-level analytics for health administrators",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:text-teal-dark transition-colors"
                >
                  View Platform
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Continuum */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              Continuum of Care
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Pregnancy. Labor. Postnatal. Connected.
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              BirthTech covers the full maternal care journey — ensuring no
              critical data is lost between stages and no warning sign goes
              unnoticed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pregnancy */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 relative">
              <div className="absolute top-6 right-6 text-xs font-semibold text-teal bg-sky px-3 py-1 rounded-full">
                Stage 1
              </div>
              <div className="w-14 h-14 rounded-full bg-teal flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Pregnancy</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                Continuous remote monitoring through the MomSense wearable.
                Maternal vitals, fetal wellbeing indicators, and risk factors are
                tracked throughout pregnancy.
              </p>
              <ul className="space-y-2">
                {[
                  "Wearable maternal vital signs tracking",
                  "Fetal movement and heart rate monitoring",
                  "Automated risk screening",
                  "Remote care for high-risk pregnancies",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Labor */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 relative">
              <div className="absolute top-6 right-6 text-xs font-semibold text-teal bg-sky px-3 py-1 rounded-full">
                Stage 2
              </div>
              <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mb-6">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Labor & Delivery
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                BirthPro and BirthMithra provide monitored delivery
                environments. Real-time data flows to the platform, enabling
                clinicians to detect and respond to complications immediately.
              </p>
              <ul className="space-y-2">
                {[
                  "Continuous vital and fetal monitoring during labor",
                  "Real-time alerts for deteriorating conditions",
                  "Ergonomic delivery positioning",
                  "Full integration with clinical dashboards",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Postnatal */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 relative">
              <div className="absolute top-6 right-6 text-xs font-semibold text-teal bg-sky px-3 py-1 rounded-full">
                Stage 3
              </div>
              <div className="w-14 h-14 rounded-full bg-teal-dark flex items-center justify-center mb-6">
                <Baby className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Postnatal</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                Post-delivery monitoring of both mother and newborn continues
                through the platform and wearable devices, ensuring early
                detection of postpartum complications and neonatal distress.
              </p>
              <ul className="space-y-2">
                {[
                  "Postpartum maternal health tracking",
                  "Neonatal vital signs monitoring",
                  "Early warning for complications",
                  "Outcome data for quality improvement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Data flows. Insights emerge. Lives are saved.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  icon: Wifi,
                  title: "Devices Capture Real-Time Data",
                  desc: "BirthPro, BirthMithra, and MomSense continuously capture maternal and fetal vital signs — heart rate, blood pressure, oxygen saturation, contractions, fetal heart rate, and more.",
                },
                {
                  step: "02",
                  icon: Database,
                  title: "Platform Aggregates and Analyzes",
                  desc: "All device data flows to the BirthTech platform in real time. The platform builds a complete patient record and applies clinical algorithms to identify risk patterns.",
                },
                {
                  step: "03",
                  icon: Bell,
                  title: "Clinicians Receive Alerts",
                  desc: "When risk thresholds are crossed or patterns indicate deterioration, the platform generates immediate alerts — enabling clinicians to intervene before complications escalate.",
                },
                {
                  step: "04",
                  icon: BarChart3,
                  title: "Outcomes Drive Improvement",
                  desc: "Every delivery, every intervention, every outcome is recorded. This data enables hospitals, governments, and health organizations to measure impact and continuously improve care quality.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-sky flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-teal" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-teal bg-sky px-2.5 py-1 rounded-full">
                        Step {item.step}
                      </span>
                      <h3 className="text-lg font-bold text-navy">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
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
                See our products and platform in detail
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                Explore the medical devices and digital platform that power the
                BirthTech ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal text-white font-semibold rounded-lg hover:bg-teal-dark transition-colors"
                >
                  Our Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                >
                  Our Platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
