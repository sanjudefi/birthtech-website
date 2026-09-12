"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Products", href: "/products", children: [
    { name: "All Products", href: "/products" },
    { name: "BirthChair", href: "/products/birthchair" },
    { name: "MomSense", href: "/products/momsense" },
    { name: "BirthMithra", href: "/products/birthmithra" },
    { name: "BirthPro", href: "/products/birthpro" },
    { name: "SkinPIN AI", href: "/products/skinpin" },
    { name: "Mother Care App", href: "/products/mothercare" },
  ] },
  { name: "Solutions", href: "/solution", children: [
    { name: "Solutions overview", href: "/solution" },
    { name: "The Problem", href: "/problem" },
    { name: "Our Approach", href: "/approach" },
    { name: "Our Apps", href: "/platform" },
  ] },
  { name: "About Us", href: "/about", children: [
    { name: "About BirthTech", href: "/about" },
    { name: "Our Impact", href: "/impact" },
    { name: "Partners", href: "/partners" },
    { name: "Investors", href: "/investors" },
  ] },
  { name: "Team", href: "/about#team" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const close = () => { setMobileOpen(false); setOpenMenu(null); };
  return <header className="fixed top-0 left-0 right-0 z-50">
    <div className="nav-gradient-bar h-1" />
    <div className="bg-white/95 backdrop-blur-md border-b border-slate-200">
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" aria-label="BirthTech home" onClick={close}><Image src="/logo.png" alt="BirthTech Innovations" width={140} height={40} className="h-9 w-auto" priority /></Link>
          <div className="hidden lg:flex items-center gap-6" data-desktop-navigation>
            {navigation.map(item => item.children ? <div key={item.name} className="relative" onMouseEnter={() => setOpenMenu(item.name)} onMouseLeave={() => setOpenMenu(null)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu(null); }} onKeyDown={event => { if (event.key === "Escape") { setOpenMenu(null); event.currentTarget.querySelector('button')?.focus(); } }}>
              <button aria-expanded={openMenu === item.name} aria-controls={`desktop-${item.name.replaceAll(' ', '-')}`} onClick={() => setOpenMenu(openMenu === item.name ? null : item.name)} className="flex items-center gap-1.5 py-3 text-sm font-medium text-slate-600 hover:text-navy">{item.name}<ChevronDown size={14} /></button>
              {openMenu === item.name && <div id={`desktop-${item.name.replaceAll(' ', '-')}`} className="absolute top-full left-0 pt-2 w-56"><div className="max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                {item.children.map(child => <Link key={child.href} href={child.href} onClick={close} className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-sky-light hover:text-navy">{child.name}</Link>)}
              </div></div>}
            </div> : <Link key={item.name} href={item.href} onClick={close} className="py-3 text-sm font-medium text-slate-600 hover:text-navy">{item.name}</Link>)}
          </div>
          <button aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-slate-600">{mobileOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
        {mobileOpen && <div id="mobile-navigation" className="lg:hidden max-h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-slate-100 py-4">
          {navigation.map(item => item.children ? <details key={item.name} className="group border-b border-slate-100">
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-4 font-medium text-slate-700">{item.name}<ChevronDown size={16} className="transition-transform group-open:rotate-180" /></summary>
            <div className="pb-3 pl-4">{item.children.map(child => <Link key={child.href} href={child.href} onClick={close} className="block rounded-lg px-4 py-3 text-sm text-slate-600 hover:bg-sky-light">{child.name}</Link>)}</div>
          </details> : <Link key={item.name} href={item.href} onClick={close} className="block rounded-lg px-4 py-4 font-medium text-slate-700 hover:bg-sky-light">{item.name}</Link>)}
        </div>}
      </nav>
    </div>
  </header>;
}
