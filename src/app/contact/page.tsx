"use client";

import {
  Mail,
  MapPin,
  Phone,
  Building2,
  Stethoscope,
  Globe,
  TrendingUp,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-navy uppercase tracking-widest mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6 text-slate-900">
              Let&apos;s build safer
              <br />
              <span className="gradient-text">maternal care together</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
              Whether you represent a hospital, government program, NGO,
              investment firm, or technology partner — we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-navy mb-2">
                Send us a message
              </h2>
              <p className="text-slate-500 mb-8">
                Fill out the form below and our team will respond within 48
                hours.
              </p>

              {submitted ? (
                <div className="bg-sky-light rounded-2xl p-10 border border-sky text-center">
                  <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">
                    Message received
                  </h3>
                  <p className="text-slate-500">
                    Thank you for reaching out. Our team will get back to you
                    shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-navy mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold text-navy mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                      placeholder="you@organization.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                      placeholder="Hospital, government, NGO, company..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      I am interested in
                    </label>
                    <select
                      id="interest"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-slate-600"
                    >
                      <option value="">Select an option</option>
                      <option value="hospital">
                        Deploying BirthTech in our hospital
                      </option>
                      <option value="government">
                        Government health program partnership
                      </option>
                      <option value="ngo">NGO / Foundation collaboration</option>
                      <option value="investment">Investment opportunity</option>
                      <option value="technology">Technology partnership</option>
                      <option value="demo">Product demonstration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-none"
                      placeholder="Tell us about your needs and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 mb-8">
                <h3 className="text-lg font-bold text-navy mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sky flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">Email</p>
                      <a
                        href="mailto:info@thebirthtech.com"
                        className="text-sm text-teal hover:text-teal-dark transition-colors"
                      >
                        info@thebirthtech.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sky flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">Phone</p>
                      <p className="text-sm text-slate-500">+91-XXXX-XXXXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sky flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">
                        Location
                      </p>
                      <p className="text-sm text-slate-500">India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-lg font-bold text-navy mb-6">
                  Reach out if you are
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Stethoscope,
                      text: "A hospital or health system looking to improve maternal care",
                    },
                    {
                      icon: Building2,
                      text: "A government body running maternal health programs",
                    },
                    {
                      icon: Globe,
                      text: "An NGO or foundation focused on maternal & child health",
                    },
                    {
                      icon: TrendingUp,
                      text: "An investor interested in healthcare technology",
                    },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <item.icon className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
