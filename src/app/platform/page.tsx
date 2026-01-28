import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Monitor,
  Bell,
  BarChart3,
  Database,
  Shield,
  Users,
  Wifi,
  FileText,
  Activity,
  Brain,
  Layers,
  Lock,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "The BirthTech digital platform — real-time monitoring dashboards, clinical alerts, electronic health records, and population-level analytics for maternal care.",
};

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pattern-overlay text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-teal-light uppercase tracking-widest mb-4">
              Digital Platform
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              The intelligence layer
              <br />
              <span className="text-teal-light">behind every device</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              The BirthTech platform connects all devices, aggregates clinical
              data in real time, generates alerts, and gives clinicians and
              administrators the dashboards they need to deliver better maternal
              care.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              One platform. Complete visibility.
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Every feature is designed for the realities of clinical
              environments — from busy urban hospitals to resource-limited rural
              facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: "Real-Time Monitoring Dashboards",
                desc: "Live views of maternal and fetal vital signs for each patient. Clinicians see heart rate, blood pressure, oxygen saturation, contractions, and fetal heart rate — updated continuously from connected devices.",
              },
              {
                icon: Bell,
                title: "Automated Clinical Alerts",
                desc: "When vital signs cross clinical thresholds or patterns indicate deterioration, the platform generates immediate alerts to nursing stations, clinician devices, and escalation contacts.",
              },
              {
                icon: FileText,
                title: "Electronic Health Records",
                desc: "Complete patient records across the care continuum — pregnancy history, antenatal visits, labor events, delivery outcomes, and postnatal follow-up. All in one place, accessible to authorized clinicians.",
              },
              {
                icon: BarChart3,
                title: "Population Analytics",
                desc: "Aggregate data across patients, facilities, and regions. Health administrators can track outcome trends, identify systemic issues, measure intervention effectiveness, and allocate resources intelligently.",
              },
              {
                icon: Brain,
                title: "Clinical Decision Support",
                desc: "Evidence-based algorithms assist clinicians with risk scoring and pattern recognition. The system surfaces relevant clinical information without replacing clinician judgment.",
              },
              {
                icon: Layers,
                title: "Multi-Facility Management",
                desc: "Manage multiple facilities from a central dashboard. Monitor device status, patient load, staffing alerts, and performance metrics across your network of care centers.",
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

      {/* Data Flow */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
                How It Works
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                From device sensor to clinical decision — in real time
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                The platform is the connective tissue between BirthTech devices
                and clinical care. Data flows automatically — no manual entry, no
                gaps, no delays.
              </p>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Device Data Capture",
                    desc: "BirthPro, BirthMithra sensors, and MomSense wearable continuously capture vital signs and transmit them to the platform.",
                  },
                  {
                    step: "02",
                    title: "Real-Time Processing",
                    desc: "Incoming data is processed against clinical algorithms, building a live picture of each patient's status.",
                  },
                  {
                    step: "03",
                    title: "Alert Generation",
                    desc: "When thresholds are crossed or concerning patterns emerge, alerts are immediately routed to the right clinicians.",
                  },
                  {
                    step: "04",
                    title: "Clinical Action",
                    desc: "Clinicians view dashboards, review alerts, and take informed action — with full context and patient history at hand.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal flex items-center justify-center shrink-0 text-white font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-lg font-bold text-navy mb-6 text-center">
                Platform Architecture
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Wifi,
                    label: "Device Integration Layer",
                    desc: "Secure data ingestion from all BirthTech devices",
                  },
                  {
                    icon: Database,
                    label: "Data Processing Engine",
                    desc: "Real-time streaming, clinical algorithms, risk scoring",
                  },
                  {
                    icon: Activity,
                    label: "Monitoring & Alerting",
                    desc: "Live dashboards, threshold alerts, escalation protocols",
                  },
                  {
                    icon: FileText,
                    label: "Records & Analytics",
                    desc: "Patient records, outcome tracking, population analytics",
                  },
                  {
                    icon: Lock,
                    label: "Security & Compliance",
                    desc: "End-to-end encryption, role-based access, audit logging",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100"
                  >
                    <div className="w-10 h-10 rounded-lg bg-sky flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy text-sm">
                        {item.label}
                      </h4>
                      <p className="text-slate-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Uses It */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              Built For
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Designed for every stakeholder in maternal care
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Clinicians",
                items: [
                  "Real-time patient dashboards",
                  "Automated alerts",
                  "Clinical decision support",
                  "Comprehensive patient records",
                ],
              },
              {
                icon: BarChart3,
                title: "Administrators",
                items: [
                  "Facility performance metrics",
                  "Outcome analytics",
                  "Resource utilization data",
                  "Multi-facility oversight",
                ],
              },
              {
                icon: Shield,
                title: "Government Bodies",
                items: [
                  "Regional health dashboards",
                  "Maternal mortality tracking",
                  "Program effectiveness data",
                  "Policy planning insights",
                ],
              },
              {
                icon: Monitor,
                title: "Patients",
                items: [
                  "Personal health tracking",
                  "Pregnancy journey view",
                  "Appointment reminders",
                  "Care team communication",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
              >
                <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-bold text-navy mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs text-slate-500"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Note */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              A Note on AI
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              Technology that supports clinicians — not replaces them
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              The BirthTech platform uses clinical algorithms and machine
              learning to assist with risk scoring, pattern recognition, and
              alert prioritization. These tools are designed to surface relevant
              information and support clinical decision-making.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              All clinical decisions remain with qualified healthcare
              professionals. Our AI capabilities are built to augment clinical
              expertise — improving speed, consistency, and coverage of
              monitoring — while keeping the clinician firmly in control.
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
                See how the platform works with our devices
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                The platform comes alive when connected to BirthTech medical
                devices. Explore our product lineup.
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
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
