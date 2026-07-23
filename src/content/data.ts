import {
  Receipt,
  Boxes,
  Landmark,
  Sparkles,
  BarChart3,
  ShieldCheck,
  Zap,
  Users,
  FileText,
  Wallet,
  RefreshCcw,
  Bot,
  type LucideIcon,
} from "lucide-react";

// Icon *components* (functions) cannot be passed as props from a Server
// Component to a Client Component — React Server Components only allows
// serializable data across that boundary. Feature data therefore stores a
// string `icon` key; the actual LucideIcon component is resolved from the
// ICON_MAP registry only inside Client Components that render it directly.
export const ICON_MAP = {
  Receipt,
  Boxes,
  Landmark,
  Sparkles,
  BarChart3,
  ShieldCheck,
  Zap,
  Users,
  FileText,
  Wallet,
  RefreshCcw,
  Bot,
} satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof ICON_MAP;

export type Feature = {
  icon: IconKey;
  title: string;
  description: string;
};

export const CORE_FEATURES: Feature[] = [
  {
    icon: "Receipt",
    title: "GST-Compliant Billing",
    description:
      "Create CGST/SGST/IGST-correct invoices in seconds, with auto place-of-supply detection and e-Invoice IRN generation built in.",
  },
  {
    icon: "Boxes",
    title: "Inventory Management",
    description:
      "Track stock across warehouses, get low-stock alerts, and manage HSN/SAC codes without ever leaving your billing flow.",
  },
  {
    icon: "Landmark",
    title: "Bank Reconciliation",
    description:
      "Match bank statements to your ledger automatically, and close your books in minutes instead of days.",
  },
  {
    icon: "Sparkles",
    title: "AI Accounting Copilot",
    description:
      "Ask questions about your numbers in plain English. Draft payment reminders, categorize expenses, and catch anomalies automatically.",
  },
  {
    icon: "BarChart3",
    title: "Real-Time Reports",
    description:
      "P&L, balance sheet, GSTR summaries, and cash flow — always current, always one click away from export.",
  },
  {
    icon: "Users",
    title: "Multi-User & Roles",
    description:
      "Bring your whole team in, with granular role-based permissions for owners, accountants, and staff.",
  },
];

export const GST_FEATURES: Feature[] = [
  { icon: "FileText", title: "e-Invoicing & IRN", description: "Generate IRN and QR codes for e-Invoicing directly from every sale, fully compliant with GSTN requirements." },
  { icon: "ShieldCheck", title: "Auto Tax Calculation", description: "CGST, SGST, IGST and cess computed automatically based on place of supply — no manual tax math, ever." },
  { icon: "RefreshCcw", title: "GSTR-Ready Reports", description: "Export GSTR-1 and GSTR-3B ready summaries whenever filing season comes around." },
  { icon: "Wallet", title: "HSN/SAC Wise Summary", description: "Every invoice includes a legally correct HSN-wise tax breakup, generated automatically." },
];

export const INVENTORY_FEATURES: Feature[] = [
  { icon: "Boxes", title: "Multi-Warehouse Stock", description: "Track quantities across as many locations as your business needs, in real time." },
  { icon: "Zap", title: "Low Stock Alerts", description: "Get notified before you run out — never lose a sale to an empty shelf again." },
  { icon: "FileText", title: "Delivery Challans", description: "Move stock between locations or to customers with fully compliant delivery challans." },
  { icon: "BarChart3", title: "Stock Valuation Reports", description: "Know exactly what your inventory is worth, any day of the year." },
];

export const AI_FEATURES: Feature[] = [
  { icon: "Bot", title: "Ask Your Books Anything", description: "\"What was my top-selling item last quarter?\" Just ask — no reports to dig through." },
  { icon: "Sparkles", title: "Smart Payment Reminders", description: "AI drafts polite, effective reminder emails for overdue invoices, personalized per customer." },
  { icon: "ShieldCheck", title: "Anomaly Detection", description: "Catches unusual transactions and duplicate entries before they become a real problem." },
  { icon: "RefreshCcw", title: "Auto-Categorization", description: "Expenses and bank transactions get sorted into the right accounts automatically." },
];

