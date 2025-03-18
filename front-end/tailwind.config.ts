import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
     "./app/css/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          500: "var(--primary--500)",
        },
        red: "red",
        "neutral-600": "#1D1E20",
        "custom-purple": "#8C85FF",
        "neutral-300": "#6D7081",
        "success-500": "#28a745",
        "scrollbar-thumb": "#9ca3af", // Gray-400
        "scrollbar-track": "#e5e7eb", // Gray-200
      },
      boxShadow: {
        custom: '0 0 15px #00000026',
      },
      extend: {
        keyframes: {
          fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        },
        animation: {
          fadeIn: "fadeIn 0.3s ease-in-out",
        },
      }      
    },

  },
  variants: {
    scrollbar: ["rounded"], // Ensures Tailwind recognizes scrollbar styles
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),  
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.underline-dashed': {
          textDecoration: 'underline',
          textDecorationColor: 'var(--neutral-300)',
          textDecorationStyle: 'dashed',
          textUnderlinePosition: 'under',
        },
      });
    },
  ],
} satisfies Config;
