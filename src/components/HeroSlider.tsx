"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

const slides = [
  {
    id: "birthchair",
    name: "BirthChair",
    category: "Thoughtfully designed birthing support",
    title: "Made for birth.",
    accent: "Designed around her.",
    description:
      "Thoughtful positioning, gentle monitoring, and a portable design. Meet a new approach to birthing support.",
    features: ["Personalized comfort", "Smart monitoring", "Portable design"],
    image: "/slides/birthchair-clinical.webp",
    alt: "Purple BirthChair in a bright, softly lit maternity suite",
    href: "/products/birthchair",
    cta: "Discover BirthChair",
    status: "Open for orders",
    caption: "Designed around you.",
  },
  {
    id: "momsense",
    name: "MomSense",
    category: "Connected care for mother & baby",
    title: "Two little bands.",
    accent: "One beautiful bond.",
    description:
      "A connected wearable for you and one for your baby. Gentle wellness insights, shared moments, and everyday reassurance.",
    features: ["Mother & baby bands", "Sleep & activity", "Gentle alerts"],
    image: "/slides/momsense-hero-reference.webp",
    alt: "Smiling mother holding her blond baby boy, both wearing slim MomSense bracelets",
    href: "/products/momsense",
    cta: "Meet MomSense",
    status: "Open for orders",
    caption: "Close, even in the little moments.",
  },
  {
    id: "birthmithra",
    name: "BirthMithra",
    category: "Comfort, support & greater access",
    title: "Thoughtful care.",
    accent: "Where it matters.",
    description:
      "Lightweight, foldable birthing support designed around comfort and changing postures. Built to make care more accessible.",
    features: ["Lightweight & portable", "Folds with ease", "Posture support"],
    image: "/slides/birthmithra-hero-v2.webp",
    alt: "Maternity nurse reassuring an expectant mother in a welcoming clinic",
    href: "/products/birthmithra",
    cta: "Explore BirthMithra",
    status: "Because BIRTH matters",
    caption: "Every mother deserves support.",
  },
  {
    id: "skinpin",
    name: "SkinPIN AI",
    category: "Your personal skin & wellness journal",
    title: "Your skin. Your story.",
    accent: "See the progress.",
    description:
      "Explore skin and food observations, keep your photo journal, and follow the little changes that make your journey yours.",
    features: [
      "Skin & food scans",
      "Personal photo journal",
      "Progress tracking",
    ],
    image: "/slides/skinpin-hero.webp",
    alt: "Woman using her phone to keep a personal skin photo journal",
    href: "/products/skinpin",
    cta: "Explore SkinPIN AI",
    status: "Scan. Track. Improve.",
    caption: "A little insight. A little every day.",
    note: "Visual observations, not a medical diagnosis.",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(true);
  const touchStart = useRef<number | null>(null);
  const slide = slides[active];
  const rotating = playing && !hovered && !focused && !reducedMotion && visible;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    media.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      media.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(
      () => setActive((index) => (index + 1) % slides.length),
      7000,
    );
    return () => window.clearInterval(timer);
  }, [rotating, active]);

  function select(index: number) {
    setActive((index + slides.length) % slides.length);
    setPlaying(false);
  }

  return (
    <section
      className="hero-slider"
      aria-label="Discover BirthTech products and apps"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          select(active + (event.key === "ArrowRight" ? 1 : -1));
        }
      }}
    >
      <h1 className="sr-only">
        BirthTech — Making the birthing process easy, comfortable, and safe
      </h1>
      <div
        className="hero-stage"
        onTouchStart={(event) => {
          touchStart.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = touchStart.current - event.changedTouches[0].clientX;
          if (Math.abs(distance) > 60) select(active + (distance > 0 ? 1 : -1));
          touchStart.current = null;
        }}
        onTouchCancel={() => {
          touchStart.current = null;
        }}
      >
        <div className="hero-art">
          {slides.map((item, index) => (
            <div
              key={item.id}
              data-slide={item.id}
              className={`hero-image-layer ${index === active ? "is-active" : ""}`}
              aria-hidden={index !== active}
            >
              <Image
                src={item.image}
                alt={index === active ? item.alt : ""}
                fill
                sizes="100vw"
                priority={index === 0}
                className="hero-image"
              />
            </div>
          ))}
          <div className="hero-image-shade" />
          <div className="hero-image-caption" aria-hidden="true">
            <span />
            {slide.caption}
          </div>
        </div>
        <div className="hero-content-wrap">
          <div
            className="hero-copy"
            role="group"
            aria-roledescription="slide"
            aria-label={`${active + 1} of ${slides.length}: ${slide.name}`}
            aria-live={rotating ? "off" : "polite"}
          >
            <div className="hero-brand-row">
              <Image
                src="/logo.png"
                alt="BirthTech"
                width={140}
                height={54}
                className="hero-brand-logo"
              />
              <span className="hero-brand-divider" />
              <span className="hero-status">{slide.status}</span>
            </div>
            <div key={slide.id} className="hero-copy-enter">
              <p className="hero-product-name">
                {slide.name}
                <span />
              </p>
              <p className="hero-category">{slide.category}</p>
              <h2>
                {slide.title}
                <br />
                <span className="gradient-text">{slide.accent}</span>
              </h2>
              <p className="hero-description">{slide.description}</p>
              <div className="hero-actions">
                <Link
                  href={slide.href}
                  className="hero-primary-link btn-gradient"
                >
                  {slide.cta}
                  <ArrowRight size={18} />
                </Link>
                <Link href="/solution" className="hero-secondary-link">
                  Our story
                  <ArrowRight size={15} />
                </Link>
              </div>
              <ul className="hero-features">
                {slide.features.map((feature) => (
                  <li key={feature}>
                    <span />
                    {feature}
                  </li>
                ))}
              </ul>
              {slide.note && <p className="hero-note">{slide.note}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-controls">
        <div className="hero-controls-inner">
          <div className="hero-slide-selectors" aria-label="Choose a slide">
            {slides.map((item, index) => (
              <button
                type="button"
                key={item.id}
                aria-label={`Show ${item.name} slide`}
                aria-pressed={active === index}
                onClick={() => select(index)}
                className={`hero-slide-selector ${index === active ? "is-active" : ""}`}
              >
                <span className="hero-selector-number">0{index + 1}</span>
                <span>{item.name}</span>
                <span className="hero-selector-line" />
              </button>
            ))}
          </div>
          <div className="hero-arrow-controls">
            <span className="hero-count">
              <strong>0{active + 1}</strong>
              <span>/ 04</span>
            </span>
            {!reducedMotion && (
              <button
                type="button"
                className="hero-control-button hero-play-button"
                onClick={() => setPlaying((value) => !value)}
                aria-label={playing ? "Pause slideshow" : "Play slideshow"}
              >
                {playing ? <Pause size={15} /> : <Play size={15} />}
              </button>
            )}
            <button
              type="button"
              className="hero-control-button"
              aria-label="Previous slide"
              onClick={() => select(active - 1)}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              className="hero-control-button"
              aria-label="Next slide"
              onClick={() => select(active + 1)}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
