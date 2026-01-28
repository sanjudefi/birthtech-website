import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Stethoscope,
  Shield,
  Activity,
  CheckCircle2,
  Heart,
  Wifi,
  Monitor,
  Users,
  Smartphone,
  Bell,
  BarChart3,
  Truck,
  MapPin,
  Zap,
  Baby,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
  description:
    "BirthPro smart birthing chair, BirthMithra portable delivery bed, and MomSense wearable — purpose-built medical devices for maternal and neonatal care.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pattern-overlay text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-teal-light uppercase tracking-widest mb-4">
              Products
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Medical devices built for
              <br />
              <span className="text-teal-light">maternal care</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Each BirthTech device is purpose-designed to address specific
              clinical needs in maternal and neonatal healthcare — and every
              device connects to our digital platform for complete care
              visibility.
            </p>
          </div>
        </div>
      </section>

      {/* BirthPro */}
      <section id="birthpro" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky rounded-full text-sm font-semibold text-teal mb-6">
                <Stethoscope className="w-4 h-4" />
                Flagship Device
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
                BirthPro
              </h2>
              <p className="text-lg text-teal font-semibold mb-4">
                Smart Birthing Chair with Integrated Monitoring
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                BirthPro is an ergonomic birthing chair with built-in sensors
                for continuous vital sign and fetal heart rate monitoring. It
                connects to the BirthTech platform to provide clinicians with
                real-time dashboards, risk alerts, and AI-assisted decision
                support during labor and delivery.
              </p>
              <div className="bg-sky-light rounded-xl p-5 border border-sky mb-6">
                <p className="text-navy font-semibold text-sm mb-1">
                  Who it&apos;s for
                </p>
                <p className="text-slate-600 text-sm">
                  Hospitals, maternity wards, birthing centers, and government
                  health facilities seeking to improve labor monitoring and
                  delivery outcomes.
                </p>
              </div>
              <div className="bg-sky-light rounded-xl p-5 border border-sky">
                <p className="text-navy font-semibold text-sm mb-1">
                  Why it matters
                </p>
                <p className="text-slate-600 text-sm">
                  Most facilities lack continuous monitoring during labor.
                  BirthPro ensures every delivery is monitored in real time —
                  catching complications early and giving clinicians the data
                  they need to act decisively.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="w-20 h-20 rounded-2xl bg-navy flex items-center justify-center mx-auto mb-8">
                <Stethoscope className="w-10 h-10 text-teal-light" />
              </div>
              <h3 className="text-lg font-bold text-navy text-center mb-6">
                Key Capabilities
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Heart, label: "Maternal vital signs monitoring" },
                  { icon: Baby, label: "Fetal heart rate tracking" },
                  { icon: Activity, label: "Contraction monitoring" },
                  { icon: Bell, label: "Real-time risk alerts" },
                  { icon: Monitor, label: "Clinician dashboard" },
                  { icon: Wifi, label: "Platform integration" },
                  { icon: BarChart3, label: "AI risk prediction" },
                  { icon: Users, label: "Multi-patient support" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 text-sm text-slate-600"
                  >
                    <item.icon className="w-4 h-4 text-teal shrink-0" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BirthMithra */}
      <section id="birthmithra" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-2xl p-8 border border-slate-200">
              <div className="w-20 h-20 rounded-2xl bg-navy flex items-center justify-center mx-auto mb-8">
                <Shield className="w-10 h-10 text-teal-light" />
              </div>
              <h3 className="text-lg font-bold text-navy text-center mb-6">
                Key Capabilities
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Truck, label: "Portable & foldable design" },
                  { icon: MapPin, label: "Rural health center ready" },
                  { icon: Shield, label: "Clinical-grade construction" },
                  { icon: Zap, label: "Rapid deployment" },
                  { icon: Users, label: "Designed for field teams" },
                  { icon: Activity, label: "Emergency field use" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 text-sm text-slate-600"
                  >
                    <item.icon className="w-4 h-4 text-teal shrink-0" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky rounded-full text-sm font-semibold text-teal mb-6">
                <Shield className="w-4 h-4" />
                Access Solution
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
                BirthMithra
              </h2>
              <p className="text-lg text-teal font-semibold mb-4">
                Portable, Foldable Delivery Bed
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                BirthMithra is a lightweight, foldable delivery bed designed for
                deployment in rural health centers, primary care facilities, and
                emergency settings. It provides clinical-grade delivery
                infrastructure where it is needed most — bringing safe birthing
                capability to underserved areas.
              </p>
              <div className="bg-sky-light rounded-xl p-5 border border-sky mb-6">
                <p className="text-navy font-semibold text-sm mb-1">
                  Who it&apos;s for
                </p>
                <p className="text-slate-600 text-sm">
                  Rural health centers, community health programs, government
                  maternal health initiatives, NGOs, and emergency response
                  teams.
                </p>
              </div>
              <div className="bg-sky-light rounded-xl p-5 border border-sky">
                <p className="text-navy font-semibold text-sm mb-1">
                  Why it matters
                </p>
                <p className="text-slate-600 text-sm">
                  Millions of deliveries happen in facilities that lack even
                  basic birthing equipment. BirthMithra ensures safe delivery
                  infrastructure can reach any location — quickly and affordably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MomSense */}
      <section id="momsense" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky rounded-full text-sm font-semibold text-teal mb-6">
                <Activity className="w-4 h-4" />
                Wearable Technology
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
                MomSense
              </h2>
              <p className="text-lg text-teal font-semibold mb-4">
                Smart Wearable for Mother & Baby
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                MomSense is a non-invasive wearable device that continuously
                monitors maternal vital signs and fetal wellbeing indicators
                throughout pregnancy and the postnatal period. Data streams to
                the BirthTech platform, enabling remote care, early risk
                detection, and personalized health tracking.
              </p>
              <div className="bg-sky-light rounded-xl p-5 border border-sky mb-6">
                <p className="text-navy font-semibold text-sm mb-1">
                  Who it&apos;s for
                </p>
                <p className="text-slate-600 text-sm">
                  Expectant mothers (especially high-risk pregnancies),
                  hospitals managing remote patients, community health workers,
                  and postnatal care programs.
                </p>
              </div>
              <div className="bg-sky-light rounded-xl p-5 border border-sky">
                <p className="text-navy font-semibold text-sm mb-1">
                  Why it matters
                </p>
                <p className="text-slate-600 text-sm">
                  Most pregnancy monitoring happens only during periodic clinic
                  visits. MomSense bridges the gap by enabling continuous
                  monitoring at home — catching warning signs between
                  appointments.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="w-20 h-20 rounded-2xl bg-navy flex items-center justify-center mx-auto mb-8">
                <Activity className="w-10 h-10 text-teal-light" />
              </div>
              <h3 className="text-lg font-bold text-navy text-center mb-6">
                Key Capabilities
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Heart, label: "Maternal heart rate & BP" },
                  { icon: Baby, label: "Fetal movement tracking" },
                  { icon: Activity, label: "SpO2 monitoring" },
                  { icon: Bell, label: "Automated alerts" },
                  { icon: Smartphone, label: "Mobile companion app" },
                  { icon: Wifi, label: "Cloud platform sync" },
                  { icon: BarChart3, label: "Trend analysis" },
                  { icon: Monitor, label: "Remote clinician access" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 text-sm text-slate-600"
                  >
                    <item.icon className="w-4 h-4 text-teal shrink-0" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Connected */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-navy rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden pattern-overlay">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Every device connects to one platform
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                All BirthTech devices feed data into a unified digital platform
                — creating a complete clinical picture for every patient across
                the entire care journey.
              </p>
              <Link
                href="/platform"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal text-white font-semibold rounded-lg hover:bg-teal-dark transition-colors"
              >
                Explore the Platform
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
