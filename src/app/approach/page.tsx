import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Heart,
  Stethoscope,
  Baby,
  Activity,
  Shield,
  Monitor,
  Users,
  CheckCircle2,
  Cpu,
  Globe,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "BirthTech's integrated approach to maternal care — combining smart medical devices, digital monitoring, and clinical intelligence across the full pregnancy-to-postnatal continuum.",
};

export default function ApproachPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-navy uppercase tracking-widest mb-4">
              Our Approach
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6 text-slate-900">
              A system-level approach to
              <br />
              <span className="gradient-text">maternal and neonatal care</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
              We don&apos;t build isolated products. We build an integrated
              ecosystem of devices, software, and clinical intelligence — designed
              to cover the full continuum of maternal care from pregnancy through
              postnatal recovery.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem We Address */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
                Why This Approach
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Maternal care is a continuum. The technology must be too.
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                Current maternal healthcare technology is fragmented. Pregnancy
                monitoring happens in isolation. Labor and delivery rely on
                outdated equipment with no data connectivity. Postnatal care is
                often completely disconnected from the delivery experience.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                This fragmentation leads to missed warning signs, delayed
                interventions, and preventable deaths. BirthTech exists to close
                these gaps with a unified approach — where every stage of care is
                connected, every data point is captured, and every clinician has
                the information they need.
              </p>
            </div>
            <div className="bg-sky-light rounded-2xl p-8 border border-sky">
              <h3 className="text-lg font-bold text-navy mb-6">
                Gaps in current care
              </h3>
              <div className="space-y-4">
                {[
                  "No continuous monitoring between clinic visits during pregnancy",
                  "Lack of real-time data during labor and delivery",
                  "Disconnected records between pregnancy, labor, and postnatal stages",
                  "Rural facilities lack basic delivery infrastructure",
                  "No integrated platform for clinician decision support",
                  "Limited data for public health analysis and policy",
                ].map((gap) => (
                  <div key={gap} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-teal text-xs font-bold">!</span>
                    </div>
                    <p className="text-sm text-slate-600">{gap}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Stages */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              Full Care Continuum
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Pregnancy. Labor. Postnatal. All connected.
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Our approach covers every critical stage of the maternal care
              journey with purpose-built technology.
            </p>
          </div>

          {/* Stage 1: Pregnancy */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 mb-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky rounded-full text-sm font-semibold text-navy mb-6">
                  <Heart className="w-4 h-4 text-teal" />
                  Stage 1
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">
                  Pregnancy Monitoring
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Our MomSense wearable device enables continuous remote
                  monitoring of maternal vitals and fetal wellbeing throughout
                  pregnancy. Data flows to the BirthTech platform, enabling
                  healthcare providers to track high-risk pregnancies, receive
                  automated alerts, and intervene early — even between scheduled
                  clinic visits.
                </p>
                <div className="space-y-3">
                  {[
                    "Continuous maternal vital sign tracking",
                    "Fetal movement and wellbeing monitoring",
                    "Automated risk alerts for care providers",
                    "Remote patient monitoring capabilities",
                    "Personalized health insights for mothers",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-sky-light rounded-2xl p-8 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-sky flex items-center justify-center">
                  <Heart className="w-16 h-16 text-teal" />
                </div>
              </div>
            </div>
          </div>

          {/* Stage 2: Labor & Delivery */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 mb-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1 bg-sky-light rounded-2xl p-8 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-sky flex items-center justify-center">
                  <Stethoscope className="w-16 h-16 text-teal" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky rounded-full text-sm font-semibold text-navy mb-6">
                  <Stethoscope className="w-4 h-4 text-teal" />
                  Stage 2
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">
                  Labor & Delivery
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  During the most critical phase of care, BirthPro — our smart
                  birthing chair — provides continuous real-time monitoring of
                  maternal vitals, fetal heart rate, and contraction patterns.
                  Clinicians receive AI-assisted risk alerts and have access to a
                  live dashboard for informed decision-making during labor.
                  BirthMithra ensures safe delivery infrastructure reaches even
                  the most remote locations.
                </p>
                <div className="space-y-3">
                  {[
                    "Real-time vital and fetal heart rate monitoring",
                    "AI-assisted risk detection and clinical alerts",
                    "Ergonomic birthing position for safer delivery",
                    "Portable delivery infrastructure for rural areas",
                    "Live clinician dashboard with decision support",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stage 3: Postnatal */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky rounded-full text-sm font-semibold text-navy mb-6">
                  <Baby className="w-4 h-4 text-teal" />
                  Stage 3
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">
                  Postnatal Care
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  After delivery, BirthTech continues to monitor both mother and
                  newborn through our wearable technology and platform.
                  Healthcare providers can track recovery, monitor newborn
                  health, and identify early warning signs of postpartum
                  complications — ensuring the care continuum extends beyond the
                  delivery room.
                </p>
                <div className="space-y-3">
                  {[
                    "Postpartum maternal health monitoring",
                    "Newborn vital sign tracking",
                    "Early detection of postpartum complications",
                    "Outcome analytics and health records",
                    "Continuity of care data for follow-up visits",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-sky-light rounded-2xl p-8 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-sky flex items-center justify-center">
                  <Baby className="w-16 h-16 text-teal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Together */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              The Integrated System
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Devices + Platform = Better Outcomes
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Every BirthTech device connects to a unified digital platform,
              creating a complete data layer across the entire maternal care journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Continuous Data Collection",
                desc: "Sensors in every device capture vital signs, fetal data, and clinical indicators in real time — building a complete patient record automatically.",
              },
              {
                icon: Monitor,
                title: "Clinician Dashboards",
                desc: "Healthcare providers access real-time patient data, trend analysis, and risk indicators through intuitive dashboards — at the bedside or remotely.",
              },
              {
                icon: Shield,
                title: "Automated Risk Alerts",
                desc: "The platform identifies potential complications early and sends automated alerts to clinicians — enabling timely intervention before emergencies escalate.",
              },
              {
                icon: Cpu,
                title: "AI-Assisted Decision Support",
                desc: "Clinical decision support tools help clinicians interpret complex data, identify patterns, and make evidence-based care decisions more confidently.",
              },
              {
                icon: BarChart3,
                title: "Population Health Analytics",
                desc: "Aggregated data enables hospital administrators, government bodies, and NGOs to analyze maternal health outcomes and improve system-level care delivery.",
              },
              {
                icon: Globe,
                title: "Scalable Architecture",
                desc: "Built to work in advanced hospitals and rural health centers alike — with offline capability, low-bandwidth optimization, and modular deployment options.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 card-hover"
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

      {/* Our Principles */}
      <section className="section-padding gradient-dark pattern-overlay text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-light uppercase tracking-widest mb-4">
              Design Principles
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How we build our technology
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Clinical-First Design",
                desc: "Every feature is designed from the clinical workflow outward — not the technology inward. We start with what clinicians need.",
              },
              {
                title: "Built for the Real World",
                desc: "Our technology works in well-equipped urban hospitals and under-resourced rural health centers. No exceptions.",
              },
              {
                title: "Data Integrity",
                desc: "Accurate, continuous, and secure data collection is the foundation of everything we build. No gaps. No guesswork.",
              },
              {
                title: "Responsible AI",
                desc: "Our AI tools assist clinicians — they don't replace them. We are transparent about what our algorithms can and cannot do.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h3 className="font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-navy rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden pattern-overlay">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See our approach in action
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                Explore our products, platform, and the ecosystem that brings
                them all together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal text-white font-semibold rounded-lg hover:bg-teal-dark transition-colors"
                >
                  View Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                >
                  Explore Platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
