import SectionIcon from "./SectionIcon";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  ScanLine,
  BookOpen,
  ChartNoAxesCombined,
} from "lucide-react";

export default function SkinPinShowcase() {
  return (
    <>
      <section id="app-screens" className="skinpin-screen-section">
        <div className="product-section skinpin-screen-layout">
          <div>
            <div className="product-section-heading"><SectionIcon topic="skin app" />
              <p>Inside SkinPIN</p>
              <h2>
                A closer look.
                <br />A more useful record.
              </h2>
            </div>
            <p className="skinpin-screen-description">
              Photos, observations, and notes. One simple record of your skin’s changes.
            </p>
            <div className="skinpin-screen-features">
              {[
                {
                  icon: ScanLine,
                  title: "Focus on one area",
                  description: "A closer view of the spot you want to follow.",
                },
                {
                  icon: Camera,
                  title: "Keep the visual context",
                  description:
                    "Original photographs and close-up views in one place.",
                },
                {
                  icon: BookOpen,
                  title: "Add your own notes",
                  description:
                    "Record symptoms, products, and daily observations.",
                },
                {
                  icon: ChartNoAxesCombined,
                  title: "Follow changes",
                  description:
                    "Build a timeline of the same area with repeat photographs.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <item.icon size={20} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="skinpin-screen-note">
              Supplied interface example. Findings and confidence values are illustrative, not evidence of diagnostic accuracy.
            </p>
            <Link href="https://skinpin.app" className="hero-secondary-link">
              Explore the current app
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <figure className="skinpin-phone-figure">
            <a
              href="/screens/skinpin-spot-check.png"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the full SkinPIN Spot Check screenshot"
            >
              <Image
                src="/screens/skinpin-spot-check.png"
                alt="Supplied SkinPIN Spot Check interface showing a photo, example findings, tracking, and notes"
                width={852}
                height={1846}
                sizes="(min-width: 768px) 380px, 85vw"
                className="skinpin-phone-screen"
              />
            </a>
            <figcaption>SkinPIN · Spot Check interface</figcaption>
          </figure>
        </div>
        <div className="product-section skinpin-live-site">
          <div className="product-section-heading"><SectionIcon topic="skin app" />
            <p>On the web</p>
            <h2>The current SkinPIN experience.</h2>
            <p className="skinpin-live-description">
              A screenshot of the public SkinPIN website, captured from the live
              app.
            </p>
          </div>
          <figure>
            <div className="skinpin-browser-bar">
              <span />
              <span />
              <span />
              <p>skinpin.app</p>
              <a
                href="https://skinpin.app"
                aria-label="Visit the SkinPIN website"
              >
                <ArrowUpRight size={16} />
              </a>
            </div>
            <Image
              src="/screens/skinpin-home.png"
              alt="Current SkinPIN public website showing Skin Scan, Spot Check, Food Scan, and journal features"
              width={1440}
              height={1000}
              sizes="(min-width: 1280px) 1150px, 95vw"
            />
          </figure>
        </div>
      </section>
      <section id="vision" className="skinpin-vision-section">
        <div className="product-section">
          <div className="skinpin-vision-heading">
            <div>
              <p className="skinpin-vision-label"><SectionIcon topic="vision" inline />
                Our research vision · Development goal
              </p>
              <h2>
                A broader foundation.
                <br />
                For earlier awareness.
              </h2>
            </div>
            <div className="skinpin-million">
              <strong>1 million</strong>
              <span>skin images — a research database goal</span>
            </div>
          </div>
          <p className="skinpin-vision-intro">
            Our goal: one million skin images to research AI recognition of skin-disease patterns and potential cancer warning signs across diverse skin tones.
          </p>
          <div className="skinpin-vision-boundary">
            <strong>Today’s app and tomorrow’s vision</strong>
            <p>
              A development goal, not today’s dataset. The current app offers educational observations—not disease or cancer diagnosis. Future diagnostic tools require clinical validation and regulatory authorization.
            </p>
            <a href="https://skinpin.app/science">
              Read SkinPIN’s current science information
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
