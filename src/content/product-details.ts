
export type ProductDetail = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  status: string;
  action: string;
  actionHref: string;
  overview: string;
  features: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const productDetails: ProductDetail[] = [
  {
    slug: "birthchair",
    name: "BirthChair",
    category: "Smart birthing support",
    headline: "Made for birth. Designed around her.",
    intro: "Birthing support first. Pregnancy comfort and a gentle-massage option, thoughtfully considered.",
    image: "/slides/birthchair-clinical.webp",
    imageAlt:
      "Concept maternity-care scene with the purple BirthChair, a pregnant Black woman, and an Indian midwife",
    status: "Open for orders",
    action: "Order BirthChair",
    actionHref: "https://app.thebirthtech.com/products/birthchair",
    overview:
      "BirthChair combines comfort-focused design with non-invasive monitoring and connected support. Its adjustable cushions and portable construction are designed around the changing needs of pregnancy and birthing care.",
    features: [
      {
        title: "Personalized comfort",
        description:
          "Adjustable cushions for a more comfortable position.",
      },
      {
        title: "Non-invasive monitoring",
        description:
          "Maternal vital monitoring, designed into the chair.",
      },
      {
        title: "Predictive risk analysis",
        description:
          "AI risk insights are part of our development vision.",
      },
      {
        title: "AI-assisted guidance",
        description:
          "Breathing guidance and contraction tracking.",
      },
      {
        title: "Portable construction",
        description:
          "Folds for easier transport and storage.",
      },
      {
        title: "Connected care",
        description:
          "Designed to connect mothers and care teams.",
      },
    ],
    steps: [
      {
        title: "Set up",
        description:
          "Position the chair and prepare its comfort and monitoring features with your care provider.",
      },
      {
        title: "Find your comfort",
        description:
          "Adjust the support to suit the mother’s needs and the care setting.",
      },
      {
        title: "Stay informed",
        description:
          "Connected insights are intended to support qualified healthcare professionals throughout care.",
      },
    ],
    faqs: [
      {
        question: "Is BirthChair available now?",
        answer:
          "Yes. BirthChair is open for orders. Fill in the order form below; our team will follow up with pricing and delivery details.",
      },
      {
        question: "Where can I learn about specifications?",
        answer:
          "The updated BirthTech product page contains the product specifications. Contact our team to discuss suitability for your setting.",
      },
    ],
  },
  {
    slug: "momsense",
    name: "MomSense",
    category: "Mother & baby wearables",
    headline: "Light as a bracelet. Close as a bond.",
    intro:
      "Connected wellness insights for mother and baby.",
    image: "/slides/momsense-hero-reference.webp",
    imageAlt:
      "Smiling mother holding her blond baby boy, both wearing slim connected bracelets",
    status: "Open for orders",
    action: "Order MomSense",
    actionHref: "https://app.thebirthtech.com/products/momsense",
    overview:
      "MomSense is a wearable system for mothers and newborn babies. Two connected bands work with a companion app to bring wellness information, sleep and activity patterns, and notifications into one place.",
    features: [
      {
        title: "A band for mother",
        description:
          "Heart rate, temperature, and everyday wellness.",
      },
      {
        title: "A band for baby",
        description:
          "A little band for baby’s daily rhythms.",
      },
      {
        title: "Sleep & activity",
        description:
          "Understand your shared daily rhythms.",
      },
      {
        title: "Gentle notifications",
        description:
          "Designed to highlight changes worth attention.",
      },
      {
        title: "Connected insights",
        description:
          "Two bands. One companion app.",
      },
      {
        title: "Everyday comfort",
        description:
          "Lightweight design for sensitive skin.",
      },
    ],
    steps: [
      {
        title: "Wear",
        description:
          "Mother wears her band, and baby wears the soft infant band as directed.",
      },
      {
        title: "Connect",
        description:
          "The bands connect through the companion app to bring information together.",
      },
      {
        title: "Follow your rhythms",
        description:
          "Review wellness, sleep, and activity insights, with gentle notifications for changes.",
      },
    ],
    faqs: [
      {
        question: "Is MomSense a pregnancy-only wearable?",
        answer:
          "The updated MomSense product is a two-band system for a mother and her newborn baby, supporting the early days and beyond.",
      },
      {
        question: "Can I buy the bands today?",
        answer:
          "Submit an order enquiry below. Our team will follow up with pricing and delivery details.",
      },
    ],
  },
  {
    slug: "birthmithra",
    name: "BirthMithra",
    category: "Portable birthing support",
    headline: "Thoughtful care. Where it matters.",
    intro:
      "Portable birthing support that moves with you.",
    image: "/slides/birthmithra-hero-v2.webp",
    imageAlt:
      "Visibly pregnant Black woman speaking with an Indian maternity nurse",
    status: "Because BIRTH matters",
    action: "Enquire about BirthMithra",
    actionHref: "/contact",
    overview:
      "BirthMithra brings together the four features at the heart of BirthTech’s original approach: portability, maximum posture support, a folding mechanism, and emergency apparatus. Its design considers ergonomics, comfort, a stable structure, and ease of moving between birthing positions.",
    features: [
      {
        title: "Portability",
        description:
          "Lightweight and easy to move.",
      },
      {
        title: "Maximum posture support",
        description:
          "Support for changing birthing positions.",
      },
      {
        title: "Folding mechanism",
        description:
          "Compact storage. Simple transport.",
      },
      {
        title: "Emergency apparatus",
        description:
          "Emergency support built into the design.",
      },
    ],
    steps: [
      {
        title: "Bring support closer",
        description:
          "The portable, foldable design helps make birthing equipment easier to transport.",
      },
      {
        title: "Prepare the setting",
        description:
          "A care team prepares the delivery environment and support equipment.",
      },
      {
        title: "Adapt the posture",
        description:
          "Multiple positions help clinicians respond to the mother’s changing comfort and care needs.",
      },
    ],
    faqs: [
      {
        question: "What makes BirthMithra different?",
        answer:
          "Its original design brings portability, folding, posture support, and emergency apparatus together in one birthing-support product.",
      },
      {
        question: "How can our organization learn more?",
        answer:
          "Contact BirthTech to discuss the product, your care environment, and current availability.",
      },
    ],
  },
  {
    slug: "birthpro",
    name: "BirthPro",
    category: "Maternal monitoring",
    headline: "More insight through the birthing journey.",
    intro:
      "Maternal monitoring. Timely insights. Connected care.",
    image: "/slides/birthpro-care.webp",
    imageAlt:
      "BirthPro concept scene with a pregnant Indian woman and Black clinician in a maternity clinic",
    status: "BirthTech innovation",
    action: "Enquire about BirthPro",
    actionHref: "/contact",
    overview:
      "BirthPro is part of BirthTech’s original maternal care product range. Its focus is continuous maternal vital monitoring and early risk prediction, with information accessible to mothers, partners, and healthcare providers.",
    features: [
      {
        title: "Vital monitoring",
        description:
          "Designed for continuous maternal monitoring.",
      },
      {
        title: "Early risk prediction",
        description:
          "Designed to surface concerns for care teams.",
      },
      {
        title: "Real-time information",
        description:
          "Keep mothers and care teams informed.",
      },
      {
        title: "Care continuity",
        description:
          "Connected support throughout the birthing journey.",
      },
    ],
    steps: [
      {
        title: "Monitor",
        description:
          "Maternal vital monitoring forms the foundation of the product’s design.",
      },
      {
        title: "Understand",
        description:
          "The intended risk-analysis features help surface changes for clinical attention.",
      },
      {
        title: "Support care",
        description:
          "Qualified healthcare providers use relevant information alongside clinical assessment.",
      },
    ],
    faqs: [
      {
        question: "How do I get more information?",
        answer:
          "Contact the BirthTech team for current product details and to discuss your clinical setting.",
      },
    ],
  },
  {
    slug: "skinpin",
    name: "SkinPIN AI",
    category: "Skin, food & everyday wellness",
    headline: "Your skin. Your story. See the progress.",
    intro:
      "Scan, journal, and follow visible changes over time.",
    image: "/slides/skinpin-hero.webp",
    imageAlt: "Indian woman using her phone to document visible skin changes",
    status: "Available now",
    action: "Open SkinPIN",
    actionHref: "https://skinpin.app",
    overview:
      "SkinPIN brings skin, nail, and food photographs together with a personal journal. The current app offers educational visual observations and practical tracking, helping you keep a consistent record of changes and routines.",
    features: [
      {
        title: "Skin Scan & Spot Check",
        description:
          "Explore visible skin changes from a photo.",
      },
      {
        title: "Food Scan",
        description:
          "Photograph meals. Explore food insights.",
      },
      {
        title: "Nail Check",
        description:
          "Photograph and follow visible nail changes.",
      },
      {
        title: "Symptoms & medicines",
        description:
          "Keep symptoms and routines in one journal.",
      },
      {
        title: "Photo progress",
        description:
          "See changes side by side.",
      },
      {
        title: "Across your devices",
        description:
          "One account across web and iPhone.",
      },
    ],
    steps: [
      {
        title: "Capture",
        description: "Take or upload a skin, nail, or food photograph.",
      },
      {
        title: "Explore",
        description:
          "Review visible observations and short explanations from SkinPIN AI.",
      },
      {
        title: "Keep a record",
        description:
          "Save observations and compare photographs alongside your routines and symptoms.",
      },
    ],
    faqs: [
      {
        question: "Does SkinPIN diagnose skin disease or cancer today?",
        answer:
          "No. The current app provides educational visual observations and personal tracking. It does not establish a medical diagnosis or offer a validated cancer-detection service.",
      },
      {
        question: "Is the million-image database already available?",
        answer:
          "No. Building a one-million-image skin research database is a development goal. It is part of the longer-term vision, not a claim about the current app or its training data.",
      },
      {
        question: "What is the longer-term vision?",
        answer:
          "The vision is to research AI support for recognizing skin-disease patterns and potential cancer warning signs, with the aim of helping people seek appropriate clinical review. Future diagnostic features would require clinical validation and applicable regulatory authorization.",
      },
    ],
  },
  {
    slug: "mothercare",
    name: "Mother Care App",
    category: "Everyday pregnancy support",
    headline: "A little guidance. Every step of the way.",
    intro: "Personalized daily guidance for your pregnancy journey.",
    image: "/slides/momsense-hero-reference.webp",
    imageAlt: "Mother holding her sleeping newborn in a calm home setting",
    status: "Available now",
    action: "Open Mother Care App",
    actionHref: "https://app.thebirthtech.com",
    overview:
      "The Mother Care App offers personalized daily care plans based on your pregnancy stage, dietary preferences, and health goals. It brings everyday nutrition and wellness guidance together in one place.",
    features: [
      {
        title: "Daily meal plans",
        description:
          "Meal ideas for your stage and preferences.",
      },
      {
        title: "Weekly calendar",
        description: "Organize daily care activities and follow your progress.",
      },
      {
        title: "Wellness routines",
        description:
          "Access exercise guidance, hydration reminders, and sleep tips.",
      },
      {
        title: "Practical planning",
        description:
          "Grocery lists and supplement tracking.",
      },
    ],
    steps: [
      {
        title: "Tell us about you",
        description: "Start with your pregnancy stage, preferences, and goals.",
      },
      {
        title: "Explore your plan",
        description:
          "Review daily care ideas and personalized meal suggestions.",
      },
      {
        title: "Build your routine",
        description: "Use the calendar and tracking tools to stay organized.",
      },
    ],
    faqs: [
      {
        question: "Where do I access the app?",
        answer:
          "Visit app.thebirthtech.com to explore the available plans, sign in, or create an account.",
      },
    ],
  },
];
