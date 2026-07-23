export const SITE = {
  name: "Ledgerio",
  tagline: "Accounting. Simplified.",
  description:
    "Modern accounting software for Indian businesses. GST billing, invoicing, inventory, banking, expenses and AI-powered accounting in one platform.",
  url: "https://ledgerio.in",
  appUrl: "https://bizkhata.app",
  signupUrl: "https://bizkhata.app/signup",
  loginUrl: "https://bizkhata.app/login",
  supportEmail: "support@ledgerio.in",
  ogImage: "/og-image.png",
  twitterHandle: "@ledgerio",
} as const;

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "GST Billing", href: "/gst-billing" },
  { label: "Inventory", href: "/inventory" },
  { label: "Reports", href: "/reports" },
  { label: "AI Accounting", href: "/ai-accounting" },
  { label: "Pricing", href: "/pricing" },
];

export const FOOTER_LINKS: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "GST Billing", href: "/gst-billing" },
      { label: "Inventory", href: "/inventory" },
      { label: "Reports", href: "/reports" },
      { label: "AI Accounting", href: "/ai-accounting" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];
