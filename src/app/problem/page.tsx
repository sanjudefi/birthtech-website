import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  Activity,
  Globe,
  Clock,
  HeartPulse,
  FileWarning,
  Building2,
  MonitorSmartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Problem",
  description:
    "Understanding the global maternal healthcare crisis — fragmented care, preventable deaths, and the urgent need for integrated technology solutions.",
};

export default function ProblemPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-navy uppercase tracking-widest mb-4">
              The Problem
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6 text-slate-900">
              Maternal healthcare is in crisis.
              <br />
              <span className="gradient-text">Most of it is preventable.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
              Every two minutes, a woman dies from pregnancy or childbirth
              complications. The vast majority of these deaths occur where
              healthcare infrastructure is weakest — and are preventable with
              timely intervention.
            </p>
          </div>
        </div>
      </section>

      {/* Global Maternal Mortality */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
                Maternal Mortality
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                295,000 women die each year from pregnancy-related causes
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                According to the World Health Organization, maternal mortality
                remains unacceptably high globally. Sub-Saharan Africa and South
                Asia account for approximately 86% of all maternal deaths
                worldwide.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                An additional 2.4 million newborns die within their first 28
                days of life each year. Many of these neonatal deaths are
                directly linked to complications during labor and delivery that
                could have been detected and managed with proper monitoring.
              </p>
              <div className="bg-sky-light rounded-xl p-6 border border-sky">
                <p className="text-navy font-semibold text-sm mb-2">
                  The most sobering statistic:
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Over <strong>80% of maternal deaths</strong> are caused by
                  conditions that are preventable or treatable — hemorrhage,
                  infections, high blood pressure, and complications from
                  delivery.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  number: "295K",
                  label: "Maternal deaths per year",
                  icon: HeartPulse,
                },
                {
                  number: "2.4M",
                  label: "Neonatal deaths per year",
                  icon: AlertTriangle,
                },
                {
                  number: "94%",
                  label: "Deaths in LMIC countries",
                  icon: Globe,
                },
                {
                  number: "80%+",
                  label: "Preventable with timely care",
                  icon: Clock,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center"
                >
                  <stat.icon className="w-6 h-6 text-teal mx-auto mb-3" />
                  <p className="text-2xl font-bold text-navy mb-1">
                    {stat.number}
                  </p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gaps in Current Systems */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              System Gaps
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why existing systems fail mothers and newborns
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              The problem is not a single point of failure. It is a systemic
              breakdown across multiple layers of care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "No Continuous Monitoring",
                desc: "Most facilities rely on periodic manual checks during labor. Critical changes in maternal or fetal condition go undetected between checks, often until it is too late.",
              },
              {
                icon: FileWarning,
                title: "Fragmented Patient Records",
                desc: "Pregnancy history, antenatal records, labor data, and postnatal outcomes live in disconnected systems — or only on paper. Clinicians lack a complete picture at the moment of decision.",
              },
              {
                icon: Building2,
                title: "Inadequate Equipment",
                desc: "Many facilities, particularly in rural and semi-urban areas, lack appropriate birthing equipment. Deliveries happen on outdated beds without any monitoring capability.",
              },
              {
                icon: MonitorSmartphone,
                title: "No Decision Support",
                desc: "Even when data is collected, there are no tools to help clinicians interpret patterns, predict risk, or respond to deteriorating conditions in real time.",
              },
              {
                icon: Globe,
                title: "Urban-Rural Divide",
                desc: "Advanced care is concentrated in urban centers. Rural facilities face shortages of trained staff, functioning equipment, and digital infrastructure.",
              },
              {
                icon: Clock,
                title: "Delayed Response",
                desc: "Without real-time alerts and clear escalation protocols, the window for intervention closes before action is taken — turning manageable complications into emergencies.",
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

      {/* Why Both Are Needed */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              The Insight
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              Devices alone are not enough. Software alone is not enough.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              The maternal healthcare crisis cannot be solved with a standalone
              device or a standalone app. It requires an integrated approach —
              where hardware captures real-time clinical data, software connects
              and interprets that data, and clinicians receive actionable
              intelligence at the point of care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="font-bold text-navy mb-4 text-lg">
                Devices without software
              </h3>
              <ul className="space-y-3">
                {[
                  "Data is captured but not connected",
                  "No automated alerts or risk detection",
                  "No longitudinal patient records",
                  "No analytics for system improvement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-500">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      x
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="font-bold text-navy mb-4 text-lg">
                Software without devices
              </h3>
              <ul className="space-y-3">
                {[
                  "Relies on manual data entry",
                  "No real-time clinical data flow",
                  "Cannot monitor during labor",
                  "Limited to retrospective analysis",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-500">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      x
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <div className="gradient-navy rounded-2xl p-8 text-white text-center">
              <h3 className="font-bold text-xl mb-3">
                What is needed: Devices + Software, together
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto mb-6">
                An integrated system where medical devices capture real-time
                data, a digital platform connects and analyzes it, and
                clinicians receive timely alerts and decision support — across
                the entire continuum of care.
              </p>
              <Link
                href="/solution"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white font-semibold rounded-lg hover:bg-teal-dark transition-colors"
              >
                See Our Solution
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