export const REPORTS_FEATURES: Feature[] = [
  { icon: "BarChart3", title: "Profit & Loss", description: "A live, always-current P&L statement — no month-end wait required." },
  { icon: "Landmark", title: "Balance Sheet", description: "A complete, accountant-grade balance sheet generated straight from your ledger." },
  { icon: "Wallet", title: "Cash Flow", description: "See exactly where your cash is coming from and going, at a glance." },
  { icon: "FileText", title: "One-Click Export", description: "Every report exports cleanly to Excel or PDF, ready to hand to your CA." },
];

export type Stat = { value: string; label: string };

export const STATS: Stat[] = [
  { value: "12,000+", label: "Businesses onboarded" },
  { value: "₹840Cr+", label: "Invoices processed" },
  { value: "99.95%", label: "Uptime" },
  { value: "4.8/5", label: "Average rating" },
];

export type PricingTier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "₹999",
    period: "/year",
    description: "For freelancers and small businesses just getting started with GST billing.",
    features: [
      "Unlimited GST invoices",
      "1 user",
      "Basic inventory tracking",
      "Standard reports",
      "Email support",
    ],
    ctaLabel: "Get Started",
  },
  {
    name: "Pro",
    price: "₹3,999",
    period: "one-time / lifetime",
    description: "For growing businesses that need multi-user access and deeper insight.",
    features: [
      "Everything in Starter",
      "Up to 10 users",
      "Multi-warehouse inventory",
      "AI Accounting Copilot",
      "Bank reconciliation",
      "Priority support",
    ],
    highlighted: true,
    ctaLabel: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For larger teams with custom roles, volume, and support requirements.",
    features: [
      "Everything in Pro",
      "Unlimited users",
      "Custom roles & permissions",
      "Dedicated onboarding",
      "SLA-backed support",
    ],
    ctaLabel: "Contact Sales",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Switching to Ledgerio cut our monthly GST filing prep from two days to about two hours. The HSN-wise summary alone is worth it.",
    name: "Anjali Sharma",
    role: "Founder",
    company: "Sharma Textiles",
  },
  {
    quote:
      "The AI copilot catching a duplicate vendor payment in our first week paid for the whole year's subscription.",
    name: "Rohit Verma",
    role: "Operations Head",
    company: "Verma Consultancy",
  },
  {
    quote:
      "We run inventory across three warehouses now, and Ledgerio is the first tool that's actually kept up without breaking.",
    name: "Priya Nair",
    role: "Co-founder",
    company: "Apex Traders",
  },
];

export type FAQ = { question: string; answer: string };

export const FAQS: FAQ[] = [
  {
    question: "Is Ledgerio compliant with the latest GST rules?",
    answer:
      "Yes. Tax calculation, e-Invoicing, and GSTR-ready reports are kept current with the latest GSTN requirements, including CGST/SGST/IGST logic based on place of supply.",
  },
  {
    question: "Can my accountant access my books directly?",
    answer:
      "Yes — invite your accountant as a user with a role scoped to exactly the access they need, from read-only reports to full ledger access.",
  },
  {
    question: "Does Ledgerio work without an internet connection?",
    answer:
      "Ledgerio is a cloud-based platform, so an internet connection is required to access your live data and keep everything automatically backed up and in sync across devices.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "Your data remains exportable at any time. You can download your complete ledger, invoices, and reports before or after cancelling.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "You can get started on the Starter plan immediately, and upgrade to Pro whenever your business needs multi-user access or the AI Copilot.",
  },
];

export const TRUSTED_BUSINESSES = [
  "Sharma Textiles",
  "Verma Consultancy",
  "Apex Traders",
  "Nair & Associates",
  "Khanna Exports",
  "Patel Logistics",
];
