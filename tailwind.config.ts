import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: "#7C6FF2",
          emerald: "#12B76A",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#0A0A0D",
          card: "#F7F7F9",
          "card-dark": "#101114",
          border: "#E7E7EA",
          "border-dark": "#1F2126",
        },
        ink: {
          DEFAULT: "#0B0B0E",
          dark: "#F5F5F7",
          muted: "#5B5F6B",
          "muted-dark": "#9CA0AA",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(115deg, #7C6FF2 0%, #5B8FF9 45%, #12B76A 100%)",
        "brand-gradient-soft": "linear-gradient(115deg, rgba(124,111,242,0.14) 0%, rgba(91,143,249,0.10) 45%, rgba(18,183,106,0.14) 100%)",
        "mesh-dark": "radial-gradient(circle at 15% 15%, rgba(124,111,242,0.16), transparent 40%), radial-gradient(circle at 85% 30%, rgba(18,183,106,0.14), transparent 45%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradientX 8s ease infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(124,111,242,0.4)",
        card: "0 1px 2px rgba(0,0,0,0.04), 0 12px 32px -12px rgba(0,0,0,0.08)",
        "card-dark": "0 1px 0 rgba(255,255,255,0.04) inset, 0 12px 32px -12px rgba(0,0,0,0.6)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
