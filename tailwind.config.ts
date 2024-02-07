import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'topography': "url('/topography.svg'),linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6))",
        'graphPaper': "url('/graphpaper.svg'),linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6))",
        'gridPaper':'repeating-linear-gradient(45deg,var(--fallback-b1,oklch(var(--b1))),var(--fallback-b1,oklch(var(--b1))) 13px,var(--fallback-b2,oklch(var(--b2))) 13px,var(--fallback-b2,oklch(var(--b2))) 14px)',
        'manwithlaptop':"url('/manwithlaptop.svg')",
        'welcomeboard':"url('/welcomeboard.svg')",
        'aboutbg':"url('/AvatarFront.png')",
        'balldog':"url('/balldog.svg')",
        'whitegridpaper':'repeating-linear-gradient(45deg, white,#F8F8F8 5px 6px)',
        'whitegridpaper2':'repeating-linear-gradient(-45deg, white,#F8F8F8 5px 6px)',
        'coffee':"url('/coffee.svg')",
        'lazycat':"url('/lazycat.svg')",
        'glassdrink':"url('/glassdrink.svg')",
        'stripe':'repeating-linear-gradient(45deg,#666, 1px,transparent 0px,transparent 8px)',
    
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        ChenYu:['ChenYu'],
        LolTitle:[],
        LolTitleItalic:['LolTitleItalic'],
        LolContent:[],
        LolContentItalic:[]
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        striping: {
          '0%': { 'background-position': '0 0'},
          '100%': { 'background-position': '100% 100%'},
        },
        stripingdown: {
          '0%': { 'background-position': '0 0'},
          '100%': { 'background-position': '0 100%'},
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'stripe-slow':'striping 12s infinite linear forwards',
        'stripe-slower':'stripingdown 10s infinite linear both',
      },
    },
  },
  plugins: [require("tailwindcss-animate"),require("daisyui")],
} satisfies Config

export default config