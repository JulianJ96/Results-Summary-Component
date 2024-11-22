import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'light-red': 'hsl(0,100%,67%)',
        'orangey-yellow': 'hsl(39,100%,56%)',
        'green-teal': 'hsl(166,100%,37%)',
        'cobalt-blue': 'hsl(234,85%,45%)',

        // Neutral Colors
        'white': 'hsl(0,0%,100%)',
        'pale-blue': 'hsl(221,100%,96%)',
        'light-lavender': 'hsl(241,100%,89%)',
        'dark-gray-blue': 'hsl(224,30%,27%)',
      },
      backgroundImage: {
        // Gradient Backgrounds
        'gradient-blue': 'linear-gradient(to right, hsl(252,100%,67%), hsl(241,81%,54%))',
        'gradient-circle': 'radial-gradient(circle, hsla(256,72%,46%,1), hsla(241,72%,46%,0))',
      }
    },
  },
  plugins: [],
} satisfies Config;
