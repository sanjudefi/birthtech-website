# BirthTech content references

The existing company website is the source for company identity and established product content. The updated app website is the source for the newer product descriptions and launch status. SkinPIN is included as a BirthTech app.

## Company content

- https://thebirthtech.com/ — introductory copy, mission, vision, four BirthMithra features, achievements, and partner logos.
- https://thebirthtech.com/pages/about-us/ — team names, complete roles, biographies, and original portraits. The home page supplies the vision statement because the old About page repeats the mission under both headings.
- https://thebirthtech.com/our-approach/ — research into historical birthing positions, ergonomics, and clinical needs.
- https://thebirthtech.com/problem/ — the original problem framing and opportunity for monitoring and care. Historical mortality figures were not carried forward as current statistics.
- https://thebirthtech.com/our-solution/ — BirthPro and BirthMithra descriptions and features.

## Updated products and apps

- https://app.thebirthtech.com/ — Mother Care App features.
- https://app.thebirthtech.com/products/momsense — two connected bands for mother and newborn; Coming Soon status; heart rate, temperature, movement, sleep, and activity features.
- https://app.thebirthtech.com/products/birthchair — BirthChair features and Coming Soon status.
- https://skinpin.app/ — SkinPIN photo observations, journal features, food and nail scans, symptom logging, and progress tracking.

BirthPro and BirthChair retain their published names as separate entries. A rename or replacement relationship has not been assumed. Prices, certification claims, and clinical outcome claims are not added to this website from product sales copy.

## Original assets

Team portraits are downloaded unchanged from `https://thebirthtech.com/wp-content/uploads/2022/06/`:

- `3.png`: Veena Venu
- `4.png`: Sanjeeva Kumar Muddam
- `1.png`: Janice Joseph
- `2.png`: Ramakrishna Kiran

Partner logos retain the original files from `https://thebirthtech.com/wp-content/uploads/2017/06/`:

- `33.png`: IKP
- `22.png`: BIRAC
- `11-e1636310841197.png`: DERBI Foundation
- `44-e1636310892508.png`: NIDHI PRAYAS

Product images:

- BirthMithra: https://thebirthtech.com/wp-content/uploads/2024/07/Birth-Mitra-small-1.png
- MomSense: https://app.thebirthtech.com/images/momsense/6.png
- BirthChair: https://app.thebirthtech.com/images/birth_chair/1.png

## Migration behavior

The legacy About, Contact, Approach, and Products paths redirect to their corresponding new routes. Shared company, team, product, and app content is maintained in `src/content/site.ts`.

The existing contact form still displays a local confirmation without sending submissions. The footer Privacy Policy and Terms links remain placeholders; these need company-specific content before publication.

## Product pages, hero campaigns, and SkinPIN vision

Dedicated pages are available at `/products/birthchair`, `/products/momsense`, `/products/birthmithra`, `/products/birthpro`, `/products/skinpin`, and `/products/mothercare`. Product-card, carousel, navigation, and footer links point to these pages.

Campaign artwork was generated with the built-in image-generation tool. It is illustrative marketing imagery, not documentary photography of team members, patients, or clinical trials. The final MomSense image features a white mother and baby; BirthMithra features a visibly pregnant Black woman with an Indian maternity nurse; SkinPIN features an Indian woman. The BirthTech logo is the existing unchanged asset, rendered separately in the carousel. Original and optimized images are in `public/slides`; prompts and edit prompts are in `docs/slider-prompts.json`.

SkinPIN sources:

- https://skinpin.app/features — currently published features.
- https://skinpin.app/how-it-works — scan, explore, save, and track workflow.
- https://skinpin.app/about — account access across website and iPhone app.
- https://skinpin.app/science — current educational visual observations; research skin model not connected to production.
- `public/screens/skinpin-home.png` — screenshot captured from the live public website.
- `public/screens/skinpin-spot-check.png` — user-supplied Spot Check interface, copied unchanged from the attached image. Example confidence values are not represented as clinical accuracy evidence.

The user confirmed that a one-million-image skin database is a **development goal / vision**, not an existing production dataset. The dedicated SkinPIN page describes skin-disease-pattern and potential cancer-warning-sign research as a future aim, separate from current app capabilities. No claim of current cancer diagnosis is made.

## Preview delivery — September 12, 2026

- Separate Vercel preview deployment: `dpl_87fjwh4wnvejB6npHqhjrQSFZ1jR`. No production-domain deployment performed.
- All six dedicated product routes verified over HTTPS through the deployment's share link.
- Physical-product forms prepare an email enquiry to `ceo@thebirthtech.com`, with review, edit and copy controls. They do not send automatically, process payment, or confirm purchases.
- Additional BirthChair care image generated with OpenAI's built-in image generation; prompt recorded in `docs/birthchair-care-prompt.json`. Final assets are under `public/slides/`.

## BirthChair design story — September 12, 2026

- User clarified the primary purpose as birthing support, with pregnancy comfort and light massage as secondary themes.
- Re-read https://app.thebirthtech.com/products/birthchair for published air-cushion, monitoring, folding, and connected-guidance descriptions. No engineering drawings or internal component specifications supplied; certification and diagnostic claims were not carried over.
- OpenAI-generated clinical campaign, exploded concept, and positional sketch assets: `public/slides/birthchair-clinical`, `birthchair-exploded`, `birthchair-sketch` (PNG originals and WebP delivery assets).
- Exact prompts: `docs/birthchair-design-prompts.json`. The existing product image was the visual reference. Internals, folding studies, and massage configuration are explicitly identified as conceptual or requiring confirmation.

## Interactive BirthChair component views

Each of the five component controls now selects its own OpenAI-generated detail image. Assets use the prior exploded concept as a visual reference; these remain conceptual internal views. Exact prompts are recorded in `docs/birthchair-component-prompts.json`; originals and optimized WebP assets are saved as `public/slides/birthchair-layer-*`. Transitions respect reduced-motion preferences.

## Complete-device starting views and MomSense internals

BirthChair now opens at 00 Full chair before components 01–05. MomSense has a matching 00–05 viewer with complete bands, straps, enclosure, conceptual sensing, circuit board, and power components. MomSense internal engineering is not supplied or confirmed; visible captions and component descriptions make this distinction. OpenAI image generation prompts and reference paths are recorded in `docs/momsense-component-prompts.json`. PNG originals and WebP delivery assets reside in `public/slides/`.

## Slim MomSense and section icons

User clarified MomSense as a lightweight, small bracelet-style wearable. The full-device, detached band, lifestyle, and internal concept images have been updated to a narrow form. Prompts are recorded in `docs/momsense-slim-prompts.json` and `docs/momsense-slim-internal-prompts.json`. No numeric dimensions or weight claims are published. Reusable contextual line icons now accompany general and product section headings and informational cards.

## Five-tab navigation

Header consolidated to Solutions, About Us, Team, Partners, and Contact. Existing solution/product/app links and Problem are retained under Solutions; About, Impact, and Investors remain under About Us. Team links directly to the original team section at `/about#team`. No existing content routes removed. Homepage MomSense card uses the slim full-band illustration, and the slider uses the matching slim-band lifestyle image.
