"use client";

import SectionIcon from "./SectionIcon";
import Image from "next/image";
import { useState } from "react";
import { Activity, BatteryCharging, CircuitBoard, Layers, Watch, Waves } from "lucide-react";

const parts = [
  { name: "Full wearables", image: "full-slim", icon: Watch, title: "Two bands. One connection.", text: "Slim, lightweight bracelet-style bands for mother and baby. Choose a component to look inside.", alt: "Complete MomSense adult and infant wearable band concepts side by side" },
  { name: "Soft bands", image: "strap-slim", icon: Waves, title: "Comfort starts here.", text: "A soft-band design in two sizes. Final fit, materials, and infant-use guidance are confirmed with the product team.", alt: "Detached charcoal adult and infant wearable straps" },
  { name: "Protective housing", image: "shell-slim", icon: Layers, title: "A small home for the technology.", text: "A compact enclosure concept keeps the wearable’s components together.", alt: "Concept wearable enclosure with its top cover lifted" },
  { name: "Sensing layer", image: "sensors-slim", icon: Activity, title: "A closer look at sensing.", text: "Illustrative placement for optical and temperature sensing. Sensor selection and performance require engineering validation.", alt: "Concept optical and temperature sensor layout on a wearable underside" },
  { name: "Connected electronics", image: "board-slim", icon: CircuitBoard, title: "Information, brought together.", text: "A circuit-board concept for processing readings and connecting with the companion app. AI insights are part of the development vision.", alt: "Concept compact wearable circuit board and antenna layout" },
  { name: "Power & charging", image: "power-slim", icon: BatteryCharging, title: "Power for the everyday.", text: "Illustrative battery and charging components. Final charging method and battery life are to be confirmed.", alt: "Concept sealed wearable battery and charging contacts" },
];

export default function MomSenseDesign() {
  const [selected, setSelected] = useState(0);
  const part = parts[selected];
  const Icon = part.icon;
  return <section id="design" className="birthchair-story chair-inside">
    <div className="product-section">
      <div className="chair-section-heading"><p className="chair-eyebrow"><SectionIcon topic="Inside MomSense" inline />Inside MomSense</p><h2>Small on the outside.<br /><span>Thoughtful within.</span></h2><p>Start with the wearables. Explore each layer.</p></div>
      <div className="chair-exploded-layout">
        <div className="chair-layer-controls">
          <div className="chair-layer-list" role="group" aria-label="Explore MomSense components">
            {parts.map((item, index) => <button key={item.image} aria-controls="momsense-component-view" aria-pressed={selected === index} onClick={() => setSelected(index)}><span>0{index}</span>{item.name}<item.icon size={18} /></button>)}
          </div>
          <div className="chair-layer-detail" aria-live="polite"><Icon size={26} strokeWidth={1.5} /><h3>{part.title}</h3><p>{part.text}</p></div>
        </div>
        <figure className="chair-exploded-image" id="momsense-component-view">
          <div className="chair-component-stage">
            {parts.map((item, index) => <div key={item.image} className={`chair-component-slide ${selected === index ? "is-active" : ""}`} aria-hidden={selected !== index}>
              <Image src={`/slides/momsense-${item.image}.webp`} alt={item.alt} fill loading="eager" sizes="(min-width: 900px) 65vw, 100vw" />
            </div>)}
            <div className="chair-component-caption" aria-live="polite"><span>0{selected} / 05</span><strong>{part.name}</strong></div>
          </div>
          <figcaption>Concept visualizations · Internal components and final specifications are not confirmed.</figcaption>
        </figure>
      </div>
    </div>
  </section>;
}
