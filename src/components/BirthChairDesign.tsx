"use client";

import SectionIcon from "./SectionIcon";
import Image from "next/image";
import { useState } from "react";
import { Activity, ArrowUpRight, Bluetooth, Heart, Layers, Move, Sparkles, Waves } from "lucide-react";

const layers = [
  { name: "Full chair", image: "/slides/birthchair-full.webp", alt: "Complete assembled BirthChair with purple cushions, assist handles, silver frame and footrest", label: "The complete BirthChair.", text: "Start with the complete design. Select a part to explore what sits inside.", icon: Layers },
  { name: "Contact cushions", image: "/slides/birthchair-layer-cushions.webp", alt: "Isolated purple headrest, backrest and open-front seat cushions with a foam cutaway", label: "Comfort where it counts.", text: "A shaped backrest, head support, and open-front seat define the birthing-chair design.", icon: Heart },
  { name: "Adjustable air support", image: "/slides/birthchair-layer-air.webp", alt: "Translucent lilac air-support chambers shown without the outer upholstery", label: "Support that adapts.", text: "Inflatable cushioning is part of the published design, allowing comfort and positioning to be adjusted.", icon: Waves },
  { name: "Sensing & massage", image: "/slides/birthchair-layer-sensing.webp", alt: "Concept close-up of sensing electronics and gentle vibration modules", label: "A gentler technology layer.", text: "Concept placement for sensing electronics and a light-massage option. Internal layout and massage configuration require product-team confirmation.", icon: Activity },
  { name: "Structural frame", image: "/slides/birthchair-layer-frame.webp", alt: "Exposed silver support frame, assist handles and separated hinge detail", label: "The foundation of support.", text: "The exposed frame, assist handles, and folding concept keep the design focused on birthing care.", icon: Layers },
  { name: "Foot support", image: "/slides/birthchair-layer-foot.webp", alt: "Close-up of the lower footrest and its mounting pivot", label: "Considered from top to base.", text: "A lower footrest completes the visible support structure. Final adjustment options are confirmed with your order.", icon: Move },
];
const modes = [
  { name: "Birthing support", icon: Heart, title: "Designed around birth.", text: "Positioning, accessible support, and space for the care team. Birthing is the chair’s primary purpose." },
  { name: "Pregnancy comfort", icon: Waves, title: "Comfort between milestones.", text: "Adjustable cushioning for supported rest during pregnancy. Discuss suitable positioning with your maternity-care professional." },
  { name: "Gentle massage", icon: Sparkles, title: "A lighter touch.", text: "Ask about the gentle-massage configuration for comfort sessions. Availability and suitability are confirmed by the team." },
];

export default function BirthChairDesign() {
  const [layer, setLayer] = useState(0);
  const [mode, setMode] = useState(0);
  const LayerIcon = layers[layer].icon;
  return (
    <div className="birthchair-story">
      <section id="features" className="chair-purpose product-section">
        <p className="chair-eyebrow"><SectionIcon topic="Birthing comes first" inline />Birthing comes first</p>
        <h2>A birthing chair.<br /><span>With comfort built around her.</span></h2>
        <div className="chair-mode-tabs" role="group" aria-label="BirthChair uses">
          {modes.map((item, index) => <button key={item.name} id={`chair-mode-${index}`} aria-pressed={mode === index} aria-controls="chair-mode-panel" onClick={() => setMode(index)}><item.icon size={20} />{item.name}</button>)}
        </div>
        <div id="chair-mode-panel" aria-live="polite" aria-labelledby={`chair-mode-${mode}`} className="chair-mode-panel">
          <h3>{modes[mode].title}</h3><p>{modes[mode].text}</p>
        </div>
      </section>

      <section id="design" className="chair-inside">
        <div className="product-section">
          <div className="chair-section-heading"><p className="chair-eyebrow"><SectionIcon topic="Explore the design" inline />Explore the design</p><h2>Every layer.<br /><span>A clear purpose.</span></h2><p>An illustrated look at the design architecture.</p></div>
          <div className="chair-exploded-layout">
            <div className="chair-layer-controls">
              <div className="chair-layer-list" role="group" aria-label="Explore chair components">{layers.map((item, index) => <button key={item.name} aria-controls="chair-component-view" aria-pressed={layer === index} onClick={() => setLayer(index)}><span>0{index}</span>{item.name}<item.icon size={18} /></button>)}</div>
              <div className="chair-layer-detail" aria-live="polite"><LayerIcon size={26} strokeWidth={1.5} /><h3>{layers[layer].label}</h3><p>{layers[layer].text}</p></div>
            </div>
            <figure className="chair-exploded-image" id="chair-component-view">
              <div className="chair-component-stage">
                {layers.map((item, index) => <div key={item.name} className={`chair-component-slide ${layer === index ? "is-active" : ""}`} aria-hidden={layer !== index}>
                  <Image src={item.image} alt={item.alt} fill loading="eager" sizes="(min-width: 900px) 65vw, 100vw" />
                </div>)}
                <div className="chair-component-caption" aria-live="polite"><span>0{layer} / 05</span><strong>{layers[layer].name}</strong></div>
              </div>
              <figcaption>Component concept views · Illustrative internals, not an assembly guide.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="chair-sketch product-section">
        <div className="chair-section-heading"><p className="chair-eyebrow"><SectionIcon topic="From idea to form" inline />From idea to form</p><h2>Support. Adjust. Fold.</h2><p>Three design studies. One maternal-care purpose.</p></div>
        <Image src="/slides/birthchair-sketch.webp" alt="Concept sketches exploring upright birthing support, a comfort position, and a folded transport position" width={1536} height={1024} sizes="(min-width: 1280px) 1180px, 100vw" />
        <div className="chair-sketch-labels"><span><b>01</b>Birthing support</span><span><b>02</b>Comfort position</span><span><b>03</b>Compact transport</span></div>
        <p className="chair-caption">Concept sketches. Final movement ranges, assembly, and setup follow the supplied product instructions.</p>
      </section>

      <section id="technology" className="chair-tech">
        <div className="product-section">
          <p className="chair-eyebrow"><SectionIcon topic="Connected care" inline />Connected care</p><h2>Thoughtful technology.<br /><span>Human-led care.</span></h2>
          <div className="chair-tech-grid">
            <article><Activity /><h3>Sense</h3><p>Non-invasive maternal monitoring is part of the product design.</p></article>
            <article><Bluetooth /><h3>Connect</h3><p>Designed to bring relevant information to the BirthTech platform.</p></article>
            <article><Sparkles /><h3>Support</h3><p>AI guidance and predictive insights remain development features for clinical review.</p></article>
          </div>
        </div>
      </section>
      <section className="chair-options product-section">
        <div><p className="chair-eyebrow"><SectionIcon topic="Make it yours" inline />Make it yours</p><h2>Tell us how you’ll use it.</h2><p>Birthing care, pregnancy comfort, or interest in gentle massage. Our team will confirm the right configuration, pricing, and delivery.</p></div>
        <a className="btn-gradient hero-primary-link" href="#order">Discuss your order <ArrowUpRight size={18} /></a>
      </section>
    </div>
  );
}
