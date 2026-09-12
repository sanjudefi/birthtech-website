"use client";

import SectionIcon from "./SectionIcon";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Copy, Mail, Pencil } from "lucide-react";

const orderEmail = "ceo@thebirthtech.com";
const physicalProducts = ["BirthChair", "MomSense", "BirthMithra", "BirthPro"];

type RequestDetails = {
  product: string;
  quantity: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  country: string;
  city: string;
  message: string;
  configuration: string;
};

function requestText(details: RequestDetails) {
  return [
    "Hello BirthTech team,",
    "",
    `I would like to request an order for ${details.product}.`,
    "",
    `Product: ${details.product}`,
    `Quantity: ${details.quantity}`,
    ...(details.configuration ? [`Configuration interest: ${details.configuration}`] : []),
    `Name: ${details.name}`,
    `Email: ${details.email}`,
    `Phone: ${details.phone || "Not provided"}`,
    `Organization: ${details.organization || "Individual / family"}`,
    `Delivery location: ${details.city}, ${details.country}`,
    "",
    "Additional details:",
    details.message ||
      "Please share availability, pricing, and delivery information.",
    "",
    "Please contact me to confirm the details of this request.",
  ].join("\n");
}

export default function OrderRequestForm({
  productName,
}: {
  productName: string;
}) {
  const [details, setDetails] = useState<RequestDetails | null>(null);
  const [draft, setDraft] = useState<RequestDetails | null>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (details) reviewRef.current?.focus();
  }, [details]);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const body = details ? requestText(details) : "";
  const mailHref = details
    ? `mailto:${orderEmail}?subject=${encodeURIComponent(`Order request: ${details.product} (${details.quantity})`)}&body=${encodeURIComponent(body)}`
    : "";

  async function copyRequest() {
    try {
      await navigator.clipboard.writeText(`To: ${orderEmail}\n\n${body}`);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }

  return (
    <section id="order" className="order-request-section">
      <div className="product-section order-request-layout">
        <div>
          <div className="product-section-heading"><SectionIcon topic="order" />
            <p>Let’s take the next step</p>
            <h2>
              Request your
              <br />
              {productName}.
            </h2>
          </div>
          <p className="order-request-intro">
            Orders are open. Fill in your details for pricing and delivery.
          </p>
          <div className="order-request-contact">
            <Mail size={19} />
            <div>
              <span>Connect directly with our team</span>
              <a href={`mailto:${orderEmail}`}>{orderEmail}</a>
            </div>
          </div>
          <p className="order-request-note">
            Review your enquiry, then send it through your email app. No payment is collected here.
          </p>
        </div>
        <div className="order-request-card">
          {details ? (
            <div
              className="order-review"
              ref={reviewRef}
              tabIndex={-1}
              role="status"
            >
              <p className="order-review-label">Review your request</p>
              <h3>Your email is ready.</h3>
              <p>
                Open your email app and send the prepared message to complete
                your request. It has not been sent yet.
              </p>
              <dl>
                <div>
                  <dt>Product</dt>
                  <dd>{details.product}</dd>
                </div>
                <div>
                  <dt>Quantity</dt>
                  <dd>{details.quantity}</dd>
                </div>
                <div>
                  <dt>Contact</dt>
                  <dd>
                    {details.name}
                    <br />
                    {details.email}
                  </dd>
                </div>
                <div>
                  <dt>Destination</dt>
                  <dd>
                    {details.city}, {details.country}
                  </dd>
                </div>
              </dl>
              <a href={mailHref} className="btn-gradient order-submit">
                <Mail size={17} />
                Open email app & send
              </a>
              <div className="order-review-actions">
                <button type="button" onClick={copyRequest}>
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  {copied ? "Request copied" : "Copy request"}
                </button>
                <button type="button" onClick={() => setDetails(null)}>
                  <Pencil size={15} />
                  Edit request
                </button>
              </div>
              <details className="order-email-preview">
                <summary>View the complete email</summary>
                <pre>{body}</pre>
              </details>
              {copyError && (
                <p className="order-copy-error">
                  Copy is unavailable in this browser. Select the text in “View
                  the complete email” and copy it manually.
                </p>
              )}
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const data = new FormData(event.currentTarget);
                const value = (key: string) =>
                  String(data.get(key) || "").trim();
                const request = {
                  product: value("product"),
                  quantity: value("quantity"),
                  name: value("name"),
                  email: value("email"),
                  phone: value("phone"),
                  organization: value("organization"),
                  country: value("country"),
                  city: value("city"),
                  message: value("message"),
                  configuration: value("configuration"),
                };
                setDetails(request);
                setDraft(request);
                setCopied(false);
                setCopyError(false);
              }}
            >
              <h3>Order enquiry</h3>
              <p className="order-form-description">
                A few details to help us get back to you.
              </p>
              <div className="order-form-grid">
                <label>
                  Product
                  <select
                    name="product"
                    defaultValue={draft?.product ?? productName}
                    required
                  >
                    {physicalProducts.map((name) => (
                      <option key={name}>{name}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Quantity
                  <input
                    name="quantity"
                    type="number"
                    min="1"
                    max="10000"
                    step="1"
                    defaultValue={draft?.quantity ?? "1"}
                    required
                  />
                </label>
                <label>
                  Full name
                  <input
                    name="name"
                    defaultValue={draft?.name ?? ""}
                    autoComplete="name"
                    maxLength={100}
                    required
                    placeholder="Your full name"
                  />
                </label>
                <label>
                  Email address
                  <input
                    name="email"
                    defaultValue={draft?.email ?? ""}
                    type="email"
                    autoComplete="email"
                    maxLength={200}
                    required
                    placeholder="you@example.com"
                  />
                </label>
                <label>
                  Phone <span>(optional)</span>
                  <input
                    name="phone"
                    defaultValue={draft?.phone ?? ""}
                    type="tel"
                    autoComplete="tel"
                    maxLength={40}
                    placeholder="Including country code"
                  />
                </label>
                <label>
                  Organization <span>(optional)</span>
                  <input
                    name="organization"
                    defaultValue={draft?.organization ?? ""}
                    autoComplete="organization"
                    maxLength={150}
                    placeholder="Hospital, clinic, or company"
                  />
                </label>
                <label>
                  Country
                  <input
                    name="country"
                    defaultValue={draft?.country ?? ""}
                    autoComplete="country-name"
                    maxLength={80}
                    required
                    placeholder="e.g. Canada"
                  />
                </label>
                <label>
                  City
                  <input
                    name="city"
                    defaultValue={draft?.city ?? ""}
                    autoComplete="address-level2"
                    maxLength={100}
                    required
                    placeholder="e.g. Toronto"
                  />
                </label>
              </div>
              {productName === "BirthChair" && <label className="order-message-label">
                Configuration interest <span>(optional)</span>
                <select name="configuration" defaultValue={draft?.configuration ?? ""}>
                  <option value="">Help me choose</option>
                  <option>Birthing-care setup</option>
                  <option>Pregnancy comfort</option>
                  <option>Gentle-massage option</option>
                  <option>All options</option>
                </select>
              </label>}
              <label className="order-message-label">
                Anything else we should know? <span>(optional)</span>
                <textarea
                  name="message"
                  defaultValue={draft?.message ?? ""}
                  maxLength={1500}
                  rows={4}
                  placeholder="Your intended use, timeline, or questions"
                />
              </label>
              <button type="submit" className="btn-gradient order-submit">
                Prepare order request
                <ArrowRight size={17} />
              </button>
              <p className="order-form-footnote">
                Next: review your request and send it using your email app.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
