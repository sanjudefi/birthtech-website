import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Activity,
  Shield,
  Cpu,
  Globe,
  Users,
  TrendingUp,
  Stethoscope,
  Baby,
  MonitorSmartphone,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="gradient-hero pattern-overlay text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-teal-light mb-8">
              <Heart className="w-4 h-4" />
              Transforming Maternal Healthcare
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              Every Mother Deserves
              <br />
              <span className="text-teal-light">Safe, Monitored Care</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
              BirthTech builds integrated medical devices and a digital platform
              to make childbirth safer, smarter, and accessible — from pregnancy
              through postnatal care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/solution"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal text-white font-semibold rounded-lg hover:bg-teal-dark transition-colors text-base"
              >
                Explore Our Ecosystem
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-base border border-white/20"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
        {/* Abstract decorative element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* ===== VISION STATEMENT ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              Our Vision
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              A world where no mother or newborn is lost to preventable causes
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Globally, over 800 women die every day from pregnancy-related
              complications. Most of these deaths are preventable with timely
              monitoring, better equipment, and connected data. BirthTech exists
              to close that gap — with technology built for the real world.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE SOLVE ===== */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              The Challenge
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Maternal healthcare is broken at the system level
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Fragmented care, outdated equipment, and missing data lead to
              preventable deaths and complications.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "No Real-Time Monitoring",
                desc: "Most facilities lack continuous monitoring during labor, leading to delayed detection of complications.",
              },
              {
                icon: MonitorSmartphone,
                title: "Disconnected Data",
                desc: "Patient records are fragmented across pregnancy, labor, and postnatal stages — critical patterns go unnoticed.",
              },
              {
                icon: Globe,
                title: "Rural Access Gap",
                desc: "Rural and underserved facilities often lack even basic birthing infrastructure and trained specialists.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-slate-200 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/problem"
              className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:text-teal-dark transition-colors"
            >
              Learn more about the problem
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== OUR ECOSYSTEM ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              Our Ecosystem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Devices + Platform. One integrated system.
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              BirthTech combines purpose-built medical devices with an
              intelligent digital platform to deliver continuous, connected
              maternal and neonatal care.
            </p>
          </div>

          {/* Continuum */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                stage: "Pregnancy",
                icon: Heart,
                desc: "Remote monitoring, risk screening, and personalized care through wearable technology.",
                color: "bg-teal",
              },
              {
                stage: "Labor & Delivery",
                icon: Stethoscope,
                desc: "Smart birthing equipment with real-time monitoring and decision support for clinicians.",
                color: "bg-navy",
              },
              {
                stage: "Postnatal",
                icon: Baby,
                desc: "Continuous mother and newborn tracking, early warning alerts, and outcome analytics.",
                color: "bg-teal-dark",
              },
            ].map((item) => (
              <div
                key={item.stage}
                className="relative bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center"
              >
                <div
                  className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mx-auto mb-5`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  {item.stage}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/solution"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
            >
              Explore the Ecosystem
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS OVERVIEW ===== */}
      <section className="section-padding gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              Products
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Purpose-built for maternal care
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Each device is designed from the ground up to address real clinical
              needs in maternal and neonatal healthcare.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* BirthPro */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 card-hover">
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6">
                <Stethoscope className="w-7 h-7 text-teal-light" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">BirthPro</h3>
              <p className="text-sm text-teal font-semibold mb-4">
                Smart Birthing Chair
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                An ergonomic birthing chair with integrated sensors for
                continuous vital monitoring, fetal heart rate tracking, and
                AI-assisted risk alerts during labor.
              </p>
              <ul className="space-y-2">
                {[
                  "Real-time vital monitoring",
                  "Ergonomic birthing position",
                  "AI risk prediction",
                  "Platform-connected",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* BirthMithra */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 card-hover">
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-teal-light" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">BirthMithra</h3>
              <p className="text-sm text-teal font-semibold mb-4">
                Portable Delivery Bed
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                A foldable, portable delivery bed designed for rural health
                centers, primary care facilities, and emergency field use —
                bringing safe delivery infrastructure anywhere.
              </p>
              <ul className="space-y-2">
                {[
                  "Lightweight & foldable",
                  "Rural & field ready",
                  "Clinical-grade design",
                  "Rapid deployment",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* MomSense */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 card-hover">
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-teal-light" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                MomSense
              </h3>
              <p className="text-sm text-teal font-semibold mb-4">
                Smart Wearable
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                A wearable monitoring device for expectant and new mothers —
                tracking maternal vitals and fetal wellbeing throughout pregnancy
                and after delivery.
              </p>
              <ul className="space-y-2">
                {[
                  "Continuous maternal monitoring",
                  "Fetal wellbeing tracking",
                  "Early warning alerts",
                  "Platform-integrated",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:text-teal-dark transition-colors"
            >
              View all product details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY BIRTHTECH ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
                Why BirthTech
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Not just devices. An entirely new standard of care.
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Other solutions offer isolated devices or standalone software.
                BirthTech is the only company building a fully integrated
                ecosystem — where every device, every data point, and every
                clinical decision is connected.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: Cpu,
                    title: "Integrated by Design",
                    desc: "Devices and platform built together, not bolted on after the fact.",
                  },
                  {
                    icon: Globe,
                    title: "Built for Scale",
                    desc: "Works in advanced hospitals and rural health centers alike.",
                  },
                  {
                    icon: Shield,
                    title: "Clinically Validated",
                    desc: "Designed with clinicians, for real clinical workflows.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Data-Driven Outcomes",
                    desc: "Continuous data collection drives better decisions and better outcomes.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-teal" />
                    </div>
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
            <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-10 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">
                  The BirthTech Difference
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "Others", detail: "Single-purpose devices with no data layer" },
                    { label: "Others", detail: "Manual record-keeping during critical moments" },
                    { label: "Others", detail: "No continuity between pregnancy, labor, postnatal" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-400/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-red-300 text-xs font-bold">x</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-xs font-semibold uppercase">
                          {item.label}
                        </span>
                        <p className="text-slate-300 text-sm">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-white/10 pt-6">
                    {[
                      "Integrated devices + platform",
                      "Real-time monitoring + AI alerts",
                      "Full pregnancy-to-postnatal continuum",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 mb-3">
                        <div className="w-6 h-6 rounded-full bg-teal/30 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-light" />
                        </div>
                        <div>
                          <span className="text-teal-light text-xs font-semibold uppercase">
                            BirthTech
                          </span>
                          <p className="text-white text-sm">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMPACT NUMBERS ===== */}
      <section className="section-padding gradient-hero pattern-overlay text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-light uppercase tracking-widest mb-4">
              Impact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The scale of what we&apos;re solving
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Every number represents mothers and newborns who deserve better
              care.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "295,000",
                label: "Maternal deaths annually worldwide",
                sub: "WHO, 2023",
              },
              {
                number: "2.4M",
                label: "Newborns die within first 28 days each year",
                sub: "UNICEF",
              },
              {
                number: "94%",
                label: "Of maternal deaths occur in low and middle income countries",
                sub: "WHO",
              },
              {
                number: "80%+",
                label: "Of these deaths are preventable with timely care",
                sub: "Lancet",
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-teal-light mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-slate-300 mb-1">{stat.label}</p>
                <p className="text-xs text-slate-500">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST & CREDIBILITY ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              Trusted By
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Built for hospitals. Designed for impact.
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              We work with healthcare institutions, government bodies, and
              global health organizations to deploy maternal care solutions at
              scale.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Stethoscope,
                title: "Hospitals & Clinics",
                desc: "Deploying smart birthing infrastructure in clinical environments.",
              },
              {
                icon: Users,
                title: "Government Programs",
                desc: "Supporting national maternal health initiatives and public health goals.",
              },
              {
                icon: Globe,
                title: "NGOs & Foundations",
                desc: "Partnering with global health organizations to reach underserved communities.",
              },
              {
                icon: TrendingUp,
                title: "Investors & Partners",
                desc: "Backed by those who believe in scalable, technology-driven healthcare impact.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-teal" />
                </div>
                <h4 className="font-bold text-navy text-sm mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-navy rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden pattern-overlay">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join us in making maternal care safer
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                Whether you are a hospital, government body, NGO, investor, or
                technology partner — there is a role for you in this mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/partners"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal text-white font-semibold rounded-lg hover:bg-teal-dark transition-colors"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/investors"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                >
                  For Investors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
