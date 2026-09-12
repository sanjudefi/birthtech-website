import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import { Twitter } from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "BirthPro", href: "/products/birthpro" },
    { name: "BirthMithra", href: "/products/birthmithra" },
    { name: "MomSense Wearable", href: "/products/momsense" },
    { name: "BirthChair", href: "/products/birthchair" },
    { name: "Mother Care App", href: "/products/mothercare" },
    { name: "SkinPIN", href: "/products/skinpin" },
    { name: "Our Approach", href: "/approach" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Impact", href: "/impact" },
    { name: "Partners", href: "/partners" },
    { name: "Investors", href: "/investors" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="BirthTech Innovations"
                width={140}
                height={40}
                className="h-9 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Making the birthing process easy, comfortable, and safe.
              Thoughtful devices and apps to support mothers, babies, and
              everyday wellness.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/thebirthtech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-navy transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/thebirthtech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-navy transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/thebirthtech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-navy transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/thebirthtech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-navy transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
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

          {/* Offices */}
          <div>
            <h4 className="font-semibold text-sm tracking-wide uppercase mb-4 text-slate-300">
              Offices
            </h4>
            <div className="space-y-5">
              <div>
                <div className="flex items-start gap-2 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal mt-0.5 shrink-0" />
                  <span className="text-xs font-semibold text-slate-300 uppercase">
                    Canada
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-5.5">
                  BirthTech Innovations Inc
                  <br />
                  C/O Pycap, 15 Wellesley St W<br />
                  Unit 201, Toronto, ON M4Y 0G7
                </p>
              </div>
              <div>
                <div className="flex items-start gap-2 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal mt-0.5 shrink-0" />
                  <span className="text-xs font-semibold text-slate-300 uppercase">
                    India
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-5.5">
                  BirthTech Innovations Pvt Ltd
                  <br />
                  H.No: 26-107, Venkat Ram Reddy Nagar
                  <br />
                  Chintal, Hyderabad, Telangana 500054
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="mailto:ceo@thebirthtech.com"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-teal-light transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-teal shrink-0" />
                  ceo@thebirthtech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} BirthTech Innovations. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
