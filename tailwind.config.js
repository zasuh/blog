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
      textColor: {
        heading: "var(--color-heading)",
        "heading-secondary": "var(--color-heading-secondary)",
        subheading: "var(--color-subheading)",
        terniary: "var(--color-terniary)",
      },
      backgroundColor: {
        "blog-background": "var(--color-blog-background)",
        "blog-background-secondary": "var(--color-blog-background-secondary)",
      },
    },
  },
  plugins: [],
};
