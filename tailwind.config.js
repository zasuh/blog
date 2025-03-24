/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-be-vietnam-pro)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        heading: "var(--heading)",
        "heading-secondary": "var(--heading-secondary)",
        subheading: "#f6d05b",
        "text-terniary": "var(--text-terniary)",
        "blog-background": "var(--color-blog-background)",
      },
    },
  },
  plugins: [],
};
