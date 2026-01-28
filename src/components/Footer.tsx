import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
} from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "BirthPro", href: "/products" },
    { name: "BirthMithra", href: "/products" },
    { name: "MomSense Wearable", href: "/products" },
    { name: "Digital Platform", href: "/platform" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Impact", href: "/impact" },
    { name: "Partners", href: "/partners" },
    { name: "Investors", href: "/investors" },
  ],
  resources: [
    { name: "The Problem", href: "/problem" },
    { name: "Our Ecosystem", href: "/solution" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-teal flex items-center justify-center">
                <span className="text-white font-bold text-sm">BT</span>
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight">
                  BirthTech
                </span>
                <span className="text-slate-400 text-xs ml-1 font-normal">
                  Innovations
                </span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mb-6">
              Building the infrastructure for safer maternal and neonatal healthcare.
              Devices, data, and intelligence — integrated to save lives at scale.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-sm tracking-wide uppercase mb-4 text-slate-300">
              Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-teal-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm tracking-wide uppercase mb-4 text-slate-300">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-teal-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm tracking-wide uppercase mb-4 text-slate-300">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                <a
                  href="mailto:info@thebirthtech.com"
                  className="text-sm text-slate-400 hover:text-teal-light transition-colors"
                >
                  info@thebirthtech.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  +91-XXXX-XXXXXX
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} BirthTech Innovations. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
