import SectionIcon from "@/components/SectionIcon";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Heart, Activity, Sparkles, Smartphone, ScanLine, ShieldCheck, Baby, Moon, Bell, Camera, Utensils, CalendarDays, Layers, Move,
  ChevronDown,
} from "lucide-react";
import { productDetails } from "@/content/product-details";
import SkinPinShowcase from "@/components/SkinPinShowcase";
import OrderRequestForm from "@/components/OrderRequestForm";
import MomSenseDesign from "@/components/MomSenseDesign";
import BirthChairDesign from "@/components/BirthChairDesign";
import ProductTechnology from "@/components/ProductTechnology";

function featureIcon(title: string) {
  if (/baby/i.test(title)) return Baby;
  if (/sleep/i.test(title)) return Moon;
  if (/notification/i.test(title)) return Bell;
  if (/food|meal/i.test(title)) return Utensils;
  if (/calendar|planning/i.test(title)) return CalendarDays;
  if (/photo|nail/i.test(title)) return Camera;
  if (/scan|check/i.test(title)) return ScanLine;
  if (/monitor|vital|real-time/i.test(title)) return Activity;
  if (/risk|emergency/i.test(title)) return ShieldCheck;
  if (/connect|device/i.test(title)) return Smartphone;
  if (/fold/i.test(title)) return Layers;
  if (/portab|posture/i.test(title)) return Move;
  if (/AI|insight/i.test(title)) return Sparkles;
  return Heart;
}

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productDetails.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productDetails.find((item) => item.slug === slug);
  if (!product) return { title: "Product not found" };
  return { title: product.name, description: product.intro };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productDetails.find((item) => item.slug === slug);
  if (!product) notFound();
  const canOrder = [
    "birthchair",
    "momsense",
    "birthmithra",
    "birthpro",
  ].includes(slug);
  const actionHref = canOrder ? "#order" : product.actionHref;
  const actionLabel = canOrder ? `Order ${product.name}` : product.action;
  const related = productDetails
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <section className="product-detail-hero">
        <div className="product-detail-art">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div />
        </div>
        <div className="product-detail-hero-inner">
          <nav aria-label="Breadcrumb" className="product-breadcrumb">
            <Link href="/products">Products & apps</Link>
            <span>/</span>
            <span>{product.name}</span>
          </nav>
          <div className="product-detail-intro">
            <Link href="/" className="product-brand" aria-label="BirthTech home">
              <Image src="/brand/birthtech-icon.png" alt="" width={42} height={42} />
              <Image src="/logo.png" alt="BirthTech" width={140} height={44} />
            </Link>
            <p className="product-detail-category">
              {product.category}
              <span>{product.status}</span>
            </p>
            <h1>{product.name}</h1>
            <h2 className="gradient-text">{product.headline}</h2>
            <p className="product-detail-description">{product.intro}</p>
            <div className="product-detail-actions">
              <Link
                href={actionHref}
                className="btn-gradient hero-primary-link"
              >
                {actionLabel}
                <ArrowUpRight size={17} />
              </Link>
              <a href="#features" className="hero-secondary-link">
                Features
                <ChevronDown size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <nav
        className="product-section-nav"
        aria-label={`${product.name} page sections`}
      >
        <div>
          <span>{product.name}</span>
          <a href="#features">Features</a>
          {slug === "birthchair" && <><a href="#design">Inside the design</a><a href="#technology">Technology</a></>}
          {slug === "momsense" && <a href="#design">Inside the design</a>}
          {canOrder && <a href="#order">Order enquiry</a>}
          {slug === "skinpin" && (
            <>
              <a href="#app-screens">App screens</a>
              <a href="#vision">Our vision</a>
            </>
          )}
          <a href="#questions">Questions</a>
        </div>
      </nav>
      {slug === "birthchair" ? <BirthChairDesign /> : <section id="features" className="product-feature-section">
        <div className="product-section">
          <div className="product-section-heading"><SectionIcon topic="features" />
            <p>{product.name} features</p>
            <h2>
              Made for you.
            </h2>
          </div>
          <div className="product-feature-grid">
            {product.features.map((feature) => {
              const Icon = featureIcon(feature.title);
              return (
              <article key={feature.title}>
                <span className="product-feature-index"><Icon size={25} strokeWidth={1.6} /></span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
              );
            })}
          </div>
        </div>
      </section>
      }
      {slug === "skinpin" && <SkinPinShowcase />}
      {slug === "momsense" && <MomSenseDesign />}
      {slug !== "birthchair" && <ProductTechnology slug={slug} />}
      {canOrder && <OrderRequestForm productName={product.name} />}
      <section id="questions" className="product-section product-faq-section">
        <div className="product-section-heading">
          <SectionIcon topic="questions" /><p>A little more clarity</p>
          <h2>
            Good to know.
          </h2>
        </div>
        <div>
          {product.faqs.map((faq) => (
            <details key={faq.question} className="product-faq">
              <summary>
                {faq.question}
                <ChevronDown size={18} />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="product-related-section">
        <div className="product-section">
          <div className="product-section-heading">
            <SectionIcon topic="products" /><p>More from BirthTech</p>
            <h2>Explore more.</h2>
          </div>
          <div className="product-related-grid">
            {related.map((item) => (
              <Link key={item.slug} href={`/products/${item.slug}`}>
                <Sparkles size={20} />
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.category}</small>
                </span>
                <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
