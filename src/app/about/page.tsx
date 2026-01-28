import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Heart,
  Eye,
  Target,
  Globe,
  Shield,
  Lightbulb,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "BirthTech Innovations — our vision, mission, and commitment to building the infrastructure for safer maternal and neonatal healthcare worldwide.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-navy uppercase tracking-widest mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6 text-slate-900">
              Building the infrastructure for
              <br />
              <span className="gradient-text">safer maternal healthcare</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
              BirthTech Innovations is a maternal and neonatal healthcare
              technology company. We design medical devices, build digital
              platforms, and integrate them into a unified ecosystem that helps
              clinicians deliver safer care — at every stage of motherhood.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-10 border border-slate-200">
              <div className="w-14 h-14 rounded-full bg-teal flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-4">Our Vision</h2>
              <p className="text-slate-500 leading-relaxed text-lg">
                A world where no mother or newborn is lost to preventable
                causes. Where every pregnancy is monitored, every delivery is
                safe, and every healthcare facility — regardless of location —
                has the tools to deliver quality maternal care.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-10 border border-slate-200">
              <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-teal-light" />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-slate-500 leading-relaxed text-lg">
                To design and deploy integrated medical devices and digital
                platforms that make maternal and neonatal healthcare safer,
                smarter, and more accessible — starting in India and scaling
                globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              Why We Exist
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              Because the current system fails too many mothers
            </h2>
            <div className="space-y-6 text-lg text-slate-500 leading-relaxed">
              <p>
                Every year, hundreds of thousands of women die from
                pregnancy-related complications. Millions more suffer
                life-altering injuries. The vast majority of these outcomes are
                preventable — with timely monitoring, better equipment, and
                connected clinical data.
              </p>
              <p>
                The tools that exist today are fragmented. Devices don&apos;t
                talk to software. Data from pregnancy doesn&apos;t follow the
                patient into the delivery room. Rural facilities lack even
                basic infrastructure for safe deliveries.
              </p>
              <p>
                BirthTech was founded to solve this at the system level — not
                with a single product, but with an integrated ecosystem of
                devices and software that addresses the full continuum of
                maternal care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What drives every decision we make
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Lives First",
                desc: "Every product decision, every design choice, every engineering tradeoff is measured against one question: does this save more lives?",
              },
              {
                icon: Shield,
                title: "Clinical Integrity",
                desc: "We build for the realities of clinical care. Our solutions are designed with clinicians, validated in real settings, and held to medical-grade standards.",
              },
              {
                icon: Globe,
                title: "Universal Access",
                desc: "Technology that only works in well-funded urban hospitals doesn't solve the problem. We build solutions that work everywhere — from city hospitals to rural health centers.",
              },
              {
                icon: Lightbulb,
                title: "Systems Thinking",
                desc: "We don't build isolated products. We build integrated systems — because maternal care is a continuum, and the technology must be too.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-sky flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Ambition */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
                Global Ambition
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Starting in India. Scaling to the world.
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                India accounts for a significant share of global maternal and
                neonatal deaths. With one of the largest public health systems
                in the world, it is the ideal starting point for deploying and
                validating integrated maternal care technology at scale.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                Our long-term vision extends across South Asia, Sub-Saharan
                Africa, and Southeast Asia — regions where the maternal
                healthcare gap is largest and the impact potential is greatest.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                BirthTech is building a global standard for maternal care
                technology — one that can be adopted by governments, health
                systems, and NGOs worldwide.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-lg font-bold text-navy mb-6">Our Roadmap</h3>
              <div className="space-y-6">
                {[
                  {
                    phase: "Phase 1",
                    title: "India Market",
                    desc: "Deploy across hospitals, government facilities, and rural health centers in India. Validate clinical outcomes at scale.",
                  },
                  {
                    phase: "Phase 2",
                    title: "South Asia & Africa",
                    desc: "Expand to neighboring countries and Sub-Saharan Africa through government partnerships and NGO collaborations.",
                  },
                  {
                    phase: "Phase 3",
                    title: "Global Platform",
                    desc: "Establish BirthTech as the global standard for integrated maternal care technology — adopted by health systems worldwide.",
                  },
                ].map((item) => (
                  <div key={item.phase} className="flex gap-4">
                    <div className="shrink-0">
                      <span className="inline-block px-3 py-1 bg-sky text-teal text-xs font-bold rounded-full">
                        {item.phase}
                      </span>
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
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">
              Leadership
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Meet our team
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              A multidisciplinary founding team with deep experience in
              engineering, product development, regulatory affairs, and
              healthcare technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Veena Venu",
                role: "Co-Founder & Chief Executive Officer",
                photo: "/team/veena-venu.jpg",
                bio: "Electronics Engineer with experience in startups, possessing extensive knowledge of product development and fundraising.",
              },
              {
                name: "Sanjeeva Kumar Muddam",
                role: "Co-Founder & CEO – Global Operations",
                photo: "/team/sanjeeva-kumar.jpg",
                bio: "Entrepreneur with 14 years of experience in C-level and managerial roles, specializing in product development and marketing.",
              },
              {
                name: "Janice Joseph",
                role: "Co-Founder & Chief of Regulatory Affairs & Public Relations",
                photo: "/team/janice-joseph.jpg",
                bio: "Experienced and passionate professional in Public and Regulatory Affairs within the healthcare sector, with extensive experience across various verticals.",
              },
              {
                name: "Ramakrishna Kiran",
                role: "Co-Founder & Chief Technology Officer",
                photo: "/team/ramakrishna-kiran.jpg",
                bio: "Expert in full stack development with over 10 years of experience, specializing in building end-to-end systems.",
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-36 h-36 rounded-full mx-auto mb-5 overflow-hidden bg-sky border-4 border-sky">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={144}
                    height={144}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-navy text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-teal text-sm font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {member.bio}
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
                Be part of the mission
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                Whether you are a healthcare provider, government body,
                investor, or potential partner — we invite you to join us in
                making maternal care safer for every mother.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal text-white font-semibold rounded-lg hover:bg-teal-dark transition-colors"
                >
                  Get in Touch
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
